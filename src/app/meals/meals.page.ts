import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, IonInfiniteScroll, ModalController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import { ApiService } from '../services/api/api.service';
import { CommonService } from '../services/common.service';
import { ChangeDetectorRef } from '@angular/core';
import { MealfiltersPage } from '../mealfilters/mealfilters.page';
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
  allergensArray: any;
  filterArray: any = [
    { value: 1, name: 'Meat and Vegetables', checked: false },
    { value: 2, name: 'Vegetarian', checked: false }
  ];

  filteredDifficultyLevel: any;
  filteredAllergen: any;
  filteredFilters: any;

  userData: any;
  constructor(
    private menuController: MenuController,
    private common: CommonService,
    public api: ApiService,
    private cd: ChangeDetectorRef,
    public modalController: ModalController
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

  ngOnInit() {
    this.getAllergens();
  }


  getAllergens() {
    this.api.post('getMealAllergens', { userId: this.userId }, '')
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
            this.allergensArray = res.data;
          }
        },
        (error) => {
          this.common.presentToast(error.message, 'danger');
          console.log(error);
        });

  }

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

      console.log(this.filteredFilters);

      self.api.post('getMeals', {
        userId: this.userId, recordsPerPage: self.recordsPerPage,
        start: self.start, search: query,
        range: this.filteredDifficultyLevel, filter: this.filteredFilters, allergens: this.filteredAllergen
      }, '')
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
  async presentMealsModal() {
    const modal = await this.modalController.create({
      component: MealfiltersPage,
      cssClass: 'MealsFiltersModal',
      componentProps: {
        allergensArray: this.allergensArray,
        filterArray: this.filterArray
      }

    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    this.filteredDifficultyLevel = data?.difficultyLevel;

    if ((data.filterFilters.length) > 0) {
      this.filteredFilters = data.filterFilters;
    }

    if ((data.filteredAllergen.length) > 0) {
      this.filteredAllergen = data.filteredAllergen;
    }

    this.allMeals = [];
    this.getMeals({}, '0', '');
    console.log(data);
  }
}
