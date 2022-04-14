(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/indi/Documents/projects/ineatapp/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    1:
    /*!************************!*\
      !*** crypto (ignored) ***!
      \************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "OlR4":
    /*!********************************************!*\
      !*** ./src/app/services/common.service.ts ***!
      \********************************************/

    /*! exports provided: CommonService */

    /***/
    function OlR4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonService", function () {
        return CommonService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var CommonService = /*#__PURE__*/function () {
        function CommonService(toastController, loadingController) {
          _classCallCheck(this, CommonService);

          this.toastController = toastController;
          this.loadingController = loadingController;
        }

        _createClass(CommonService, [{
          key: "presentToast",
          value: function presentToast(message, color) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 2000,
                        position: 'bottom',
                        color: color,
                        mode: "ios"
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingController.create({
                        mode: "ios"
                      });

                    case 2:
                      this.loading = _context2.sent;
                      _context2.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "stopLoading",
          value: function stopLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var self;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!(this.loading != undefined)) {
                        _context3.next = 5;
                        break;
                      }

                      _context3.next = 3;
                      return this.loading.dismiss();

                    case 3:
                      _context3.next = 7;
                      break;

                    case 5:
                      self = this;
                      setTimeout(function () {
                        self.stopLoading();
                      }, 1000);

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return CommonService;
      }();

      CommonService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }];
      };

      CommonService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CommonService);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_api_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services/api/api.service */
      "oZWX");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./services/common.service */
      "OlR4");
      /* harmony import */


      var _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @codetrix-studio/capacitor-google-auth */
      "OTqH");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(router, platform, common, api) {
          _classCallCheck(this, AppComponent);

          this.router = router;
          this.platform = platform;
          this.common = common;
          this.api = api;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              if (localStorage.getItem('is_logged_in') == 'true') {
                _this.router.navigate(['/tabs/home']);
              } else {
                _this.router.navigate(['/login']);
              }
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_8__["GoogleAuth"].signOut();

            localStorage.clear();
            this.router.navigate(['/login']);
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]
        }, {
          type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "Vx+w":
    /*!***************************!*\
      !*** ./src/app/config.ts ***!
      \***************************/

    /*! exports provided: config, social_config */

    /***/
    function VxW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "config", function () {
        return config;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "social_config", function () {
        return social_config;
      });

      var MAIN_URL = 'https://in-eat.com/api/';
      var config = {
        API_URL: MAIN_URL,
        ENC_SALT: 'gd58_N9!ysS',
        errors: ['', null, undefined],
        IMAGES_URL: MAIN_URL + 'public/uploads',
        IMAGE_EXTENSIONS: ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/bmp', 'image/webp']
      };
      var social_config = {
        FACEBOOK_ID: ''
      };
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app> -->\n\n\n<ion-app>\n  <ion-split-pane contentId=\"main-content\" >\n    <ion-menu contentId=\"main-content\" type=\"overlay\" >\n      <ion-content>\n        <ion-list id=\"inbox-list\">\n\n          <div Userpro>\n            <img src=\"assets/img/img1.jpg\" alt=\"\">\n            <p>John Roelfsema</p>\n          </div>\n            <ion-item lines=\"none\" detail=\"false\">\n              <ion-icon name=\"chatbubble-ellipses\"></ion-icon>\n              <ion-label>Messages</ion-label>\n            </ion-item>\n            <ion-item lines=\"none\" detail=\"false\">\n              <ion-icon name=\"bag-handle\"></ion-icon>\n              <ion-label>Deliveries</ion-label>\n            </ion-item>\n            <ion-item lines=\"none\" detail=\"false\">\n              <ion-icon name=\"information-circle\"></ion-icon>\n              <ion-label>Privacy & Policy</ion-label>\n            </ion-item>\n            <ion-item lines=\"none\" detail=\"false\">\n              <ion-icon name=\"person\"></ion-icon>\n              <ion-label>Profile</ion-label>\n            </ion-item>\n            <ion-item lines=\"none\" detail=\"false\">\n              <ion-icon name=\"log-out\"></ion-icon>\n              <ion-label (click)=\"logout()\">Logout</ion-label>\n            </ion-item>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]],
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "oZWX":
    /*!*********************************************!*\
      !*** ./src/app/services/api/api.service.ts ***!
      \*********************************************/

    /*! exports provided: ApiService */

    /***/
    function oZWX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../config */
      "Vx+w");
      /* harmony import */


      var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/add/operator/map */
      "4XzM");
      /* harmony import */


      var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/add/operator/catch */
      "S7rW");
      /* harmony import */


      var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var crypto_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! crypto-js */
      "NFKh");
      /* harmony import */


      var crypto_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_7__);

      var ApiService = /*#__PURE__*/function () {
        function ApiService(HttpClient, actionSheetController, navCtrl) {
          _classCallCheck(this, ApiService);

          this.HttpClient = HttpClient;
          this.actionSheetController = actionSheetController;
          this.navCtrl = navCtrl;
          this.url = _config__WEBPACK_IMPORTED_MODULE_3__["config"].API_URL;
        }

        _createClass(ApiService, [{
          key: "post",
          value: function post(endpoint, data, headers) {
            return this.HttpClient.post(this.url + endpoint, data).map(function (responseData) {
              return responseData;
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "encryptData",
          value: function encryptData(data, salt) {
            try {
              var enc = crypto_js__WEBPACK_IMPORTED_MODULE_7__["AES"].encrypt(JSON.stringify(data), salt).toString();
              enc = enc.split('+').join('xMl3Jk').split('/').join('Por21Ld').split('=').join('Ml32');
              return enc;
            } catch (e) {
              return 0;
            }
          }
        }]);

        return ApiService;
      }();

      ApiService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }];
      };

      ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ApiService);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tabs-tabs-module */
          "tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./tabs/tabs.module */
          "hO9l")).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | home-home-module */
          "home-home-module").then(__webpack_require__.bind(null,
          /*! ./home/home.module */
          "ct+p")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'notifications',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | notifications-notifications-module */
          "notifications-notifications-module").then(__webpack_require__.bind(null,
          /*! ./notifications/notifications.module */
          "wMrW")).then(function (m) {
            return m.NotificationsPageModule;
          });
        }
      }, {
        path: 'feed',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | feed-feed-module */
          "feed-feed-module").then(__webpack_require__.bind(null,
          /*! ./feed/feed.module */
          "xQww")).then(function (m) {
            return m.FeedPageModule;
          });
        }
      }, {
        path: 'bowl-details',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | bowl-details-bowl-details-module */
          "bowl-details-bowl-details-module").then(__webpack_require__.bind(null,
          /*! ./bowl-details/bowl-details.module */
          "76Cc")).then(function (m) {
            return m.BowlDetailsPageModule;
          });
        }
      }, {
        path: 'add-bowl',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | add-bowl-add-bowl-module */
          "add-bowl-add-bowl-module").then(__webpack_require__.bind(null,
          /*! ./add-bowl/add-bowl.module */
          "/4TZ")).then(function (m) {
            return m.AddBowlPageModule;
          });
        }
      }, {
        path: 'messages',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | messages-messages-module */
          "messages-messages-module").then(__webpack_require__.bind(null,
          /*! ./messages/messages.module */
          "TdLt")).then(function (m) {
            return m.MessagesPageModule;
          });
        }
      }, {
        path: 'chat',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | chat-chat-module */
          "chat-chat-module").then(__webpack_require__.bind(null,
          /*! ./chat/chat.module */
          "2yxt")).then(function (m) {
            return m.ChatPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | login-login-module */
          "login-login-module").then(__webpack_require__.bind(null,
          /*! ./login/login.module */
          "X3zk")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'signup',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | signup-signup-module */
          "signup-signup-module").then(__webpack_require__.bind(null,
          /*! ./signup/signup.module */
          "T9iC")).then(function (m) {
            return m.SignupPageModule;
          });
        }
      }, {
        path: 'order-summary',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | order-summary-order-summary-module */
          [__webpack_require__.e("common"), __webpack_require__.e("order-summary-order-summary-module")]).then(__webpack_require__.bind(null,
          /*! ./order-summary/order-summary.module */
          "gaIQ")).then(function (m) {
            return m.OrderSummaryPageModule;
          });
        }
      }, {
        path: 'confirm-modal',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | confirm-modal-confirm-modal-module */
          [__webpack_require__.e("common"), __webpack_require__.e("confirm-modal-confirm-modal-module")]).then(__webpack_require__.bind(null,
          /*! ./confirm-modal/confirm-modal.module */
          "HfQG")).then(function (m) {
            return m.ConfirmModalPageModule;
          });
        }
      }, {
        path: 'meal-details',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | meal-details-meal-details-module */
          "meal-details-meal-details-module").then(__webpack_require__.bind(null,
          /*! ./meal-details/meal-details.module */
          "lWfY")).then(function (m) {
            return m.MealDetailsPageModule;
          });
        }
      }, {
        path: 'order-placed',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | order-placed-order-placed-module */
          "order-placed-order-placed-module").then(__webpack_require__.bind(null,
          /*! ./order-placed/order-placed.module */
          "ij11")).then(function (m) {
            return m.OrderPlacedPageModule;
          });
        }
      }, {
        path: 'deliveries',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | deliveries-deliveries-module */
          "deliveries-deliveries-module").then(__webpack_require__.bind(null,
          /*! ./deliveries/deliveries.module */
          "DhhR")).then(function (m) {
            return m.DeliveriesPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-menu ion-content {\n  --background:var(--ion-color-primary) ;\n}\n\nion-menu ion-content ion-list {\n  --background: none;\n  background: none;\n}\n\nion-menu ion-content ion-list ion-item {\n  background: none;\n  --background: none;\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  /*border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);*/\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: #fff;\n}\n\nion-menu.md ion-item ion-icon {\n  color: #fff;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: #fff;\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #fff;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n[Userpro] {\n  display: flex;\n  padding: 0 5px;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n[Userpro] img {\n  min-width: 60px;\n  width: 60px;\n  min-height: 60px;\n  height: 60px;\n  border-radius: 16px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n[Userpro] p {\n  margin: 0 0 0 15px;\n  color: #fff;\n  font-size: 20px;\n  font-weight: 600;\n}\n\nion-list {\n  padding: 15px !important;\n}\n\nion-list ion-label {\n  color: #fff !important;\n  margin: 0 0 0 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNDQUFhO0FBQ2Y7O0FBRkE7RUFHSSxrQkFBYTtFQUNiLGdCQUFnQjtBQUdwQjs7QUFQQTtFQU1NLGdCQUFnQjtFQUNoQixrQkFBYTtBQUtuQjs7QUFBQTtFQUNFLG9CQUFnQjtFQUNoQixrQkFBYztFQUNkLG1CQUFjO0VBQ2Qsc0JBQWlCO0FBR25COztBQUFBO0VBQ0UsZUFBZTtBQUdqQjs7QUFBQTtFQUNFLG1CQUFtQjtBQUdyQjs7QUFBQTs7RUFFRSxrQkFBa0I7QUFHcEI7O0FBQUE7RUFDRSwrREFBQTtBQUdGOztBQUFBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUVoQixnQkFBZ0I7QUFFbEI7O0FBQ0E7RUFDRSxlQUFlO0VBRWYsbUJBQW1CO0VBRW5CLGNBQWM7RUFFZCxnQkFBZ0I7QUFEbEI7O0FBSUE7RUFDRSxxQkFBZ0I7RUFDaEIsbUJBQWM7RUFDZCxrQkFBa0I7QUFEcEI7O0FBSUE7RUFDRSxzREFBYTtBQURmOztBQUlBO0VBQ0UsV0FBVztBQURiOztBQUlBO0VBQ0UsV0FBVztBQURiOztBQUlBO0VBQ0UsZ0JBQWdCO0FBRGxCOztBQUlBO0VBQ0Usc0JBQWlCO0FBRG5COztBQUlBO0VBQ0UsbUJBQW1CO0FBRHJCOztBQUlBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQURyQjs7QUFJQTtFQUNFLHFCQUFnQjtFQUNoQixtQkFBYztFQUNkLGtCQUFhO0FBRGY7O0FBSUE7RUFDRSxXQUFXO0FBRGI7O0FBSUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQURiOztBQUlBO0VBQ0Usa0JBQWtCO0FBRHBCOztBQUlBOztFQUVFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFEckI7O0FBSUE7RUFDRSxrQkFBa0I7QUFEcEI7O0FBSUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUVmLG9DQUFvQztBQUZ0Qzs7QUFLQTtFQUNFLGlDQUFRO0FBRlY7O0FBRUE7RUFLRSxhQUFhO0VBQ2IsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFIckI7O0FBRUE7RUFHSSxlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG9CQUFpQjtLQUFqQixpQkFBaUI7QUFEckI7O0FBRUE7RUFFSSxrQkFBaUI7RUFDakIsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7QUFBcEI7O0FBR0E7RUFDRSx3QkFBdUI7QUFBekI7O0FBREE7RUFHSSxzQkFBc0I7RUFDdEIsa0JBQWlCO0FBRXJCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IGlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIDtcclxuICBpb24tbGlzdHtcclxuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBpb24taXRlbXtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xyXG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcclxuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXHJcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xyXG4gIC8qYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7Ki9cclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICBtaW4taGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuXHJcbiAgY29sb3I6ICM3NTc1NzU7XHJcblxyXG4gIG1pbi1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcclxuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcclxuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxyXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xyXG4gIHBhZGRpbmctbGVmdDogMTZweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuaW9uLW5vdGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcblxyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxufVxyXG5cclxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xyXG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuXHJcbltVc2VycHJvXXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDAgNXB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBpbWd7XHJcbiAgICBtaW4td2lkdGg6IDYwcHg7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG4gIHB7XHJcbiAgICBtYXJnaW46MCAwIDAgMTVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbn1cclxuaW9uLWxpc3R7XHJcbiAgcGFkZGluZzoxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgaW9uLWxhYmVse1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjowIDAgMCAxMHB4O1xyXG4gIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map