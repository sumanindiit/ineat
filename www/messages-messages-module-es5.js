(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messages-messages-module"], {
    /***/
    "6AQs":
    /*!*******************************************!*\
      !*** ./src/app/messages/messages.page.ts ***!
      \*******************************************/

    /*! exports provided: MessagesPage */

    /***/
    function AQs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesPage", function () {
        return MessagesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_messages_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./messages.page.html */
      "J2ao");
      /* harmony import */


      var _messages_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./messages.page.scss */
      "fOj/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MessagesPage = /*#__PURE__*/function () {
        function MessagesPage() {
          _classCallCheck(this, MessagesPage);
        }

        _createClass(MessagesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MessagesPage;
      }();

      MessagesPage.ctorParameters = function () {
        return [];
      };

      MessagesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-messages',
        template: _raw_loader_messages_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_messages_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MessagesPage);
      /***/
    },

    /***/
    "J2ao":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function J2ao(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <div flexHeader>\n\t\t<div backHead>\n\t\t\t<ion-back-button></ion-back-button>\n\t\t</div>\n\t\t<ion-title>Messages</ion-title>\n\t</div>\n  </ion-toolbar>\n</ion-header>\n\t\n<ion-content>\n\t<div class=\"main-padding\">\n\t\t<div class=\"servic-near\">\n\t\t\t<ion-list class=\"liat-st\" lines=\"none\">\n\t\t\t\t<ion-card class=\"detals\" lines=\"none\" routerLink=\"/chat\">\n\t\t\t\t\t<div class=\"img-boxda\">\n\t\t\t\t\t\t<img src=\"assets/img/img1.jpg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"cont-alls\">\n\t\t\t\t\t\t<h5 class=\"name-trs\"><b>Jessica Parker</b> <span>How your life is going?</span>  </h5>\n\t\t\t\t\t\t<p class=\"emainb\"><ion-icon name=\"time-outline\"></ion-icon> 27 min</p>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-card>\n\t\t\t\t<ion-card class=\"detals\" lines=\"none\" routerLink=\"/chat\">\n\t\t\t\t\t<div class=\"img-boxda\">\n\t\t\t\t\t\t<img src=\"assets/img/img2.jpg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"cont-alls\">\n\t\t\t\t\t\t<h5 class=\"name-trs\"><b>Julia Green</b> <span>Wow, that’s awesome!</span>  </h5>\n\t\t\t\t\t\t<p class=\"emainb\"><ion-icon name=\"time-outline\"></ion-icon>  27 min</p>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-card>\n\t\t\t\t<ion-card class=\"detals\" lines=\"none\" routerLink=\"/chat\">\n\t\t\t\t\t<div class=\"img-boxda\">\n\t\t\t\t\t\t<img src=\"assets/img/img3.jpg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"cont-alls\">\n\t\t\t\t\t\t<h5 class=\"name-trs\"><b>Miranda Bell</b> <span>Bye-bye.</span>  </h5>\n\t\t\t\t\t\t<p class=\"emainb\"><ion-icon name=\"time-outline\"></ion-icon>  27 min</p>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-card>\n\t\t\t\t<ion-card class=\"detals\" lines=\"none\" routerLink=\"/chat\">\n\t\t\t\t\t<div class=\"img-boxda\">\n\t\t\t\t\t\t<img src=\"assets/img/img4.jpg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"cont-alls\">\n\t\t\t\t\t\t<h5 class=\"name-trs\"><b>Hanna Goldberg</b> <span>It’s a sunny day.</span></h5>\n\t\t\t\t\t\t<p class=\"emainb\"><ion-icon name=\"time-outline\"></ion-icon>  27 min </p>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-card>\n\t\t\t\t<ion-card class=\"detals\" lines=\"none\" routerLink=\"/chat\">\n\t\t\t\t\t<div class=\"img-boxda\">\n\t\t\t\t\t\t<img src=\"assets/img/img5.jpg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"cont-alls\">\n\t\t\t\t\t\t<h5 class=\"name-trs\"><b>Mike Goldberg</b> <span>It’s a sunny day.</span>  </h5>\n\t\t\t\t\t\t<p class=\"emainb\"><ion-icon name=\"time-outline\"></ion-icon>  27 min </p>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-card>\n\t\t\t\t<ion-card class=\"detals\" lines=\"none\" routerLink=\"/chat\">\n\t\t\t\t\t<div class=\"img-boxda\">\n\t\t\t\t\t\t<img src=\"assets/img/img6.jpg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"cont-alls\">\n\t\t\t\t\t\t<h5 class=\"name-trs\"><b>Somona Lisa</b> liked your post  </h5>\n\t\t\t\t\t\t<p class=\"emainb\"><ion-icon name=\"time-outline\"></ion-icon>  27 min </p>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-card>\n\t\t\t\t<ion-card class=\"detals\" lines=\"none\" routerLink=\"/chat\">\n\t\t\t\t\t<div class=\"img-boxda\">\n\t\t\t\t\t\t<img src=\"assets/img/img7.jpg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"cont-alls\">\n\t\t\t\t\t\t<h5 class=\"name-trs\"><b>Somona Lisa</b> liked your post  </h5>\n\t\t\t\t\t\t<p class=\"emainb\"><ion-icon name=\"time-outline\"></ion-icon>  27 min </p>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-card>\n\t\t\t</ion-list>\n\t\t</div>\n\t</div>\n</ion-content>\n";
      /***/
    },

    /***/
    "JGbt":
    /*!*****************************************************!*\
      !*** ./src/app/messages/messages-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: MessagesPageRoutingModule */

    /***/
    function JGbt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesPageRoutingModule", function () {
        return MessagesPageRoutingModule;
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


      var _messages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./messages.page */
      "6AQs");

      var routes = [{
        path: '',
        component: _messages_page__WEBPACK_IMPORTED_MODULE_3__["MessagesPage"]
      }];

      var MessagesPageRoutingModule = function MessagesPageRoutingModule() {
        _classCallCheck(this, MessagesPageRoutingModule);
      };

      MessagesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MessagesPageRoutingModule);
      /***/
    },

    /***/
    "TdLt":
    /*!*********************************************!*\
      !*** ./src/app/messages/messages.module.ts ***!
      \*********************************************/

    /*! exports provided: MessagesPageModule */

    /***/
    function TdLt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function () {
        return MessagesPageModule;
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


      var _messages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./messages-routing.module */
      "JGbt");
      /* harmony import */


      var _messages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./messages.page */
      "6AQs");

      var MessagesPageModule = function MessagesPageModule() {
        _classCallCheck(this, MessagesPageModule);
      };

      MessagesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _messages_routing_module__WEBPACK_IMPORTED_MODULE_5__["MessagesPageRoutingModule"]],
        declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_6__["MessagesPage"]]
      })], MessagesPageModule);
      /***/
    },

    /***/
    "fOj/":
    /*!*********************************************!*\
      !*** ./src/app/messages/messages.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function fOj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-toolbar {\n  border: 0 !important;\n  --height: 50px;\n  height: 50px;\n  padding-top: 3px;\n}\n\nion-header ion-title {\n  font-weight: 500;\n}\n\n.header-md:after {\n  display: none;\n}\n\nion-content .main-padding {\n  padding: 0px 15px 12px;\n  float: left;\n  width: 100%;\n  min-height: 100%;\n}\n\nion-content .catr-box {\n  text-align: center;\n}\n\nion-content .catr-box .img-bag {\n  background: #7d8d98;\n  text-align: center;\n  width: 100%;\n  height: 60px;\n  border-radius: 7px;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\nion-content .catr-box .img-bag img {\n  height: 40px;\n}\n\nion-content .catr-box h4 {\n  margin: 0px;\n  font-size: 11px;\n  color: #5f666b;\n  margin-top: 5px;\n}\n\nion-content .servic-near {\n  float: left;\n  width: 100%;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\nion-content .liat-st {\n  overflow: visible;\n  background: transparent;\n}\n\nion-content .liat-st ion-card.detals {\n  margin: 0px;\n  padding: 10px 10px 11px;\n  margin-bottom: 12px;\n  background: #fff;\n  position: relative;\n  box-shadow: none;\n  border: none;\n  border-radius: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 75px;\n}\n\nion-content .liat-st ion-card.detals .cont-alls {\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n\nion-content .liat-st ion-card.detals .cont-alls ion-card-subtitle {\n  font-size: 12px;\n  color: #12aaf2;\n  font-weight: 300;\n  letter-spacing: 0.5px;\n  text-transform: capitalize;\n}\n\nion-content .liat-st ion-card.detals .cont-alls ul.rirht-sr {\n  display: inline-block;\n  float: right;\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n}\n\nion-content .liat-st ion-card.detals .cont-alls ul.rirht-sr li {\n  display: inline-block;\n  color: #f69834;\n  margin-right: 1px;\n}\n\nion-content .liat-st ion-card.detals .cont-alls ion-checkbox.check-desins {\n  float: right;\n  width: 15px;\n  height: 15px;\n  margin-left: 6px;\n}\n\nion-content .liat-st ion-card.detals .cont-alls .pric-loc {\n  color: #7d8d98;\n  font-size: 10px;\n  font-weight: 100;\n  letter-spacing: 0.5px;\n  margin-top: 5px;\n}\n\nion-content .liat-st ion-card.detals .cont-alls .pric-loc span {\n  display: block;\n  font-size: 10px;\n  color: #173143;\n  letter-spacing: 0px;\n  font-weight: 600;\n  margin-top: 3px;\n}\n\nion-content .liat-st ion-card.detals .cont-alls .mrg-n5 {\n  margin: 0 -5px;\n}\n\nion-content .liat-st ion-card.detals h5.name-trs {\n  margin: 0px;\n  color: #565656;\n  font-size: 14px;\n  font-weight: 500;\n  display: block;\n  line-height: 18px;\n}\n\nion-content .liat-st ion-card.detals h5.name-trs span {\n  display: block;\n  margin: 3px 0 0;\n  font-size: 13px;\n}\n\nion-content .liat-st ion-card.detals p.emainb {\n  margin: 0px 0 0 auto;\n  color: #a7a7a7;\n  font-size: 10px;\n  margin-top: 7px;\n  font-weight: 500;\n  min-width: 70px;\n  text-align: right;\n}\n\nion-content .liat-st ion-card.detals .img-boxda {\n  position: absolute;\n  left: 10px;\n  top: 11px;\n  text-align: center;\n}\n\nion-content .liat-st ion-card.detals .img-boxda img {\n  width: 45px;\n  height: 45px;\n  -o-object-fit: cover;\n  object-fit: cover;\n  border-radius: 50%;\n  /*background: rgba(1, 164, 241, 0.2);*/\n  /*padding: 3px;*/\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21lc3NhZ2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLG9CQUFtQjtFQUNuQixjQUFTO0VBQ1QsWUFBWTtFQUNaLGdCQUFlO0FBQWpCOztBQUxBO0VBUUUsZ0JBQWdCO0FBQ2xCOztBQUdBO0VBQ0MsYUFBYTtBQUFkOztBQUVBO0VBR0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0JBQWdCO0FBRGxCOztBQUxBO0VBU0Usa0JBQWtCO0FBQXBCOztBQVRBO0VBV0csbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFFaEM7O0FBckJBO0VBcUJJLFlBQVk7QUFJaEI7O0FBekJBO0VBeUJHLFdBQVc7RUFDWCxlQUFlO0VBQ2YsY0FBYztFQUVkLGVBQWU7QUFHbEI7O0FBaENBO0VBaUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFHckI7O0FBeENBO0VBd0NLLGlCQUFpQjtFQUNwQix1QkFBdUI7QUFJekI7O0FBN0NBO0VBMkNHLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUI7RUFFbkIsYUFBYTtFQUViLDhCQUE4QjtFQUU5QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBTXJCOztBQS9EQTtFQTJESSxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7QUFRaEI7O0FBckVBO0VBK0RLLGVBQWU7RUFDZixjQUFjO0VBRWQsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQiwwQkFBMEI7QUFTL0I7O0FBN0VBO0VBdUVLLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7QUFVckI7O0FBckZBO0VBNkVNLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsaUJBQWlCO0FBWXZCOztBQTNGQTtFQW1GSyxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7QUFZckI7O0FBbEdBO0VBeUZLLGNBQWM7RUFFZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNwQixlQUFlO0FBWXJCOztBQTFHQTtFQWdHTSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFjckI7O0FBbkhBO0VBd0djLGNBQWE7QUFlM0I7O0FBdkhBO0VBMkdJLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0FBZ0JyQjs7QUFoSUE7RUFrSEssY0FBYztFQUNkLGVBQWM7RUFDZCxlQUFlO0FBa0JwQjs7QUF0SUE7RUF3SEksb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0FBa0JyQjs7QUFoSkE7RUFpSUksa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1Qsa0JBQWtCO0FBbUJ0Qjs7QUF2SkE7RUFzSUssV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixzQ0FBQTtFQUNBLGdCQUFBO0FBcUJMIiwiZmlsZSI6Im1lc3NhZ2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XHJcblx0aW9uLXRvb2xiYXJ7XHJcblx0XHRib3JkZXI6MCAhaW1wb3J0YW50O1xyXG5cdFx0LS1oZWlnaHQ6IDUwcHg7XHJcblx0XHRoZWlnaHQ6IDUwcHg7XHJcblx0XHRwYWRkaW5nLXRvcDozcHg7IFxyXG5cdH1cclxuXHRpb24tdGl0bGV7XHJcblx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdH1cclxufVxyXG5cclxuLmhlYWRlci1tZDphZnRlcntcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcbmlvbi1jb250ZW50IHtcclxuXHRcclxuXHQubWFpbi1wYWRkaW5nIHtcclxuXHRcdHBhZGRpbmc6IDBweCAxNXB4IDEycHg7XHJcblx0XHRmbG9hdDogbGVmdDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0bWluLWhlaWdodDogMTAwJTtcclxuXHR9XHJcblx0LmNhdHItYm94IHtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdC5pbWctYmFnIHtcclxuXHRcdFx0YmFja2dyb3VuZDogIzdkOGQ5ODtcclxuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0aGVpZ2h0OiA2MHB4O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiA3cHg7XHJcblx0XHRcdHBhZGRpbmc6IDEwcHg7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG5cdFx0XHRpbWcge1xyXG5cdFx0XHRcdGhlaWdodDogNDBweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aDQge1xyXG5cdFx0XHRtYXJnaW46IDBweDtcclxuXHRcdFx0Zm9udC1zaXplOiAxMXB4O1xyXG5cdFx0XHRjb2xvcjogIzVmNjY2YjtcclxuXHRcdFx0IFxyXG5cdFx0XHRtYXJnaW4tdG9wOiA1cHg7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5zZXJ2aWMtbmVhciB7XHJcblx0XHRmbG9hdDogbGVmdDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRtYXJnaW4tdG9wOiAxMHB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHR9XHJcblx0LmxpYXQtc3Qge1xyXG5cdCAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuXHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdFx0aW9uLWNhcmQuZGV0YWxzICAge1xyXG5cdFx0XHRtYXJnaW46IDBweDtcclxuXHRcdFx0cGFkZGluZzogMTBweCAxMHB4IDExcHg7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDEycHg7XHJcblx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0Ym94LXNoYWRvdzogbm9uZTtcclxuXHRcdFx0Ym9yZGVyOiBub25lO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdFx0XHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0LXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0XHQtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRwYWRkaW5nLWxlZnQ6IDc1cHg7XHJcblx0XHRcdC5jb250LWFsbHMge1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdGlvbi1jYXJkLXN1YnRpdGxlIHtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdFx0XHRcdGNvbG9yOiAjMTJhYWYyO1xyXG5cdFx0XHRcdFx0IFxyXG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDMwMDtcclxuXHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuXHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR1bC5yaXJodC1zciB7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdFx0XHRmbG9hdDogcmlnaHQ7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwcHg7XHJcblx0XHRcdFx0XHRtYXJnaW46IDBweDtcclxuXHRcdFx0XHRcdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0XHRcdFx0XHRsaSB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICNmNjk4MzQ7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMXB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpb24tY2hlY2tib3guY2hlY2stZGVzaW5zIHtcclxuXHRcdFx0XHRcdGZsb2F0OiByaWdodDtcclxuXHRcdFx0XHRcdHdpZHRoOiAxNXB4O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAxNXB4O1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDZweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LnByaWMtbG9jIHtcclxuXHRcdFx0XHRcdGNvbG9yOiAjN2Q4ZDk4O1xyXG5cdFx0XHRcdFx0IFxyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxMHB4O1xyXG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDEwMDtcclxuXHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuXHRcdFx0XHRcdCBtYXJnaW4tdG9wOiA1cHg7XHJcblx0XHRcdFx0XHRzcGFuIHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTBweDtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICMxNzMxNDM7XHJcblx0XHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwcHg7XHJcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDNweDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Lm1yZy1uNSB7IG1hcmdpbjowIC01cHg7fVxyXG5cdFx0XHR9XHJcblx0XHRcdGg1Lm5hbWUtdHJzIHtcclxuXHRcdFx0XHRtYXJnaW46IDBweDtcclxuXHRcdFx0XHRjb2xvcjogIzU2NTY1NjtcclxuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRsaW5lLWhlaWdodDogMThweDtcclxuXHRcdFx0XHRzcGFue1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0XHRtYXJnaW46M3B4IDAgMDtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cC5lbWFpbmIge1xyXG5cdFx0XHRcdG1hcmdpbjogMHB4IDAgMCBhdXRvO1xyXG5cdFx0XHRcdGNvbG9yOiAjYTdhN2E3O1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTBweDtcclxuXHRcdFx0XHRtYXJnaW4tdG9wOiA3cHg7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRtaW4td2lkdGg6IDcwcHg7XHJcblx0XHRcdFx0dGV4dC1hbGlnbjogcmlnaHQ7XHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cdFx0XHQuaW1nLWJveGRhIHtcclxuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0bGVmdDogMTBweDtcclxuXHRcdFx0XHR0b3A6IDExcHg7XHJcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdGltZyB7XHJcblx0XHRcdFx0XHR3aWR0aDogNDVweDtcclxuXHRcdFx0XHRcdGhlaWdodDogNDVweDtcclxuXHRcdFx0XHRcdC1vLW9iamVjdC1maXQ6IGNvdmVyO1xyXG5cdFx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHQvKmJhY2tncm91bmQ6IHJnYmEoMSwgMTY0LCAyNDEsIDAuMik7Ki9cclxuXHRcdFx0XHRcdC8qcGFkZGluZzogM3B4OyovXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=messages-messages-module-es5.js.map