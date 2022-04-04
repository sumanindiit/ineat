(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-placed-order-placed-module"], {
    /***/
    "8az2":
    /*!*************************************************************!*\
      !*** ./src/app/order-placed/order-placed-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: OrderPlacedPageRoutingModule */

    /***/
    function az2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderPlacedPageRoutingModule", function () {
        return OrderPlacedPageRoutingModule;
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


      var _order_placed_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./order-placed.page */
      "BTHV");

      var routes = [{
        path: '',
        component: _order_placed_page__WEBPACK_IMPORTED_MODULE_3__["OrderPlacedPage"]
      }];

      var OrderPlacedPageRoutingModule = function OrderPlacedPageRoutingModule() {
        _classCallCheck(this, OrderPlacedPageRoutingModule);
      };

      OrderPlacedPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OrderPlacedPageRoutingModule);
      /***/
    },

    /***/
    "BTHV":
    /*!***************************************************!*\
      !*** ./src/app/order-placed/order-placed.page.ts ***!
      \***************************************************/

    /*! exports provided: OrderPlacedPage */

    /***/
    function BTHV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderPlacedPage", function () {
        return OrderPlacedPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_order_placed_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./order-placed.page.html */
      "k6Pg");
      /* harmony import */


      var _order_placed_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./order-placed.page.scss */
      "qvcs");
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

      var OrderPlacedPage = /*#__PURE__*/function () {
        function OrderPlacedPage(common, api, router) {
          _classCallCheck(this, OrderPlacedPage);

          this.common = common;
          this.api = api;
          this.router = router;
          this.userId = localStorage.getItem('ineat_userid');
          this.userData = JSON.parse(localStorage.getItem('ineat_userData'));
        }

        _createClass(OrderPlacedPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.fetchUserSubscriptions();
          }
        }, {
          key: "fetchUserSubscriptions",
          value: function fetchUserSubscriptions() {
            var _this = this;

            this.common.presentLoading();
            this.api.post('getUserSubscriptions', {
              userId: this.userId
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
                _this.subscriptionData = res.data;
              }
            }, function (error) {
              _this.common.stopLoading();
            });
          }
        }]);

        return OrderPlacedPage;
      }();

      OrderPlacedPage.ctorParameters = function () {
        return [{
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
        }, {
          type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      OrderPlacedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-order-placed',
        template: _raw_loader_order_placed_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_order_placed_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OrderPlacedPage);
      /***/
    },

    /***/
    "ij11":
    /*!*****************************************************!*\
      !*** ./src/app/order-placed/order-placed.module.ts ***!
      \*****************************************************/

    /*! exports provided: OrderPlacedPageModule */

    /***/
    function ij11(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderPlacedPageModule", function () {
        return OrderPlacedPageModule;
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


      var _order_placed_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./order-placed-routing.module */
      "8az2");
      /* harmony import */


      var _order_placed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./order-placed.page */
      "BTHV");

      var OrderPlacedPageModule = function OrderPlacedPageModule() {
        _classCallCheck(this, OrderPlacedPageModule);
      };

      OrderPlacedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _order_placed_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderPlacedPageRoutingModule"]],
        declarations: [_order_placed_page__WEBPACK_IMPORTED_MODULE_6__["OrderPlacedPage"]]
      })], OrderPlacedPageModule);
      /***/
    },

    /***/
    "k6Pg":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-placed/order-placed.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function k6Pg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <div orderPlaced>\n    <img src=\"assets/img/orderplaced.png\" />\n\n    <h1>Order Placed Successfully</h1>\n    <p>Thank you for placing order with us. Once your order will be accepted will notify you very soon.</p>\n\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row>\n        <ion-col size=\"6\" class=\"ion-text-left\">\n          Box Name\n        </ion-col>\n        <ion-col size=\"6\" class=\"ion-text-right\">\n          {{ subscriptionData?.plan_box_type }}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\" class=\"ion-text-left\">\n          Meal Count\n        </ion-col>\n        <ion-col size=\"6\" class=\"ion-text-right\">\n          {{ subscriptionData?.meal_count }}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\" class=\"ion-text-left\">\n          Purchase Amount\n        </ion-col>\n        <ion-col size=\"6\" class=\"ion-text-right\">\n          ${{ subscriptionData?.price }}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\" class=\"ion-text-left\">\n          Discount Applied\n        </ion-col>\n        <ion-col size=\"6\" class=\"ion-text-right\">\n          No\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\" class=\"ion-text-left\">\n          Delivery Date\n        </ion-col>\n        <ion-col size=\"6\" class=\"ion-text-right\">\n          {{ userData?.delivery_dates }}\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <ion-button btncontinue routerLink=\"/tabs/home\">Go To Home</ion-button>\n</ion-content>";
      /***/
    },

    /***/
    "qvcs":
    /*!*****************************************************!*\
      !*** ./src/app/order-placed/order-placed.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function qvcs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "[orderPlaced] {\n  text-align: center;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 50px;\n}\n\n[orderPlaced] img {\n  width: 200px;\n  height: 200px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n[orderPlaced] h1 {\n  font-size: 22px;\n}\n\n[orderPlaced] p {\n  width: 85%;\n  text-align: center;\n  margin: 15px auto 30px;\n  color: #000000;\n  line-height: 26px;\n  opacity: 0.7;\n}\n\n[orderPlaced] ion-grid ion-row {\n  margin-bottom: 15px;\n}\n\n[orderPlaced] ion-grid ion-row ion-col {\n  font-size: 15px;\n}\n\n[orderPlaced] ion-grid ion-row ion-col.ion-text-right {\n  font-weight: 600;\n}\n\n[btncontinue] {\n  position: fixed;\n  right: 20px;\n  left: 20px;\n  bottom: 20px;\n  width: 89%;\n  font-size: 14px;\n  height: 50px;\n  display: flex;\n  --padding-start:20px;\n  --padding-end:20px;\n  align-items: center;\n  justify-content: center;\n}\n\n[btncontinue] ion-icon {\n  margin-left: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL29yZGVyLXBsYWNlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBZ0I7QUFDcEI7O0FBRUE7RUFEUSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFtQjtLQUFuQixtQkFBbUI7QUFHM0I7O0FBRUE7RUFGUSxlQUFlO0FBSXZCOztBQUVBO0VBSFEsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixZQUFZO0FBS3BCOztBQUVBO0VBSFksbUJBQW1CO0FBSy9COztBQUVBO0VBTGdCLGVBQWU7QUFPL0I7O0FBRUE7RUFQb0IsZ0JBQWdCO0FBU3BDOztBQUVBO0VBSEksZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWTtFQUNaLFVBQVU7RUFDVixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixvQkFBZ0I7RUFDaEIsa0JBQWM7RUFDZCxtQkFBbUI7RUFDbkIsdUJBQXVCO0FBSzNCOztBQUVBO0VBTFEsaUJBQWlCO0FBT3pCIiwiZmlsZSI6Im9yZGVyLXBsYWNlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJbb3JkZXJQbGFjZWRde1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBwYWRkaW5nLXRvcDo1MHB4O1xuICAgIGltZ3tcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIH1cbiAgICBoMXtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgIH1cbiAgICBwe1xuICAgICAgICB3aWR0aDogODUlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMTVweCBhdXRvIDMwcHg7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgICAgb3BhY2l0eTogMC43O1xuICAgIH1cbiAgICBpb24tZ3JpZHtcbiAgICAgICAgaW9uLXJvd3tcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICBpb24tY29se1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAmLmlvbi10ZXh0LXJpZ2h0e1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuW2J0bmNvbnRpbnVlXXtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgbGVmdDogMjBweDtcbiAgICBib3R0b206IDIwcHg7IFxuICAgIHdpZHRoOiA4OSU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC0tcGFkZGluZy1zdGFydDoyMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6MjBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGlvbi1pY29ue1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=order-placed-order-placed-module-es5.js.map