(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["meal-details-meal-details-module"],{

/***/ "7aZt":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/meal-details/meal-details.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div flexHeader>\n      <div backHead>\n        <ion-back-button [text]=\"\"></ion-back-button>\n      </div>\n      <ion-title class=\"ion-text-center\">Meal Detail</ion-title>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"mealDetails\" *ngIf=\"pageData\">\n\n    <div>\n      <h4 title>{{ pageData?.title }}</h4>\n      <div class=\"imgRealtive\">\n        <img src=\"{{ pageData?.image }}\" />\n        <img src=\"assets/img/playVideo.svg\" playVideo />\n      </div>\n    </div>\n\n    <div formcontent>\n      <ion-item lines=\"none\" class=\"ion-no-padding ionbox\">\n\n        <div class=\"quanTity\">\n          <ion-icon name=\"remove-circle\" (click)=\"decrement()\"></ion-icon>\n            <h4>  {{currentNumber}} </h4>\n          <ion-icon name=\"add-circle\" (click)=\"increment()\"></ion-icon>\n        </div>\n\n        <ion-select class=\"ionSelect\" placeholder=\"Meal Type\" interface=\"action-sheet\" [(ngModel)]=\"mealType\" >\n          <ion-select-option value=\"1\">Ready meal</ion-select-option>\n          <ion-select-option value=\"2\">Meal Kit</ion-select-option>\n        </ion-select>\n\n        <ion-select class=\"ionSelect\" placeholder=\" Select Delivery Date\" interface=\"action-sheet\" [(ngModel)]=\"deliveryDate\" >\n          <ng-container *ngFor=\"let data of pageData.deliveryDates\">\n            <ion-select-option value=\"{{ data }}\">{{ data }}</ion-select-option>\n\t\t\t\t\t</ng-container>\n        </ion-select>\n        \n      </ion-item>\n\n     \n    </div>\n\n    <div mealcontent>\n\n      <div d-flex>\n        <h5 subhdng>Main Ingredients</h5>\n        \n      </div>\n\n      <ion-grid class=\"ion-no-padding\">\n        <ion-row *ngFor=\"let ingredients of pageData.ingredeints\">\n          <ion-col size=\"6\" class=\"ion-text-left\">\n            <div>{{ ingredients.ingredients_quantity }}</div>\n          </ion-col>\n          <ion-col size=\"6\" class=\"ion-text-right\">\n            <div>{{ ingredients.ingredients_values }}</div>\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n\n\n      <div billingDe d-flex>\n        <h5 subhdng>Nutritional Info Allergens</h5>\n      </div>\n\n      <ion-grid class=\"ion-no-padding\">\n        <ion-row *ngFor=\"let nutritional of pageData.nutritional\">\n          <ion-col size=\"6\" class=\"ion-text-left\">\n            <div>{{ nutritional.nutritional_quantity }}</div>\n          </ion-col>\n          <ion-col size=\"6\" class=\"ion-text-right\">\n            <div>{{ nutritional.nutritional_values }}</div>\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n\n      <div billingDe d-flex>\n        <h5 subhdng>Tools</h5>\n      </div>\n\n     <ion-grid class=\"ion-no-padding\">\n        <ion-row *ngFor=\"let utensils of pageData.utensils\">\n          <ion-col size=\"6\" class=\"ion-text-left\">\n            <div>{{ utensils.utensils_values }}</div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n      <div billingDe d-flex>\n        <h5 subhdng>Allergen</h5>\n      </div>\n\n      <ion-grid class=\"ion-no-padding\">\n        <ion-row *ngFor=\"let allergen of pageData.allergen\">\n          <ion-col size=\"6\" class=\"ion-text-left\">\n            <div>{{ allergen.name }}</div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n\n\n    </div>\n\n     <ion-button expand=\"full\" btncontinue shape=\"round\" color=\"success\" (click)=\"addToCart()\">Add</ion-button>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "FUcG":
/*!*************************************************************!*\
  !*** ./src/app/meal-details/meal-details-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: MealDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealDetailsPageRoutingModule", function() { return MealDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _meal_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meal-details.page */ "MtTU");




const routes = [
    {
        path: '',
        component: _meal_details_page__WEBPACK_IMPORTED_MODULE_3__["MealDetailsPage"]
    }
];
let MealDetailsPageRoutingModule = class MealDetailsPageRoutingModule {
};
MealDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MealDetailsPageRoutingModule);



/***/ }),

/***/ "MtTU":
/*!***************************************************!*\
  !*** ./src/app/meal-details/meal-details.page.ts ***!
  \***************************************************/
/*! exports provided: MealDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealDetailsPage", function() { return MealDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_meal_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./meal-details.page.html */ "7aZt");
/* harmony import */ var _meal_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meal-details.page.scss */ "TRtg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api/api.service */ "oZWX");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/common.service */ "OlR4");







let MealDetailsPage = class MealDetailsPage {
    constructor(route, common, api) {
        this.common = common;
        this.api = api;
        this.currentNumber = 0;
        this.userId = localStorage.getItem('ineat_userid');
        this.errors = ['', null, undefined];
        this.mealId = route.snapshot.paramMap.get('mealId');
        this.userData = localStorage.getItem('ineat_userData');
        this.mealCount = this.userData.meal_count;
    }
    increment() {
        this.currentNumber++;
    }
    decrement() {
        this.currentNumber--;
    }
    ionViewWillEnter() {
        this.getPageData();
    }
    ngOnInit() { }
    getPageData() {
        this.api.post('getMealDetail', { mealId: this.mealId, userId: this.userId }, '')
            .subscribe((result) => {
            this.common.stopLoading();
            const res = result;
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
        }, (error) => {
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
                .subscribe((result) => {
                this.common.stopLoading();
                const res = result;
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
            }, (error) => {
                this.common.stopLoading();
                console.log(error);
            });
        }
    }
};
MealDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }
];
MealDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-meal-details',
        template: _raw_loader_meal_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_meal_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MealDetailsPage);



/***/ }),

/***/ "TRtg":
/*!*****************************************************!*\
  !*** ./src/app/meal-details/meal-details.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .mealDetails {\n  padding: 10px 15px 100px 15px;\n}\n\nion-content .mealDetails h4 {\n  margin: 0 0 12px 0;\n}\n\nion-content .mealDetails .imgRealtive {\n  position: relative;\n}\n\nion-content .mealDetails .imgRealtive img {\n  border-radius: 20px;\n  height: 175px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n}\n\nion-content .mealDetails .imgRealtive [playVideo] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 36px;\n  height: 58px;\n}\n\nion-content .mealDetails ion-icon[name=\"remove-circle\"],\nion-content .mealDetails ion-icon[name=\"add-circle\"] {\n  color: #FD8A5E;\n  font-size: 31px;\n}\n\nion-content .mealDetails h5 {\n  color: #FD8A5E;\n  font-size: 17px;\n  border-left: 2px solid #FD8A5E;\n  padding-left: 10px;\n  margin-bottom: 17px;\n  font-weight: 600;\n}\n\nion-content .mealDetails [d-flex] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nion-content .mealDetails .ionbox {\n  --inner-padding-end: 0;\n}\n\nion-content .mealDetails .ionbox .quanTity {\n  display: flex;\n  align-items: center;\n}\n\nion-content .mealDetails .ionbox .quanTity h4 {\n  margin: 0;\n  color: #000000;\n  opacity: 0.5;\n  min-width: 27px;\n  text-align: center;\n}\n\nion-content .mealDetails .ionbox .ionSelect {\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  border-radius: 5px;\n  padding: 2px 8px;\n  font-size: 14px;\n  width: 100%;\n  margin: 0 5px;\n  color: #666666;\n  --placeholder-opacity: 1;\n}\n\nion-content .mealDetails ion-grid ion-row {\n  margin-bottom: 15px;\n}\n\nion-content .mealDetails ion-grid ion-row ion-col {\n  font-size: 15px;\n}\n\nion-content .mealDetails ion-grid ion-row ion-col.ion-text-right {\n  font-weight: 500;\n}\n\nion-content [btncontinue] {\n  position: fixed;\n  bottom: 0px;\n  z-index: 10;\n  width: 90%;\n  height: 45px;\n  font-size: 16px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21lYWwtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFUSw2QkFBNkI7QUFEckM7O0FBREE7RUFJWSxrQkFBaUI7QUFDN0I7O0FBTEE7RUFRWSxrQkFBa0I7QUFDOUI7O0FBVEE7RUFVZ0IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFHM0I7O0FBaEJBO0VBZ0JtQixrQkFBa0I7RUFDakIsU0FBUztFQUNULFFBQVE7RUFDUixnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLFlBQVk7QUFJaEM7O0FBekJBOztFQTRCWSxjQUFjO0VBQ2QsZUFBZTtBQUUzQjs7QUEvQkE7RUFrQ1ksY0FBYztFQUNkLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDNUI7O0FBeENBO0VBMkNZLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQy9COztBQTlDQTtFQWtEZ0Isc0JBQW9CO0FBQXBDOztBQWxEQTtFQW9EZ0IsYUFBYTtFQUNiLG1CQUFtQjtBQUVuQzs7QUF2REE7RUF1RG9CLFNBQVM7RUFDVCxjQUFjO0VBQ2QsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7QUFJdEM7O0FBL0RBO0VBaUVnQixxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ1gsV0FBVztFQUNmLGFBQWE7RUFDYixjQUFjO0VBQ2Qsd0JBQXNCO0FBRXRDOztBQTFFQTtFQThFZ0IsbUJBQW1CO0FBQW5DOztBQTlFQTtFQWdGb0IsZUFBZTtBQUVuQzs7QUFsRkE7RUFrRndCLGdCQUFnQjtBQUl4Qzs7QUF0RkE7RUEyRlksZUFBZTtFQUN2QixXQUFXO0VBQ1gsV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZO0VBQ1osZUFBZTtBQURuQiIsImZpbGUiOiJtZWFsLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tY29udGVudHtcbiAgICAubWVhbERldGFpbHN7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweCAxMDBweCAxNXB4O1xuICAgICAgICBoNHtcbiAgICAgICAgICAgIG1hcmdpbjowIDAgMTJweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmltZ1JlYWx0aXZle1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNzVweDtcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFtwbGF5VmlkZW9de1xuICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDU4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpb24taWNvbltuYW1lPVwicmVtb3ZlLWNpcmNsZVwiXSxcbiAgICAgICAgaW9uLWljb25bbmFtZT1cImFkZC1jaXJjbGVcIl1cbiAgICAgICAge1xuICAgICAgICAgICAgY29sb3I6ICNGRDhBNUU7XG4gICAgICAgICAgICBmb250LXNpemU6IDMxcHg7XG4gICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgaDV7XG4gICAgICAgICAgICBjb2xvcjogI0ZEOEE1RTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI0ZEOEE1RTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE3cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG5cbiAgICAgICAgW2QtZmxleF17XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICB9XG5cbiAgICAgICAgLmlvbmJveHtcbiAgICAgICAgICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgICAgICAgICAgLnF1YW5UaXR5e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBoNHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI3cHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pb25TZWxlY3RcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHggOHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzY2NjY2NjtcbiAgICAgICAgICAgICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpb24tZ3JpZHtcbiAgICAgICAgICAgIGlvbi1yb3d7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgICAgICBpb24tY29se1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICYuaW9uLXRleHQtcmlnaHR7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgfVxuXG4gICAgW2J0bmNvbnRpbnVlXXtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDBweDtcbiAgICB6LWluZGV4OiAxMDtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogNDVweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG59Il19 */");

/***/ }),

/***/ "lWfY":
/*!*****************************************************!*\
  !*** ./src/app/meal-details/meal-details.module.ts ***!
  \*****************************************************/
/*! exports provided: MealDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealDetailsPageModule", function() { return MealDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _meal_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./meal-details-routing.module */ "FUcG");
/* harmony import */ var _meal_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./meal-details.page */ "MtTU");







let MealDetailsPageModule = class MealDetailsPageModule {
};
MealDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _meal_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["MealDetailsPageRoutingModule"]
        ],
        declarations: [_meal_details_page__WEBPACK_IMPORTED_MODULE_6__["MealDetailsPage"]]
    })
], MealDetailsPageModule);



/***/ })

}]);
//# sourceMappingURL=meal-details-meal-details-module-es2015.js.map