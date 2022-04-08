(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["meals-meals-module"], {
    /***/
    "NG3X":
    /*!***********************************************!*\
      !*** ./src/app/meals/meals-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: MealsPageRoutingModule */

    /***/
    function NG3X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MealsPageRoutingModule", function () {
        return MealsPageRoutingModule;
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


      var _meals_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./meals.page */
      "aytg");

      var routes = [{
        path: '',
        component: _meals_page__WEBPACK_IMPORTED_MODULE_3__["MealsPage"]
      }];

      var MealsPageRoutingModule = function MealsPageRoutingModule() {
        _classCallCheck(this, MealsPageRoutingModule);
      };

      MealsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MealsPageRoutingModule);
      /***/
    },

    /***/
    "VGAo":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/meals/meals.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function VGAo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <h3>Select Meals</h3>\n  <ul steps>\n    <li class=\"active\">\n      <ion-icon name=\"checkmark\"></ion-icon>\n    </li>\n    <li class=\"active\">\n      <ion-icon name=\"checkmark\"></ion-icon>\n    </li>\n    <li class=\"active\">\n      <ion-icon name=\"checkmark\"></ion-icon>\n    </li>\n    <li class=\"active\">\n      <ion-icon name=\"checkmark\"></ion-icon>\n    </li>\n    <li class=\"active\" #active4></li>\n  </ul>\n</ion-header>\n\n<ion-content botmbg>\n  <div slideBox>\n\n    <div padding>\n      <div searchbar>\n        <ion-searchbar [(ngModel)]=\"searchQuery\" (search)=\"filterMeals($event)\" autocorrect=\"off\" showCancelButton=\"focus\" mode=\"md\" placeholder=\"Search Meals...\" ></ion-searchbar>\n      </div>\n      <div billingDe d-flex>\n        <div>\n          <h5 subhdng>Build a meal plan</h5>\n          <p>Pick your meal for this week.</p>\n        </div>\n        <div sortIcons>\n          <a routerLink=\"/order-summary\"  cart>\n            <ion-icon name=\"cart\"></ion-icon>\n          </a>\n          <a href=\"javascript:void(0);\" (click)=\"presentMealsModal()\">\n            <ion-icon name=\"funnel\"></ion-icon>\n          </a>\n        </div>\n      </div>\n\n      <div selectMeal *ngIf=\"pageData\">\n        <ion-row>\n          <ion-col size=\"6\" *ngFor=\"let data of pageData\">\n            <div class=\"mealCol\">\n              <div class=\"absomeal lbl_{{ data.difficulty_level }}\">\n                <label>{{ data.difficulty_level }}</label>\n              </div>\n              <a routerLink=\"/meal-details/{{data.id}}\"><img src=\"{{ data.image }}\" alt=\"\" class=\"mealImg\"></a>\n              <div class=\"mealCont\">\n                <h6><a routerLink=\"/meal-details/{{data.id}}\">{{ data.title }}</a></h6>\n                <p>Prep. Time: {{ data.prepration_time }} mins</p>\n                <ul class=\"iconsRow\" *ngIf=\"data.allergen\">\n                  <li *ngFor=\"let allergen of data.allergen\" class=\"allerden_{{ allergen.name }}\">\n                    <a href=\"javascript:void(0)\" data-tooltip=\"{{ allergen.name }}\">\n                      <img src=\"{{ allergen.image }}\" alt=\"\">\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </ion-col>\n\n          <ion-infinite-scroll *ngIf=\"isMoreRecords\" threshold=\"100px\" (ionInfinite)=\"getMeals($event,'1')\">\n            <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more Meals...\">\n            </ion-infinite-scroll-content>\n          </ion-infinite-scroll>\n        </ion-row>\n\n        \n      </div>\n    </div>\n\n  \n  </div>\n  <ion-button routerLink=\"/order-summary\"  btncontinue >Go to Cart ({{ cartCount }}) </ion-button>\n</ion-content>";
      /***/
    },

    /***/
    "aytg":
    /*!*************************************!*\
      !*** ./src/app/meals/meals.page.ts ***!
      \*************************************/

    /*! exports provided: MealsPage */

    /***/
    function aytg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MealsPage", function () {
        return MealsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_meals_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./meals.page.html */
      "VGAo");
      /* harmony import */


      var _meals_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./meals.page.scss */
      "cwxU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/api/api.service */
      "oZWX");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/common.service */
      "OlR4");
      /* harmony import */


      var _mealfilters_mealfilters_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../mealfilters/mealfilters.page */
      "ISiu");

      var MealsPage = /*#__PURE__*/function () {
        function MealsPage(menuController, common, api, cd, modalController) {
          _classCallCheck(this, MealsPage);

          this.menuController = menuController;
          this.common = common;
          this.api = api;
          this.cd = cd;
          this.modalController = modalController;
          this.userId = localStorage.getItem('ineat_userid');
          this.is_loaded = false;
          this.isMoreRecords = true;
          this.hideMe = false;
          this.menuController.enable(false);
          this.recordsPerPage = 6;
        }

        _createClass(MealsPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.start = 0;
            this.allMeals = [];
            this.common.presentLoading();
            this.getMeals({}, '0');
            this.getCartCount();
          }
        }, {
          key: "toggleClass",
          value: function toggleClass() {
            this.hideMe = !this.hideMe;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "filterMeals",
          value: function filterMeals(event) {
            this.searchQuery = event.srcElement.value;
            this.allMeals = [];
            this.getMeals({}, '0', this.searchQuery);
            console.log(this.searchQuery);
          }
        }, {
          key: "getCartCount",
          value: function getCartCount() {
            var _this = this;

            this.api.post('getCartCount', {
              userId: this.userId
            }, '').subscribe(function (result) {
              _this.common.stopLoading();

              var res = result;
              _this.cartCount = res.cart_count;
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getMeals",
          value: function getMeals() {
            var _this2 = this;

            var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

            if (type === '0') {} else {
              this.scrollEvent = event;

              if (type === '1') {
                this.start = this.start + this.recordsPerPage;
              }
            }

            var self = this;
            setTimeout(function () {
              self.api.post('getMeals', {
                userId: _this2.userId,
                recordsPerPage: self.recordsPerPage,
                start: self.start,
                search: query
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

                  self.common.presentToast(errMsgs, 'danger');
                  self.is_loaded = true;
                  _this2.pageData = [];
                  self.common.stopLoading();
                } else if (res.status === 200 || res.status === '200') {
                  var loaded_records = self.start + self.recordsPerPage;

                  if (loaded_records >= res.total) {
                    self.isMoreRecords = false;
                  }

                  self.allMeals = self.allMeals.concat(res.data);

                  if (type === '0') {
                    self.common.stopLoading();
                  } else {
                    if (type === '1') {
                      self.scrollEvent.target.complete();
                    }
                  }

                  _this2.pageData = self.allMeals;
                  _this2.is_loaded = false;
                }
              }, function (error) {
                console.log(error);
                self.common.stopLoading();
              });
            }, 500);
          }
        }, {
          key: "presentMealsModal",
          value: function presentMealsModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _mealfilters_mealfilters_page__WEBPACK_IMPORTED_MODULE_7__["MealfiltersPage"],
                        cssClass: 'MealsFiltersModal'
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return MealsPage;
      }();

      MealsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
        }, {
          type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      MealsPage.propDecorators = {
        infiniteScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"], {
            "static": true
          }]
        }],
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['mySlider']
        }]
      };
      MealsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-meals',
        template: _raw_loader_meals_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_meals_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MealsPage);
      /***/
    },

    /***/
    "cwxU":
    /*!***************************************!*\
      !*** ./src/app/meals/meals.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function cwxU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header h3 {\n  display: block;\n  text-align: center;\n  font-weight: 600;\n  margin: 25px 0 0;\n}\n\n[btncontinue] {\n  position: fixed;\n  left: 20px;\n  width: 88%;\n  bottom: 0px;\n  height: 57px;\n  z-index: 10;\n}\n\n[slideBox] {\n  display: flex;\n}\n\n[slideBox] ion-slide {\n  height: 400px;\n}\n\n[slideBox] ion-slide.fullHight {\n  overflow-y: auto;\n}\n\n[slideBox] ion-slide.fullHight [btncontinue] {\n  position: relative;\n  right: 0;\n  margin-top: 15px;\n  width: 100%;\n  max-width: 160px;\n  margin-left: auto;\n}\n\nion-slides ion-slide {\n  min-height: 84vh;\n  align-items: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n}\n\nion-slides ion-slide ion-segment {\n  border-radius: 14px;\n  background: transparent;\n  border: 1px solid #f3f3f3;\n  box-shadow: none;\n}\n\nion-slides ion-slide ion-segment ion-segment-button {\n  --border-radius:14px;\n  color: #888;\n}\n\nion-slides ion-slide ion-segment ion-segment-button.segment-button-checked {\n  --indicator-box-shadow:none;\n  --indicator-color:var(--ion-color-secondary);\n  color: #fff;\n}\n\nion-slides ion-slide ion-segment ion-segment-button.active {\n  --indicator-box-shadow:none;\n  --indicator-color:var(--ion-color-secondary);\n  background-color: var(--ion-color-secondary);\n  --background: var(--ion-color-secondary);\n  color: #fff;\n}\n\nion-slides ion-slide ion-segment ion-segment-button h6 {\n  margin: 10px 0;\n  font-size: 13px;\n}\n\nion-slides ion-slide [form-group] {\n  margin-top: 20px;\n}\n\nion-slides ion-slide [form-group] label {\n  color: #777;\n  margin: 0 0 10px;\n  display: block;\n  font-size: 14px;\n}\n\nion-slides ion-slide [form-group] p {\n  color: #111;\n  font-weight: 500;\n  margin: 0;\n  font-size: 14px;\n}\n\nion-slides ion-slide [form-group][subtotal] {\n  border-top: 1px dashed #444;\n  padding-top: 15px;\n}\n\nion-slides ion-slide [form-group][subtotal] p {\n  display: flex;\n  align-items: center;\n  margin-bottom: 5px;\n}\n\nion-slides ion-slide [form-group][subtotal] p span {\n  margin-left: auto;\n}\n\n[title] {\n  font-size: 22px;\n  font-weight: 500;\n  color: #666;\n  margin: 40px 0 25px;\n}\n\n[padding] {\n  width: 100%;\n}\n\n[groupRadio] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n[groupRadio] li {\n  margin: 0 0 15px;\n}\n\n[groupRadio] li input {\n  display: none;\n}\n\n[groupRadio] li input + label {\n  height: 55px;\n  border-radius: 80px;\n  padding: 0 45px 0 30px;\n  transition: .3s;\n  display: inline-flex;\n  align-items: center;\n  font-size: 16px;\n  justify-content: center;\n  border: 1px solid #eee;\n  color: #333;\n}\n\n[groupRadio] li input + label span {\n  width: 25px;\n  height: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #ddd;\n  border-radius: 50px;\n  margin-right: 15px;\n}\n\n[groupRadio] li input:checked + label {\n  background: var(--ion-color-primary);\n  color: #fff;\n}\n\n[groupRadio] li input:checked + label span {\n  background: #fff;\n  border-color: #fff;\n}\n\n[groupRadio] li input:checked + label span:before {\n  content: \"\\2713\";\n  color: var(--ion-color-primary);\n}\n\n[groupRadio][flexRow] {\n  flex-direction: row;\n  display: flex;\n}\n\n[groupRadio][flexRow] li {\n  margin: 0;\n}\n\n[groupRadio][flexRow] li input + label {\n  padding: 0 20px;\n  margin-right: 10px;\n  margin-bottom: 0;\n  height: 45px;\n}\n\nform ion-label {\n  margin-top: 30px;\n  display: block;\n  font-size: 14px;\n  color: #333;\n}\n\nform ion-item {\n  --background: none;\n  --padding-start:0;\n  position: relative;\n}\n\nform ion-item ion-input {\n  font-size: 15px;\n  --background: none;\n}\n\nform ion-item ion-select {\n  font-size: 15px;\n  --background: none;\n  width: 100%;\n}\n\nform [showpas] {\n  font-size: 13px;\n  position: absolute;\n  text-decoration: none;\n  color: var(--ion-color-secondary);\n  right: 15px;\n}\n\nform [btn-login] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 50px;\n  margin: 40px 0 0;\n}\n\nform [btn-login] ion-icon {\n  margin-left: 10px;\n}\n\nform [orlogin] {\n  margin: 30px 0 0;\n  text-transform: uppercase;\n  font-size: 11px;\n  letter-spacing: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nform [social] {\n  list-style: none;\n  padding: 0;\n  margin: 15px 0 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nform [social] li {\n  margin: 0 10px;\n}\n\nform [social] li img {\n  width: 30px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n[widthfull] {\n  width: 100%;\n}\n\n[header] {\n  position: fixed;\n  left: 0;\n  right: 0;\n  background: #fff;\n}\n\n[topheading] {\n  position: fixed;\n  top: -75px;\n  left: 0;\n  right: 0;\n  text-align: center;\n}\n\n[readymeal] {\n  display: flex;\n  align-items: center;\n}\n\n[readymeal] span {\n  border: 1px solid #eee;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 80px;\n  margin-right: 15px;\n  height: 80px;\n}\n\n[readymeal] span img {\n  width: 50px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n[readymeal] h5 {\n  font-size: 16px;\n  font-weight: 500;\n  margin: 0 0 15px;\n}\n\n[readymeal] p {\n  color: #777;\n  margin: 0;\n  font-size: 13px;\n}\n\n[subhdng] {\n  color: var(--ion-color-secondary);\n  border-left: 2px solid var(--ion-color-secondary);\n  padding: 0 0 0 15px;\n  margin: 35px 0 15px;\n  font-weight: 600;\n  font-size: 17px;\n}\n\n[billAdrs] ion-item {\n  --background: transparent;\n  --padding-start:0;\n}\n\n[billAdrs] ion-item ion-radio {\n  margin-right: 10px;\n}\n\n[contactless] {\n  margin: 30px 0;\n}\n\n[contactless] ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n[contactless] ul li {\n  display: flex;\n  align-items: center;\n  background: #fcfcfc;\n  padding: 20px;\n  border: 1px solid #eee;\n  border-radius: 15px;\n  margin: 0 0 15px;\n}\n\n[contactless] ul li span {\n  margin-right: 20px;\n}\n\n[contactless] ul li span img {\n  width: 60px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n[contactless] ul li div h5 {\n  margin: 0 0 10px;\n  font-size: 16px;\n}\n\n[contactless] ul li div p {\n  margin: 0 0;\n  font-size: 14px;\n}\n\n[deliveryDeta] {\n  display: flex;\n  align-items: center;\n}\n\n[deliveryDeta] span {\n  width: 40px;\n  height: 40px;\n  border-radius: 50px;\n  background: var(--ion-color-secondary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 15px;\n}\n\n[deliveryDeta] span ion-icon {\n  font-size: 20px;\n  color: #fff;\n}\n\n[deliveryDeta] p {\n  font-size: 15px;\n}\n\n[billingDe][inside] {\n  margin-bottom: 30px;\n}\n\n[billingDe][inside] h6 {\n  font-size: 16px;\n  font-weight: 600;\n}\n\n[billingDe][inside] p {\n  margin: 0;\n  font-size: 14px;\n}\n\n[billingDe][d-flex] {\n  display: flex;\n  margin: 30px 0 0;\n}\n\n[billingDe][d-flex] h5 {\n  margin: 0 0 5px;\n}\n\n[billingDe][d-flex] h5 + p {\n  font-size: 14px;\n  color: #666;\n  margin: 0;\n}\n\n[billingDe][d-flex] [sortIcons] {\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n}\n\n[billingDe][d-flex] [sortIcons] a {\n  width: 40px;\n  height: 40px;\n  border-radius: 50px;\n  border: 1px solid #eee;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n[billingDe][d-flex] [sortIcons] a ion-icon {\n  color: #666;\n  font-size: 20px;\n}\n\n[billingDe][d-flex] [sortIcons] a[cart] {\n  background: var(--ion-color-primary);\n  border-color: var(--ion-color-primary);\n  margin-right: 10px;\n}\n\n[billingDe][d-flex] [sortIcons] a[cart] ion-icon {\n  color: #fff;\n}\n\n[searchbar] {\n  background: #f5f5f5;\n  border-radius: 50px;\n  overflow: hidden;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n[searchbar] ion-searchbar {\n  --background: none;\n  padding: 0;\n  --box-shadow: none;\n}\n\n.mealCol {\n  border-radius: 20px;\n  overflow-y: hidden;\n  height: 100%;\n  position: relative;\n  background: #fff;\n  border: 1px solid #eee;\n  /*box-shadow: 0 0 15px rgba(0,0,0, .07); */\n  margin-bottom: 0px;\n}\n\n.mealCont {\n  padding: 0 15px;\n  text-align: left;\n}\n\n[selectMeal] {\n  margin: 20px 0 0;\n}\n\n[selectMeal] ion-row {\n  margin-left: -5px;\n  margin-right: -5px;\n}\n\n.iconsRow .allerden_Fish a {\n  background-color: #24a778;\n}\n\n.iconsRow li:nth-child(2) a {\n  background: #f68b61;\n}\n\n.iconsRow li:nth-child(3) a {\n  background: #63bbb7;\n}\n\n.iconsRow li a {\n  width: 35px;\n  height: 35px;\n  border-radius: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #24a778;\n}\n\n.iconsRow li a[orangecolor] {\n  background: #FD8A5E;\n}\n\n.iconsRow li a[lightblue] {\n  background: #63BBB7;\n}\n\n.iconsRow li a img {\n  width: 17px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.mealImg {\n  height: 150px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  border-radius: 20px;\n}\n\n.mealCol h6 {\n  font-weight: 700;\n  font-size: 14px;\n  min-height: 36px;\n  margin: 15px 0 5px;\n  font-family: var(--poppins);\n}\n\n.mealCol h6 a {\n  color: #111;\n  text-decoration: none;\n  font-size: 15px;\n}\n\n.mealCol h6 a:hover {\n  text-decoration: none;\n  color: var(--primary-color);\n}\n\n.mealCol p {\n  margin: 0;\n  color: #999;\n  font-size: 13px;\n}\n\n.mealCol ul {\n  list-style: none;\n  display: flex;\n  padding: 10px 0 20px;\n  margin: 0;\n}\n\n.mealCol ul li {\n  margin-right: 7px;\n  display: flex;\n  align-items: center;\n}\n\n.mealCol ul li p {\n  color: #666;\n  font-size: 13px;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n\n.mealCol ul li p i {\n  margin-right: 5px;\n}\n\n.mealCol ul li label {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  height: 24px;\n  color: #fff;\n  padding: 0 12px;\n  border-radius: 8px;\n  text-transform: uppercase;\n  font-size: 13px;\n  background: var(--primary-color);\n}\n\n.mealCol ul li label.dia {\n  background: #8ad5d1;\n}\n\n.absomeal {\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9;\n}\n\n.absomeal.lbl_Low label {\n  background: #FD8A5E;\n}\n\n.absomeal.lbl_High label {\n  background: #59C36A;\n}\n\n.absomeal.lbl_Medium label {\n  background: #1FA779;\n}\n\n.absomeal label {\n  height: 31px;\n  padding: 0 12px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--ion-color-primary);\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: 600;\n  font-size: 12px;\n  border-radius: 50px;\n}\n\n.absomeal a {\n  margin-left: auto;\n  width: 30px;\n  height: 30px;\n  border-radius: 50px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n  font-size: 16px;\n  margin-right: 7px;\n  color: var(--primary-color);\n  position: relative;\n  top: -6px;\n}\n\n.absomeal a:hover {\n  text-decoration: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21lYWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFlO0FBQWpCOztBQUVBO0VBRUksZUFBZTtFQUNmLFVBQVU7RUFDVixVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0FBQWY7O0FBRUE7RUFHSSxhQUFhO0FBRGpCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0csZ0JBQWdCO0FBQ25COztBQUVBO0VBSUksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFGckI7O0FBT0E7RUFFRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQixnQkFBZ0I7QUFMbEI7O0FBQUE7RUFPRyxtQkFBa0I7RUFDbEIsdUJBQXNCO0VBQ3RCLHlCQUF3QjtFQUN4QixnQkFBZ0I7QUFIbkI7O0FBUEE7RUFZSSxvQkFBZ0I7RUFDaEIsV0FBVztBQURmOztBQVpBO0VBZUssMkJBQXVCO0VBQ3ZCLDRDQUFrQjtFQUNsQixXQUFXO0FBQ2hCOztBQWxCQTtFQW9CSywyQkFBdUI7RUFDdkIsNENBQWtCO0VBQ2xCLDRDQUE0QztFQUM1Qyx3Q0FBYTtFQUNiLFdBQVc7QUFFaEI7O0FBMUJBO0VBNEJLLGNBQWM7RUFDZCxlQUFlO0FBRXBCOztBQS9CQTtFQWtDRyxnQkFBZ0I7QUFDbkI7O0FBbkNBO0VBb0NJLFdBQVc7RUFDWCxnQkFBZTtFQUNmLGNBQWE7RUFDYixlQUFlO0FBR25COztBQTFDQTtFQTBDSSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFNBQVE7RUFDUixlQUFlO0FBSW5COztBQWpEQTtFQWdESSwyQkFBMkI7RUFDM0IsaUJBQWdCO0FBS3BCOztBQXREQTtFQW1ESyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQU92Qjs7QUE1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QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFNBQVM7QUF1RGI7O0FBbkRBO0VBRUUscUJBQXFCO0FBcUR2QiIsImZpbGUiOiJtZWFscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xuXHRoM3tcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRtYXJnaW46MjVweCAwIDA7XG5cdH1cbn1cbltidG5jb250aW51ZV17XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgd2lkdGg6IDg4JTtcbiAgICBib3R0b206IDBweDtcbiAgICBoZWlnaHQ6IDU3cHg7XG4gICAgei1pbmRleDogMTA7XG59XG5cbltzbGlkZUJveF17XG4gICAgXG4gICAgZGlzcGxheTogZmxleDtcblx0aW9uLXNsaWRle1xuXHRcdGhlaWdodDogNDAwcHg7XG5cdH1cblx0aW9uLXNsaWRle1xuXHRcdCYuZnVsbEhpZ2h0e1xuXHRcdFx0b3ZlcmZsb3cteTogYXV0bztcblx0XHRcblx0XHRcdFtidG5jb250aW51ZV17XG5cblxuXG5cblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0bWFyZ2luLXRvcDogMTVweDtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdG1heC13aWR0aDogMTYwcHg7XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiBhdXRvO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuaW9uLXNsaWRlc3tcblx0aW9uLXNsaWRle1xuXHRcdG1pbi1oZWlnaHQ6IDg0dmg7XG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0aW9uLXNlZ21lbnR7XG5cdFx0XHRib3JkZXItcmFkaXVzOjE0cHg7XG5cdFx0XHRiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuXHRcdFx0Ym9yZGVyOjFweCBzb2xpZCAjZjNmM2YzO1xuXHRcdFx0Ym94LXNoYWRvdzogbm9uZTsgXG5cdFx0XHRpb24tc2VnbWVudC1idXR0b257XG5cdFx0XHRcdC0tYm9yZGVyLXJhZGl1czoxNHB4O1xuXHRcdFx0XHRjb2xvcjogIzg4ODtcblx0XHRcdFx0Ji5zZWdtZW50LWJ1dHRvbi1jaGVja2Vke1xuXHRcdFx0XHRcdC0taW5kaWNhdG9yLWJveC1zaGFkb3c6bm9uZTtcblx0XHRcdFx0XHQtLWluZGljYXRvci1jb2xvcjp2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcblx0XHRcdFx0XHRjb2xvcjogI2ZmZjsgXG5cdFx0XHRcdH1cblx0XHRcdFx0Ji5hY3RpdmV7XG5cdFx0XHRcdFx0LS1pbmRpY2F0b3ItYm94LXNoYWRvdzpub25lO1xuXHRcdFx0XHRcdC0taW5kaWNhdG9yLWNvbG9yOnZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuXHRcdFx0XHRcdC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG5cdFx0XHRcdFx0Y29sb3I6ICNmZmY7IFxuXHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdGg2e1xuXHRcdFx0XHRcdG1hcmdpbjogMTBweCAwO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRbZm9ybS1ncm91cF17XG5cdFx0XHRtYXJnaW4tdG9wOiAyMHB4O1xuXHRcdFx0bGFiZWx7XG5cdFx0XHRcdGNvbG9yOiAjNzc3O1xuXHRcdFx0XHRtYXJnaW46MCAwIDEwcHg7XG5cdFx0XHRcdGRpc3BsYXk6YmxvY2s7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdH1cblx0XHRcdHB7XG5cdFx0XHRcdGNvbG9yOiAjMTExO1xuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRtYXJnaW46MDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0fVxuXHRcdFx0JltzdWJ0b3RhbF17XG5cdFx0XHRcdGJvcmRlci10b3A6IDFweCBkYXNoZWQgIzQ0NDtcblx0XHRcdFx0cGFkZGluZy10b3A6MTVweDtcblx0XHRcdFx0cHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogNXB4O1xuXHRcdFx0XHRcdHNwYW57XG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogYXV0bztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblt0aXRsZV17XG5cdGZvbnQtc2l6ZTogMjJweDtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Y29sb3I6ICM2NjY7XG5cdG1hcmdpbjo0MHB4IDAgMjVweDtcbn1cbltwYWRkaW5nXXtcblx0d2lkdGg6IDEwMCU7XG59XG5bZ3JvdXBSYWRpb117XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdHBhZGRpbmc6MDtcblx0bWFyZ2luOjA7XG5cdGxpe1xuXHRcdG1hcmdpbjowIDAgMTVweDtcblx0XHRpbnB1dHtcblx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHQmICsgbGFiZWx7XG5cdFx0XHRcdGhlaWdodDogNTVweDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogODBweDtcblx0XHRcdFx0cGFkZGluZzowIDQ1cHggMCAzMHB4O1xuXHRcdFx0XHR0cmFuc2l0aW9uOiAuM3M7XG5cdFx0XHRcdGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRib3JkZXI6MXB4IHNvbGlkICNlZWU7XG5cdFx0XHRcdGNvbG9yOiAjMzMzO1xuXHRcdFx0XHRzcGFue1xuXHRcdFx0XHRcdHdpZHRoOiAyNXB4O1xuXHRcdFx0XHRcdGhlaWdodDogMjVweDtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0Ym9yZGVyOjFweCBzb2xpZCAjZGRkO1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxNXB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQmOmNoZWNrZWR7XG5cdFx0XHRcdCYgKyBsYWJlbHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG5cdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0c3Bhbntcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XG5cdFx0XHRcdFx0XHRib3JkZXItY29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0XHQmOmJlZm9yZXtcblx0XHRcdFx0XHRcdFx0Y29udGVudDpcIlxcMjcxM1wiO1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQmW2ZsZXhSb3dde1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRsaXtcblx0XHRcdG1hcmdpbjowO1xuXHRcdFx0aW5wdXR7XG5cdFx0XHRcdCYgKyBsYWJlbHtcblx0XHRcdFx0XHRwYWRkaW5nOjAgMjBweDtcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMDtcblx0XHRcdFx0XHRoZWlnaHQ6IDQ1cHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbmZvcm17XG5cdGlvbi1sYWJlbHtcblx0XHRtYXJnaW4tdG9wOjMwcHg7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRjb2xvcjogIzMzMztcblx0fVxuXHRpb24taXRlbXtcblx0XHQtLWJhY2tncm91bmQ6IG5vbmU7XG5cdFx0LS1wYWRkaW5nLXN0YXJ0OjA7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdGlvbi1pbnB1dHtcblx0XHRcdGZvbnQtc2l6ZTogMTVweDtcblx0XHRcdC0tYmFja2dyb3VuZDogbm9uZTtcblx0XHR9XG5cdFx0aW9uLXNlbGVjdHtcblx0XHRcdGZvbnQtc2l6ZTogMTVweDtcblx0XHRcdC0tYmFja2dyb3VuZDogbm9uZTtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdH1cblx0fVxuXHRbc2hvd3Bhc117XG5cdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuXHRcdHJpZ2h0OiAxNXB4O1xuXHR9XG5cdFtidG4tbG9naW5de1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRoZWlnaHQ6IDUwcHg7XG5cdFx0bWFyZ2luOjQwcHggMCAwO1xuXHRcdGlvbi1pY29ue1xuXHRcdFx0bWFyZ2luLWxlZnQ6MTBweDtcblx0XHR9XG5cdH1cblx0W29ybG9naW5de1xuXHRcdG1hcmdpbjozMHB4IDAgMDtcblx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdGZvbnQtc2l6ZTogMTFweDtcblx0XHRsZXR0ZXItc3BhY2luZzogMXB4O1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0fVxuXHRbc29jaWFsXXtcblx0XHRsaXN0LXN0eWxlOiBub25lO1xuXHRcdHBhZGRpbmc6MDtcblx0XHRtYXJnaW46MTVweCAwIDMwcHg7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdGxpe1xuXHRcdFx0bWFyZ2luOjAgMTBweDtcblx0XHRcdGltZ3tcblx0XHRcdFx0d2lkdGg6IDMwcHg7XG5cdFx0XHRcdG9iamVjdC1maXQ6IGNvbnRhaW47XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5bd2lkdGhmdWxsXXtcblx0d2lkdGg6IDEwMCU7XG59XG5baGVhZGVyXXtcblx0cG9zaXRpb246IGZpeGVkO1xuXHRsZWZ0OjA7XG5cdHJpZ2h0OiAwO1xuXHRiYWNrZ3JvdW5kOiAjZmZmO1xufVxuW3RvcGhlYWRpbmdde1xuXHRwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAtNzVweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbltyZWFkeW1lYWxde1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRzcGFue1xuXHRcdGJvcmRlcjoxcHggc29saWQgI2VlZTtcblx0XHRib3JkZXItcmFkaXVzOiAyMHB4O1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHR3aWR0aDogODBweDtcblx0XHRtYXJnaW4tcmlnaHQ6IDE1cHg7XG5cdFx0aGVpZ2h0OiA4MHB4O1xuXHRcdGltZ3tcblx0XHRcdHdpZHRoOiA1MHB4O1xuXHRcdFx0b2JqZWN0LWZpdDogY29udGFpbjtcblx0XHR9XG5cdH1cblx0aDV7XG5cdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0bWFyZ2luOjAgMCAxNXB4O1xuXHR9XG5cdHB7XG5cdFx0Y29sb3I6ICM3Nzc7XG5cdFx0bWFyZ2luOjA7XG5cdFx0Zm9udC1zaXplOiAxM3B4O1xuXHR9XG59XG5bc3ViaGRuZ117XG5cdGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcblx0Ym9yZGVyLWxlZnQ6MnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuXHRwYWRkaW5nOjAgMCAwIDE1cHg7XG5cdG1hcmdpbjozNXB4IDAgMTVweDtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0Zm9udC1zaXplOiAxN3B4O1xufVxuW2JpbGxBZHJzXXtcblx0aW9uLWl0ZW17XG5cdFx0LS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0XHQtLXBhZGRpbmctc3RhcnQ6MDtcblx0XHRpb24tcmFkaW97XG5cdFx0XHRtYXJnaW4tcmlnaHQ6MTBweDtcblx0XHR9XG5cdH1cbn1cbltjb250YWN0bGVzc117XG5cdG1hcmdpbjozMHB4IDA7XG5cdHVse1xuXHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdFx0cGFkZGluZzowO1xuXHRcdG1hcmdpbjowO1xuXHRcdGxpe1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjZmNmY2ZjO1xuXHRcdFx0cGFkZGluZzoyMHB4OyBcblx0XHRcdGJvcmRlcjoxcHggc29saWQgI2VlZTtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cdFx0XHRtYXJnaW46MCAwIDE1cHg7XG5cdFx0XHRzcGFue1xuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6MjBweDtcblx0XHRcdFx0aW1ne1xuXHRcdFx0XHRcdHdpZHRoOiA2MHB4O1xuXHRcdFx0XHRcdG9iamVjdC1maXQ6IGNvbnRhaW47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGRpdntcblx0XHRcdFx0aDV7XG5cdFx0XHRcdFx0bWFyZ2luOjAgMCAxMHB4O1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0fVxuXHRcdFx0XHRwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcblx0XHRcdFx0XHRtYXJnaW46MCAwO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuW2RlbGl2ZXJ5RGV0YV17XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHNwYW57XG5cdFx0d2lkdGg6NDBweDtcblx0XHRoZWlnaHQ6IDQwcHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0bWFyZ2luLXJpZ2h0OiAxNXB4O1xuXHRcdGlvbi1pY29ue1xuXHRcdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0fVxuXHR9XG5cdHB7XG5cdFx0Zm9udC1zaXplOiAxNXB4O1xuXHR9XG59XG5bYmlsbGluZ0RlXVtpbnNpZGVde1xuXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xuXHRoNntcblx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0fVxuXHRwe1xuXHRcdG1hcmdpbjowO1xuXHRcdGZvbnQtc2l6ZTogMTRweDtcblx0fVxufVxuW2JpbGxpbmdEZV17XG5cdCZbZC1mbGV4XXtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdG1hcmdpbjozMHB4IDAgMDtcblx0XHRoNXsgXG5cdFx0XHRtYXJnaW46MCAwIDVweDtcblx0XHRcdCYgKyBwe1xuXHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRtYXJnaW46MDtcblx0XHRcdH1cblx0XHR9XG5cdFx0W3NvcnRJY29uc117XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdG1hcmdpbi1sZWZ0OiBhdXRvO1xuXHRcdFx0YXtcblx0XHRcdFx0d2lkdGg6IDQwcHg7XG5cdFx0XHRcdGhlaWdodDogNDBweDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0XHRcdFx0Ym9yZGVyOjFweCBzb2xpZCAjZWVlO1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0aW9uLWljb257XG5cdFx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdCZbY2FydF17XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXHRcdFx0XHRcdGJvcmRlci1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xuXHRcdFx0XHRcdGlvbi1pY29ue1xuXHRcdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5bc2VhcmNoYmFyXXtcblx0YmFja2dyb3VuZDogI2Y1ZjVmNTtcblx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0aGVpZ2h0OiA1MHB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0aW9uLXNlYXJjaGJhcntcblx0XHQtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgXHRwYWRkaW5nOiAwO1xuICAgIFx0LS1ib3gtc2hhZG93OiBub25lO1xuXHR9XG59XG4ubWVhbENvbHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6I2ZmZjtcbiAgYm9yZGVyOjFweCBzb2xpZCAjZWVlO1xuICAvKmJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMCwwLDAsIC4wNyk7ICovXG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5tZWFsQ29udHtcbiAgcGFkZGluZzowIDE1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5bc2VsZWN0TWVhbF17XG5cdG1hcmdpbjoyMHB4IDAgMDtcblx0aW9uLXJvd3tcblx0XHRtYXJnaW4tbGVmdDogLTVweDtcblx0XHRtYXJnaW4tcmlnaHQ6IC01cHg7XG5cdH1cbn1cblxuLmljb25zUm93e1xuXHQuYWxsZXJkZW5fRmlzaHtcblx0XHRhe1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzI0YTc3ODtcblx0XHR9XG5cdFxuXHR9XG5cdGxpe1xuXHRcdCY6bnRoLWNoaWxkKDIpe1xuXHRcdFx0YXtcblx0XHRcdFx0YmFja2dyb3VuZDogI2Y2OGI2MTtcblx0XHRcdH1cblx0XHR9XG5cdFx0JjpudGgtY2hpbGQoMyl7XG5cdFx0XHRhe1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjNjNiYmI3O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuLmljb25zUm93IGxpIGEge1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjMjRhNzc4O1xuXHRcbiAgICAmW29yYW5nZWNvbG9yXXtcbiAgICBcdGJhY2tncm91bmQ6ICNGRDhBNUU7XG4gICAgfVxuICAgICZbbGlnaHRibHVlXXtcblx0XHRiYWNrZ3JvdW5kOiAjNjNCQkI3O1xuICAgIH1cbn1cbi5pY29uc1JvdyBsaSBhIGltZyB7XG4gICAgd2lkdGg6IDE3cHg7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbi5tZWFsSW1ne1xuICBoZWlnaHQ6IDE1MHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4ubWVhbENvbCBoNntcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbWluLWhlaWdodDogMzZweDtcbiAgbWFyZ2luOjE1cHggMCA1cHg7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wb3BwaW5zKTtcbn1cbi5tZWFsQ29sIGg2IGF7XG4gIGNvbG9yOiAjMTExO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5tZWFsQ29sIGg2IGE6aG92ZXJ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuLm1lYWxDb2wgcHtcbiAgbWFyZ2luOjA7XG4gIGNvbG9yOiAjOTk5O1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ubWVhbENvbCB1bHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzoxMHB4IDAgMjBweDtcbiAgbWFyZ2luOjA7XG59XG4ubWVhbENvbCB1bCBsaXtcbiAgbWFyZ2luLXJpZ2h0OjdweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tZWFsQ29sIHVsIGxpIHB7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbjowO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1lYWxDb2wgdWwgbGkgcCBpe1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5tZWFsQ29sIHVsIGxpIGxhYmVse1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjowO1xuICBoZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOjAgMTJweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuXG4ubWVhbENvbCB1bCBsaSBsYWJlbC5kaWF7XG4gIGJhY2tncm91bmQ6IzhhZDVkMTsgXG59XG5cbi5hYnNvbWVhbHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTVweDtcbiAgdG9wOiAxNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDk7XG4gICYubGJsX0xvd3tcblx0bGFiZWx7XG5cdFx0YmFja2dyb3VuZDojRkQ4QTVFO1xuXHR9XG4gIH1cbiAgJi5sYmxfSGlnaHtcblx0bGFiZWx7XG5cdFx0YmFja2dyb3VuZDojNTlDMzZBO1xuXHR9XG4gIH1cbiAgJi5sYmxfTWVkaXVte1xuXHRsYWJlbHtcblx0XHRiYWNrZ3JvdW5kOiMxRkE3Nzk7XG5cdH1cbiAgfVxufVxuXG4uYWJzb21lYWwgbGFiZWx7XG4gICAgaGVpZ2h0OiAzMXB4O1xuICAgIHBhZGRpbmc6IDAgMTJweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbi5hYnNvbWVhbCBhe1xuXG4gICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtNnB4O1xuXG59XG5cbi5hYnNvbWVhbCBhOmhvdmVye1xuXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxufVxuIl19 */";
      /***/
    },

    /***/
    "yns/":
    /*!***************************************!*\
      !*** ./src/app/meals/meals.module.ts ***!
      \***************************************/

    /*! exports provided: MealsPageModule */

    /***/
    function yns(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MealsPageModule", function () {
        return MealsPageModule;
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


      var _meals_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./meals-routing.module */
      "NG3X");
      /* harmony import */


      var _meals_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./meals.page */
      "aytg");

      var MealsPageModule = function MealsPageModule() {
        _classCallCheck(this, MealsPageModule);
      };

      MealsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _meals_routing_module__WEBPACK_IMPORTED_MODULE_5__["MealsPageRoutingModule"]],
        declarations: [_meals_page__WEBPACK_IMPORTED_MODULE_6__["MealsPage"]]
      })], MealsPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=meals-meals-module-es5.js.map