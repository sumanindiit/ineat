import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ApiService } from '../services/api/api.service';
import { GlobalFooService } from '../services/globalFooService.service';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Platform, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;
  userId: any = localStorage.getItem('ineat_userid');
  userData: any;
  updateProfileForm: FormGroup;
  submitAttempt: boolean = false;
  previewImage: any;
  uploadBlobData: any;
  uploadedExtension: any;
  userImage: any;

  constructor(
    public formBuilder: FormBuilder,
    private globalFooService: GlobalFooService,
    private common: CommonService,
    public api: ApiService,
    public router: Router,
    public plt: Platform,
    public actionSheetCtrl: ActionSheetController
  ) {
    this.userData = JSON.parse(localStorage.getItem('ineat_userData'));
    this.userImage = this.userData.image;
  }

  ngOnInit() {
    this.updateProfileForm = this.formBuilder.group({
      firstName: [this.userData?.first_name, [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],
      lastName: [this.userData?.last_name, [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],
      email: [this.userData?.email, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      phoneNumber: [this.userData?.phone_number, [Validators.required, Validators.pattern('^[0-9]+$')]],
      chronicDisease: [this.userData?.chronic_disease, [Validators.required]],
      dob: [this.userData?.dob, [Validators.required]],
      address: [this.userData?.address1, [Validators.required, Validators.minLength(2)]]
    });

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


    const blobData = this.b64toBlob(image.base64String, `image/${image.format}`);
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
      //this.common.presentToast('Please fill all required fields.','danger');
      return false;
    } else {
      this.common.presentLoading();
      let dict = this.updateProfileForm.value;
      const imgName = (+new Date).toString(36).slice(-5);
      const formData = new FormData();

      if(typeof this.uploadBlobData === 'undefined'){ }else
      {
        formData.append('file', this.uploadBlobData, 'myimage.${this.uploadedExtension}');
      }

      formData.append('firstName', this.updateProfileForm.value.firstName);
      formData.append('lastName', this.updateProfileForm.value.lastName);
      formData.append('email', this.updateProfileForm.value.email);
      formData.append('phoneNumber', this.updateProfileForm.value.phoneNumber);
      formData.append('chronicDisease', this.updateProfileForm.value.chronicDisease);
      formData.append('dob', this.updateProfileForm.value.dob);
      formData.append('address', this.updateProfileForm.value.address);
      formData.append('userId', this.userId);

      this.api.post('updateProfile', formData, '')
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
              localStorage.setItem('ineat_userData', JSON.stringify(res.data));
              this.common.presentToast('Profile Updated Successfully!.', 'success');
            }
          },
          (error) => {
            console.log(error);
          });
    }
  }

}
