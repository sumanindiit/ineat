import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, IonInfiniteScroll } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import { ApiService } from '../services/api/api.service';
import { config } from '../config';
import { CommonService } from '../services/common.service';
import { first } from 'rxjs-compat/operator/first';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.page.html',
  styleUrls: ['./meals.page.scss'],
})
export class MealsPage implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  @ViewChild('mySlider') slides: IonSlides;

  pageData: any;
  userId: any = localStorage.getItem('ineat_userid');
  is_loaded: boolean = false;
  start: any;
  isMoreRecords: boolean = true;
  scrollEvent: any;
  recordsPerPage: any;
  allMeals: any;
  searchQuery: any;
  query: any;
  cartCount: any;

  userData: any;
  constructor(
    private menuController: MenuController,
    private common: CommonService,
    public api: ApiService,
    private cd: ChangeDetectorRef

  ) {
    this.menuController.enable(false);
    this.recordsPerPage = 6;
  }

  ionViewWillEnter() {
    this.start = 0;
    this.allMeals = [];
    this.common.presentLoading();
    this.getMeals({}, '0');
    this.getCartCount();
  }
  hideMe = false;
  toggleClass() {
    this.hideMe = !this.hideMe;
  }

  ngOnInit() { }

  filterMeals(event) {
    this.searchQuery = event.srcElement.value;
    this.allMeals = [];
    this.getMeals({}, '0', this.searchQuery);
    console.log(this.searchQuery);
  }

  getCartCount() {
    this.api.post('getCartCount', { userId: this.userId }, '')
      .subscribe(
        (result) => {
          this.common.stopLoading();
          const res: any = result;
          
          this.cartCount = res.cart_count;
        },
        (error) => {
          console.log(error);
        });
  }

  getMeals(event = {}, type = '', query = '') {


    if (type === '0') { }
    else {
      this.scrollEvent = event;
      if (type === '1') {
        this.start = this.start + this.recordsPerPage;
      }
    }
    var self = this;

    setTimeout(() => {

      self.api.post('getMeals', { userId: this.userId, recordsPerPage: self.recordsPerPage, start: self.start, search: query }, '')
        .subscribe(
          (result) => {
            const res: any = result;
            if (res.status === 422 || res.status === '422') {
              let errMsgs = '';
              for (const x of res.errors) {
                errMsgs += x + '</br>';
              }
              self.common.presentToast(errMsgs, 'danger');
              self.is_loaded = true;
              this.pageData = [];
              self.common.stopLoading();

            }
            else if (res.status === 200 || res.status === '200') {
              var loaded_records = self.start + self.recordsPerPage;
              if (loaded_records >= res.total) {
                self.isMoreRecords = false;
              }

              self.allMeals = self.allMeals.concat(res.data);
              if (type === '0') {
                self.common.stopLoading();
              }
              else {
                if (type === '1') {
                  self.scrollEvent.target.complete();
                }
              }
              this.pageData = self.allMeals;
              this.is_loaded = false;
            }
          },
          (error) => {
            console.log(error);
            self.common.stopLoading();
          });
    }, 500);
  }

}
