import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.page.html',
  styleUrls: ['./order-placed.page.scss'],
})
export class OrderPlacedPage implements OnInit {
  userId: any = localStorage.getItem('ineat_userid');
  userData: any = JSON.parse(localStorage.getItem('ineat_userData'));
  subscriptionData: any;
  constructor(
    private common: CommonService,
    public api: ApiService,
    public router: Router,
  ) { }

  ngOnInit() {
    this.fetchUserSubscriptions();
  }

  fetchUserSubscriptions() {
    this.common.presentLoading();
    this.api.post('getUserSubscriptions', { userId: this.userId }, '')
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
            this.subscriptionData = res.data;
          }
        },
        (error) => {
          this.common.stopLoading();
        });
  }

}
