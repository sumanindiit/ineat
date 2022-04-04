(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manage-subscription-manage-subscription-module"], {
    /***/
    "5ima":
    /*!*******************************************************************!*\
      !*** ./src/app/manage-subscription/manage-subscription.module.ts ***!
      \*******************************************************************/

    /*! exports provided: ManageSubscriptionPageModule */

    /***/
    function ima(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageSubscriptionPageModule", function () {
        return ManageSubscriptionPageModule;
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


      var _manage_subscription_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./manage-subscription-routing.module */
      "8db+");
      /* harmony import */


      var _manage_subscription_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./manage-subscription.page */
      "emny");

      var ManageSubscriptionPageModule = function ManageSubscriptionPageModule() {
        _classCallCheck(this, ManageSubscriptionPageModule);
      };

      ManageSubscriptionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _manage_subscription_routing_module__WEBPACK_IMPORTED_MODULE_5__["ManageSubscriptionPageRoutingModule"]],
        declarations: [_manage_subscription_page__WEBPACK_IMPORTED_MODULE_6__["ManageSubscriptionPage"]]
      })], ManageSubscriptionPageModule);
      /***/
    },

    /***/
    "8db+":
    /*!***************************************************************************!*\
      !*** ./src/app/manage-subscription/manage-subscription-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: ManageSubscriptionPageRoutingModule */

    /***/
    function db(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageSubscriptionPageRoutingModule", function () {
        return ManageSubscriptionPageRoutingModule;
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


      var _manage_subscription_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./manage-subscription.page */
      "emny");

      var routes = [{
        path: '',
        component: _manage_subscription_page__WEBPACK_IMPORTED_MODULE_3__["ManageSubscriptionPage"]
      }];

      var ManageSubscriptionPageRoutingModule = function ManageSubscriptionPageRoutingModule() {
        _classCallCheck(this, ManageSubscriptionPageRoutingModule);
      };

      ManageSubscriptionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ManageSubscriptionPageRoutingModule);
      /***/
    },

    /***/
    "Wpp1":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage-subscription/manage-subscription.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Wpp1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n     <div flexHeader>\n        <div backHead>\n          <ion-back-button [text]=\"\" defaultHref=\"/tabs/settings\"  icon=\"chevron-back-outline\"></ion-back-button>\n        </div>\n        <ion-title>Manage Subscription</ion-title>\n     </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content >\n  <div padding>\n  <div manage-subs>\n     <h4>Current Plan</h4>\n     <div imgMain>\n        <img src=\"assets/img/tomatto.png\"/>\n        <div activtx>\n          <ion-icon name=\"checkmark-circle-outline\"></ion-icon> Active\n        </div>\n     </div>\n     <h5>{{ subscriptionData?.plan_box_type }}</h5>\n     <div tx-cn>\n        <div inline-bl>\n           <p>Meal Count</p>\n           <h6>{{ subscriptionData?.meal_count }}</h6>\n        </div>\n        <div inline-bl>\n           <p>Price</p>\n           <h6>${{ subscriptionData?.price }}</h6>\n        </div>\n     </div>\n     <div packagedetails>\n        <div packageitem><ion-icon name=\"checkmark-outline\"></ion-icon> {{ subscriptionData?.meal_count }} meals for {{ subscriptionData?.people_count }} people per week.</div>\n        <div packageitem><ion-icon name=\"checkmark-outline\"></ion-icon> {{ totalMeals }} servings at ${{ singlePrice  }} per serving.</div>\n     </div>\n     <ng-container *ngIf=\"isCancelled == 0\">\n         <ion-button class=\"cancl-sb\" (click)=\"cancelSubscription(subscriptionData?.recipes_ids);\">Cancel Subscription</ion-button>\n     </ng-container>\n    <ng-container *ngIf=\"isCancelled == 1\">\n         <ion-button class=\"cancl-sb\">Cancelled</ion-button>\n     </ng-container>\n  </div>\n   <ion-button btnsave routerLink=\"/signup\" >Get New Plan</ion-button>\n</div>\n</ion-content>";
      /***/
    },

    /***/
    "emny":
    /*!*****************************************************************!*\
      !*** ./src/app/manage-subscription/manage-subscription.page.ts ***!
      \*****************************************************************/

    /*! exports provided: ManageSubscriptionPage */

    /***/
    function emny(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageSubscriptionPage", function () {
        return ManageSubscriptionPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_manage_subscription_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./manage-subscription.page.html */
      "Wpp1");
      /* harmony import */


      var _manage_subscription_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./manage-subscription.page.scss */
      "xgXG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/api/api.service */
      "oZWX");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/common.service */
      "OlR4");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var ManageSubscriptionPage = /*#__PURE__*/function () {
        function ManageSubscriptionPage(common, api, router, alertController) {
          _classCallCheck(this, ManageSubscriptionPage);

          this.common = common;
          this.api = api;
          this.router = router;
          this.alertController = alertController;
          this.userId = localStorage.getItem('ineat_userid');
          this.userData = JSON.parse(localStorage.getItem('ineat_userData'));
        }

        _createClass(ManageSubscriptionPage, [{
          key: "presentAlertConfirm",
          value: function presentAlertConfirm(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Confirm!',
                        message: message,
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Confirm',
                          handler: function handler() {
                            _this.common.presentLoading();

                            _this.api.post('cancelUserSubscription', {
                              userId: _this.userId,
                              subscriptionId: _this.subscriptionId
                            }, '').subscribe(function (result) {
                              _this.common.stopLoading();

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

                                _this.common.presentToast(errMsgs, 'danger');
                              } else if (res.status === 200 || res.status === '200') {
                                _this.fetchUserSubscriptions();

                                _this.common.presentToast('Cancelled Successfuly.', 'success');
                              }
                            }, function (error) {
                              _this.common.stopLoading();
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.fetchUserSubscriptions();
          }
        }, {
          key: "fetchUserSubscriptions",
          value: function fetchUserSubscriptions() {
            var _this2 = this;

            this.common.presentLoading();
            this.api.post('getUserSubscriptions', {
              userId: this.userId
            }, '').subscribe(function (result) {
              _this2.common.stopLoading();

              var res = result;

              if (res.status === 422 || res.status === '422') {
                var errMsgs = '';

                var _iterator2 = _createForOfIteratorHelper(res.errors),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var x = _step2.value;
                    errMsgs += x + '</br>';
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }

                _this2.common.presentToast(errMsgs, 'danger');
              } else if (res.status === 200 || res.status === '200') {
                _this2.subscriptionData = res.data;
                _this2.mealCount = _this2.subscriptionData.meal_count;
                _this2.price = _this2.subscriptionData.price;
                _this2.totalMeals = _this2.subscriptionData.meal_count * _this2.subscriptionData.people_count;
                _this2.singlePrice = _this2.price / _this2.mealCount;
                _this2.subscriptionId = _this2.subscriptionData.id;
                _this2.isCancelled = _this2.subscriptionData.is_cancelled;
              }
            }, function (error) {
              _this2.common.stopLoading();
            });
          }
        }, {
          key: "cancelSubscription",
          value: function cancelSubscription(receipeIds) {
            console.log(this.isCancelled);

            if (this.isCancelled == 1) {
              var message = 'Cancellation will take two weeks from the date of initiation.';
              this.presentAlertConfirm(message);
            } else if (receipeIds == '') {
              var _message = 'Cancellation will take two weeks from the date of initiation, so please select a meal for your order first and then proceed with the cancellation process again';
              this.presentAlertConfirm(_message);
            } else {
              var _message2 = 'Do you want to cancel the subscription?';
              this.presentAlertConfirm(_message2);
            }
          }
        }]);

        return ManageSubscriptionPage;
      }();

      ManageSubscriptionPage.ctorParameters = function () {
        return [{
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
        }, {
          type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }];
      };

      ManageSubscriptionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-manage-subscription',
        template: _raw_loader_manage_subscription_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_manage_subscription_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ManageSubscriptionPage);
      /***/
    },

    /***/
    "xgXG":
    /*!*******************************************************************!*\
      !*** ./src/app/manage-subscription/manage-subscription.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function xgXG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content [manage-subs] {\n  border: 1px solid #ddd;\n  border-radius: 16px;\n  margin: 0;\n  padding: 10px 20px;\n}\n\nion-content [manage-subs] h4 {\n  text-align: center;\n  font-weight: 600;\n  font-size: 18px;\n  text-transform: uppercase;\n}\n\nion-content [manage-subs] [imgmain] {\n  background: #fff3ef;\n  margin: 0 auto;\n  display: block;\n  text-align: center;\n  border-radius: 15px;\n  margin-top: 24px;\n  padding: 14px 0;\n  position: relative;\n}\n\nion-content [manage-subs] [imgmain] [activtx] {\n  background: #3BBD6F;\n  width: 92px;\n  height: 27px;\n  line-height: 27px;\n  border-radius: 25px;\n  padding: 0 10px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  font-size: 13px;\n  font-weight: 700;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  bottom: -13px;\n}\n\nion-content [manage-subs] [imgmain] [activtx] ion-icon {\n  font-size: 18px;\n  margin-right: 5px;\n}\n\nion-content [manage-subs] h5 {\n  text-align: center;\n  font-size: 24px;\n  font-weight: 600;\n  margin: 40px 0px 30px 0px;\n}\n\nion-content [manage-subs] [tx-cn] {\n  display: flex;\n  justify-content: space-between;\n}\n\nion-content [manage-subs] [tx-cn] [inline-bl] {\n  background: #1fa7792e;\n  padding: 7px;\n  display: inline-block;\n  margin: 0;\n  border-radius: 15px;\n  width: 48%;\n  text-align: center;\n}\n\nion-content [manage-subs] [tx-cn] [inline-bl] p {\n  font-size: 14px;\n  font-weight: 500;\n  color: #00000094;\n  margin-bottom: 3px;\n}\n\nion-content [manage-subs] [tx-cn] [inline-bl] h6 {\n  font-size: 18px;\n  font-weight: 700;\n  margin-top: 12px;\n  display: block;\n}\n\nion-content [manage-subs] [packagedetails] {\n  margin: 30px 0 0;\n}\n\nion-content [manage-subs] [packagedetails] [packageitem] {\n  font-size: 14px;\n  margin-bottom: 10px;\n  font-weight: 500;\n  text-align: center;\n}\n\nion-content [manage-subs] [packagedetails] [packageitem] ion-icon {\n  color: #5EBD21;\n  font-size: 20px;\n  position: relative;\n  top: 5px;\n}\n\nion-content [manage-subs] .cancl-sb {\n  margin: 30px 0 10px;\n  display: inline-block;\n  text-align: center;\n  width: 100%;\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n  color: #FD8A5E;\n  font-weight: 500;\n  --background: transparent;\n  font-size: 16px;\n  letter-spacing: 0;\n}\n\nion-content [btnsave] {\n  height: 50px;\n  text-align: center;\n  width: 100%;\n  margin-top: 50px;\n  margin-bottom: 0;\n  letter-spacing: 0;\n  font-size: 16px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21hbmFnZS1zdWJzY3JpcHRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBS1Esc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1Qsa0JBQWtCO0FBSDFCOztBQUxBO0VBVVksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJBQXlCO0FBRHJDOztBQVpBO0VBZ0JZLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7QUFBOUI7O0FBdkJBO0VBeUJnQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtBQUU3Qjs7QUEzQ0E7RUEyQ29CLGVBQWU7RUFDZixpQkFBaUI7QUFJckM7O0FBaERBO0VBaURZLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUdyQzs7QUF2REE7RUF1RFksYUFBYTtFQUNiLDhCQUE4QjtBQUkxQzs7QUE1REE7RUEwRGdCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGtCQUFrQjtBQU1sQzs7QUF0RUE7RUFrRW9CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQVF0Qzs7QUE3RUE7RUF3RW9CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFTbEM7O0FBcEZBO0VBZ0ZZLGdCQUFnQjtBQVE1Qjs7QUF4RkE7RUFrRmdCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQVVsQzs7QUEvRkE7RUF1Rm9CLGNBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFFBQVE7QUFZNUI7O0FBdEdBO0VBK0ZZLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIseUJBQWE7RUFDYixlQUFlO0VBQ2YsaUJBQWlCO0FBVzdCOztBQW5IQTtFQTRHUSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0FBV3ZCIiwiZmlsZSI6Im1hbmFnZS1zdWJzY3JpcHRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgW3BhZGRpbmddIHtcclxuXHJcbiAgICB9XHJcbiAgICBbbWFuYWdlLXN1YnNdIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICBoNHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFtpbWdtYWluXSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmYzZWY7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNHB4IDA7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgW2FjdGl2dHhdIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzQkJENkY7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTJweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjdweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogLTEzcHg7XHJcbiAgICAgICAgICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaDUge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgbWFyZ2luOiA0MHB4IDBweCAzMHB4IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgW3R4LWNuXSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgW2lubGluZS1ibF0ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzFmYTc3OTJlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0OCU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDk0O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGg2IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFtwYWNrYWdlZGV0YWlsc10ge1xyXG4gICAgICAgICAgICBtYXJnaW46IDMwcHggMCAwO1xyXG4gICAgICAgICAgICBbcGFja2FnZWl0ZW1dIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IzVFQkQyMTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYW5jbC1zYiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMzBweCAwIDEwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkQ4QTVFO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFtidG5zYXZlXSB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=manage-subscription-manage-subscription-module-es5.js.map