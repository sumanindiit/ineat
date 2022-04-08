(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["refer-a-friend-refer-a-friend-module"],{

/***/ "1vXJ":
/*!*******************************************************!*\
  !*** ./src/app/refer-a-friend/refer-a-friend.page.ts ***!
  \*******************************************************/
/*! exports provided: ReferAFriendPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferAFriendPage", function() { return ReferAFriendPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_refer_a_friend_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./refer-a-friend.page.html */ "jfcg");
/* harmony import */ var _refer_a_friend_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./refer-a-friend.page.scss */ "silf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api/api.service */ "oZWX");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common.service */ "OlR4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _capacitor_clipboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/clipboard */ "PJjM");








let ReferAFriendPage = class ReferAFriendPage {
    constructor(common, api, router) {
        this.common = common;
        this.api = api;
        this.router = router;
        this.userId = localStorage.getItem('ineat_userid');
        this.userData = JSON.parse(localStorage.getItem('ineat_userData'));
        this.errors = ['', null, undefined];
        this.is_submit = false;
    }
    ngOnInit() {
        this.fetchUserreference();
    }
    fetchUserreference() {
        this.common.presentLoading();
        this.api.post('getUserreferencelink', { userId: this.userId }, '')
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
                this.referLink = res.link;
            }
        }, (error) => {
            this.common.stopLoading();
        });
    }
    copyLink(textToCopy) {
        const writeToClipboard = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _capacitor_clipboard__WEBPACK_IMPORTED_MODULE_7__["Clipboard"].write({
                string: textToCopy
            });
            this.common.presentToast('Copied Successfully.', 'success');
        });
    }
    sendInvite() {
        this.is_submit = true;
        if (this.errors.indexOf(this.userEmail) > 0) {
            return false;
        }
        else {
            this.common.presentLoading();
            this.api.post('sendInviteToUser', { userId: this.userId, userEmail: this.userEmail }, '')
                .subscribe((result) => {
                this.common.stopLoading();
                const res = result;
                if (res.status === 422 || res.status === '422') {
                    let errMsgs = '';
                    for (const x of res.errors) {
                        errMsgs += x + '</br>';
                    }
                    this.common.presentToast(errMsgs, 'danger');
                    this.is_submit = false;
                }
                else if (res.status === 200 || res.status === '200') {
                    this.common.presentToast('Invitation sent successfully.', 'success');
                    this.userEmail = '';
                    this.is_submit = false;
                }
            }, (error) => {
                this.common.stopLoading();
                this.is_submit = false;
            });
        }
    }
};
ReferAFriendPage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
ReferAFriendPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-refer-a-friend',
        template: _raw_loader_refer_a_friend_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_refer_a_friend_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ReferAFriendPage);



/***/ }),

/***/ "RxHn":
/*!*****************************************************************!*\
  !*** ./src/app/refer-a-friend/refer-a-friend-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ReferAFriendPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferAFriendPageRoutingModule", function() { return ReferAFriendPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _refer_a_friend_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./refer-a-friend.page */ "1vXJ");




const routes = [
    {
        path: '',
        component: _refer_a_friend_page__WEBPACK_IMPORTED_MODULE_3__["ReferAFriendPage"]
    }
];
let ReferAFriendPageRoutingModule = class ReferAFriendPageRoutingModule {
};
ReferAFriendPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReferAFriendPageRoutingModule);



/***/ }),

/***/ "jfcg":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/refer-a-friend/refer-a-friend.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div flexHeader>\n      <div backHead>\n        <ion-back-button [text]=\"\" defaultHref=\"/tabs/settings\" icon=\"chevron-back-outline\"></ion-back-button>\n      </div>\n      <ion-title class=\"ion-text-center\">Refer A Friend</ion-title>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div main-im>\n    <img src=\"assets/img/bg-m.png\" />\n  </div>\n  <p slomo-tx>Refer a Friend by using link<br> or via email.</p>\n  <div invite-fields>\n    <ion-list>\n      <ion-item detail=\"false\" lines=\"none\">\n        <ion-input value=\"\" placeholder=\"Enter email address\" [(ngModel)]=\"userEmail\"></ion-input>\n        <span (click)=\"sendInvite()\">Invite</span>\n\n      </ion-item>\n      <span class=\"error\" *ngIf=\"errors.indexOf(userEmail) >= 0 && is_submit == true\">\n        Please enter email.\n      </span>\n    </ion-list>\n  </div>\n  <div subscriptionsBtm>\n    <p linkType>- or copy this link -</p>\n    <div copyText>\n      <a>{{ referLink }}</a>\n      <ion-icon name=\"documents-outline\" (click)=\"copyLink(referLink)\"></ion-icon>\n    </div>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "silf":
/*!*********************************************************!*\
  !*** ./src/app/refer-a-friend/refer-a-friend.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  --background: var(--ion-color-secondary);\n  background: var(--ion-color-secondary);\n}\n\nion-header ion-toolbar {\n  --background: var(--ion-color-secondary);\n}\n\nion-header ion-toolbar ion-back-button {\n  color: var(--ion-color-white);\n}\n\nion-header ion-toolbar ion-title {\n  --background: var(--ion-color-secondary);\n  background: var(--ion-color-secondary);\n  color: var(--ion-color-white);\n}\n\nion-content {\n  --background: var(--ion-color-secondary);\n  background: var(--ion-color-secondary);\n}\n\nion-content [main-im] {\n  text-align: center;\n  margin: 20px 0;\n}\n\nion-content [slomo-tx] {\n  text-align: center;\n  color: #fff;\n  margin-top: 30px;\n  font-size: 16px;\n  line-height: 22px;\n  font-weight: 500;\n}\n\nion-content [invite-fields] {\n  padding: 0 25px;\n}\n\nion-content [invite-fields] ion-list {\n  border-radius: 12px;\n  --border-radius: 12px;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\nion-content [invite-fields] ion-list ion-input {\n  color: #000000ad;\n  font-size: 15px;\n  font-weight: 500;\n  --placeholder-opacity: 100%;\n}\n\nion-content [invite-fields] ion-list span {\n  z-index: 9;\n  color: #FD8A5E;\n  font-weight: 500;\n  font-size: 15px;\n}\n\nion-content [subscriptionsBtm] {\n  padding: 0 25px;\n}\n\nion-content [subscriptionsBtm] [linktype] {\n  text-align: center;\n  font-size: 16px;\n  color: #fff;\n  margin-top: 37px;\n}\n\nion-content [subscriptionsBtm] [copytext] {\n  border: 1px solid #ffffff57;\n  border-radius: 3px;\n  color: #fff;\n  height: 45px;\n  line-height: 50px;\n  margin: 0 auto;\n  padding: 0 10px;\n  margin-bottom: 60px;\n  margin-top: 30px;\n  font-size: 14px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nion-content [subscriptionsBtm] [copytext] a {\n  color: #fff;\n  display: inline-block;\n  position: relative;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JlZmVyLWEtZnJpZW5kLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdDQUFhO0VBQ2Isc0NBQXFDO0FBQ3pDOztBQUhBO0VBSVEsd0NBQWE7QUFHckI7O0FBUEE7RUFNWSw2QkFBNkI7QUFLekM7O0FBWEE7RUFTWSx3Q0FBYTtFQUNiLHNDQUFzQztFQUN0Qyw2QkFBNkI7QUFNekM7O0FBQUE7RUFDSSx3Q0FBYTtFQUNiLHNDQUFzQztBQUcxQzs7QUFMQTtFQUlRLGtCQUFrQjtFQUNsQixjQUFjO0FBS3RCOztBQVZBO0VBUVEsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFNeEI7O0FBbkJBO0VBZ0JRLGVBQWU7QUFPdkI7O0FBdkJBO0VBa0JZLG1CQUFtQjtFQUNuQixxQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGlCQUFpQjtBQVM3Qjs7QUE5QkE7RUF1QmdCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDJCQUFzQjtBQVd0Qzs7QUFyQ0E7RUE2QmdCLFVBQVU7RUFDVixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFZL0I7O0FBNUNBO0VBcUNRLGVBQWU7QUFXdkI7O0FBaERBO0VBdUNZLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtBQWE1Qjs7QUF2REE7RUE2Q1ksMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQWNuQzs7QUF4RUE7RUE0RGdCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsa0JBQWtCO0FBZ0JsQyIsImZpbGUiOiJyZWZlci1hLWZyaWVuZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICBiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgaW9uLWJhY2stYnV0dG9ue1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLXRpdGxlIHtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgXHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgIFttYWluLWltXSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgfVxyXG4gICAgW3Nsb21vLXR4XSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBbaW52aXRlLWZpZWxkc10ge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjVweDtcclxuICAgICAgICAgIGlvbi1saXN0IHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMGFkO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDk7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0ZEOEE1RTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBbc3Vic2NyaXB0aW9uc0J0bV0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjVweDtcclxuICAgICAgICBbbGlua3R5cGVdIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzN3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBbY29weXRleHRdIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjU3O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgIFxyXG59Il19 */");

/***/ }),

/***/ "uUPG":
/*!*********************************************************!*\
  !*** ./src/app/refer-a-friend/refer-a-friend.module.ts ***!
  \*********************************************************/
/*! exports provided: ReferAFriendPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferAFriendPageModule", function() { return ReferAFriendPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _refer_a_friend_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./refer-a-friend-routing.module */ "RxHn");
/* harmony import */ var _refer_a_friend_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./refer-a-friend.page */ "1vXJ");







let ReferAFriendPageModule = class ReferAFriendPageModule {
};
ReferAFriendPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _refer_a_friend_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReferAFriendPageRoutingModule"]
        ],
        declarations: [_refer_a_friend_page__WEBPACK_IMPORTED_MODULE_6__["ReferAFriendPage"]]
    })
], ReferAFriendPageModule);



/***/ })

}]);
//# sourceMappingURL=refer-a-friend-refer-a-friend-module-es2015.js.map