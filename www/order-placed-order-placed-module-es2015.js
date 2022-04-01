(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-placed-order-placed-module"],{

/***/ "8az2":
/*!*************************************************************!*\
  !*** ./src/app/order-placed/order-placed-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: OrderPlacedPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPlacedPageRoutingModule", function() { return OrderPlacedPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _order_placed_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-placed.page */ "BTHV");




const routes = [
    {
        path: '',
        component: _order_placed_page__WEBPACK_IMPORTED_MODULE_3__["OrderPlacedPage"]
    }
];
let OrderPlacedPageRoutingModule = class OrderPlacedPageRoutingModule {
};
OrderPlacedPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderPlacedPageRoutingModule);



/***/ }),

/***/ "BTHV":
/*!***************************************************!*\
  !*** ./src/app/order-placed/order-placed.page.ts ***!
  \***************************************************/
/*! exports provided: OrderPlacedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPlacedPage", function() { return OrderPlacedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_order_placed_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./order-placed.page.html */ "k6Pg");
/* harmony import */ var _order_placed_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-placed.page.scss */ "qvcs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let OrderPlacedPage = class OrderPlacedPage {
    constructor() { }
    ngOnInit() {
    }
};
OrderPlacedPage.ctorParameters = () => [];
OrderPlacedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-order-placed',
        template: _raw_loader_order_placed_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_order_placed_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrderPlacedPage);



/***/ }),

/***/ "ij11":
/*!*****************************************************!*\
  !*** ./src/app/order-placed/order-placed.module.ts ***!
  \*****************************************************/
/*! exports provided: OrderPlacedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPlacedPageModule", function() { return OrderPlacedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _order_placed_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-placed-routing.module */ "8az2");
/* harmony import */ var _order_placed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-placed.page */ "BTHV");







let OrderPlacedPageModule = class OrderPlacedPageModule {
};
OrderPlacedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _order_placed_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderPlacedPageRoutingModule"]
        ],
        declarations: [_order_placed_page__WEBPACK_IMPORTED_MODULE_6__["OrderPlacedPage"]]
    })
], OrderPlacedPageModule);



/***/ }),

/***/ "k6Pg":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-placed/order-placed.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>order-placed</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "qvcs":
/*!*****************************************************!*\
  !*** ./src/app/order-placed/order-placed.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci1wbGFjZWQucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=order-placed-order-placed-module-es2015.js.map