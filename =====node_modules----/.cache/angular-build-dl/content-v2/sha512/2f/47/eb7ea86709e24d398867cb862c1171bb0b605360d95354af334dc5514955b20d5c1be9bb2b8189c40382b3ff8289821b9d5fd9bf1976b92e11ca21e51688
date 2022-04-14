(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-card-add-card-module"],{

/***/ "Xzxl":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-card/add-card.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div flexHeader>\n      <div backHead>\n        <ion-back-button [text]=\"\" defaultHref=\"/account-info\"  icon=\"chevron-back-outline\"></ion-back-button>\n      </div>\n      <ion-title class=\"ion-text-center\">Add Card</ion-title>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div padding>\n    <div addcardform>\n      <form [formGroup]=\"addCardForm\" (ngSubmit)=\"onAddCardSubmit()\" novalidate>\n        <ion-row>\n          <ion-col size=\"12\">\n            <label>Card Holder Name* </label>\n            <ion-input type=\"text\" formControlName=\"cardName\"></ion-input>\n            <ion-item class=\"form-text error\" *ngIf=\"submitcardAttempt && erroraddCardCtr.cardName.errors?.required\">\n              <ion-label no-margin stacked>Please enter card name.</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n            <label>Card Number* </label>\n            <ion-input type=\"text\" formControlName=\"cardNumber\"></ion-input>\n            <ion-item class=\"form-text error\" *ngIf=\"submitcardAttempt && erroraddCardCtr.cardNumber.errors?.required\">\n              <ion-label no-margin stacked>Please enter card number.</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n            <label>Card Type*</label>\n            <ion-select placeholder=\"Select\" interface=\"action-sheet\" formControlName=\"cardType\">\n              <ion-select-option value=\"Master Card\">Master Card</ion-select-option>\n              <ion-select-option value=\"Visa Card\">Visa Card</ion-select-option>\n              <ion-select-option value=\"Debit Card\">Debit Card</ion-select-option>\n              <ion-select-option value=\"Credit Card\">Credit Card</ion-select-option>\n            </ion-select>\n\n            <ion-item class=\"form-text error\" *ngIf=\"submitcardAttempt && erroraddCardCtr.cardType.errors?.required\">\n              <ion-label no-margin stacked>Please select card type.</ion-label>\n            </ion-item>\n          </ion-col>\n\n          <ion-col size=\"12\">\n            <label>Expiry Month* </label>\n            <ion-datetime displayFormat=\"MM\" formControlName=\"cardExpiryMonth\" value=\"\"></ion-datetime>\n            <ion-item class=\"form-text error\"\n              *ngIf=\"submitcardAttempt && erroraddCardCtr.cardExpiryMonth.errors?.required\">\n              <ion-label no-margin stacked>Please select expiry month.</ion-label>\n            </ion-item>\n          </ion-col>\n\n          <ion-col size=\"12\">\n            <label>Expiry Year* </label>\n            <ion-datetime [min]=\"minDate\" [max]=\"maxData\" displayFormat=\"YYYY\" formControlName=\"cardExpiryYear\"\n              value=\"\"></ion-datetime>\n            <ion-item class=\"form-text error\"\n              *ngIf=\"submitcardAttempt && erroraddCardCtr.cardExpiryYear.errors?.required\">\n              <ion-label no-margin stacked>Please select expiry year.</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n            <label>CVV* </label>\n            <ion-input formControlName=\"cardCvv\" type=\"text\"></ion-input>\n            <ion-item class=\"form-text error\" *ngIf=\"submitcardAttempt && erroraddCardCtr.cardCvv.errors?.required\">\n              <ion-label no-margin stacked>Please enter card cvv.</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-item class=\"ion-no-padding\" lines=\"none\">\n              <ion-checkbox mode=\"ios\" color=\"tertiary\"  formControlName=\"default\"  slot=\"start\"></ion-checkbox>\n            <ion-label>Mark as Default</ion-label>\n            </ion-item>\n\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-button type=\"submit\" btnsave>Add</ion-button>\n          </ion-col>\n        </ion-row>\n      </form>\n    </div>\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "ir/V":
/*!*********************************************!*\
  !*** ./src/app/add-card/add-card.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content [padding] {\n  padding-top: 0;\n}\n\nion-content [padding] [addcardform] {\n  margin: 20px 0 0;\n}\n\nion-content [padding] [addcardform] ion-row ion-col {\n  margin-bottom: 10px;\n}\n\nion-content [padding] [addcardform] ion-row ion-col label {\n  font-size: 14px;\n  color: #777;\n  display: block;\n  margin: 0 0 10px;\n  font-weight: 500;\n}\n\nion-content [padding] [addcardform] ion-row ion-col ion-input, ion-content [padding] [addcardform] ion-row ion-col ion-textarea, ion-content [padding] [addcardform] ion-row ion-col ion-select, ion-content [padding] [addcardform] ion-row ion-col ion-datetime {\n  border: 1px solid #eee;\n  border-radius: 5px;\n  font-size: 14px;\n  color: #222;\n  padding: 10px;\n}\n\nion-content [padding] [btnsave] {\n  height: 50px;\n  border-radius: 10px;\n  width: 100%;\n  letter-spacing: 0;\n  margin-top: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FkZC1jYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGNBQWM7QUFBdEI7O0FBRkE7RUFJWSxnQkFBZTtBQUUzQjs7QUFOQTtFQU9vQixtQkFBbUI7QUFHdkM7O0FBVkE7RUFTd0IsZUFBZTtFQUNmLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUt4Qzs7QUFsQkE7RUFnQndCLHNCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxhQUFZO0FBTXBDOztBQTFCQTtFQTBCWSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBSTVCIiwiZmlsZSI6ImFkZC1jYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHsgXHJcbiAgICBbcGFkZGluZ10ge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIFthZGRjYXJkZm9ybV17XHJcbiAgICAgICAgICAgIG1hcmdpbjoyMHB4IDAgMDtcclxuICAgICAgICAgICAgaW9uLXJvd3tcclxuICAgICAgICAgICAgICAgIGlvbi1jb2x7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzc3NztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1pbnB1dCwgaW9uLXRleHRhcmVhLCBpb24tc2VsZWN0LCBpb24tZGF0ZXRpbWV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFtidG5zYXZlXXtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "j4hj":
/*!*******************************************!*\
  !*** ./src/app/add-card/add-card.page.ts ***!
  \*******************************************/
/*! exports provided: AddCardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardPage", function() { return AddCardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_card_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-card.page.html */ "Xzxl");
/* harmony import */ var _add_card_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-card.page.scss */ "ir/V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api/api.service */ "oZWX");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/common.service */ "OlR4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let AddCardPage = class AddCardPage {
    constructor(formBuilder, common, api, router) {
        this.formBuilder = formBuilder;
        this.common = common;
        this.api = api;
        this.router = router;
        this.userId = localStorage.getItem('ineat_userid');
        this.userData = JSON.parse(localStorage.getItem('ineat_userData'));
        this.submitcardAttempt = false;
        this.minDate = new Date().toISOString();
        this.maxData = (new Date()).getFullYear() + 10;
    }
    ngOnInit() {
        this.addCardForm = this.formBuilder.group({
            cardName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            cardNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            cardType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            cardExpiryMonth: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            cardExpiryYear: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            cardCvv: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            default: ['']
        });
    }
    get erroraddCardCtr() {
        return this.addCardForm.controls;
    }
    onAddCardSubmit() {
        console.log('in on card submit');
        this.submitcardAttempt = true;
        if (!this.addCardForm.valid) {
            console.log('not valid');
            return false;
        }
        else {
            console.log('valid');
            this.common.presentLoading();
            let dict = this.addCardForm.value;
            dict['userId'] = this.userId;
            this.api.post('addCardInfo', dict, '')
                .subscribe((result) => {
                this.submitcardAttempt = false;
                this.common.stopLoading();
                let res;
                res = result;
                if (res.status == 422) {
                    var errMsgs = '';
                    for (var i = 0; i < res.errors.length; i++) {
                        var obj = res.errors[i];
                        errMsgs += obj + '</br>';
                    }
                    this.common.presentToast(errMsgs, 'danger');
                }
                else if (res.status == 200) {
                    this.common.presentToast('Card added Successfully!.', 'success');
                }
            }, (error) => {
                console.log(error);
            });
        }
    }
};
AddCardPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
AddCardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-card',
        template: _raw_loader_add_card_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_card_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddCardPage);



/***/ }),

/***/ "jvsA":
/*!*********************************************!*\
  !*** ./src/app/add-card/add-card.module.ts ***!
  \*********************************************/
/*! exports provided: AddCardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardPageModule", function() { return AddCardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_card_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-card-routing.module */ "sxAu");
/* harmony import */ var _add_card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-card.page */ "j4hj");







let AddCardPageModule = class AddCardPageModule {
};
AddCardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_card_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddCardPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_add_card_page__WEBPACK_IMPORTED_MODULE_6__["AddCardPage"]]
    })
], AddCardPageModule);



/***/ }),

/***/ "sxAu":
/*!*****************************************************!*\
  !*** ./src/app/add-card/add-card-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AddCardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardPageRoutingModule", function() { return AddCardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_card_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-card.page */ "j4hj");




const routes = [
    {
        path: '',
        component: _add_card_page__WEBPACK_IMPORTED_MODULE_3__["AddCardPage"]
    }
];
let AddCardPageRoutingModule = class AddCardPageRoutingModule {
};
AddCardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddCardPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=add-card-add-card-module-es2015.js.map