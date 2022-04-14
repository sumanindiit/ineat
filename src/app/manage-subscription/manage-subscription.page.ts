import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-manage-subscription',
  templateUrl: './manage-subscription.page.html',
  styleUrls: ['./manage-subscription.page.scss'],
})
export class ManageSubscriptionPage implements OnInit {
  userId: any = localStorage.getItem('ineat_userid');
  userData: any = JSON.parse(localStorage.getItem('ineat_userData'));
  subscriptionData: any;
  mealCount: any;
  price: any;
  singlePrice: any;
  totalMeals: any;
  subscriptionId: any;
  isCancelled: any;

  constructor(
    private common: CommonService,
    public api: ApiService,
    public router: Router,
    public alertController: AlertController) {

  }

  async presentAlertConfirm(message) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirm',
          handler: () => {
            this.common.presentLoading();
            this.api.post('cancelUserSubscription', { userId: this.userId , subscriptionId: this.subscriptionId }, '')
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
                    this.fetchUserSubscriptions();
                    this.common.presentToast('Cancelled Successfuly.', 'success');
                  }
                },
                (error) => {
                  this.common.stopLoading();
                });
          }
        }
      ]
    });

    await alert.present();
  }

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
            this.mealCount = this.subscriptionData.meal_count;
            this.price = this.subscriptionData.price;

            this.totalMeals = (this.subscriptionData.meal_count * this.subscriptionData.people_count);
            this.singlePrice = Number((this.price / this.mealCount)).toFixed(2);
            this.subscriptionId = this.subscriptionData.id;
            this.isCancelled = this.subscriptionData.is_cancelled;
          }
        },
        (error) => {
          this.common.stopLoading();
        });
  }

  cancelSubscription(receipeIds: any) {
    console.log(this.isCancelled);
    if(this.isCancelled == 1)
    {
      const message = 'Cancellation will take two weeks from the date of initiation.';
      this.presentAlertConfirm(message);
    }
    else if (receipeIds == '') {
      const message = 'Cancellation will take two weeks from the date of initiation, so please select a meal for your order first and then proceed with the cancellation process again';
      this.presentAlertConfirm(message);
    }
    else {
      const message = 'Do you want to cancel the subscription?';
      this.presentAlertConfirm(message);
    }
  }

}
