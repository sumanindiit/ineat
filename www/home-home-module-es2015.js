(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n  \t<ion-menu-button slot=\"start\"><div navToggle><span></span><span></span><span></span></div></ion-menu-button>\n    <ion-title>Home</ion-title>\n    <ion-button slot=\"end\" btngetsocial routerLink=\"/feed\">Get Social</ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div padding>\n\t\t<p center>Setup Your Social Profile Here</p>\n\t\t<div userImg><img src=\"../assets/img/img1.jpg\" alt=\"\"><ion-button><ion-icon name=\"camera\"></ion-icon></ion-button> </div>\n\n\t\t<div form>\n\t\t<form [formGroup]=\"updateProfileForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<label>First Name</label>\n\t\t\t\t<ion-input  formControlName=\"firstName\"  placeholder=\"First Name\"></ion-input>\n\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.firstName.errors?.required\">\n\t\t\t\t\t<ion-label no-margin stacked>First Name is required.</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.firstName.errors?.minlength\">\n\t\t\t\t\t<ion-label no-margin stacked>Min 3 chars long.</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.firstName.errors?.pattern\">\n\t\t\t\t\t<ion-label no-margin stacked>Only alphabets allowed.</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t\t<ion-col>\n\t\t\t\t<label>Last Name</label>\n\t\t\t\t<ion-input  formControlName=\"lastName\" placeholder=\"Last Name\"></ion-input>\n\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.lastName.errors?.required\">\n\t\t\t\t\t<ion-label no-margin stacked>Last Name is required.</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.lastName.errors?.minlength\">\n\t\t\t\t\t<ion-label no-margin stacked>Min 3 chars long.</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.lastName.errors?.pattern\">\n\t\t\t\t\t<ion-label no-margin stacked>Only alphabets allowed.</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<label>Username</label>\n\t\t\t\t<ion-input  formControlName=\"email\" placeholder=\"Email\"></ion-input>\n\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.email.errors?.required\">\n\t\t\t\t\t<ion-label no-margin stacked>Email is required.</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.email.errors?.pattern\">\n\t\t\t\t\t<ion-label no-margin stacked>Enter valid email.</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<label>Description</label>\n\t\t\t\t<ion-textarea formControlName=\"description\" ></ion-textarea>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<ion-button type=\"submit\"   btnsave>Save</ion-button>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t</form>\n\t</div>\n\n\t</div>\n</ion-content>\n");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "zpKS");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("[btngetsocial] {\n  height: 30px;\n  --padding: 0;\n  --min-height: 1px;\n  font-size: 12px;\n}\n\n[center] {\n  text-align: center;\n  font-weight: 500;\n}\n\n[userImg] {\n  width: 150px;\n  height: 150px;\n  position: relative;\n  margin: 0 auto;\n}\n\n[userImg] img {\n  border-radius: 250px;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n[userImg] ion-button {\n  min-width: 1px;\n  min-height: 1px;\n  width: 40px;\n  height: 40px;\n  border-radius: 50px;\n  background: var(--primary-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  --border-radius: 50px;\n  --padding: 0 !important;\n  padding: 0 !important;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  border: 2px solid #fff;\n}\n\n[userImg] ion-button ion-icon {\n  min-width: 50px;\n}\n\n[form] {\n  margin: 20px 0 0;\n}\n\n[form] ion-row {\n  margin: 10px 0 0;\n}\n\n[form] ion-row ion-col label {\n  font-size: 13px;\n  color: #777;\n  display: block;\n  margin: 0 0 8px;\n}\n\n[form] ion-row ion-col ion-input, [form] ion-row ion-col ion-textarea {\n  border: 1px solid #eee;\n  border-radius: 5px;\n  font-size: 14px;\n  color: #222;\n  padding: 10px;\n}\n\n[btnsave] {\n  height: 50px;\n  border-radius: 10px;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsWUFBWTtFQUNULFlBQVU7RUFDVixpQkFBYTtFQUNiLGVBQWU7QUFDbkI7O0FBRUE7RUFBQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBRWpCOztBQUVBO0VBREMsWUFBVztFQUNYLGFBQVk7RUFDWixrQkFBa0I7RUFDbEIsY0FBYTtBQUdkOztBQUVBO0VBSEUsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQWlCO0tBQWpCLGlCQUFpQjtBQUtuQjs7QUFFQTtFQUpFLGNBQWM7RUFDWCxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHFCQUFnQjtFQUNoQix1QkFBVTtFQUNWLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVE7RUFDUixzQkFBcUI7QUFNMUI7O0FBRUE7RUFOTSxlQUFlO0FBUXJCOztBQUVBO0VBTEMsZ0JBQWU7QUFPaEI7O0FBRUE7RUFQRSxnQkFBZTtBQVNqQjs7QUFFQTtFQVJJLGVBQWU7RUFDZixXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWM7QUFVbEI7O0FBRUE7RUFUSSxzQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0VBQ1gsYUFBWTtBQVdoQjs7QUFFQTtFQVBDLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztBQVNaIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW2J0bmdldHNvY2lhbF17XHJcblx0aGVpZ2h0OiAzMHB4O1xyXG4gICAgLS1wYWRkaW5nOiAwO1xyXG4gICAgLS1taW4taGVpZ2h0OiAxcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuW2NlbnRlcl17XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuW3VzZXJJbWdde1xyXG5cdHdpZHRoOjE1MHB4O1xyXG5cdGhlaWdodDoxNTBweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0bWFyZ2luOjAgYXV0bztcclxuXHRpbWd7XHJcblx0XHRib3JkZXItcmFkaXVzOiAyNTBweDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0b2JqZWN0LWZpdDogY292ZXI7XHJcblx0fVxyXG5cdGlvbi1idXR0b257XHJcblx0XHRtaW4td2lkdGg6IDFweDtcclxuXHQgICAgbWluLWhlaWdodDogMXB4O1xyXG5cdCAgICB3aWR0aDogNDBweDtcclxuXHQgICAgaGVpZ2h0OiA0MHB4O1xyXG5cdCAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG5cdCAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuXHQgICAgZGlzcGxheTogZmxleDtcclxuXHQgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHQgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0ICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcclxuXHQgICAgLS1wYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcblx0ICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDsgXHJcblx0ICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHQgICAgcmlnaHQ6IDA7XHJcblx0ICAgIGJvdHRvbTowO1xyXG5cdCAgICBib3JkZXI6MnB4IHNvbGlkICNmZmY7XHJcblx0ICAgIGlvbi1pY29ue1xyXG5cdCAgICBcdG1pbi13aWR0aDogNTBweDtcclxuXHQgICAgfVxyXG5cdH1cclxufVxyXG5bZm9ybV17XHJcblx0bWFyZ2luOjIwcHggMCAwO1xyXG5cdGlvbi1yb3d7XHJcblx0XHRtYXJnaW46MTBweCAwIDA7XHJcblx0XHRpb24tY29se1xyXG5cdFx0XHRsYWJlbHtcclxuXHRcdFx0XHRmb250LXNpemU6IDEzcHg7XHJcblx0XHRcdFx0Y29sb3I6ICM3Nzc7XHJcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0bWFyZ2luOjAgMCA4cHg7XHJcblx0XHRcdH1cclxuXHRcdFx0aW9uLWlucHV0LCBpb24tdGV4dGFyZWF7XHJcblx0XHRcdFx0Ym9yZGVyOjFweCBzb2xpZCAjZWVlO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0Y29sb3I6ICMyMjI7XHJcblx0XHRcdFx0cGFkZGluZzoxMHB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbltidG5zYXZlXXtcclxuXHRoZWlnaHQ6IDUwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHR3aWR0aDogMTAwJTtcclxufSJdfQ== */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/api/api.service */ "oZWX");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config */ "Vx+w");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/common.service */ "OlR4");










let HomePage = class HomePage {
    constructor(route, common, api, router, menuController, formBuilder) {
        this.route = route;
        this.common = common;
        this.api = api;
        this.router = router;
        this.menuController = menuController;
        this.formBuilder = formBuilder;
        this.menuController.enable(true);
        this.route.queryParams.subscribe(params => {
            let data = this.router.getCurrentNavigation().extras.state;
            if (data.user) {
                this.user = data.user;
                this.saveUserData(this.user);
                console.log(this.user);
            }
        });
    }
    ngOnInit() {
        var _a, _b, _c;
        this.userData = JSON.parse(localStorage.getItem('ineat_userData'));
        this.updateProfileForm = this.formBuilder.group({
            firstName: [(_a = this.userData) === null || _a === void 0 ? void 0 : _a.first_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('[a-zA-Z][a-zA-Z ]+')]],
            lastName: [(_b = this.userData) === null || _b === void 0 ? void 0 : _b.last_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('[a-zA-Z][a-zA-Z ]+')]],
            email: [(_c = this.userData) === null || _c === void 0 ? void 0 : _c.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            description: [""]
        });
    }
    saveUserData(userData) {
        this.api.post('googlelogin', userData, '')
            .subscribe((result) => {
            let res;
            res = result;
            if (res.status === 422 || res.status === '422') {
                let errMsgs = '';
                for (const x of res.errors) {
                    errMsgs += x + '</br>';
                }
                this.common.presentToast(errMsgs, 'danger');
            }
            else if (res.status == 200) {
                localStorage.setItem('ineat_userData', JSON.stringify(res.data));
                var userId = this.api.encryptData(res.userId, _config__WEBPACK_IMPORTED_MODULE_8__["config"].ENC_SALT);
                localStorage.setItem('ineat_userid', res.userId);
                localStorage.setItem('ineat_token', userId);
                var userToken = res.token;
                localStorage.setItem('user_access_token', userToken);
                localStorage.setItem('is_logged_in', 'true');
            }
        }, (error) => {
            console.log(error);
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map