import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { config } from '../config';
import { CommonService } from '../services/common.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Platform, ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;
  user: any;
  userData: any;
  updateProfileForm: FormGroup;

  submitAttempt: boolean = false;
  previewImage: any;
  uploadBlobData: any;
  uploadedExtension: any;
  userImage: any = '../assets/img/logo.png';
  userId: any = localStorage.getItem('ineat_userid');
  socialData: any;

  constructor(
    private route: ActivatedRoute,
    private common: CommonService,
    public api: ApiService,
    private router: Router,
    public menuController: MenuController,
    public formBuilder: FormBuilder,
    public plt: Platform,
    public actionSheetCtrl: ActionSheetController
  ) {
    this.common.redirectToLogin();
    this.menuController.enable(true);
    this.route.queryParams.subscribe(params => {
      let data = this.router.getCurrentNavigation().extras.state;
      if (data?.user) {
        this.user = data.user;
        this.saveUserData(this.user);

        console.log(this.user);
      }
    });

    
  }

  ngOnInit() {
    this.fetchUserSocialData();
    this.updateProfileForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      description: ['']
    });
  }

  ionViewDidEnter() {

  }

  get errorCtr() {
    return this.updateProfileForm.controls;
  }




  async selectImageSource() {
    const buttons = [
      {
        text: 'Take Photo',
        icon: 'camera',
        handler: () => {
          this.addImage(CameraSource.Camera);
        }
      },
      {
        text: 'Choose From Gallery',
        icon: 'image',
        handler: () => {
          this.addImage(CameraSource.Photos);
        }
      }
    ];
    // Only allow file selection inside a browser
    if (!this.plt.is('hybrid')) {
      buttons.push({
        text: 'Choose a File',
        icon: 'attach',
        handler: () => {
          this.fileInput.nativeElement.click();
        }
      });
    }
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Select Image Source',
      buttons
    });
    await actionSheet.present();
  }

  async addImage(source: any) {
    const image = await Camera.getPhoto({
      quality: 60,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source
    });


    const blobData = this.b64toBlob(image.base64String, 'image/${image.format}');
    const imageName = 'imagee';

    this.userImage = 'data:image/png;base64,' + image.base64String;

    this.uploadBlobData = blobData;
    this.uploadedExtension = image.format;

  }

  uploadFile(event: EventTarget) {
    const eventObj: MSInputMethodContext = event as MSInputMethodContext;
    const target: HTMLInputElement = eventObj.target as HTMLInputElement;
    const file: File = target.files[0];
  }

  // Helper function
  b64toBlob(b64Data, contentType = '', sliceSize = 512) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }


  onSubmit() {
    this.submitAttempt = true;

    if (!this.updateProfileForm.valid) {
      return false;
    } else {
      this.common.presentLoading();
      let dict = this.updateProfileForm.value;
      const imgName = (+new Date).toString(36).slice(-5);
      const formData = new FormData();

      if (typeof this.uploadBlobData === 'undefined') { } else {
        console.log(this.uploadedExtension);
        formData.append('file', this.uploadBlobData, 'myimage.' + this.uploadedExtension);
      }

      formData.append('firstName', this.updateProfileForm.value.firstName);
      formData.append('lastName', this.updateProfileForm.value.lastName);
      formData.append('email', this.updateProfileForm.value.email);
      formData.append('description', this.updateProfileForm.value.description);
      formData.append('userId', this.userId);

      this.api.post('updateSocialProfile', formData, '')
        .subscribe(
          (result) => {
            this.submitAttempt = false;
            this.common.stopLoading();
            let res: any;
            res = result;
            if (res.status == 422) {
              var errMsgs = '';
              for (var i = 0; i < res.errors.length; i++) {
                var obj = res.errors[i];
                errMsgs += obj + '</br>';
              }

              this.common.presentToast(errMsgs, 'danger');

            }
            else if (res.status == 200) {

              this.common.presentToast('Profile Updated Successfully!.', 'success');
            }
          },
          (error) => {
            console.log(error);
          });
    }
  }

  saveUserData(userData) {

    this.api.post('googlelogin', userData, '')
      .subscribe(
        (result) => {
          let res: any;
          res = result;
          if (res.status === 422 || res.status === '422') {
            let errMsgs = '';
            for (const x of res.errors) {
              errMsgs += x + '</br>';
            }
            this.common.presentToast(errMsgs, 'danger');
          }
          else if (res.status == 200) {
            localStorage.setItem('ineat_userData', JSON.stringify(res.data));
            var userId = this.api.encryptData(res.userId, config.ENC_SALT);
            localStorage.setItem('ineat_userid', res.userId);
            localStorage.setItem('ineat_token', userId);
            var userToken = res.token;
            localStorage.setItem('user_access_token', userToken);
            localStorage.setItem('is_logged_in', 'true');
          }
        },
        (error) => {
          console.log(error);
        });
  }


  fetchUserSocialData() {
    this.common.presentLoading();
    this.api.post('getSocialData', { userId: this.userId }, '')
      .subscribe(
        (result) => {
          this.common.stopLoading();
          const res: any = result;
          if (res.status === 422 || res.status === '422') {
            let errMsgs = '';
            for (const x of res.errors) {
              errMsgs += x + '</br>';
            }
            this.common.presentToast(errMsgs, 'danger');
          }
          else if (res.status === 200 || res.status === '200') {
            this.socialData = res.data;

            this.userImage = this.socialData.image;
            this.updateProfileForm.controls.firstName.setValue(this.socialData.first_name);
            this.updateProfileForm.controls.lastName.setValue(this.socialData.last_name);
            this.updateProfileForm.controls.email.setValue(this.socialData.username);
            this.updateProfileForm.controls.description.setValue(this.socialData.description);

          }
        },
        (error) => {
          this.common.stopLoading();
        });
  }

}
