(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-profile-edit-profile-module"], {
    /***/
    "12cG":
    /*!*****************************************************!*\
      !*** ./src/app/edit-profile/edit-profile.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function cG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "[btngetsocial] {\n  height: 30px;\n  --padding: 0;\n  --min-height: 1px;\n  font-size: 12px;\n}\n\n[center] {\n  text-align: center;\n  font-weight: 500;\n}\n\n[userImg] {\n  width: 150px;\n  height: 150px;\n  position: relative;\n  margin: 0 auto;\n}\n\n[userImg] img {\n  border-radius: 250px;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n[userImg] ion-button {\n  min-width: 1px;\n  min-height: 1px;\n  width: 40px;\n  height: 40px;\n  border-radius: 50px;\n  background: var(--primary-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  --border-radius: 50px;\n  --padding: 0 !important;\n  padding: 0 !important;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  border: 2px solid #fff;\n}\n\n[userImg] ion-button ion-icon {\n  min-width: 50px;\n}\n\n[editprofileform] {\n  margin: 20px 0 0;\n}\n\n[editprofileform] ion-row ion-col {\n  margin: 10px 0 0;\n}\n\n[editprofileform] ion-row ion-col [formdate] {\n  position: relative;\n}\n\n[editprofileform] ion-row ion-col [formdate] ion-icon {\n  position: absolute;\n  top: 12px;\n  right: 10px;\n}\n\n[editprofileform] ion-row ion-col label {\n  font-size: 13px;\n  color: #777;\n  display: block;\n  margin: 0 0 8px;\n}\n\n[editprofileform] ion-row ion-col ion-input, [editprofileform] ion-row ion-col ion-textarea, [editprofileform] ion-row ion-col ion-select, [editprofileform] ion-row ion-col ion-datetime {\n  border: 1px solid #eee;\n  border-radius: 5px;\n  font-size: 14px;\n  color: #222;\n  padding: 10px;\n}\n\n[btnsave] {\n  height: 50px;\n  border-radius: 10px;\n  width: 100%;\n  letter-spacing: 0;\n  margin-top: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VkaXQtcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxZQUFZO0VBQ1QsWUFBVTtFQUNWLGlCQUFhO0VBQ2IsZUFBZTtBQUNuQjs7QUFFQTtFQUFDLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFFakI7O0FBRUE7RUFEQyxZQUFXO0VBQ1gsYUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFhO0FBR2Q7O0FBRUE7RUFIRSxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBaUI7S0FBakIsaUJBQWlCO0FBS25COztBQUVBO0VBSkUsY0FBYztFQUNYLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIscUJBQWdCO0VBQ2hCLHVCQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUTtFQUNSLHNCQUFxQjtBQU0xQjs7QUFFQTtFQU5NLGVBQWU7QUFRckI7O0FBRUE7RUFMQyxnQkFBZTtBQU9oQjs7QUFFQTtFQU5ZLGdCQUFlO0FBUTNCOztBQUVBO0VBUmdCLGtCQUFrQjtBQVVsQzs7QUFFQTtFQVZvQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7QUFZL0I7O0FBRUE7RUFWZ0IsZUFBZTtFQUNmLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFDSjtBQVdaOztBQUVBO0VBWGdCLHNCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxhQUFZO0FBYTVCOztBQUVBO0VBVEMsWUFBWTtFQUNaLG1CQUFtQjtFQUNoQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQVdwQiIsImZpbGUiOiJlZGl0LXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW2J0bmdldHNvY2lhbF17XHJcblx0aGVpZ2h0OiAzMHB4O1xyXG4gICAgLS1wYWRkaW5nOiAwO1xyXG4gICAgLS1taW4taGVpZ2h0OiAxcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuW2NlbnRlcl17XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuW3VzZXJJbWdde1xyXG5cdHdpZHRoOjE1MHB4O1xyXG5cdGhlaWdodDoxNTBweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0bWFyZ2luOjAgYXV0bztcclxuXHRpbWd7XHJcblx0XHRib3JkZXItcmFkaXVzOiAyNTBweDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0b2JqZWN0LWZpdDogY292ZXI7XHJcblx0fVxyXG5cdGlvbi1idXR0b257XHJcblx0XHRtaW4td2lkdGg6IDFweDtcclxuXHQgICAgbWluLWhlaWdodDogMXB4O1xyXG5cdCAgICB3aWR0aDogNDBweDtcclxuXHQgICAgaGVpZ2h0OiA0MHB4O1xyXG5cdCAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG5cdCAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuXHQgICAgZGlzcGxheTogZmxleDtcclxuXHQgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHQgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0ICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcclxuXHQgICAgLS1wYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcblx0ICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDsgXHJcblx0ICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHQgICAgcmlnaHQ6IDA7XHJcblx0ICAgIGJvdHRvbTowO1xyXG5cdCAgICBib3JkZXI6MnB4IHNvbGlkICNmZmY7XHJcblx0ICAgIGlvbi1pY29ue1xyXG5cdCAgICBcdG1pbi13aWR0aDogNTBweDtcclxuXHQgICAgfVxyXG5cdH1cclxufVxyXG5bZWRpdHByb2ZpbGVmb3JtXXtcclxuXHRtYXJnaW46MjBweCAwIDA7XHJcbiAgICBpb24tcm93e1xyXG4gICAgICAgIGlvbi1jb2x7XHJcbiAgICAgICAgICAgIG1hcmdpbjoxMHB4IDAgMDtcclxuICAgICAgICAgICAgW2Zvcm1kYXRlXSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYWJlbHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCA4cHhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24taW5wdXQsIGlvbi10ZXh0YXJlYSwgaW9uLXNlbGVjdCwgaW9uLWRhdGV0aW1le1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMyMjI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuW2J0bnNhdmVde1xyXG5cdGhlaWdodDogNTBweDtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "QYDN":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-profile/edit-profile.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function QYDN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<div flexHeader>\n\t\t\t<div backHead>\n\t\t\t\t<ion-back-button defaultHref=\"/tabs/settings\" [text]=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t\t</div>\n\t\t\t<ion-title class=\"ion-text-center\">Edit Profile</ion-title>\n\t\t</div>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div padding>\n\t\t<div userImg><img src=\"{{ userImage }}\" alt=\"\">\n\t\t\t<ion-button (click)=\"selectImageSource()\">\n\t\t\t\t<ion-icon name=\"camera\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</div>\n\n\t\t<div editprofileform>\n\t\t\t<form [formGroup]=\"updateProfileForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n\n\t\t\t\t<input type=\"file\" accept=\"image/*\" id=\"fileupload\" (change)=\"uploadFile($event)\" name=\"fileupload\"\n\t\t\t\t\tstyle=\"display:none\" />\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"12\">\n\t\t\t\t\t\t<label>First Name</label>\n\t\t\t\t\t\t<ion-input type=\"text\" formControlName=\"firstName\" placeholder=\"Name\" value=\"\"></ion-input>\n\t\t\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.firstName.errors?.required\">\n\t\t\t\t\t\t\t<ion-label no-margin stacked>First Name is required.</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.firstName.errors?.minlength\">\n\t\t\t\t\t\t\t<ion-label no-margin stacked>Min 3 chars long.</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.firstName.errors?.pattern\">\n\t\t\t\t\t\t\t<ion-label no-margin stacked>Only alphabets allowed.</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"12\">\n\t\t\t\t\t\t<label>Last Name</label>\n\t\t\t\t\t\t<ion-input type=\"text\" formControlName=\"lastName\" placeholder=\"Name\" value=\"\"></ion-input>\n\t\t\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.lastName.errors?.required\">\n\t\t\t\t\t\t\t<ion-label no-margin stacked>Last Name is required.</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.lastName.errors?.minlength\">\n\t\t\t\t\t\t\t<ion-label no-margin stacked>Min 3 chars long.</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.lastName.errors?.pattern\">\n\t\t\t\t\t\t\t<ion-label no-margin stacked>Only alphabets allowed.</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"12\">\n\t\t\t\t\t\t<label>Email Address </label>\n\t\t\t\t\t\t<ion-input type=\"email\" formControlName=\"email\" placeholder=\"Email\" value=\"\"></ion-input>\n\t\t\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.email.errors?.required\">\n\t\t\t\t\t\t\t<ion-label no-margin stacked>Email is required.</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.email.errors?.pattern\">\n\t\t\t\t\t\t\t<ion-label no-margin stacked>Enter valid email.</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"12\">\n\t\t\t\t\t\t<label>DOB</label>\n\t\t\t\t\t\t<div formdate>\n\t\t\t\t\t\t\t<ion-datetime displayFormat=\"MM-DD\" formControlName=\"dob\" value=\"\"></ion-datetime>\n\t\t\t\t\t\t\t<ion-icon name=\"calendar\"></ion-icon>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.dob.errors?.required\">\n\t\t\t\t\t\t\t<ion-label no-margin stacked>DOB is required.</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"12\">\n\t\t\t\t\t\t<label>Address</label>\n\t\t\t\t\t\t<ion-textarea rows=\"3\" type=\"text\" formControlName=\"address\" placeholder=\"Address\" value=\"\">\n\t\t\t\t\t\t</ion-textarea>\n\t\t\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.address.errors?.required\">\n\t\t\t\t\t\t\t<ion-label no-margin stacked>Address is required.</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"12\">\n\t\t\t\t\t\t<label>Contact Number</label>\n\t\t\t\t\t\t<ion-input type=\"text\" formControlName=\"phoneNumber\" placeholder=\"Contact Number\" value=\"\">\n\t\t\t\t\t\t</ion-input>\n\t\t\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.phoneNumber.errors?.required\">\n\t\t\t\t\t\t\t<ion-label no-margin stacked>Phone number is required.</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.phoneNumber.errors?.pattern\">\n\t\t\t\t\t\t\t<ion-label no-margin stacked>Only number values allowed.</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"12\">\n\t\t\t\t\t\t<label>Chronic Disease* </label>\n\t\t\t\t\t\t<ion-select interface=\"action-sheet\" formControlName=\"chronicDisease\" placeholder=\"Select One\"\n\t\t\t\t\t\t\tvalue=\"Diabetes\">\n\t\t\t\t\t\t\t<ion-select-option value=\"1\">Diabetes</ion-select-option>\n\t\t\t\t\t\t\t<ion-select-option value=\"2\">Coeliac</ion-select-option>\n\t\t\t\t\t\t\t<ion-select-option value=\"3\">Coronary Heart Disease</ion-select-option>\n\t\t\t\t\t\t\t<ion-select-option value=\"5\">IBS & IBD</ion-select-option>\n\t\t\t\t\t\t\t<ion-select-option value=\"6\">Other</ion-select-option>\n\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t\t<ion-item class='form-text error' *ngIf=\"submitAttempt && errorCtr.chronicDisease.errors?.required\">\n\t\t\t\t\t\t\t<ion-label no-margin stacked>Please select chronic disease.</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-button type=\"submit\" btnsave>Save Changes</ion-button>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</form>\n\t\t</div>\n\n\t</div>\n</ion-content>";
      /***/
    },

    /***/
    "Wvzw":
    /*!*****************************************************!*\
      !*** ./src/app/edit-profile/edit-profile.module.ts ***!
      \*****************************************************/

    /*! exports provided: EditProfilePageModule */

    /***/
    function Wvzw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function () {
        return EditProfilePageModule;
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


      var _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edit-profile-routing.module */
      "pj8G");
      /* harmony import */


      var _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./edit-profile.page */
      "x9OG");

      var EditProfilePageModule = function EditProfilePageModule() {
        _classCallCheck(this, EditProfilePageModule);
      };

      EditProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditProfilePageRoutingModule"]],
        declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"]]
      })], EditProfilePageModule);
      /***/
    },

    /***/
    "pj8G":
    /*!*************************************************************!*\
      !*** ./src/app/edit-profile/edit-profile-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: EditProfilePageRoutingModule */

    /***/
    function pj8G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditProfilePageRoutingModule", function () {
        return EditProfilePageRoutingModule;
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


      var _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit-profile.page */
      "x9OG");

      var routes = [{
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__["EditProfilePage"]
      }];

      var EditProfilePageRoutingModule = function EditProfilePageRoutingModule() {
        _classCallCheck(this, EditProfilePageRoutingModule);
      };

      EditProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditProfilePageRoutingModule);
      /***/
    },

    /***/
    "x9OG":
    /*!***************************************************!*\
      !*** ./src/app/edit-profile/edit-profile.page.ts ***!
      \***************************************************/

    /*! exports provided: EditProfilePage */

    /***/
    function x9OG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditProfilePage", function () {
        return EditProfilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_edit_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./edit-profile.page.html */
      "QYDN");
      /* harmony import */


      var _edit_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit-profile.page.scss */
      "12cG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/api/api.service */
      "oZWX");
      /* harmony import */


      var _services_globalFooService_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/globalFooService.service */
      "3IAD");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/common.service */
      "OlR4");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _capacitor_camera__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @capacitor/camera */
      "/s3u");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var EditProfilePage = /*#__PURE__*/function () {
        function EditProfilePage(formBuilder, globalFooService, common, api, router, plt, actionSheetCtrl) {
          _classCallCheck(this, EditProfilePage);

          this.formBuilder = formBuilder;
          this.globalFooService = globalFooService;
          this.common = common;
          this.api = api;
          this.router = router;
          this.plt = plt;
          this.actionSheetCtrl = actionSheetCtrl;
          this.userId = localStorage.getItem('ineat_userid');
          this.submitAttempt = false;
          this.userData = JSON.parse(localStorage.getItem('ineat_userData'));
          this.userImage = this.userData.image;
        }

        _createClass(EditProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _a, _b, _c, _d, _e, _f, _g;

            this.updateProfileForm = this.formBuilder.group({
              firstName: [(_a = this.userData) === null || _a === void 0 ? void 0 : _a.first_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-zA-Z][a-zA-Z ]+')]],
              lastName: [(_b = this.userData) === null || _b === void 0 ? void 0 : _b.last_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-zA-Z][a-zA-Z ]+')]],
              email: [(_c = this.userData) === null || _c === void 0 ? void 0 : _c.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
              phoneNumber: [(_d = this.userData) === null || _d === void 0 ? void 0 : _d.phone_number, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]+$')]],
              chronicDisease: [(_e = this.userData) === null || _e === void 0 ? void 0 : _e.chronic_disease, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              dob: [(_f = this.userData) === null || _f === void 0 ? void 0 : _f.dob, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              address: [(_g = this.userData) === null || _g === void 0 ? void 0 : _g.address1, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]]
            });
          }
        }, {
          key: "errorCtr",
          get: function get() {
            return this.updateProfileForm.controls;
          }
        }, {
          key: "selectImageSource",
          value: function selectImageSource() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var buttons, actionSheet;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      buttons = [{
                        text: 'Take Photo',
                        icon: 'camera',
                        handler: function handler() {
                          _this.addImage(_capacitor_camera__WEBPACK_IMPORTED_MODULE_9__["CameraSource"].Camera);
                        }
                      }, {
                        text: 'Choose From Gallery',
                        icon: 'image',
                        handler: function handler() {
                          _this.addImage(_capacitor_camera__WEBPACK_IMPORTED_MODULE_9__["CameraSource"].Photos);
                        }
                      }]; // Only allow file selection inside a browser

                      if (!this.plt.is('hybrid')) {
                        buttons.push({
                          text: 'Choose a File',
                          icon: 'attach',
                          handler: function handler() {
                            _this.fileInput.nativeElement.click();
                          }
                        });
                      }

                      _context.next = 4;
                      return this.actionSheetCtrl.create({
                        header: 'Select Image Source',
                        buttons: buttons
                      });

                    case 4:
                      actionSheet = _context.sent;
                      _context.next = 7;
                      return actionSheet.present();

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "addImage",
          value: function addImage(source) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var image, blobData, imageName;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return _capacitor_camera__WEBPACK_IMPORTED_MODULE_9__["Camera"].getPhoto({
                        quality: 60,
                        allowEditing: false,
                        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_9__["CameraResultType"].Base64,
                        source: source
                      });

                    case 2:
                      image = _context2.sent;
                      blobData = this.b64toBlob(image.base64String, "image/".concat(image.format));
                      imageName = 'imagee';
                      this.userImage = 'data:image/png;base64,' + image.base64String;
                      this.uploadBlobData = blobData;
                      this.uploadedExtension = image.format;

                    case 8:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "uploadFile",
          value: function uploadFile(event) {
            var eventObj = event;
            var target = eventObj.target;
            var file = target.files[0];
          } // Helper function

        }, {
          key: "b64toBlob",
          value: function b64toBlob(b64Data) {
            var contentType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var sliceSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 512;
            var byteCharacters = atob(b64Data);
            var byteArrays = [];

            for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
              var slice = byteCharacters.slice(offset, offset + sliceSize);
              var byteNumbers = new Array(slice.length);

              for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
              }

              var byteArray = new Uint8Array(byteNumbers);
              byteArrays.push(byteArray);
            }

            var blob = new Blob(byteArrays, {
              type: contentType
            });
            return blob;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this2 = this;

            this.submitAttempt = true;

            if (!this.updateProfileForm.valid) {
              //this.common.presentToast('Please fill all required fields.','danger');
              return false;
            } else {
              this.common.presentLoading();
              var dict = this.updateProfileForm.value;
              var imgName = (+new Date()).toString(36).slice(-5);
              var formData = new FormData();

              if (typeof this.uploadBlobData === 'undefined') {} else {
                formData.append('file', this.uploadBlobData, 'myimage.${this.uploadedExtension}');
              }

              formData.append('firstName', this.updateProfileForm.value.firstName);
              formData.append('lastName', this.updateProfileForm.value.lastName);
              formData.append('email', this.updateProfileForm.value.email);
              formData.append('phoneNumber', this.updateProfileForm.value.phoneNumber);
              formData.append('chronicDisease', this.updateProfileForm.value.chronicDisease);
              formData.append('dob', this.updateProfileForm.value.dob);
              formData.append('address', this.updateProfileForm.value.address);
              formData.append('userId', this.userId);
              this.api.post('updateProfile', formData, '').subscribe(function (result) {
                _this2.submitAttempt = false;

                _this2.common.stopLoading();

                var res;
                res = result;

                if (res.status == 422) {
                  var errMsgs = '';

                  for (var i = 0; i < res.errors.length; i++) {
                    var obj = res.errors[i];
                    errMsgs += obj + '</br>';
                  }

                  _this2.common.presentToast(errMsgs, 'danger');
                } else if (res.status == 200) {
                  localStorage.setItem('ineat_userData', JSON.stringify(res.data));

                  _this2.common.presentToast('Profile Updated Successfully!.', 'success');
                }
              }, function (error) {
                console.log(error);
              });
            }
          }
        }]);

        return EditProfilePage;
      }();

      EditProfilePage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _services_globalFooService_service__WEBPACK_IMPORTED_MODULE_6__["GlobalFooService"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]
        }, {
          type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ActionSheetController"]
        }];
      };

      EditProfilePage.propDecorators = {
        fileInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['fileInput', {
            "static": false
          }]
        }]
      };
      EditProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-profile',
        template: _raw_loader_edit_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EditProfilePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=edit-profile-edit-profile-module-es5.js.map