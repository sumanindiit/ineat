(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-bowl-add-bowl-module"], {
    /***/
    "+j39":
    /*!*****************************************************!*\
      !*** ./src/app/add-bowl/add-bowl-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: AddBowlPageRoutingModule */

    /***/
    function j39(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddBowlPageRoutingModule", function () {
        return AddBowlPageRoutingModule;
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


      var _add_bowl_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-bowl.page */
      "PeYA");

      var routes = [{
        path: '',
        component: _add_bowl_page__WEBPACK_IMPORTED_MODULE_3__["AddBowlPage"]
      }];

      var AddBowlPageRoutingModule = function AddBowlPageRoutingModule() {
        _classCallCheck(this, AddBowlPageRoutingModule);
      };

      AddBowlPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddBowlPageRoutingModule);
      /***/
    },

    /***/
    "/4TZ":
    /*!*********************************************!*\
      !*** ./src/app/add-bowl/add-bowl.module.ts ***!
      \*********************************************/

    /*! exports provided: AddBowlPageModule */

    /***/
    function TZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddBowlPageModule", function () {
        return AddBowlPageModule;
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


      var _add_bowl_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-bowl-routing.module */
      "+j39");
      /* harmony import */


      var _add_bowl_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add-bowl.page */
      "PeYA");

      var AddBowlPageModule = function AddBowlPageModule() {
        _classCallCheck(this, AddBowlPageModule);
      };

      AddBowlPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_bowl_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddBowlPageRoutingModule"]],
        declarations: [_add_bowl_page__WEBPACK_IMPORTED_MODULE_6__["AddBowlPage"]]
      })], AddBowlPageModule);
      /***/
    },

    /***/
    "6ykE":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-bowl/add-bowl.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function ykE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<div flexHeader>\n\t\t\t<div backHead>\n\t\t\t\t<ion-back-button routerLink=\"/tabs/feed\"></ion-back-button>\n\t\t\t</div>\n\t\t\t<ion-title>Create Discussion</ion-title>\n\t\t</div>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div padding>\n\t\t<div form>\n\t\t\t<form [formGroup]=\"addPostForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<label>What's on Your Mind?</label>\n\t\t\t\t\t\t<ion-input formControlName=\"postDescription\" placeholder=\"What's on Your Mind\"></ion-input>\n\t\t\t\t\t\t<ion-item class=\"form-text error\"\n\t\t\t\t\t\t\t*ngIf=\"submitAttempt && errorCtr.postDescription.errors?.required\">\n\t\t\t\t\t\t\t<ion-label no-margin stacked>Please enter description</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item class=\"form-text error\"\n\t\t\t\t\t\t\t*ngIf=\"submitAttempt && errorCtr.postDescription.errors?.minlength\">\n\t\t\t\t\t\t\t<ion-label no-margin stacked>Min 3 chars long.</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<label>Select Group</label>\n\t\t\t\t\t\t<ion-select formControlName=\"postGroup\" value=\"\" [interfaceOptions]=\"customAlertOptions\"\n\t\t\t\t\t\t\tinterface=\"action-sheet\" placeholder=\"Select Group\">\n\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let val of allGroups\" value=\"{{val.id}}\">{{val.title}}\n\t\t\t\t\t\t\t</ion-select-option>\n\t\t\t\t\t\t</ion-select>\n\n\n\t\t\t\t\t\t<ion-item class='form-text error' *ngIf=\"submitAttempt && errorCtr.postGroup.errors?.required\">\n\t\t\t\t\t\t\t<ion-label no-margin stacked>Please select at least one group.</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<label>Add a cover image</label>\n\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<ion-button (click)=\"selectImageSource()\">\n\t\t\t\t\t\t\t\t<ion-icon name=\"camera\"></ion-icon>\n\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<input type=\"file\" accept=\"image/*\" id=\"fileupload\" (change)=\"uploadFile($event)\"\n\t\t\t\t\t\t\tname=\"fileupload\" style=\"display:none;\" />\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"12\" *ngIf=\"postImage !=''\">\n\t\t\t\t\t\t<div class=\"coverImages\">\n\t\t\t\t\t\t\t<span><img src=\"{{ postImage }}\" alt=\"\"></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-button type=\"submit\" btnsave>Share</ion-button>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</form>\n\t\t</div>\n\n\t</div>\n</ion-content>";
      /***/
    },

    /***/
    "9voO":
    /*!*********************************************!*\
      !*** ./src/app/add-bowl/add-bowl.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function voO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "[btngetsocial] {\n  height: 30px;\n  --padding: 0;\n  --min-height: 1px;\n  font-size: 12px;\n}\n\n[center] {\n  text-align: center;\n  font-weight: 500;\n}\n\n[userImg] {\n  width: 150px;\n  height: 150px;\n  position: relative;\n  margin: 0 auto;\n}\n\n[userImg] img {\n  border-radius: 250px;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n[userImg] ion-button {\n  min-width: 1px;\n  min-height: 1px;\n  width: 40px;\n  height: 40px;\n  border-radius: 50px;\n  background: var(--primary-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  --border-radius: 50px;\n  --padding: 0 !important;\n  padding: 0 !important;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  border: 2px solid #fff;\n}\n\n[userImg] ion-button ion-icon {\n  min-width: 50px;\n}\n\n[form] {\n  margin: 0px 0 0;\n}\n\n[form] ion-row {\n  margin: 10px 0 0;\n}\n\n[form] ion-row ion-col label {\n  font-size: 13px;\n  color: #777;\n  display: block;\n  margin: 0 0 8px;\n}\n\n[form] ion-row ion-col ion-input, [form] ion-row ion-col ion-textarea, [form] ion-row ion-col ion-select {\n  border: 1px solid #eee;\n  border-radius: 5px;\n  font-size: 14px;\n  color: #222;\n  padding: 10px;\n}\n\n[btnsave] {\n  height: 50px;\n  border-radius: 10px;\n  width: 100%;\n  margin-top: 80px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FkZC1ib3dsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFlBQVk7RUFDVCxZQUFVO0VBQ1YsaUJBQWE7RUFDYixlQUFlO0FBQ25COztBQUVBO0VBQUMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUVqQjs7QUFFQTtFQURDLFlBQVc7RUFDWCxhQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWE7QUFHZDs7QUFFQTtFQUhFLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUI7QUFLbkI7O0FBRUE7RUFKRSxjQUFjO0VBQ1gsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixxQkFBZ0I7RUFDaEIsdUJBQVU7RUFDVixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFRO0VBQ1Isc0JBQXFCO0FBTTFCOztBQUVBO0VBTk0sZUFBZTtBQVFyQjs7QUFFQTtFQUxDLGVBQWM7QUFPZjs7QUFFQTtFQVBFLGdCQUFlO0FBU2pCOztBQUVBO0VBUkksZUFBZTtFQUNmLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBYztBQVVsQjs7QUFFQTtFQVRJLHNCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxhQUFZO0FBV2hCOztBQUVBO0VBUEMsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCO0FBU2pCIiwiZmlsZSI6ImFkZC1ib3dsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIltidG5nZXRzb2NpYWxde1xyXG5cdGhlaWdodDogMzBweDtcclxuICAgIC0tcGFkZGluZzogMDtcclxuICAgIC0tbWluLWhlaWdodDogMXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbltjZW50ZXJde1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG59XHJcblt1c2VySW1nXXtcclxuXHR3aWR0aDoxNTBweDtcclxuXHRoZWlnaHQ6MTUwcHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1hcmdpbjowIGF1dG87XHJcblx0aW1ne1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjUwcHg7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdG9iamVjdC1maXQ6IGNvdmVyO1xyXG5cdH1cclxuXHRpb24tYnV0dG9ue1xyXG5cdFx0bWluLXdpZHRoOiAxcHg7XHJcblx0ICAgIG1pbi1oZWlnaHQ6IDFweDtcclxuXHQgICAgd2lkdGg6IDQwcHg7XHJcblx0ICAgIGhlaWdodDogNDBweDtcclxuXHQgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuXHQgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcblx0ICAgIGRpc3BsYXk6IGZsZXg7XHJcblx0ICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0ICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdCAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcblx0ICAgIC0tcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG5cdCAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7IFxyXG5cdCAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ICAgIHJpZ2h0OiAwO1xyXG5cdCAgICBib3R0b206MDtcclxuXHQgICAgYm9yZGVyOjJweCBzb2xpZCAjZmZmO1xyXG5cdCAgICBpb24taWNvbntcclxuXHQgICAgXHRtaW4td2lkdGg6IDUwcHg7XHJcblx0ICAgIH1cclxuXHR9XHJcbn1cclxuW2Zvcm1de1xyXG5cdG1hcmdpbjowcHggMCAwO1xyXG5cdGlvbi1yb3d7XHJcblx0XHRtYXJnaW46MTBweCAwIDA7XHJcblx0XHRpb24tY29se1xyXG5cdFx0XHRsYWJlbHtcclxuXHRcdFx0XHRmb250LXNpemU6IDEzcHg7XHJcblx0XHRcdFx0Y29sb3I6ICM3Nzc7XHJcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0bWFyZ2luOjAgMCA4cHg7XHJcblx0XHRcdH1cclxuXHRcdFx0aW9uLWlucHV0LCBpb24tdGV4dGFyZWEsIGlvbi1zZWxlY3R7XHJcblx0XHRcdFx0Ym9yZGVyOjFweCBzb2xpZCAjZWVlO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0Y29sb3I6ICMyMjI7XHJcblx0XHRcdFx0cGFkZGluZzoxMHB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbltidG5zYXZlXXtcclxuXHRoZWlnaHQ6IDUwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXJnaW4tdG9wOiA4MHB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    "PeYA":
    /*!*******************************************!*\
      !*** ./src/app/add-bowl/add-bowl.page.ts ***!
      \*******************************************/

    /*! exports provided: AddBowlPage */

    /***/
    function PeYA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddBowlPage", function () {
        return AddBowlPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_bowl_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-bowl.page.html */
      "6ykE");
      /* harmony import */


      var _add_bowl_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-bowl.page.scss */
      "9voO");
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

      var AddBowlPage = /*#__PURE__*/function () {
        function AddBowlPage(formBuilder, globalFooService, common, api, router, plt, actionSheetCtrl) {
          _classCallCheck(this, AddBowlPage);

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
        }

        _createClass(AddBowlPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.addPostForm = this.formBuilder.group({
              postDescription: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]],
              postGroup: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
            });
            this.getGroups();
          }
        }, {
          key: "getGroups",
          value: function getGroups() {
            var _this = this;

            this.api.post('getUserSocialGroups', {
              userId: this.userId
            }, '').subscribe(function (result) {
              var res = result;

              if (res.status === 422 || res.status === '422') {
                var errMsgs = '';

                var _iterator = _createForOfIteratorHelper(res.errors),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var x = _step.value;
                    errMsgs += x + '</br>';
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                _this.allGroups = [];
              } else if (res.status === 200 || res.status === '200') {
                _this.allGroups = res.data;
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "errorCtr",
          get: function get() {
            return this.addPostForm.controls;
          }
        }, {
          key: "selectImageSource",
          value: function selectImageSource() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var buttons, actionSheet;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      buttons = [{
                        text: 'Take Photo',
                        icon: 'camera',
                        handler: function handler() {
                          _this2.addImage(_capacitor_camera__WEBPACK_IMPORTED_MODULE_9__["CameraSource"].Camera);
                        }
                      }, {
                        text: 'Choose From Gallery',
                        icon: 'image',
                        handler: function handler() {
                          _this2.addImage(_capacitor_camera__WEBPACK_IMPORTED_MODULE_9__["CameraSource"].Photos);
                        }
                      }]; // Only allow file selection inside a browser

                      if (!this.plt.is('hybrid')) {
                        buttons.push({
                          text: 'Choose a File',
                          icon: 'attach',
                          handler: function handler() {
                            _this2.fileInput.nativeElement.click();
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
                      this.postImage = 'data:image/png;base64,' + image.base64String;
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
            var _this3 = this;

            this.submitAttempt = true;

            if (!this.addPostForm.valid) {
              return false;
            } else {
              this.common.presentLoading();
              var dict = this.addPostForm.value;
              var imgName = (+new Date()).toString(36).slice(-5);
              var formData = new FormData();

              if (typeof this.uploadBlobData === 'undefined') {} else {
                formData.append('file', this.uploadBlobData, 'myimage.' + this.uploadedExtension);
              }

              formData.append('description', this.addPostForm.value.postDescription);
              formData.append('group', this.addPostForm.value.postGroup);
              formData.append('userId', this.userId);
              this.api.post('addSocialPost', formData, '').subscribe(function (result) {
                _this3.submitAttempt = false;

                _this3.common.stopLoading();

                var res;
                res = result;

                if (res.status == 422) {
                  var errMsgs = '';

                  for (var i = 0; i < res.errors.length; i++) {
                    var obj = res.errors[i];
                    errMsgs += obj + '</br>';
                  }

                  _this3.common.presentToast(errMsgs, 'danger');
                } else if (res.status == 200) {
                  _this3.common.presentToast('Feed added successfully!.', 'success');

                  _this3.api.navCtrl.navigateRoot('/tabs/feed');
                }
              }, function (error) {
                console.log(error);
              });
            }
          }
        }]);

        return AddBowlPage;
      }();

      AddBowlPage.ctorParameters = function () {
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

      AddBowlPage.propDecorators = {
        fileInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['fileInput', {
            "static": false
          }]
        }]
      };
      AddBowlPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-bowl',
        template: _raw_loader_add_bowl_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_bowl_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddBowlPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=add-bowl-add-bowl-module-es5.js.map