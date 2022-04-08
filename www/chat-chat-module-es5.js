(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"], {
    /***/
    "2yxt":
    /*!*************************************!*\
      !*** ./src/app/chat/chat.module.ts ***!
      \*************************************/

    /*! exports provided: ChatPageModule */

    /***/
    function yxt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatPageModule", function () {
        return ChatPageModule;
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


      var _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./chat-routing.module */
      "cC0O");
      /* harmony import */


      var _chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./chat.page */
      "laW7");

      var ChatPageModule = function ChatPageModule() {
        _classCallCheck(this, ChatPageModule);
      };

      ChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatPageRoutingModule"]],
        declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]]
      })], ChatPageModule);
      /***/
    },

    /***/
    "SyIY":
    /*!*************************************!*\
      !*** ./src/app/chat/chat.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function SyIY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\nion-header img {\n  width: 35px;\n  height: 35px;\n  margin-right: 10px;\n  border-radius: 50px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: 8px ​10px 0;\n}\nion-header ion-button[toggle] {\n  min-width: 1px;\n  --padding: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  margin: 0 6px;\n  width: 25px;\n  height: 25px;\n  --background: rgba(0,0,0, .1);\n  --border-radius: 100px;\n}\nion-header ion-button[toggle] ion-icon {\n  color: #666;\n  font-size: 15px;\n}\n[dateMsg] {\n  display: flex;\n  margin: 5px 0 15px;\n  justify-content: space-between;\n  align-items: center;\n}\n[dateMsg] span {\n  border-top: 1px solid #eee;\n  display: block;\n  width: 100%;\n}\n[dateMsg] p {\n  font-size: 11px;\n  color: #aaa;\n  margin: 0 15px;\n}\n[msgs] {\n  margin-bottom: 15px;\n}\n[msgs] [lftsidemsg] {\n  display: flex;\n}\n[msgs] [lftsidemsg] span {\n  margin-right: 10px;\n}\n[msgs] [lftsidemsg] span img {\n  width: 30px;\n  height: 30px;\n  border-radius: 50px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n[msgs] [lftsidemsg] [msg] {\n  max-width: 80%;\n}\n[msgs] [lftsidemsg] [msg] p {\n  background: #FD8A5E;\n  padding: 12px;\n  margin: 0;\n  font-size: 13px;\n  line-height: 150%;\n  color: #fff;\n  border-radius: 15px 15px 15px 0;\n}\n[msgs] [lftsidemsg] [msg] small {\n  color: #999;\n  font-size: 11px;\n  margin: 5px  0 0;\n}\n[msgs][rit] [lftsidemsg] {\n  justify-content: flex-end;\n}\n[msgs][rit] [lftsidemsg] [msg] p {\n  background: #fcfcfc;\n  border-radius: 15px 15px 0 15px;\n  color: #333;\n}\n[msgs][rit] [lftsidemsg] [msg] small {\n  float: right;\n}\n[typemsg] {\n  border: 1px solid #eee;\n  border-radius: 100px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0px 15px;\n  position: fixed;\n  bottom: 20px;\n  left: 20px;\n  right: 20px;\n  z-index: 11;\n}\n[typemsg] ion-icon {\n  color: #666;\n  font-size: 18px;\n}\n[typemsg] ion-input {\n  padding: 0;\n  font-size: 14px;\n  color: #333;\n}\n[typemsg] [emoji] {\n  margin-left: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NoYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLG1CQUFPO0FBQ1Q7QUFSQTtFQVdHLGNBQWM7RUFDWCxZQUFVO0VBQ1Ysa0JBQWdCO0VBQ2hCLGdCQUFjO0VBQ2QsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osNkJBQWE7RUFDYixzQkFBZ0I7QUFDdEI7QUFwQkE7RUFxQk8sV0FBVztFQUNYLGVBQWU7QUFHdEI7QUFFQTtFQUNDLGFBQWE7RUFDYixrQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNwQjtBQUVBO0VBREUsMEJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxXQUFXO0FBR2I7QUFFQTtFQUZFLGVBQWU7RUFDZixXQUFXO0VBQ1gsY0FBYTtBQUlmO0FBRUE7RUFGQyxtQkFBbUI7QUFJcEI7QUFFQTtFQUpFLGFBQWE7QUFNZjtBQUVBO0VBTkcsa0JBQWtCO0FBUXJCO0FBRUE7RUFSSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixvQkFBaUI7S0FBakIsaUJBQWlCO0FBVXJCO0FBRUE7RUFSRyxjQUFjO0FBVWpCO0FBRUE7RUFWSSxtQkFBbUI7RUFDbkIsYUFBWTtFQUNaLFNBQVE7RUFDUixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCwrQkFBK0I7QUFZbkM7QUFFQTtFQVhJLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWU7QUFhbkI7QUFFQTtFQVRHLHlCQUF5QjtBQVc1QjtBQUVBO0VBVkssbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQixXQUFXO0FBWWhCO0FBRUE7RUFYSyxZQUFZO0FBYWpCO0FBRUE7RUFSQyxzQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFVBQVU7RUFDVixXQUFXO0VBQ1gsV0FBVztBQVVaO0FBRUE7RUFWRSxXQUFXO0VBQ1gsZUFBZTtBQVlqQjtBQUVBO0VBWEUsVUFBUztFQUNULGVBQWU7RUFDZixXQUFXO0FBYWI7QUFFQTtFQVpFLGlCQUFpQjtBQWNuQiIsImZpbGUiOiJjaGF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XHJcblx0aW1ne1xyXG5cdFx0d2lkdGg6IDM1cHg7XHJcblx0XHRoZWlnaHQ6IDM1cHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xyXG5cdFx0b2JqZWN0LWZpdDogY292ZXI7XHJcblx0XHRtYXJnaW46OHB4IOKAizEwcHggMDtcclxuXHR9XHJcblx0aW9uLWJ1dHRvbntcclxuXHRcdCZbdG9nZ2xlXXtcclxuXHRcdFx0bWluLXdpZHRoOiAxcHg7XHJcblx0XHQgICAgLS1wYWRkaW5nOiAwO1xyXG5cdFx0ICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuXHRcdCAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG5cdFx0ICAgIG1hcmdpbjogMCA2cHg7XHJcblx0XHQgICAgd2lkdGg6IDI1cHg7XHJcblx0XHQgICAgaGVpZ2h0OiAyNXB4O1xyXG5cdFx0ICAgIC0tYmFja2dyb3VuZDogcmdiYSgwLDAsMCwgLjEpO1xyXG5cdFx0ICAgIC0tYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcblx0XHQgICAgaW9uLWljb257XHJcblx0XHQgICAgXHRjb2xvcjogIzY2NjtcclxuXHRcdCAgICBcdGZvbnQtc2l6ZTogMTVweDtcclxuXHRcdCAgICB9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbltkYXRlTXNnXXtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdG1hcmdpbjo1cHggMCAxNXB4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHNwYW57XHJcblx0XHRib3JkZXItdG9wOjFweCBzb2xpZCAjZWVlO1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblx0cHtcclxuXHRcdGZvbnQtc2l6ZTogMTFweDtcclxuXHRcdGNvbG9yOiAjYWFhO1xyXG5cdFx0bWFyZ2luOjAgMTVweDtcclxuXHR9XHJcbn1cclxuW21zZ3Nde1xyXG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblx0W2xmdHNpZGVtc2dde1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdHNwYW57XHJcblx0XHRcdG1hcmdpbi1yaWdodDogMTBweDtcclxuXHRcdFx0aW1ne1xyXG5cdFx0XHRcdHdpZHRoOiAzMHB4O1xyXG5cdFx0XHRcdGhlaWdodDogMzBweDtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xyXG5cdFx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRbbXNnXXtcclxuXHRcdFx0bWF4LXdpZHRoOiA4MCU7XHJcblx0XHRcdHB7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogI0ZEOEE1RTtcclxuXHRcdFx0XHRwYWRkaW5nOjEycHg7XHJcblx0XHRcdFx0bWFyZ2luOjA7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAxNTAlO1xyXG5cdFx0XHRcdGNvbG9yOiAjZmZmOyBcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMTVweCAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdHNtYWxse1xyXG5cdFx0XHRcdGNvbG9yOiAjOTk5O1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTFweDtcclxuXHRcdFx0XHRtYXJnaW46NXB4ICAwIDA7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0JltyaXRde1xyXG5cdFx0W2xmdHNpZGVtc2dde1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cdFx0XHRbbXNnXXtcclxuXHRcdFx0XHRwe1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZjZmNmYztcclxuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwIDE1cHg7XHJcblx0XHRcdFx0XHRjb2xvcjogIzMzMztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0c21hbGx7XHJcblx0XHRcdFx0XHRmbG9hdDogcmlnaHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblt0eXBlbXNnXXtcclxuXHRib3JkZXI6MXB4IHNvbGlkICNlZWU7XHJcblx0Ym9yZGVyLXJhZGl1czogMTAwcHg7XHJcblx0aGVpZ2h0OiA1MHB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRwYWRkaW5nOiAwcHggMTVweDtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0Ym90dG9tOiAyMHB4O1xyXG5cdGxlZnQ6IDIwcHg7XHJcblx0cmlnaHQ6IDIwcHg7XHJcblx0ei1pbmRleDogMTE7XHJcblx0aW9uLWljb257XHJcblx0XHRjb2xvcjogIzY2NjtcclxuXHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHR9XHJcblx0aW9uLWlucHV0e1xyXG5cdFx0cGFkZGluZzowO1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0Y29sb3I6ICMzMzM7XHJcblx0fVxyXG5cdFtlbW9qaV17XHJcblx0XHRtYXJnaW4tbGVmdDogYXV0bztcclxuXHR9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "cC0O":
    /*!*********************************************!*\
      !*** ./src/app/chat/chat-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: ChatPageRoutingModule */

    /***/
    function cC0O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatPageRoutingModule", function () {
        return ChatPageRoutingModule;
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


      var _chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./chat.page */
      "laW7");

      var routes = [{
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_3__["ChatPage"]
      }];

      var ChatPageRoutingModule = function ChatPageRoutingModule() {
        _classCallCheck(this, ChatPageRoutingModule);
      };

      ChatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChatPageRoutingModule);
      /***/
    },

    /***/
    "laW7":
    /*!***********************************!*\
      !*** ./src/app/chat/chat.page.ts ***!
      \***********************************/

    /*! exports provided: ChatPage */

    /***/
    function laW7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatPage", function () {
        return ChatPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_chat_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./chat.page.html */
      "n54z");
      /* harmony import */


      var _chat_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./chat.page.scss */
      "SyIY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ChatPage = /*#__PURE__*/function () {
        function ChatPage() {
          _classCallCheck(this, ChatPage);
        }

        _createClass(ChatPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ChatPage;
      }();

      ChatPage.ctorParameters = function () {
        return [];
      };

      ChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chat',
        template: _raw_loader_chat_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chat_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ChatPage);
      /***/
    },

    /***/
    "n54z":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function n54z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<div flexHeader>\n\t\t\t<div backHead>\n\t\t\t\t<ion-back-button></ion-back-button>\n\t\t\t\t<img src=\"assets/img/img1.jpg\" alt=\"\">\n\t\t\t\t<ion-title>  Amelia Bedi</ion-title>\n\t\t\t</div>\n\t\t\t<div ml-auto>\n\t\t\t\t<ion-button toggle><ion-icon name=\"ellipsis-vertical\"></ion-icon></ion-button>\n\t\t\t</div>\n\t\t</div>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div padding>\n\t\t<div dateMsg>\n\t\t\t<span></span><p>Today</p><span></span>\n\t\t</div>\n\n\t\t<div msgs>\n\t\t\t<div lftsidemsg>\n\t\t\t\t<span><img src=\"assets/img/img2.jpg\" alt=\"\"></span>\n\t\t\t\t<div msg>\n\t\t\t\t\t<p>Hi Jake, how are you? I saw on the app that we’ve crossed paths several times this week 😄</p>\n\t\t\t\t\t<small>2:55 PM</small>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div msgs rit>\n\t\t\t<div lftsidemsg>\n\t\t\t\t<div msg>\n\t\t\t\t\t<p>Haha really! Nice to meet you Grace! How about a cup of coffee tonight? ☕️</p>\n\t\t\t\t\t<small>3:45 PM</small>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div msgs>\n\t\t\t<div lftsidemsg>\n\t\t\t\t<span><img src=\"assets/img/img2.jpg\" alt=\"\"></span>\n\t\t\t\t<div msg>\n\t\t\t\t\t<p>Sure, let’s do it! 😊</p>\n\t\t\t\t\t<small>2:55 PM</small>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div msgs rit>\n\t\t\t<div lftsidemsg>\n\t\t\t\t<div msg>\n\t\t\t\t\t<p>Great I will write later the \ntime and place. See you soon!</p>\n\t\t\t\t\t<small>3:45 PM</small>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div typemsg>\n\t\t\t<ion-icon name=\"link-outline\"></ion-icon>\n\t\t\t<ion-input placeholder=\"Message\"></ion-input>\n\t\t\t<ion-icon emoji name=\"happy\"></ion-icon>\n\t\t</div>\n\t</div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=chat-chat-module-es5.js.map