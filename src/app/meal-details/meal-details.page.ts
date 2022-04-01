import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { config } from '../config';
import { CommonService } from '../services/common.service';


@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.page.html',
  styleUrls: ['./meal-details.page.scss'],
})
export class MealDetailsPage implements OnInit {
  private currentNumber = 0;

  userId: any = localStorage.getItem('ineat_userid');

  pageData: any;
  mealId: any;
  mealType: any;
  deliveryDate: any;
  mealCount: any;
  userData: any;
  errors: any = ['', null, undefined];

  constructor(
    route: ActivatedRoute,
    private common: CommonService,
    public api: ApiService,
  ) {
    this.mealId = route.snapshot.paramMap.get('mealId');
    this.userData = localStorage.getItem('ineat_userData');
    this.mealCount = this.userData.meal_count
  }

  private increment() {
    this.currentNumber++;
  }

  private decrement() {
    this.currentNumber--;
  }

  ionViewWillEnter() {
    this.getPageData();
  }

  ngOnInit() { }

  getPageData() {
    this.api.post('getMealDetail', { mealId: this.mealId, userId: this.userId }, '')
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
            this.pageData = res.data;
            console.log(this.pageData);
          }
        },
        (error) => {
          console.log(error);
        });
  }

  addToCart() {


    let dict = {
      quantity: this.currentNumber,
      mealType: this.mealType,
      deliveryDate: this.deliveryDate,
      mealID: this.mealId,
      userId: this.userId,
      mealCount: this.mealCount
    };

    if (this.currentNumber == 0) {
      this.common.presentToast('Please add meal count!!', 'danger');
      return false;
    }
    else if (this.errors.indexOf(this.mealType) > 0) {
      this.common.presentToast('Please select meal type.', 'danger');
      return false;
    }
    else if (this.errors.indexOf(this.deliveryDate) > 0) {
      this.common.presentToast('Please select delivery date.', 'danger');
      return false;
    }
    else if (this.currentNumber > 0 && this.currentNumber > this.mealCount && this.mealCount != '0') {
      this.common.presentToast('Please change your meal plan if you want to get more meal!!', 'danger');
      return false;
    }
    else {
      this.common.presentLoading();
      this.api.post('mealAddToCart', dict, '')
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
              this.common.presentToast('Item added to cart.', 'success');
            }
          },
          (error) => {
            this.common.stopLoading();
            console.log(error);
          });
    }




  }

}
