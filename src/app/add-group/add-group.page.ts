import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ApiService } from '../services/api/api.service';
import { GlobalFooService } from '../services/globalFooService.service';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Platform, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.page.html',
  styleUrls: ['./add-group.page.scss'],
})
export class AddGroupPage implements OnInit {
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;
  userId: any = localStorage.getItem('ineat_userid');
  userData: any;
  addGroupForm: FormGroup;
  submitAttempt: boolean = false;
  previewImage: any;
  uploadBlobData: any;
  uploadedExtension: any;
  postImage: any;

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
  }

  ngOnInit() {
    this.addGroupForm = this.formBuilder.group({
      groupDescription: ['', [Validators.required, Validators.minLength(10)]],
      groupTitle: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  get errorCtr() {
    return this.addGroupForm.controls;
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

    this.postImage = 'data:image/png;base64,' + image.base64String;

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

    if (!this.addGroupForm.valid) {
      return false;
    } else {
      this.common.presentLoading();
      let dict = this.addGroupForm.value;
      const imgName = (+new Date).toString(36).slice(-5);
      const formData = new FormData();

      if(typeof this.uploadBlobData === 'undefined'){ }else
      {
        formData.append('file', this.uploadBlobData, 'myimage.'+this.uploadedExtension);
      }

      formData.append('description', this.addGroupForm.value.groupDescription);
      formData.append('title', this.addGroupForm.value.groupTitle);
      formData.append('userId', this.userId);

      this.api.post('addSocialUserGroup', formData, '')
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
              this.common.presentToast('Group added successfully!.', 'success');
              this.api.navCtrl.navigateRoot('/tabs/feed');
            }
          },
          (error) => {
            console.log(error);
          });
    }
  }

}
