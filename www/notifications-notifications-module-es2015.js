(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"],{

/***/ "6X2B":
/*!*****************************************************!*\
  !*** ./src/app/notifications/notifications.page.ts ***!
  \*****************************************************/
/*! exports provided: NotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPage", function() { return NotificationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_notifications_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./notifications.page.html */ "hzlZ");
/* harmony import */ var _notifications_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifications.page.scss */ "xpQ7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let NotificationsPage = class NotificationsPage {
    constructor() { }
    ngOnInit() {
    }
};
NotificationsPage.ctorParameters = () => [];
NotificationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-notifications',
        template: _raw_loader_notifications_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_notifications_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NotificationsPage);



/***/ }),

/***/ "cxoL":
/*!***************************************************************!*\
  !*** ./src/app/notifications/notifications-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: NotificationsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageRoutingModule", function() { return NotificationsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications.page */ "6X2B");




const routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_3__["NotificationsPage"]
    }
];
let NotificationsPageRoutingModule = class NotificationsPageRoutingModule {
};
NotificationsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NotificationsPageRoutingModule);



/***/ }),

/***/ "hzlZ":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div flexHeader>\n\t\t<div backHead>\n\t\t\t<ion-back-button></ion-back-button>\n\t\t</div>\n\t\t<ion-title>Notifications</ion-title>\n\t</div>\n  </ion-toolbar>\n</ion-header>\n\t\n<ion-content>\n\t<div class=\"main-padding\">\n\t\t<div class=\"servic-near\">\n\t\t\t<ion-list class=\"liat-st\" lines=\"none\">\n\t\t\t\t<ion-card class=\"detals\" lines=\"none\">\n\t\t\t\t\t<div class=\"img-boxda\">\n\t\t\t\t\t\t<img src=\"assets/img/img1.jpg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"cont-alls\">\n\t\t\t\t\t\t<h5 class=\"name-trs\"><b>Somona Lisa</b> liked your post  </h5>\n\t\t\t\t\t\t<p class=\"emainb\"><ion-icon name=\"time-outline\"></ion-icon> 27 min</p>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-card>\n\t\t\t\t<ion-card class=\"detals\" lines=\"none\">\n\t\t\t\t\t<div class=\"img-boxda\">\n\t\t\t\t\t\t<img src=\"assets/img/img2.jpg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"cont-alls\">\n\t\t\t\t\t\t<h5 class=\"name-trs\"><b>Somona Lisa</b> liked your post  </h5>\n\t\t\t\t\t\t<p class=\"emainb\"><ion-icon name=\"time-outline\"></ion-icon>  27 min</p>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-card>\n\t\t\t\t<ion-card class=\"detals\" lines=\"none\">\n\t\t\t\t\t<div class=\"img-boxda\">\n\t\t\t\t\t\t<img src=\"assets/img/img3.jpg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"cont-alls\">\n\t\t\t\t\t\t<h5 class=\"name-trs\"><b>Somona Lisa</b> liked your post  </h5>\n\t\t\t\t\t\t<p class=\"emainb\"><ion-icon name=\"time-outline\"></ion-icon>  27 min</p>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-card>\n\t\t\t\t<ion-card class=\"detals\" lines=\"none\">\n\t\t\t\t\t<div class=\"img-boxda\">\n\t\t\t\t\t\t<img src=\"assets/img/img4.jpg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"cont-alls\">\n\t\t\t\t\t\t<h5 class=\"name-trs\"><b>Somona Lisa</b> liked your post</h5>\n\t\t\t\t\t\t<p class=\"emainb\"><ion-icon name=\"time-outline\"></ion-icon>  27 min </p>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-card>\n\t\t\t\t<ion-card class=\"detals\" lines=\"none\">\n\t\t\t\t\t<div class=\"img-boxda\">\n\t\t\t\t\t\t<img src=\"assets/img/img5.jpg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"cont-alls\">\n\t\t\t\t\t\t<h5 class=\"name-trs\"><b>Somona Lisa</b> liked your post  </h5>\n\t\t\t\t\t\t<p class=\"emainb\"><ion-icon name=\"time-outline\"></ion-icon>  27 min </p>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-card>\n\t\t\t\t<ion-card class=\"detals\" lines=\"none\">\n\t\t\t\t\t<div class=\"img-boxda\">\n\t\t\t\t\t\t<img src=\"assets/img/img6.jpg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"cont-alls\">\n\t\t\t\t\t\t<h5 class=\"name-trs\"><b>Somona Lisa</b> liked your post  </h5>\n\t\t\t\t\t\t<p class=\"emainb\"><ion-icon name=\"time-outline\"></ion-icon>  27 min </p>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-card>\n\t\t\t\t<ion-card class=\"detals\" lines=\"none\">\n\t\t\t\t\t<div class=\"img-boxda\">\n\t\t\t\t\t\t<img src=\"assets/img/img7.jpg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"cont-alls\">\n\t\t\t\t\t\t<h5 class=\"name-trs\"><b>Somona Lisa</b> liked your post  </h5>\n\t\t\t\t\t\t<p class=\"emainb\"><ion-icon name=\"time-outline\"></ion-icon>  27 min </p>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-card>\n\t\t\t</ion-list>\n\t\t</div>\n\t</div>\n</ion-content>\n");

/***/ }),

/***/ "wMrW":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.module.ts ***!
  \*******************************************************/
/*! exports provided: NotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notifications-routing.module */ "cxoL");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications.page */ "6X2B");







let NotificationsPageModule = class NotificationsPageModule {
};
NotificationsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationsPageRoutingModule"]
        ],
        declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]]
    })
], NotificationsPageModule);



/***/ }),

/***/ "xpQ7":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  --background:#fcfcfc;\n  background: #fcfcfc;\n}\n\nion-header ion-toolbar {\n  --background:#fcfcfc;\n  border: 0 !important;\n  --height: 50px;\n  height: 50px;\n  padding-top: 3px;\n}\n\nion-header ion-title {\n  font-weight: 500;\n}\n\n.header-md:after {\n  display: none;\n}\n\nion-content .main-padding {\n  padding: 12px 15px;\n  float: left;\n  width: 100%;\n  background: #fcfcfc;\n  min-height: 100%;\n}\n\nion-content .catr-box {\n  text-align: center;\n}\n\nion-content .catr-box .img-bag {\n  background: #7d8d98;\n  text-align: center;\n  width: 100%;\n  height: 60px;\n  border-radius: 7px;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\nion-content .catr-box .img-bag img {\n  height: 40px;\n}\n\nion-content .catr-box h4 {\n  margin: 0px;\n  font-size: 11px;\n  color: #5f666b;\n  margin-top: 5px;\n}\n\nion-content .servic-near {\n  float: left;\n  width: 100%;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\nion-content .liat-st {\n  overflow: visible;\n  background: transparent;\n}\n\nion-content .liat-st ion-card.detals {\n  margin: 0px;\n  padding: 15px 10px 16px;\n  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.06);\n  margin-bottom: 12px;\n  background: #fff;\n  position: relative;\n  border: none;\n  border-radius: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 75px;\n}\n\nion-content .liat-st ion-card.detals .cont-alls {\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n\nion-content .liat-st ion-card.detals .cont-alls ion-card-subtitle {\n  font-size: 12px;\n  color: #12aaf2;\n  font-weight: 300;\n  letter-spacing: 0.5px;\n  text-transform: capitalize;\n}\n\nion-content .liat-st ion-card.detals .cont-alls ul.rirht-sr {\n  display: inline-block;\n  float: right;\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n}\n\nion-content .liat-st ion-card.detals .cont-alls ul.rirht-sr li {\n  display: inline-block;\n  color: #f69834;\n  margin-right: 1px;\n}\n\nion-content .liat-st ion-card.detals .cont-alls ion-checkbox.check-desins {\n  float: right;\n  width: 15px;\n  height: 15px;\n  margin-left: 6px;\n}\n\nion-content .liat-st ion-card.detals .cont-alls .pric-loc {\n  color: #7d8d98;\n  font-size: 10px;\n  font-weight: 100;\n  letter-spacing: 0.5px;\n  margin-top: 5px;\n}\n\nion-content .liat-st ion-card.detals .cont-alls .pric-loc span {\n  display: block;\n  font-size: 10px;\n  color: #173143;\n  letter-spacing: 0px;\n  font-weight: 600;\n  margin-top: 3px;\n}\n\nion-content .liat-st ion-card.detals .cont-alls .mrg-n5 {\n  margin: 0 -5px;\n}\n\nion-content .liat-st ion-card.detals h5.name-trs {\n  margin: 0px;\n  color: #565656;\n  font-size: 13px;\n  font-weight: 500;\n  display: block;\n  line-height: 18px;\n}\n\nion-content .liat-st ion-card.detals p.emainb {\n  margin: 0px;\n  color: #a7a7a7;\n  font-size: 10px;\n  margin-top: 7px;\n  font-weight: 500;\n  min-width: 70px;\n  text-align: right;\n}\n\nion-content .liat-st ion-card.detals .img-boxda {\n  position: absolute;\n  left: 10px;\n  top: 11px;\n  text-align: center;\n}\n\nion-content .liat-st ion-card.detals .img-boxda img {\n  width: 45px;\n  height: 45px;\n  -o-object-fit: cover;\n  object-fit: cover;\n  border-radius: 50%;\n  /*background: rgba(1, 164, 241, 0.2);*/\n  /*padding: 3px;*/\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msb0JBQWE7RUFDYixtQkFBa0I7QUFDbkI7O0FBSEE7RUFJRSxvQkFBYTtFQUNiLG9CQUFtQjtFQUNuQixjQUFTO0VBQ1QsWUFBWTtFQUNaLGdCQUFlO0FBR2pCOztBQVhBO0VBV0UsZ0JBQWdCO0FBSWxCOztBQUFBO0VBQ0MsYUFBYTtBQUdkOztBQURBO0VBR0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUVsQjs7QUFUQTtFQVVFLGtCQUFrQjtBQUdwQjs7QUFiQTtFQVlHLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBS2hDOztBQXpCQTtFQXNCSSxZQUFZO0FBT2hCOztBQTdCQTtFQTBCRyxXQUFXO0VBQ1gsZUFBZTtFQUNmLGNBQWM7RUFFZCxlQUFlO0FBTWxCOztBQXBDQTtFQWtDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBTXJCOztBQTVDQTtFQXlDSyxpQkFBaUI7RUFDcEIsdUJBQXVCO0FBT3pCOztBQWpEQTtFQTRDRyxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHlDQUF5QztFQUN6QyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osbUJBQW1CO0VBRW5CLGFBQWE7RUFFYiw4QkFBOEI7RUFFOUIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQVNyQjs7QUFuRUE7RUE0REksYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0FBV2hCOztBQXpFQTtFQWdFSyxlQUFlO0VBQ2YsY0FBYztFQUVkLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsMEJBQTBCO0FBWS9COztBQWpGQTtFQXdFSyxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0FBYXJCOztBQXpGQTtFQThFTSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGlCQUFpQjtBQWV2Qjs7QUEvRkE7RUFvRkssWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0FBZXJCOztBQXRHQTtFQTBGSyxjQUFjO0VBRWQsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDcEIsZUFBZTtBQWVyQjs7QUE5R0E7RUFpR00sY0FBYztFQUNkLGVBQWU7RUFDZixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0FBaUJyQjs7QUF2SEE7RUF5R2MsY0FBYTtBQWtCM0I7O0FBM0hBO0VBNEdJLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0FBbUJyQjs7QUFwSUE7RUFvSEksV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0FBb0JyQjs7QUE5SUE7RUE2SEksa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1Qsa0JBQWtCO0FBcUJ0Qjs7QUFySkE7RUFrSUssV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixzQ0FBQTtFQUNBLGdCQUFBO0FBdUJMIiwiZmlsZSI6Im5vdGlmaWNhdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuXHQtLWJhY2tncm91bmQ6I2ZjZmNmYztcclxuXHRiYWNrZ3JvdW5kOiNmY2ZjZmM7XHJcblx0aW9uLXRvb2xiYXJ7XHJcblx0XHQtLWJhY2tncm91bmQ6I2ZjZmNmYztcclxuXHRcdGJvcmRlcjowICFpbXBvcnRhbnQ7XHJcblx0XHQtLWhlaWdodDogNTBweDtcclxuXHRcdGhlaWdodDogNTBweDtcclxuXHRcdHBhZGRpbmctdG9wOjNweDsgXHJcblx0fVxyXG5cdGlvbi10aXRsZXtcclxuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0fVxyXG59XHJcblxyXG4uaGVhZGVyLW1kOmFmdGVye1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG5cdFxyXG5cdC5tYWluLXBhZGRpbmcge1xyXG5cdFx0cGFkZGluZzogMTJweCAxNXB4O1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGJhY2tncm91bmQ6ICNmY2ZjZmM7XHJcblx0XHRtaW4taGVpZ2h0OiAxMDAlO1xyXG5cdH1cclxuXHQuY2F0ci1ib3gge1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0LmltZy1iYWcge1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjN2Q4ZDk4O1xyXG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRoZWlnaHQ6IDYwcHg7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDdweDtcclxuXHRcdFx0cGFkZGluZzogMTBweDtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcblx0XHRcdGltZyB7XHJcblx0XHRcdFx0aGVpZ2h0OiA0MHB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRoNCB7XHJcblx0XHRcdG1hcmdpbjogMHB4O1xyXG5cdFx0XHRmb250LXNpemU6IDExcHg7XHJcblx0XHRcdGNvbG9yOiAjNWY2NjZiO1xyXG5cdFx0XHQgXHJcblx0XHRcdG1hcmdpbi10b3A6IDVweDtcclxuXHRcdH1cclxuXHR9XHJcblx0LnNlcnZpYy1uZWFyIHtcclxuXHRcdGZsb2F0OiBsZWZ0O1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdG1hcmdpbi10b3A6IDEwcHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdH1cclxuXHQubGlhdC1zdCB7XHJcblx0ICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG5cdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0XHRpb24tY2FyZC5kZXRhbHMgICB7XHJcblx0XHRcdG1hcmdpbjogMHB4O1xyXG5cdFx0XHRwYWRkaW5nOiAxNXB4IDEwcHggMTZweDtcclxuXHRcdFx0Ym94LXNoYWRvdzogMCAzcHggN3B4IHJnYmEoMCwgMCwgMCwgMC4wNik7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDEycHg7XHJcblx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0Ym9yZGVyOiBub25lO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdFx0XHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0LXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0XHQtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRwYWRkaW5nLWxlZnQ6IDc1cHg7XHJcblx0XHRcdC5jb250LWFsbHMge1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdGlvbi1jYXJkLXN1YnRpdGxlIHtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdFx0XHRcdGNvbG9yOiAjMTJhYWYyO1xyXG5cdFx0XHRcdFx0IFxyXG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDMwMDtcclxuXHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuXHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR1bC5yaXJodC1zciB7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdFx0XHRmbG9hdDogcmlnaHQ7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwcHg7XHJcblx0XHRcdFx0XHRtYXJnaW46IDBweDtcclxuXHRcdFx0XHRcdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0XHRcdFx0XHRsaSB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICNmNjk4MzQ7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMXB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpb24tY2hlY2tib3guY2hlY2stZGVzaW5zIHtcclxuXHRcdFx0XHRcdGZsb2F0OiByaWdodDtcclxuXHRcdFx0XHRcdHdpZHRoOiAxNXB4O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAxNXB4O1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDZweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LnByaWMtbG9jIHtcclxuXHRcdFx0XHRcdGNvbG9yOiAjN2Q4ZDk4O1xyXG5cdFx0XHRcdFx0IFxyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxMHB4O1xyXG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDEwMDtcclxuXHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuXHRcdFx0XHRcdCBtYXJnaW4tdG9wOiA1cHg7XHJcblx0XHRcdFx0XHRzcGFuIHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTBweDtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICMxNzMxNDM7XHJcblx0XHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwcHg7XHJcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDNweDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Lm1yZy1uNSB7IG1hcmdpbjowIC01cHg7fVxyXG5cdFx0XHR9XHJcblx0XHRcdGg1Lm5hbWUtdHJzIHtcclxuXHRcdFx0XHRtYXJnaW46IDBweDtcclxuXHRcdFx0XHRjb2xvcjogIzU2NTY1NjtcclxuXHRcdFx0XHRmb250LXNpemU6IDEzcHg7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRsaW5lLWhlaWdodDogMThweDtcclxuXHRcdFx0fVxyXG5cdFx0XHRwLmVtYWluYiB7XHJcblx0XHRcdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRcdFx0Y29sb3I6ICNhN2E3YTc7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxMHB4O1xyXG5cdFx0XHRcdG1hcmdpbi10b3A6IDdweDtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdG1pbi13aWR0aDogNzBweDtcclxuXHRcdFx0XHR0ZXh0LWFsaWduOiByaWdodDtcclxuXHRcdFx0fVxyXG5cdFx0XHQuaW1nLWJveGRhIHtcclxuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0bGVmdDogMTBweDtcclxuXHRcdFx0XHR0b3A6IDExcHg7XHJcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdGltZyB7XHJcblx0XHRcdFx0XHR3aWR0aDogNDVweDtcclxuXHRcdFx0XHRcdGhlaWdodDogNDVweDtcclxuXHRcdFx0XHRcdC1vLW9iamVjdC1maXQ6IGNvdmVyO1xyXG5cdFx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHQvKmJhY2tncm91bmQ6IHJnYmEoMSwgMTY0LCAyNDEsIDAuMik7Ki9cclxuXHRcdFx0XHRcdC8qcGFkZGluZzogM3B4OyovXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=notifications-notifications-module-es2015.js.map