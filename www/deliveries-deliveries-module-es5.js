(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deliveries-deliveries-module"], {
    /***/
    "6dFL":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/deliveries/deliveries.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function dFL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>deliveries</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "DPvS":
    /*!*********************************************************!*\
      !*** ./src/app/deliveries/deliveries-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: DeliveriesPageRoutingModule */

    /***/
    function DPvS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeliveriesPageRoutingModule", function () {
        return DeliveriesPageRoutingModule;
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


      var _deliveries_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./deliveries.page */
      "dGAv");

      var routes = [{
        path: '',
        component: _deliveries_page__WEBPACK_IMPORTED_MODULE_3__["DeliveriesPage"]
      }];

      var DeliveriesPageRoutingModule = function DeliveriesPageRoutingModule() {
        _classCallCheck(this, DeliveriesPageRoutingModule);
      };

      DeliveriesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DeliveriesPageRoutingModule);
      /***/
    },

    /***/
    "DhhR":
    /*!*************************************************!*\
      !*** ./src/app/deliveries/deliveries.module.ts ***!
      \*************************************************/

    /*! exports provided: DeliveriesPageModule */

    /***/
    function DhhR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeliveriesPageModule", function () {
        return DeliveriesPageModule;
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


      var _deliveries_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./deliveries-routing.module */
      "DPvS");
      /* harmony import */


      var _deliveries_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./deliveries.page */
      "dGAv");

      var DeliveriesPageModule = function DeliveriesPageModule() {
        _classCallCheck(this, DeliveriesPageModule);
      };

      DeliveriesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _deliveries_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeliveriesPageRoutingModule"]],
        declarations: [_deliveries_page__WEBPACK_IMPORTED_MODULE_6__["DeliveriesPage"]]
      })], DeliveriesPageModule);
      /***/
    },

    /***/
    "JltG":
    /*!*************************************************!*\
      !*** ./src/app/deliveries/deliveries.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function JltG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxpdmVyaWVzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "dGAv":
    /*!***********************************************!*\
      !*** ./src/app/deliveries/deliveries.page.ts ***!
      \***********************************************/

    /*! exports provided: DeliveriesPage */

    /***/
    function dGAv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeliveriesPage", function () {
        return DeliveriesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_deliveries_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./deliveries.page.html */
      "6dFL");
      /* harmony import */


      var _deliveries_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./deliveries.page.scss */
      "JltG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DeliveriesPage = /*#__PURE__*/function () {
        function DeliveriesPage() {
          _classCallCheck(this, DeliveriesPage);
        }

        _createClass(DeliveriesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DeliveriesPage;
      }();

      DeliveriesPage.ctorParameters = function () {
        return [];
      };

      DeliveriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-deliveries',
        template: _raw_loader_deliveries_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_deliveries_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DeliveriesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=deliveries-deliveries-module-es5.js.map