(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["meal-details-meal-details-module"],{

/***/ "7aZt":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/meal-details/meal-details.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>meal-details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "FUcG":
/*!*************************************************************!*\
  !*** ./src/app/meal-details/meal-details-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: MealDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealDetailsPageRoutingModule", function() { return MealDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _meal_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meal-details.page */ "MtTU");




const routes = [
    {
        path: '',
        component: _meal_details_page__WEBPACK_IMPORTED_MODULE_3__["MealDetailsPage"]
    }
];
let MealDetailsPageRoutingModule = class MealDetailsPageRoutingModule {
};
MealDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MealDetailsPageRoutingModule);



/***/ }),

/***/ "MtTU":
/*!***************************************************!*\
  !*** ./src/app/meal-details/meal-details.page.ts ***!
  \***************************************************/
/*! exports provided: MealDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealDetailsPage", function() { return MealDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_meal_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./meal-details.page.html */ "7aZt");
/* harmony import */ var _meal_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meal-details.page.scss */ "TRtg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let MealDetailsPage = class MealDetailsPage {
    constructor() { }
    ngOnInit() {
    }
};
MealDetailsPage.ctorParameters = () => [];
MealDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-meal-details',
        template: _raw_loader_meal_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_meal_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MealDetailsPage);



/***/ }),

/***/ "TRtg":
/*!*****************************************************!*\
  !*** ./src/app/meal-details/meal-details.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZWFsLWRldGFpbHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "lWfY":
/*!*****************************************************!*\
  !*** ./src/app/meal-details/meal-details.module.ts ***!
  \*****************************************************/
/*! exports provided: MealDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealDetailsPageModule", function() { return MealDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _meal_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./meal-details-routing.module */ "FUcG");
/* harmony import */ var _meal_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./meal-details.page */ "MtTU");







let MealDetailsPageModule = class MealDetailsPageModule {
};
MealDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _meal_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["MealDetailsPageRoutingModule"]
        ],
        declarations: [_meal_details_page__WEBPACK_IMPORTED_MODULE_6__["MealDetailsPage"]]
    })
], MealDetailsPageModule);



/***/ })

}]);
//# sourceMappingURL=meal-details-meal-details-module-es2015.js.map