(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"], {
    /***/
    "7Dlj":
    /*!*****************************************************!*\
      !*** ./src/app/settings/settings-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: SettingsPageRoutingModule */

    /***/
    function Dlj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function () {
        return SettingsPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./settings.page */
      "Uncc");

      var routes = [{
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
      }];

      var SettingsPageRoutingModule = function SettingsPageRoutingModule() {
        _classCallCheck(this, SettingsPageRoutingModule);
      };

      SettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SettingsPageRoutingModule);
      /***/
    },

    /***/
    "7wo0":
    /*!*********************************************!*\
      !*** ./src/app/settings/settings.module.ts ***!
      \*********************************************/

    /*! exports provided: SettingsPageModule */

    /***/
    function wo0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function () {
        return SettingsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./settings-routing.module */
      "7Dlj");
      /* harmony import */


      var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./settings.page */
      "Uncc");

      var SettingsPageModule = function SettingsPageModule() {
        _classCallCheck(this, SettingsPageModule);
      };

      SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"]],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
      })], SettingsPageModule);
      /***/
    },

    /***/
    "ADm/":
    /*!*********************************************!*\
      !*** ./src/app/settings/settings.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function ADm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content .top-ims-bx {\n  background-size: cover;\n  position: relative;\n  padding: 20px 25px;\n}\n\nion-content .top-ims-bx .img-prs {\n  position: relative;\n  margin-top: 0;\n  display: flex;\n  align-items: center;\n}\n\nion-content .top-ims-bx .img-prs .left-box {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  position: relative;\n  flex: 0 0 100px;\n  margin-right: 15px;\n}\n\nion-content .top-ims-bx .img-prs .left-box img {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n\nion-content .top-ims-bx .img-prs .con-pr {\n  flex: 1;\n}\n\nion-content .top-ims-bx .img-prs .con-pr h4 {\n  margin: 0px;\n  color: #333333;\n  font-size: 18px;\n  font-weight: 500;\n}\n\nion-content .top-ims-bx .img-prs .con-pr p {\n  color: #000000b3;\n  font-size: 13px;\n  margin-top: 3px;\n  margin-bottom: 7px;\n  font-weight: 500;\n}\n\nion-content .top-ims-bx .img-prs .con-pr ion-button {\n  font-size: 12px;\n  height: 30px;\n  --border-radius: 50px;\n  margin: 0;\n}\n\nion-content .top-ims-bx .img-prs .con-pr ion-button ion-icon {\n  margin-right: 5px;\n}\n\nion-content .account-settings {\n  padding: 0 20px;\n}\n\nion-content .account-settings .act-itm-lst ion-item {\n  --background: #FCFCFC;\n  margin-bottom: 15px;\n  --min-height: 60px;\n  border-radius: 10px;\n  --detail-icon-color: #333;\n  --detail-icon-opacity: 1;\n}\n\nion-content .account-settings .act-itm-lst ion-item ion-label h2 {\n  color: #333;\n  font-size: 16px;\n  font-weight: 500;\n}\n\nion-content [btncontinue] {\n  font-size: 16px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 20px;\n  margin-bottom: 25px;\n  margin-top: 30px;\n  --background: #FD8A5E;\n}\n\nion-content [btncontinue] ion-icon {\n  margin-right: 10px;\n  font-size: 28px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQXBCOztBQUpBO0VBT0csa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3RCOztBQVhBO0VBWWdCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0FBR2xDOztBQXBCQTtFQW9CSyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUl2Qjs7QUExQkE7RUEyQmdCLE9BQU87QUFHdkI7O0FBOUJBO0VBNkJLLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtBQUtyQjs7QUFyQ0E7RUFtQ0ssZ0JBQWdCO0VBQ0QsZUFBZTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBTXRDOztBQTdDQTtFQTBDb0IsZUFBZTtFQUNmLFlBQVk7RUFDWixxQkFBZ0I7RUFDaEIsU0FBUztBQU83Qjs7QUFwREE7RUErQ3dCLGlCQUFpQjtBQVN6Qzs7QUF4REE7RUFzRFEsZUFBZTtBQU12Qjs7QUE1REE7RUF5RGdCLHFCQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUFvQjtFQUNwQix3QkFBc0I7QUFPdEM7O0FBckVBO0VBaUV3QixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtBQVF4Qzs7QUEzRUE7RUEwRVEsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixxQkFBYTtBQUtyQjs7QUF2RkE7RUFvRlksa0JBQWtCO0VBQ2xCLGVBQWU7QUFPM0IiLCJmaWxlIjoic2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG5cdC50b3AtaW1zLWJ4IHtcclxuXHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRwYWRkaW5nOiAyMHB4IDI1cHg7XHJcblx0XHRcclxuXHRcdC5pbWctcHJzIHtcclxuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRtYXJnaW4tdG9wOiAwO1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHQubGVmdC1ib3gge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGZsZXg6IDAgMCAxMDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuXHJcblx0XHRcdFx0aW1nIHtcclxuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHQuY29uLXByIHtcclxuICAgICAgICAgICAgICAgIGZsZXg6IDE7XHJcblx0XHRcdFx0aDQge1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRcdFx0XHRjb2xvcjogIzMzMzMzMztcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHAge1xyXG5cdFx0XHRcdFx0Y29sb3I6ICMwMDAwMDBiMztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdH1cclxuICAgICAgICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuICAgIC5hY2NvdW50LXNldHRpbmdzIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICAgICAgLmFjdC1pdG0tbHN0IHtcclxuICAgICAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjRkNGQ0ZDO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgICAgIC0tbWluLWhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAtLWRldGFpbC1pY29uLWNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICAgICAgLS1kZXRhaWwtaWNvbi1vcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBbYnRuY29udGludWVde1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjRkQ4QTVFO1xyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "Uncc":
    /*!*******************************************!*\
      !*** ./src/app/settings/settings.page.ts ***!
      \*******************************************/

    /*! exports provided: SettingsPage */

    /***/
    function Uncc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsPage", function () {
        return SettingsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./settings.page.html */
      "mzE/");
      /* harmony import */


      var _settings_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./settings.page.scss */
      "ADm/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @codetrix-studio/capacitor-google-auth */
      "OTqH");

      var SettingsPage = /*#__PURE__*/function () {
        function SettingsPage(router) {
          _classCallCheck(this, SettingsPage);

          this.router = router;
          this.userId = localStorage.getItem('ineat_userid');
          this.userData = JSON.parse(localStorage.getItem('ineat_userData'));
        }

        _createClass(SettingsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "logout",
          value: function logout() {
            _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_5__["GoogleAuth"].signOut();

            localStorage.clear();
            this.router.navigate(['/login']);
          }
        }]);

        return SettingsPage;
      }();

      SettingsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-settings',
        template: _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_settings_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SettingsPage);
      /***/
    },

    /***/
    "mzE/":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function mzE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n  \t<ion-menu-button slot=\"start\"><div navToggle><span></span><span></span><span></span></div></ion-menu-button>\n    <ion-title>Settings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"top-ims-bx\">\n\t\t<div class=\"img-prs\">\n\t\t\t<div class=\"left-box\">\n\t\t\t\t<img src=\"{{ userData.image }}\">\n\t\t\t</div>\n\t\t\t<div class=\"con-pr\">\n\t\t\t\t<h4>{{ userData.first_name }} {{ userData.last_name }}</h4>\n\t\t\t\t<p> {{ userData.email }} </p>\n        <ion-button slot=\"end\" btngetsocial routerLink=\"/edit-profile\"><ion-icon name=\"pencil-outline\"></ion-icon> Edit Profile</ion-button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n  <div class=\"account-settings\">\n    <ion-list class=\"act-itm-lst\">\n      <ion-item detail=\"true\" lines=\"none\" routerLink=\"/account-info\" >\n        <ion-label>\n          <h2>Account info</h2>\n        </ion-label>\n      </ion-item>\n      <ion-item detail=\"true\" lines=\"none\" >\n        <ion-label>\n          <h2>Preferences</h2>\n        </ion-label>\n      </ion-item>\n      <ion-item detail=\"true\" lines=\"none\" routerLink=\"/manage-subscription\">\n        <ion-label>\n          <h2>Manage Subscriptions</h2>\n        </ion-label>\n      </ion-item>\n      <ion-item detail=\"true\" lines=\"none\" routerLink=\"/refer-a-friend\">\n        <ion-label>\n          <h2>Refer to Friend</h2>\n        </ion-label>\n      </ion-item>\n      <ion-item detail=\"true\" lines=\"none\" >\n        <ion-label>\n          <h2>Manage Social Profile</h2>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n  <ion-button  (click)=\"logout()\" btncontinue><ion-icon name=\"log-out-outline\"></ion-icon> Logout</ion-button>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=settings-settings-module-es5.js.map