(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-bowl-add-bowl-module"],{

/***/ "+j39":
/*!*****************************************************!*\
  !*** ./src/app/add-bowl/add-bowl-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AddBowlPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBowlPageRoutingModule", function() { return AddBowlPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_bowl_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-bowl.page */ "PeYA");




const routes = [
    {
        path: '',
        component: _add_bowl_page__WEBPACK_IMPORTED_MODULE_3__["AddBowlPage"]
    }
];
let AddBowlPageRoutingModule = class AddBowlPageRoutingModule {
};
AddBowlPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddBowlPageRoutingModule);



/***/ }),

/***/ "/4TZ":
/*!*********************************************!*\
  !*** ./src/app/add-bowl/add-bowl.module.ts ***!
  \*********************************************/
/*! exports provided: AddBowlPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBowlPageModule", function() { return AddBowlPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_bowl_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-bowl-routing.module */ "+j39");
/* harmony import */ var _add_bowl_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-bowl.page */ "PeYA");







let AddBowlPageModule = class AddBowlPageModule {
};
AddBowlPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_bowl_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddBowlPageRoutingModule"]
        ],
        declarations: [_add_bowl_page__WEBPACK_IMPORTED_MODULE_6__["AddBowlPage"]]
    })
], AddBowlPageModule);



/***/ }),

/***/ "6ykE":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-bowl/add-bowl.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div flexHeader>\n\t\t<div backHead>\n\t\t\t<ion-back-button></ion-back-button>\n\t\t</div>\n\t\t<ion-title>Add Bowl</ion-title>\n\t</div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div padding>\n\t\t<div form>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<label>Bowl Name</label>\n\t\t\t\t<ion-input placeholder=\"Bowl Name\"></ion-input>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<label>Choose Bowl</label>\n\t\t\t\t<ion-select placeholder=\"Choose\">\n\t\t\t      <ion-select-option value=\"f\">Bowl Name One</ion-select-option>\n\t\t\t      <ion-select-option value=\"m\">Bowl Name Two</ion-select-option>\n\t\t\t    </ion-select>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<label>Description</label>\n\t\t\t\t<ion-textarea placeholder=\"Desciption\"></ion-textarea>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<ion-button btnsave>Add Bowl</ion-button>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</div>\n\n\t</div>\n</ion-content>\n");

/***/ }),

/***/ "9voO":
/*!*********************************************!*\
  !*** ./src/app/add-bowl/add-bowl.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("[btngetsocial] {\n  height: 30px;\n  --padding: 0;\n  --min-height: 1px;\n  font-size: 12px;\n}\n\n[center] {\n  text-align: center;\n  font-weight: 500;\n}\n\n[userImg] {\n  width: 150px;\n  height: 150px;\n  position: relative;\n  margin: 0 auto;\n}\n\n[userImg] img {\n  border-radius: 250px;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n[userImg] ion-button {\n  min-width: 1px;\n  min-height: 1px;\n  width: 40px;\n  height: 40px;\n  border-radius: 50px;\n  background: var(--primary-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  --border-radius: 50px;\n  --padding: 0 !important;\n  padding: 0 !important;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  border: 2px solid #fff;\n}\n\n[userImg] ion-button ion-icon {\n  min-width: 50px;\n}\n\n[form] {\n  margin: 0px 0 0;\n}\n\n[form] ion-row {\n  margin: 10px 0 0;\n}\n\n[form] ion-row ion-col label {\n  font-size: 13px;\n  color: #777;\n  display: block;\n  margin: 0 0 8px;\n}\n\n[form] ion-row ion-col ion-input, [form] ion-row ion-col ion-textarea, [form] ion-row ion-col ion-select {\n  border: 1px solid #eee;\n  border-radius: 5px;\n  font-size: 14px;\n  color: #222;\n  padding: 10px;\n}\n\n[btnsave] {\n  height: 50px;\n  border-radius: 10px;\n  width: 100%;\n  margin-top: 80px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FkZC1ib3dsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFlBQVk7RUFDVCxZQUFVO0VBQ1YsaUJBQWE7RUFDYixlQUFlO0FBQ25COztBQUVBO0VBQUMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUVqQjs7QUFFQTtFQURDLFlBQVc7RUFDWCxhQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWE7QUFHZDs7QUFFQTtFQUhFLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUI7QUFLbkI7O0FBRUE7RUFKRSxjQUFjO0VBQ1gsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixxQkFBZ0I7RUFDaEIsdUJBQVU7RUFDVixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFRO0VBQ1Isc0JBQXFCO0FBTTFCOztBQUVBO0VBTk0sZUFBZTtBQVFyQjs7QUFFQTtFQUxDLGVBQWM7QUFPZjs7QUFFQTtFQVBFLGdCQUFlO0FBU2pCOztBQUVBO0VBUkksZUFBZTtFQUNmLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBYztBQVVsQjs7QUFFQTtFQVRJLHNCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxhQUFZO0FBV2hCOztBQUVBO0VBUEMsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCO0FBU2pCIiwiZmlsZSI6ImFkZC1ib3dsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIltidG5nZXRzb2NpYWxde1xyXG5cdGhlaWdodDogMzBweDtcclxuICAgIC0tcGFkZGluZzogMDtcclxuICAgIC0tbWluLWhlaWdodDogMXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbltjZW50ZXJde1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG59XHJcblt1c2VySW1nXXtcclxuXHR3aWR0aDoxNTBweDtcclxuXHRoZWlnaHQ6MTUwcHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1hcmdpbjowIGF1dG87XHJcblx0aW1ne1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjUwcHg7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdG9iamVjdC1maXQ6IGNvdmVyO1xyXG5cdH1cclxuXHRpb24tYnV0dG9ue1xyXG5cdFx0bWluLXdpZHRoOiAxcHg7XHJcblx0ICAgIG1pbi1oZWlnaHQ6IDFweDtcclxuXHQgICAgd2lkdGg6IDQwcHg7XHJcblx0ICAgIGhlaWdodDogNDBweDtcclxuXHQgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuXHQgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcblx0ICAgIGRpc3BsYXk6IGZsZXg7XHJcblx0ICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0ICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdCAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcblx0ICAgIC0tcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG5cdCAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7IFxyXG5cdCAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ICAgIHJpZ2h0OiAwO1xyXG5cdCAgICBib3R0b206MDtcclxuXHQgICAgYm9yZGVyOjJweCBzb2xpZCAjZmZmO1xyXG5cdCAgICBpb24taWNvbntcclxuXHQgICAgXHRtaW4td2lkdGg6IDUwcHg7XHJcblx0ICAgIH1cclxuXHR9XHJcbn1cclxuW2Zvcm1de1xyXG5cdG1hcmdpbjowcHggMCAwO1xyXG5cdGlvbi1yb3d7XHJcblx0XHRtYXJnaW46MTBweCAwIDA7XHJcblx0XHRpb24tY29se1xyXG5cdFx0XHRsYWJlbHtcclxuXHRcdFx0XHRmb250LXNpemU6IDEzcHg7XHJcblx0XHRcdFx0Y29sb3I6ICM3Nzc7XHJcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0bWFyZ2luOjAgMCA4cHg7XHJcblx0XHRcdH1cclxuXHRcdFx0aW9uLWlucHV0LCBpb24tdGV4dGFyZWEsIGlvbi1zZWxlY3R7XHJcblx0XHRcdFx0Ym9yZGVyOjFweCBzb2xpZCAjZWVlO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0Y29sb3I6ICMyMjI7XHJcblx0XHRcdFx0cGFkZGluZzoxMHB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbltidG5zYXZlXXtcclxuXHRoZWlnaHQ6IDUwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXJnaW4tdG9wOiA4MHB4O1xyXG59Il19 */");

/***/ }),

/***/ "PeYA":
/*!*******************************************!*\
  !*** ./src/app/add-bowl/add-bowl.page.ts ***!
  \*******************************************/
/*! exports provided: AddBowlPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBowlPage", function() { return AddBowlPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_bowl_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-bowl.page.html */ "6ykE");
/* harmony import */ var _add_bowl_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-bowl.page.scss */ "9voO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AddBowlPage = class AddBowlPage {
    constructor() { }
    ngOnInit() {
    }
};
AddBowlPage.ctorParameters = () => [];
AddBowlPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-bowl',
        template: _raw_loader_add_bowl_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_bowl_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddBowlPage);



/***/ })

}]);
//# sourceMappingURL=add-bowl-add-bowl-module-es2015.js.map