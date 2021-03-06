import { Component, OnInit, ViewChild, ElementRef, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { GlobalFooService } from '../services/globalFooService.service';
import { CommonService } from '../services/common.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Platform, ActionSheetController, IonContent } from '@ionic/angular';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;
  @ViewChild(IonContent) contentArea: IonContent;

  messageForm: FormGroup;
  submitAttempt: boolean = false;
  uploadBlobData: any;
  uploadedExtension: any;
  is_loaded: boolean = false;

  valletData: any;
  messageData: any;
  userId: any = localStorage.getItem('ineat_userid');
  fromId: any;
  userData: any;
  

  previewImage: any;

  disButton: boolean = true;

  constructor(
    public formBuilder: FormBuilder,
    public router: Router, route: ActivatedRoute,
    private globalFooService: GlobalFooService,
    private common: CommonService,
    public api: ApiService,
    private plt: Platform,
    private actionSheetCtrl: ActionSheetController,
    private socket: Socket
  ) {
    this.fromId = route.snapshot.paramMap.get('userId');
    this.getUpdates().subscribe(new_message => {
      this.getMessages();
    });
  }


  ionViewWillEnter() {
    this.getMessages();
    this.userData = JSON.parse(localStorage.getItem('ineat_userData'));
  }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      message: ['', []],
    });
  }

  getMessages() {
    this.api.post('fetchMessage', { userId: this.userId, fromId: this.fromId }, '')
      .subscribe(
        (result) => {
          this.common.stopLoading();
          const res: any = result;
          if (res.status === '422' || res.status === 422) {
            let errMsgs = '';
            for (const x of res.errors) {
              errMsgs += x + '</br>';
            }
            this.common.presentToast(errMsgs, 'danger');
            this.is_loaded = true;
          }
          else if (res.status === '200' || res.status === 200) {
            this.valletData = res.data.user;
            this.messageData = res.data.message;
            this.is_loaded = false;
            setTimeout(() => {
              if (this.contentArea.scrollToBottom) {
                this.contentArea.scrollToBottom();
              }
            }, 100);
          }
        },
        (error) => {
          console.log(error);
        });
  }
  get errorCtr() {
    return this.messageForm.controls;
  }

  onSubmit() {
    this.submitAttempt = true;

    if (!this.messageForm.valid) {
      return false;
    } else {
      this.common.presentLoading();
      const dict = this.messageForm.value;
      const imgName = (+new Date).toString(36).slice(-5);
      const formData = new FormData();

      if (typeof this.uploadBlobData === 'undefined' || this.uploadBlobData.size <= 0) { } else {
        formData.append('file', this.uploadBlobData, `myimage.${this.uploadedExtension}`);
      }
      formData.append('message', this.messageForm.value.message);
      formData.append('userId', this.userId);
      formData.append('toId', this.valletData.id);
      formData.append('type', 'receiver');

      this.socket.connect();
      this.socket.emit('send_message', { 'form_data': formData });

      this.api.post('sendMessage', formData, '')
        .subscribe(
          (result) => {
            console.log('in result');

            this.submitAttempt = false;
            const res: any = result;
            if (res.status === 422 || res.status === '422') {
              let errMsgs = '';
              for (const x of res.errors) {
                errMsgs += x + '</br>';
              }
              this.common.presentToast(errMsgs, 'danger');
            }
            else if (res.status === 200 || res.status === '200') {
              this.previewImage = '';
              this.messageForm.reset();
              this.uploadBlobData = new Blob();
              this.getMessages();
            }
          },
          (error) => {
            console.log(error);
          });
    }
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

    this.previewImage = 'data:image/png;base64,' + image.base64String;

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

  change(eve) {
    this.disButton = eve.target.value.length === '0' || eve.target.value.length === 0 ? true : false;
  }

  getUpdates() {
    let self: this;
    const observable = new Observable(observer => {
      console.log('test updates');
      this.socket.on('rec_message', (data) => {
        console.log('data', data);
        observer.next(data);
      });
    });
    return observable;
  }




}
