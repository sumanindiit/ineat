import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import { ApiService } from '../services/api/api.service';
import { config } from '../config';
import { CommonService } from '../services/common.service';
import { first } from 'rxjs-compat/operator/first';
import { ChangeDetectorRef } from '@angular/core';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  @ViewChild('mySlider') slides: IonSlides;
  multidate: string;
  multitype: string;
  reg_exp: any;
  stepTitle: string;
  currentSlide: any;
  selectDiseaseError: boolean = false;
  diseaseError: boolean = false;
  preferenceError: boolean = false;
  registerError: boolean = false;
  active1: string;
  active2: string;
  active3: string;
  planData: any;
  shippingPrice: any;

  selectBoxPrice: any;
  peopleSelect: any;
  recepiesSlect: any;
  totalServing: any;
  totalPrice: any;
  finalPrice: any;
  showBillingAddress: boolean = false;
  showdeliverySelect: boolean = false;
  errors: any = ['', null, undefined];
  is_submit: Boolean = false;
  deliveryName: any;
  deliverySurname: any;
  deliveryAddressLine1: any;
  deliveryAddressLine2: any;
  deliveryEmail: any;
  deliveryDob: any;
  deliveryCity: any;
  deliveryCountry: any;
  deliveryPostCode: any;
  deliveryPhone: any;
  billingName: any;
  billingSurname: any;
  billingAddressLine1: any;
  billingAddressLine2: any;
  billingEmail: any;
  billingDob: any;
  billingCity: any;
  billingCountry: any;
  billingPostCode: any;
  billingPhone: any;
  billingAddressValue: any;

  myDate = 'mydate';

  diseaseSuffer: string;
  illnesSufferFrom: string;
  userPreference: string;
  tabs: any;
  noOfPeople: any;
  recepiesSelect: any;
  userName: any;
  password: any;
  addressOptions: any;
  singleSelecteDate: any;
  multipleSelecteDate1: any;
  multipleSelecteDate2: any;
  deliveryInstructions: any;

  cardNumber: any;
  cardExipryDate: any;
  cardCvv: any;

  termsChecked: boolean = true;
  offersChecked: boolean = false;


  signUpFormObject: any;
  minDate: any = new Date().toISOString();
  maxDate: any = new Date();
  multiMinDate: any = new Date().toISOString();

  userData: any;



  constructor(
    private menuController: MenuController,
    private common: CommonService,
    public api: ApiService,
    private cd: ChangeDetectorRef
  ) {
    this.menuController.enable(false);
    this.tabs = 1;
    this.reg_exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.diseaseSuffer = '';
    this.illnesSufferFrom = '';
    this.userPreference = '';
    this.noOfPeople = '';
    this.userName = '';
    this.password = '';
    this.addressOptions = '';
    this.singleSelecteDate = '';
    this.multipleSelecteDate1 = '';
    this.multipleSelecteDate2 = '';
    this.deliveryInstructions = '';
    this.cardNumber = '';
    this.cardExipryDate = '';
    this.cardCvv = '';

  }

  ionViewDidEnter() {
    this.slides.lockSwipes(true);
    //this.slides.lockSwipeToNext(true);
  }

  ngOnInit() {
    this.stepTitle = 'Choose Plan';
    this.planData = this.getMealPlans();
    this.maxDate = this.add_years(this.maxDate, 10).toISOString();
    this.billingAddressValue = 2;


    if (localStorage.getItem('is_logged_in') == 'true') {
      this.intitializeUserData();
    }
  }


  onChange($event) {
    console.log($event);
  }

  changeMinDate() {
    console.log(this.multipleSelecteDate1);
    this.multiMinDate = new Date(this.multipleSelecteDate1).toISOString();
  }

  onChangeDeliverySelect(value) {
    console.log(value);
    if (value == 2) {
      this.showdeliverySelect = true;
    }
    else {
      this.showdeliverySelect = false;
    }
  }

  getMealPlans() {

    this.api.post('getMealPlans', '', '')
      .subscribe(
        (result) => {
          let res: any;
          res = result;
          if (res.status === 422 || res.status === '422') {
            let errMsgs = '';
            for (const x of res.errors) {
              errMsgs += x + '</br>';
            }
            this.common.presentToast(errMsgs, 'danger');
          }
          else if (res.status == 200) {
            this.planData = res.data.planData;
            this.shippingPrice = Number(res.data.shippingPrice).toFixed(2);
            let firstprice = res.data.planData[0].pricePerMeal;
            console.log(firstprice);
            this.planChanged('', firstprice);


          }
        },
        (error) => {
          console.log(error);
        });
  }

  planChanged(ev: any, price) {
    this.selectBoxPrice = Number(price).toFixed(2);
    let peopleValue = (<HTMLInputElement>document.querySelector('input[name="people"]:checked')).value;
    let recepiesWeek = (<HTMLInputElement>document.querySelector('input[name="recipesweek"]:checked')).value;

    this.peopleSelect = peopleValue;
    this.recepiesSlect = recepiesWeek;
    this.totalServing = Number(peopleValue) * Number(recepiesWeek);
    this.totalPrice = Number(this.selectBoxPrice * this.totalServing).toFixed(2);
    const withshipping = Number(this.totalPrice) + Number(this.shippingPrice);
    this.finalPrice = withshipping.toFixed(2);

    this.recepiesSelect = recepiesWeek;
    this.noOfPeople = peopleValue;

  }

  showBillingAddressFn(toShow) {
    if (toShow == 'yes') {
      this.showBillingAddress = true;
    }
    else {
      this.showBillingAddress = false;
    }

  }

  add_years(dt, n) {
    return new Date(dt.setFullYear(dt.getFullYear() + n));
  }

  async swipeNext(e: any) {

    console.log('clickedon', e);

    await this.slides.getActiveIndex().then((index: number) => {
      this.currentSlide = index;
      console.log(this.currentSlide);
      switch (index) {
        case 0:
          console.log(this.diseaseSuffer);
          const getDiseaseSelectedValue = document.querySelector('input[name="disease-suffer"]:checked');
          if (getDiseaseSelectedValue != null) {
            this.selectDiseaseError = false;
            this.swipeSlider();

          }
          else {
            this.selectDiseaseError = true;
          }
          break;
        case 1:
          const getDiseaseValue = document.querySelector('input[name="sufferfrom"]:checked');
          console.log(this.illnesSufferFrom);
          if (getDiseaseValue != null) {
            this.diseaseError = false;
            this.swipeSlider();

          }
          else {
            this.diseaseError = true;
          }
          break;
        case 2:
          const getPreferenceValue = document.querySelector('input[name="preference"]:checked');
          if (getPreferenceValue != null) {
            this.preferenceError = false;
            this.swipeSlider();
            this.stepTitle = 'Personalise Your Box';
          }
          else {
            this.preferenceError = true;
          }
          break;
        case 3:
          if (localStorage.getItem('is_logged_in') == 'true') {
            this.slides.lockSwipes(false);
            this.slides.slideTo(5);
            this.slides.lockSwipes(true);
            this.stepTitle = 'Order Summary';
            this.active2 = 'step2';
            this.active1 = 'step1';
          } else {
            this.swipeSlider();
            this.stepTitle = 'Access InEat Account';
            this.active1 = 'step2';
          }

          break;
        case 4:
          const getusernameValue = (<HTMLInputElement>document.querySelector('input[name="username"]')).value;
          const getpasswordValue = (<HTMLInputElement>document.querySelector('input[name="password"]')).value;
          console.log(getusernameValue);
          console.log(getpasswordValue);
          if (getusernameValue != null && getusernameValue != '' && getpasswordValue != null && getpasswordValue != "") {

            this.api.post('checkUserExists', { email: getusernameValue, password: getpasswordValue }, '')
              .subscribe(
                (result) => {
                  let res: any;
                  res = result;
                  if (res.status === 422 || res.status === '422') {
                    let errMsgs = '';
                    for (const x of res.errors) {
                      errMsgs += x + '</br>';
                    }
                    this.common.presentToast(errMsgs, 'danger');
                  }
                  else if (res.status == 200 || res.status === '200') {

                    if (res.exists == 0 || res.exists == '0') {
                      this.registerError = false;
                      this.swipeSlider();
                      this.stepTitle = 'Order Summary';
                      this.active2 = 'step2';
                      this.active1 = 'step1';
                    } else {
                      this.registerError = false;
                      this.swipeSlider();
                      this.stepTitle = 'Order Summary';
                      this.active2 = 'step2';
                      this.active1 = 'step1';

                      localStorage.setItem('ineat_userData', JSON.stringify(res.data));
                      var userId = this.api.encryptData(res.userId, config.ENC_SALT);
                      localStorage.setItem('ineat_userid', res.userId);
                      localStorage.setItem('ineat_token', userId);
                      localStorage.setItem('is_logged_in', 'true');
                      this.intitializeUserData();

                    }
                  }
                },
                (error) => {
                  console.log(error);
                });

          }
          else {
            this.registerError = true;
          }
          break;

        case 5:
          this.is_submit = true;
          console.log(this.billingAddressValue);
          if (
            this.errors.indexOf(this.deliveryName) >= 0
            || this.errors.indexOf(this.deliveryEmail) >= 0
            || !this.reg_exp.test(String(this.deliveryEmail).toLowerCase())
            || this.errors.indexOf(this.deliveryAddressLine1) >= 0
            || this.errors.indexOf(this.deliveryAddressLine2) >= 0
            || this.errors.indexOf(this.deliveryDob) >= 0
            || this.errors.indexOf(this.deliveryCity) >= 0
            || this.errors.indexOf(this.deliveryCountry) >= 0
            || this.errors.indexOf(this.deliveryPostCode) >= 0
            || this.errors.indexOf(this.deliveryPhone) >= 0
            || this.errors.indexOf(this.billingAddressValue) >= 0
          ) {
            return false;
          }
          else {
            if (this.billingAddressValue == 1) {
              if (
                this.errors.indexOf(this.billingName) >= 0
                || this.errors.indexOf(this.billingAddressLine1) >= 0
                || this.errors.indexOf(this.billingAddressLine2) >= 0
                || this.errors.indexOf(this.billingCity) >= 0
                || this.errors.indexOf(this.billingCountry) >= 0
                || this.errors.indexOf(this.billingPostCode) >= 0
                || this.errors.indexOf(this.billingPhone) >= 0
              ) {
                return false;
              }
              else {
                this.swipeSlider();
                this.stepTitle = 'Order Summary';
                this.active2 = 'step2';
              }
            }
            else {

              this.swipeSlider();
              this.stepTitle = 'Order Summary';
              this.active2 = 'step2';
            }
          }
          break;
        case 6:
          this.is_submit = true;
          if (this.errors.indexOf(this.addressOptions) >= 0 || this.errors.indexOf(this.deliveryInstructions) >= 0) {
            console.log('thisaddresss', this.addressOptions);
            return false;
          }
          else {
            this.swipeSlider();
            this.stepTitle = 'Order Summary';
            this.active2 = 'step3';
            this.is_submit = false;
          }
          break;
        case 7:
          this.is_submit = true;
          console.log(this.errors.indexOf(this.cardNumber));
          console.log(this.errors.indexOf(this.cardExipryDate));
          console.log(this.errors.indexOf(this.cardCvv));
          console.log(this.termsChecked);
          if (
            this.errors.indexOf(this.cardNumber) > 0
            || this.errors.indexOf(this.cardExipryDate) > 0
            || this.errors.indexOf(this.cardCvv) > 0
            || this.termsChecked != true
          ) {
            console.log('herer');
            return false;
          }
          else {

            this.signUpFormObject = {
              'diseasesuffer': this.diseaseSuffer,

              'illnesSufferFrom': this.illnesSufferFrom,

              'userPreference': this.userPreference,

              'tabs': this.tabs,
              'noOfPeople': this.noOfPeople,
              'recepiesSelect': this.recepiesSelect,

              'username': this.userName,
              'password': this.password,

              'billingAddressValue': this.billingAddressValue,

              'deliveryName': this.deliveryName,
              'deliverySurname': this.deliverySurname,
              'deliveryEmail': this.deliveryEmail,
              'deliveryAddressLine1': this.deliveryAddressLine1,
              'deliveryAddressLine2': this.deliveryAddressLine2,
              'deliveryDob': this.deliveryDob,
              'deliveryCity': this.deliveryCity,
              'deliveryCountry': this.deliveryCountry,
              'deliveryPostCode': this.deliveryPostCode,
              'deliveryPhone': this.deliveryPhone,

              'billingName': this.billingName,
              'billingSurname': this.billingSurname,
              'billingEmail': this.billingEmail,
              'billingAddressLine1': this.billingAddressLine1,
              'billingAddressLine2': this.billingAddressLine2,
              'billingCity': this.billingCity,
              'billingCountry': this.billingCountry,
              'billingPostCode': this.billingPostCode,
              'billingPhone': this.billingPhone,

              'addressOptions': this.addressOptions,
              'singleSelecteDate': this.singleSelecteDate,
              'multipleSelecteDate1': this.multipleSelecteDate1,
              'multipleSelecteDate2': this.multipleSelecteDate2,
              'deliveryInstructions': this.deliveryInstructions,

              'cardNumber': this.cardNumber,
              'cardExipryDate': this.cardExipryDate,
              'cardCvv': this.cardCvv
            }

            this.api.post('registerUser', this.signUpFormObject, '')
              .subscribe(
                (result) => {
                  let res: any;
                  res = result;
                  if (res.status === 422 || res.status === '422') {
                    let errMsgs = '';
                    for (const x of res.errors) {
                      errMsgs += x + '</br>';
                    }
                    this.common.presentToast(errMsgs, 'danger');
                  }
                  else if (res.status == 200 || res.status === '200') {

                    if (localStorage.getItem('is_logged_in') == 'true') {
                      this.api.navCtrl.navigateRoot('/meals');
                    }
                    else {
                      localStorage.setItem('ineat_userData', JSON.stringify(res.data));
                      var userId = this.api.encryptData(res.userId, config.ENC_SALT);
                      localStorage.setItem('ineat_userid', res.userId);
                      localStorage.setItem('ineat_token', userId);
                      var userToken = res.token;
                      localStorage.setItem('user_access_token', userToken);
                      localStorage.setItem('is_logged_in', 'true');
                      this.api.navCtrl.navigateRoot('/meals');
                    }

                    /* redirect to m*/
                    console.log(res);

                  }
                },
                (error) => {
                  console.log(error);
                });

            console.table('comlptevalue', this.signUpFormObject);
          }

          break;

      }

    });




  }


  swipeSlider() {
    this.is_submit = false;
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }


  swipePrevious(e: any) {
    this.slides.lockSwipes(false);
    this.slides.slidePrev();
    this.slides.lockSwipes(true);
  }


  intitializeUserData() {
    this.userData = JSON.parse(localStorage.getItem('ineat_userData'));

    if (this.userData.diseasesuffer == 1 || this.userData.diseasesuffer == '1') {
      console.log('abc');
      this.diseaseSuffer = 'Yes';
    } else {
      this.diseaseSuffer = 'No';
    }

    this.illnesSufferFrom = this.userData.chronic_disease;

    this.userPreference = this.userData.food_prefrence;

    this.tabs = this.userData.plan_box_type;
    this.noOfPeople = this.userData.people_count;
    this.recepiesSelect = this.userData.meal_count;

    this.deliveryName = this.userData.first_name;
    this.deliverySurname = this.userData.last_name;
    this.deliveryAddressLine1 = this.userData.address1;
    this.deliveryAddressLine2 = this.userData.address2;
    this.deliveryDob = this.userData.dob;
    this.deliveryEmail = this.userData.email;
    this.deliveryCity = this.userData.city;
    this.deliveryCountry = this.userData.country;
    this.deliveryPostCode = this.userData.postcode;
    this.deliveryPhone = this.userData.phone_number;

    this.billingAddressValue = 2;

    if (this.userData.billing_first_name != null) {
      this.billingAddressValue = 1;
      this.showBillingAddress = true;
    }

    this.billingName = this.userData.billing_first_name;
    this.billingSurname = this.userData.billing_last_name;
    this.billingAddressLine1 = this.userData.billing_address1;
    this.billingAddressLine2 = this.userData.billing_address2;
    this.billingCity = this.userData.billing_city;
    this.billingPostCode = this.userData.billing_postcode;
    this.billingPhone = this.userData.billing_phone_number;
  }

}
