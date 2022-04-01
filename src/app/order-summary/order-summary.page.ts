import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConfirmModalPage } from '../confirm-modal/confirm-modal.page';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { config } from '../config';
import { CommonService } from '../services/common.service';



@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.page.html',
  styleUrls: ['./order-summary.page.scss'],
})
export class OrderSummaryPage implements OnInit {
  userId: any = localStorage.getItem('ineat_userid');
  cartData: any;
  userData: any;

  constructor(
    public modalController: ModalController,
    route: ActivatedRoute,
    private common: CommonService,
    public api: ApiService,) {
    this.userData = localStorage.getItem('ineat_userData');
  }

  ionViewWillEnter() {
    this.getCartData();
  }


  ngOnInit() {
  }

  getCartData() {
    this.api.post('getCartSummary', { userId: this.userId }, '')
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
            this.cartData = res.data;
            console.log(this.cartData);
          }
        },
        (error) => {
          console.log(error);
        });
  }

  async feedback() {
    const modal = await this.modalController.create({
      component: ConfirmModalPage,
      cssClass: 'confirmModal'
    });
    return await modal.present();
  }



}
