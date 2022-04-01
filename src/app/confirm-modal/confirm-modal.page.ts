import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { config } from '../config';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.page.html',
  styleUrls: ['./confirm-modal.page.scss'],
})
export class ConfirmModalPage implements OnInit {
  userId: any = localStorage.getItem('ineat_userid');
  userData: any;

  constructor(
    public modalController: ModalController,
    route: ActivatedRoute,
    private common: CommonService,
    public api: ApiService
  ) {
    this.userData = localStorage.getItem('ineat_userData');
  }

  ngOnInit() { }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  confirm() {
    this.api.post('confirmUserMeal', { userId: this.userId }, '')
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
            console.log(res);
          }
        },
        (error) => {
          console.log(error);
        });

   
  }

}
