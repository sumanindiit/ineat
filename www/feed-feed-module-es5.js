(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feed-feed-module"], {
    /***/
    "BUm5":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post-options/post-options.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function BUm5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"list-filter\">\n  <ul list-modal-main>\n    <li (click)=\"goToGroup();\" ><ion-icon name=\"people-outline\"></ion-icon> Go to group</li>\n    <li (click)=\"shareViaEmail()\"><ion-icon name=\"mail-outline\"></ion-icon> Share via Email </li>\n    <li (click)=\"copyLink()\" ><ion-icon name=\"copy-outline\"></ion-icon> Copy Link</li>\n    \n  </ul>\n</div>\n";
      /***/
    },

    /***/
    "T0Ky":
    /*!***************************************************************!*\
      !*** ./node_modules/@capacitor/share/dist/esm/definitions.js ***!
      \***************************************************************/

    /*! no exports provided */

    /***/
    function T0Ky(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__); //# sourceMappingURL=definitions.js.map

      /***/

    },

    /***/
    "WrHT":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feed/feed.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function WrHT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<div flexHeader>\n\t\t\t<div backHead>\n\t\t\t\t<ion-back-button defaultHref=\"/tabs/home\"></ion-back-button>\n\t\t\t\t<ion-title>{{ tabTitle }}</ion-title>\n\t\t\t</div>\n\t\t\t<div ml-auto>\n\t\t\t\t<ion-button routerLink=\"/messages\" fill=\"none\">\n\t\t\t\t\t<ion-icon name=\"chatbubble-ellipses-outline\"></ion-icon>\n\t\t\t\t</ion-button>\n\t\t\t\t<ion-button routerLink=\"/notifications\" fill=\"none\">\n\t\t\t\t\t<ion-icon name=\"notifications-outline\"></ion-icon>\n\t\t\t\t</ion-button>\n\t\t\t\t<ion-button fill=\"none\">\n\t\t\t\t\t<ion-icon name=\"search-outline\"></ion-icon>\n\t\t\t\t</ion-button>\n\t\t\t</div>\n\t\t</div>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div padding>\n\t\t<ion-segment (ionChange)=\"segmentChanged($event)\" mode=\"ios\" [(ngModel)]=\"tabs\" segment>\n\t\t\t<ion-segment-button value=\"feed\">\n\t\t\t\t<h6>Feed</h6>\n\t\t\t</ion-segment-button>\n\t\t\t<ion-segment-button value=\"mybowls\">\n\t\t\t\t<h6>My Groups</h6>\n\t\t\t</ion-segment-button>\n\t\t\t<ion-segment-button value=\"explore\">\n\t\t\t\t<h6>Explore</h6>\n\t\t\t</ion-segment-button>\n\t\t</ion-segment>\n\t</div>\n\n\t<div feedPage [ngSwitch]=\"tabs\">\n\t\t<div *ngSwitchCase=\"'feed'\">\n\t\t\t<div posts>\n\t\t\t\t<div postinner class=\"ion-padding\" *ngFor=\"let feed of feeds\">\n\t\t\t\t\t<ion-item lines=\"none\" class=\"ion-no-padding\">\n\t\t\t\t\t\t<ion-avatar *ngIf=\"feed?.posted_user_image!=''\">\n\t\t\t\t\t\t\t<img src=\"{{ feed?.posted_user_image }}\" />\n\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t<h2>{{ feed?.posted_by }} <span>{{ feed?.posted_time }}</span>\n\t\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t<ion-buttons slot=\"end\" (click)=\"presentPopover($event , feed)\">\n\t\t\t\t\t\t\t<ion-icon name=\"ellipsis-vertical\"></ion-icon>\n\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ng-container *ngIf=\"feed?.post_image!=''\">\n\t\t\t\t\t\t<img src=\"{{ feed?.post_image }}\" alt=\"\" mainImg>\n\t\t\t\t\t</ng-container>\n\t\t\t\t\t<p desc>{{ feed?.post_content }}</p>\n\t\t\t\t\t<ion-card class=\"ion-no-margin\">\n\t\t\t\t\t\t<ion-card-content class=\"ion-no-padding\">\n\t\t\t\t\t\t\t<div commentcounts>\n\t\t\t\t\t\t\t\t<div posticons>\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"toggleLiked(feed)\" hearticon>\n\t\t\t\t\t\t\t\t\t\t<ion-icon [name]=\"feed?.icon\"></ion-icon>\n\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"presentCommentModal(feed)\">\n\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"chatbubble-outline\"></ion-icon>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"shareFeed(feed)\">\n\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"arrow-redo-outline\"></ion-icon>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t\t<ion-col size=\"8\" pl-0>\n\t\t\t\t\t\t\t\t\t\t<div [innerHTML]=\"feed?.liked_message\"></div>\n\n\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"ion-text-right\" pr-0 *ngIf=\"feed?.comments.length > 0\">\n\t\t\t\t\t\t\t\t\t\t<p>Comments <b>{{ feed?.comments.length }}</b></p>\n\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<ion-item lines=\"none\" class=\"ion-no-padding\" *ngFor=\"let comment of feed?.comments\">\n\t\t\t\t\t\t\t\t<ion-avatar>\n\t\t\t\t\t\t\t\t\t<img src=\"{{ comment.posted_by_image }}\" alt=\"\" />\n\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t\t\t<h2>{{ comment.posted_by }} <span>{{ comment.posted_on }}</span></h2>\n\t\t\t\t\t\t\t\t\t<p>{{ comment.comment_content }}</p>\n\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t</ion-card-content>\n\t\t\t\t\t</ion-card>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<ion-fab class=\"add-fab-btn\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n\t\t\t\t<ion-fab-button routerLink=\"/add-bowl\">\n\t\t\t\t\t<ion-icon name=\"add-outline\"></ion-icon>\n\t\t\t\t</ion-fab-button>\n\t\t\t</ion-fab>\n\n\t\t</div>\n\n\t\t<div *ngSwitchCase=\"'mybowls'\">\n\t\t\t<ul mybowlsPage>\n\t\t\t\t<li routerLink=\"/bowl-details/{{myGroup?.id}}\" *ngFor=\"let myGroup of myGroups\">\n\t\t\t\t\t<span bowlimg><img src=\"{{ myGroup?.image }}\" alt=\"\"> </span>\n\t\t\t\t\t<div ritBowl>\n\t\t\t\t\t\t<h4>{{ myGroup?.name }}</h4>\n\t\t\t\t\t\t<p>{{ myGroup?.description }}</p>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\n\t\t\t<ion-fab class=\"add-fab-btn\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" routerLink=\"/add-group\">\n\t\t\t\t<ion-fab-button>\n\t\t\t\t\t<ion-icon name=\"add-outline\"></ion-icon>\n\t\t\t\t</ion-fab-button>\n\t\t\t</ion-fab>\n\t\t</div>\n\n\t\t<div *ngSwitchCase=\"'explore'\">\n\t\t\t<ul mybowlsPage explorePage>\n\t\t\t\t<li *ngFor=\"let exploreGroup of explore\">\n\t\t\t\t\t<span bowlimg><img src=\"{{ exploreGroup?.image }}\" alt=\"\"> <label>\n\t\t\t\t\t\t\t<ion-icon name=\"people\"></ion-icon> {{ exploreGroup?.peoples}}\n\t\t\t\t\t\t</label> </span>\n\t\t\t\t\t<div ritBowl>\n\t\t\t\t\t\t<h4>{{ exploreGroup?.name }}</h4>\n\t\t\t\t\t\t<p>{{ exploreGroup?.description }}</p>\n\t\t\t\t\t\t<ion-button (click)=\"joinBowl(exploreGroup)\" btn-join>Join</ion-button>\n\t\t\t\t\t\t<ion-button btn-join routerLink=\"/bowl-details/{{exploreGroup?.id}}\">Preview</ion-button>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\n\t\t\t</ul>\n\n\t\t</div>\n\t</div>\n\n</ion-content>";
      /***/
    },

    /***/
    "XfKD":
    /*!*************************************!*\
      !*** ./src/app/feed/feed.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function XfKD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-segment {\n  border-radius: 14px;\n  background: transparent;\n  border: 1px solid #f3f3f3;\n  box-shadow: none;\n}\n\nion-segment ion-segment-button {\n  --border-radius: 14px;\n  color: #888;\n}\n\nion-segment ion-segment-button.segment-button-checked {\n  --indicator-box-shadow: none;\n  --indicator-color: var(--ion-color-secondary);\n  color: #fff;\n}\n\nion-segment ion-segment-button h6 {\n  margin: 10px 0;\n  font-size: 13px;\n}\n\n[padding] {\n  padding-bottom: 0;\n}\n\nul[mybowlsPage] {\n  list-style: none;\n  padding: 0px 20px 20px;\n  margin: 0;\n}\n\nul[mybowlsPage] li {\n  display: flex;\n  align-items: center;\n  margin: 0px 0 0;\n  padding: 15px 0;\n  border-bottom: 1px solid #eee;\n}\n\nul[mybowlsPage] li [bowlimg] {\n  margin-right: 20px;\n}\n\nul[mybowlsPage] li [bowlimg] img {\n  width: 90px;\n  min-width: 90px;\n  height: 90px;\n  border-radius: 15px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nul[mybowlsPage] li h4 {\n  font-size: 16px;\n  font-weight: 500;\n  margin: 0 0 5px;\n}\n\nul[mybowlsPage] li p {\n  font-size: 13px;\n  color: #888;\n  margin: 0;\n}\n\nul[mybowlsPage][explorePage] li {\n  align-items: flex-start;\n}\n\nul[mybowlsPage][explorePage] li [bowlimg] label {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  color: var(--ion-color-secondary);\n}\n\nul[mybowlsPage][explorePage] li [bowlimg] label ion-icon {\n  margin-right: 5px;\n}\n\nul[mybowlsPage][explorePage] li [btn-join] {\n  --padding-start: 30px;\n  --padding-end: 30px;\n  font-size: 12px;\n  margin: 15px 0 0;\n  min-height: 20px;\n  height: 34px;\n}\n\n[posts] [postinner] {\n  background: var(--ion-color-black);\n  border-bottom: 7px solid #eee;\n  padding: 10px 20px;\n}\n\n[posts] [postinner] [mainImg] {\n  width: 100%;\n  border-radius: 20px;\n  height: 221px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n[posts] [postinner] [desc] {\n  margin-top: 0px;\n  line-height: 1.5;\n  font-size: 17px;\n  font-weight: 500;\n}\n\n[posts] [postinner] ion-item {\n  --inner-padding-end: 0px;\n  --background: transparent;\n  overflow: visible;\n}\n\n[posts] [postinner] ion-item ion-avatar {\n  width: 40px;\n  height: 40px;\n}\n\n[posts] [postinner] ion-item ion-label {\n  margin-left: 10px;\n  margin-top: 0px;\n}\n\n[posts] [postinner] ion-item ion-label h2 {\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 3px;\n}\n\n[posts] [postinner] ion-item ion-label h2 span {\n  font-weight: 400;\n  font-size: 12px;\n}\n\n[posts] [postinner] ion-item ion-label h2 span:before {\n  content: \".\";\n  position: relative;\n  top: -3px;\n  font-size: 25px;\n  color: #666;\n  margin-right: 5px;\n}\n\n[posts] [postinner] ion-item ion-label ion-buttons {\n  background: var(--ion-color-primary);\n  color: var(--ion-color-white);\n  font-size: 12px;\n  padding: 4px 10px;\n  display: inline-block;\n  border-radius: 10px;\n}\n\n[posts] [postinner] ion-item ion-label ion-buttons ion-icon {\n  transform: translateY(1px);\n  margin-right: 3px;\n}\n\n[posts] [postinner] ion-item ion-buttons[slot=\"end\"] {\n  background: rgba(0, 0, 0, 0.05);\n  color: #c4c4c4;\n  border-radius: 50%;\n  padding: 6px;\n  font-size: 14px;\n}\n\n[posts] [postinner] ion-card {\n  background: transparent;\n  box-shadow: none;\n}\n\n[posts] [postinner] ion-card [postimg] img {\n  max-height: 250px;\n  min-height: 250px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  border-radius: 24px;\n}\n\n[posts] [postinner] ion-card ion-card-content [commentcounts] [posticons] a {\n  text-decoration: none;\n  font-size: 26px;\n  margin-right: 15px;\n  color: rgba(0, 0, 0, 0.3);\n}\n\n[posts] [postinner] ion-card ion-card-content [commentcounts] [posticons] a[hearticon] {\n  color: var(--ion-color-secondary);\n}\n\n[posts] [postinner] ion-card ion-card-content [commentcounts] [pl-0] {\n  padding-left: 0px;\n}\n\n[posts] [postinner] ion-card ion-card-content [commentcounts] [pr-0] {\n  padding-right: 0px;\n}\n\n[posts] [postinner] ion-card ion-card-content [commentcounts] p {\n  font-size: 12px;\n  line-height: 18px;\n  font-weight: 400;\n  color: #222;\n}\n\n[posts] [postinner] ion-card ion-card-content [commentcounts] p b {\n  font-weight: 600;\n}\n\n[posts] [postinner] ion-card ion-card-content ion-item {\n  align-items: start;\n  --inner-padding-end: 0px;\n  --background: transparent;\n  overflow: visible;\n}\n\n[posts] [postinner] ion-card ion-card-content ion-item ion-avatar {\n  width: 35px;\n  height: 35px;\n  box-shadow: none;\n}\n\n[posts] [postinner] ion-card ion-card-content ion-item ion-label {\n  white-space: normal;\n  margin-left: 10px;\n}\n\n[posts] [postinner] ion-card ion-card-content ion-item ion-label [btns] a {\n  text-decoration: none;\n  font-size: 12px;\n  line-height: 18px;\n  font-weight: 600;\n  margin-right: 25px;\n  color: #222;\n}\n\n[posts] [postinner] ion-card ion-card-content ion-item ion-label h2 {\n  font-size: 13px;\n  font-weight: 600;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n[posts] [postinner] ion-card ion-card-content ion-item ion-label p {\n  font-size: 13px;\n  line-height: 20px;\n  font-weight: 400;\n}\n\nion-fab.add-fab-btn {\n  position: fixed;\n}\n\nion-fab.add-fab-btn ion-fab-button {\n  width: 50px;\n  height: 50px;\n}\n\nion-fab.add-fab-btn ion-fab-button ion-icon {\n  font-size: 36px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2ZlZWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2pCOztBQUxBO0VBTUUscUJBQWdCO0VBQ2hCLFdBQVc7QUFHYjs7QUFWQTtFQVNHLDRCQUF1QjtFQUN2Qiw2Q0FBa0I7RUFDbEIsV0FBVztBQUtkOztBQWhCQTtFQWNHLGNBQWM7RUFDZCxlQUFlO0FBTWxCOztBQUVBO0VBSEMsaUJBQWlCO0FBS2xCOztBQUhBO0VBQ0MsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixTQUFTO0FBTVY7O0FBVEE7RUFLRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixlQUFlO0VBQ2YsNkJBQTZCO0FBUS9COztBQWpCQTtFQVdHLGtCQUFrQjtBQVVyQjs7QUFyQkE7RUFhSSxXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsb0JBQWlCO0tBQWpCLGlCQUFpQjtBQVlyQjs7QUE3QkE7RUFxQkcsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0FBWWxCOztBQW5DQTtFQTBCRyxlQUFlO0VBQ2YsV0FBVztFQUNYLFNBQVM7QUFhWjs7QUF6Q0E7RUFpQ0csdUJBQXVCO0FBWTFCOztBQTdDQTtFQW9DSyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUNBQWlDO0FBYXRDOztBQXJEQTtFQTBDTSxpQkFBaUI7QUFldkI7O0FBekRBO0VBK0NJLHFCQUFnQjtFQUNoQixtQkFBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFjaEI7O0FBRUE7RUFSRSxrQ0FBa0M7RUFDbEMsNkJBQTZCO0VBQzdCLGtCQUFrQjtBQVVwQjs7QUFFQTtFQVZHLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG9CQUFpQjtLQUFqQixpQkFBaUI7QUFZcEI7O0FBRUE7RUFYRyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7QUFhbkI7O0FBRUE7RUFaRyx3QkFBb0I7RUFDcEIseUJBQWE7RUFDYixpQkFBaUI7QUFjcEI7O0FBRUE7RUFkSSxXQUFXO0VBQ1gsWUFBWTtBQWdCaEI7O0FBRUE7RUFmSSxpQkFBaUI7RUFDakIsZUFBZTtBQWlCbkI7O0FBRUE7RUFqQkssZUFBZTtFQUNmLGdCQUFnQjtFQWFoQixrQkFBa0I7QUFPdkI7O0FBRUE7RUFwQk0sZ0JBQWdCO0VBQ2hCLGVBQWU7QUFzQnJCOztBQUVBO0VBdEJPLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUztFQUNULGVBQWU7RUFDZixXQUFXO0VBQ1gsaUJBQWlCO0FBd0J4Qjs7QUFFQTtFQXBCSyxvQ0FBb0M7RUFDcEMsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQXNCeEI7O0FBRUE7RUF0Qk0sMEJBQTBCO0VBQzFCLGlCQUFpQjtBQXdCdkI7O0FBRUE7RUFyQkksK0JBQStCO0VBQy9CLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7QUF1Qm5COztBQUVBO0VBckJHLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUF1Qm5COztBQUVBO0VBdEJLLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsbUJBQW1CO0FBd0J4Qjs7QUFFQTtFQW5CTyxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFxQmhDOztBQUVBO0VBckJRLGlDQUFpQztBQXVCekM7O0FBRUE7RUFwQk0saUJBQWlCO0FBc0J2Qjs7QUFFQTtFQXJCTSxrQkFBa0I7QUF1QnhCOztBQUVBO0VBdEJNLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUF3QmpCOztBQUVBO0VBeEJPLGdCQUFnQjtBQTBCdkI7O0FBRUE7RUF2Qkssa0JBQWtCO0VBQ2xCLHdCQUFvQjtFQUNwQix5QkFBYTtFQUNiLGlCQUFpQjtBQXlCdEI7O0FBRUE7RUF6Qk0sV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7QUEyQnRCOztBQUVBO0VBMUJNLG1CQUFtQjtFQUNuQixpQkFBaUI7QUE0QnZCOztBQUVBO0VBM0JRLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztBQTZCbkI7O0FBRUE7RUEzQk8sZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0FBNkJ6Qjs7QUFFQTtFQTVCTyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQThCdkI7O0FBckJBO0VBQ0MsZUFBZTtBQXdCaEI7O0FBekJBO0VBR0UsV0FBVztFQUNYLFlBQVk7QUEwQmQ7O0FBOUJBO0VBTUcsZUFBZTtBQTRCbEIiLCJmaWxlIjoiZmVlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VnbWVudCB7XHJcblx0Ym9yZGVyLXJhZGl1czogMTRweDtcclxuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZjNmM2YzO1xyXG5cdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0aW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuXHRcdC0tYm9yZGVyLXJhZGl1czogMTRweDtcclxuXHRcdGNvbG9yOiAjODg4O1xyXG5cdFx0Ji5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcclxuXHRcdFx0LS1pbmRpY2F0b3ItYm94LXNoYWRvdzogbm9uZTtcclxuXHRcdFx0LS1pbmRpY2F0b3ItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG5cdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdH1cclxuXHRcdGg2IHtcclxuXHRcdFx0bWFyZ2luOiAxMHB4IDA7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTNweDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuW3BhZGRpbmddIHtcclxuXHRwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG51bFtteWJvd2xzUGFnZV0ge1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0cGFkZGluZzogMHB4IDIwcHggMjBweDtcclxuXHRtYXJnaW46IDA7XHJcblx0bGkge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRtYXJnaW46IDBweCAwIDA7XHJcblx0XHRwYWRkaW5nOiAxNXB4IDA7XHJcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxuXHRcdFtib3dsaW1nXSB7XHJcblx0XHRcdG1hcmdpbi1yaWdodDogMjBweDtcclxuXHRcdFx0aW1nIHtcclxuXHRcdFx0XHR3aWR0aDogOTBweDtcclxuXHRcdFx0XHRtaW4td2lkdGg6IDkwcHg7XHJcblx0XHRcdFx0aGVpZ2h0OiA5MHB4O1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcblx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGg0IHtcclxuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRtYXJnaW46IDAgMCA1cHg7XHJcblx0XHR9XHJcblx0XHRwIHtcclxuXHRcdFx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdFx0XHRjb2xvcjogIzg4ODtcclxuXHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQmW2V4cGxvcmVQYWdlXSB7XHJcblx0XHRsaSB7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cdFx0XHRbYm93bGltZ10ge1xyXG5cdFx0XHRcdGxhYmVsIHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcblx0XHRcdFx0XHRpb24taWNvbiB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogNXB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRbYnRuLWpvaW5dIHtcclxuXHRcdFx0XHQtLXBhZGRpbmctc3RhcnQ6IDMwcHg7XHJcblx0XHRcdFx0LS1wYWRkaW5nLWVuZDogMzBweDtcclxuXHRcdFx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRcdFx0bWFyZ2luOiAxNXB4IDAgMDtcclxuXHRcdFx0XHRtaW4taGVpZ2h0OiAyMHB4O1xyXG5cdFx0XHRcdGhlaWdodDogMzRweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuW3Bvc3RzXSB7XHJcblx0W3Bvc3Rpbm5lcl0ge1xyXG5cdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWJsYWNrKTtcclxuXHRcdGJvcmRlci1ib3R0b206IDdweCBzb2xpZCAjZWVlO1xyXG5cdFx0cGFkZGluZzogMTBweCAyMHB4O1xyXG5cdFx0W21haW5JbWddIHtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0XHRcdGhlaWdodDogMjIxcHg7XHJcblx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xyXG5cdFx0fVxyXG5cdFx0W2Rlc2NdIHtcclxuXHRcdFx0bWFyZ2luLXRvcDogMHB4O1xyXG5cdFx0XHRsaW5lLWhlaWdodDogMS41O1xyXG5cdFx0XHRmb250LXNpemU6IDE3cHg7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHR9XHJcblx0XHRpb24taXRlbSB7XHJcblx0XHRcdC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuXHRcdFx0LS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRcdFx0b3ZlcmZsb3c6IHZpc2libGU7XHJcblx0XHRcdGlvbi1hdmF0YXIge1xyXG5cdFx0XHRcdHdpZHRoOiA0MHB4O1xyXG5cdFx0XHRcdGhlaWdodDogNDBweDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpb24tbGFiZWwge1xyXG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cdFx0XHRcdG1hcmdpbi10b3A6IDBweDtcclxuXHRcdFx0XHRoMiB7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdFx0c3BhbiB7XHJcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdFx0XHRcdFx0JjpiZWZvcmUge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IFwiLlwiO1xyXG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRcdFx0XHR0b3A6IC0zcHg7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyNXB4O1xyXG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjNjY2O1xyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogNXB4O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAzcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlvbi1idXR0b25zIHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuXHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0XHRcdFx0cGFkZGluZzogNHB4IDEwcHg7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdFx0XHRcdFx0aW9uLWljb24ge1xyXG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAzcHg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlvbi1idXR0b25zW3Nsb3Q9XCJlbmRcIl0ge1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcblx0XHRcdFx0Y29sb3I6ICNjNGM0YzQ7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdHBhZGRpbmc6IDZweDtcclxuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlvbi1jYXJkIHtcclxuXHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0XHRcdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0XHRcdFtwb3N0aW1nXSB7XHJcblx0XHRcdFx0aW1nIHtcclxuXHRcdFx0XHRcdG1heC1oZWlnaHQ6IDI1MHB4O1xyXG5cdFx0XHRcdFx0bWluLWhlaWdodDogMjUwcHg7XHJcblx0XHRcdFx0XHRvYmplY3QtZml0OiBjb3ZlcjtcclxuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMjRweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aW9uLWNhcmQtY29udGVudCB7XHJcblx0XHRcdFx0W2NvbW1lbnRjb3VudHNdIHtcclxuXHRcdFx0XHRcdFtwb3N0aWNvbnNdIHtcclxuXHRcdFx0XHRcdFx0YSB7XHJcblx0XHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjZweDtcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuXHRcdFx0XHRcdFx0XHQmW2hlYXJ0aWNvbl0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0W3BsLTBdIHtcclxuXHRcdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiAwcHg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRbcHItMF0ge1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRwIHtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMThweDtcclxuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICMyMjI7XHJcblx0XHRcdFx0XHRcdGIge1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aW9uLWl0ZW0ge1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IHN0YXJ0O1xyXG5cdFx0XHRcdFx0LS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG5cdFx0XHRcdFx0LS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRcdFx0XHRcdG92ZXJmbG93OiB2aXNpYmxlO1xyXG5cdFx0XHRcdFx0aW9uLWF2YXRhciB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAzNXB4O1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDM1cHg7XHJcblx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpb24tbGFiZWwge1xyXG5cdFx0XHRcdFx0XHR3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTBweDtcclxuXHRcdFx0XHRcdFx0W2J0bnNdIHtcclxuXHRcdFx0XHRcdFx0XHRhIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMjVweDtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjMjIyO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRoMiB7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogNXB4O1xyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDVweDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRwIHtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEzcHg7XHJcblx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDIwcHg7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuaW9uLWZhYi5hZGQtZmFiLWJ0biB7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdGlvbi1mYWItYnV0dG9uIHtcclxuXHRcdHdpZHRoOiA1MHB4O1xyXG5cdFx0aGVpZ2h0OiA1MHB4O1xyXG5cdFx0aW9uLWljb24ge1xyXG5cdFx0XHRmb250LXNpemU6IDM2cHg7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "c9Ob":
    /*!**********************************************************!*\
      !*** ./src/app/post-options/post-options.component.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function c9Ob(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".list-filter {\n  padding: 15px;\n}\n\n.list-filter [list-modal-main] {\n  padding: 0;\n  list-style: none;\n  margin: 0;\n}\n\n.list-filter [list-modal-main] [mian-headings] {\n  font-weight: 600;\n}\n\n.list-filter [list-modal-main] li {\n  line-height: 24px;\n  display: flex;\n  margin: 15px 0;\n  align-items: center;\n  font-weight: 500;\n  font-size: 14px;\n  color: #606060;\n}\n\n.list-filter [list-modal-main] li ion-icon {\n  font-size: 20px;\n  margin-right: 15px;\n}\n\n.list-filter [list-modal-main] li:last-child {\n  margin-bottom: 0;\n}\n\n.list-filter [list-modal-main] li:first-child {\n  margin-top: 0;\n}\n\n.list-filter [list-modal-main] li.danger-list {\n  color: var(--ion-color-secondary);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Bvc3Qtb3B0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdDLGFBQWE7QUFEZDs7QUFGQTtFQU1FLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsU0FBUztBQUFYOztBQVJBO0VBV0csZ0JBQWdCO0FBQ25COztBQVpBO0VBZUcsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztBQUNqQjs7QUF0QkE7RUF1QkksZUFBZTtFQUNmLGtCQUFrQjtBQUd0Qjs7QUEzQkE7RUE0QkcsZ0JBQWdCO0FBR25COztBQS9CQTtFQStCRyxhQUFhO0FBSWhCOztBQW5DQTtFQW1DRyxpQ0FBaUM7QUFJcEMiLCJmaWxlIjoicG9zdC1vcHRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtZmlsdGVyXG57XG5cblx0cGFkZGluZzogMTVweDtcblx0W2xpc3QtbW9kYWwtbWFpbl1cblx0e1xuXHRcdHBhZGRpbmc6IDA7XG5cdFx0bGlzdC1zdHlsZTogbm9uZTtcblx0XHRtYXJnaW46IDA7XHRcdFxuXHRcdFttaWFuLWhlYWRpbmdzXSBcblx0XHR7XG5cdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdH1cblx0XHRsaSBcblx0XHR7XG5cdFx0XHRsaW5lLWhlaWdodDogMjRweDtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRtYXJnaW46IDE1cHggMDtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0Y29sb3I6ICM2MDYwNjA7XG5cdFx0XHRpb24taWNvbiB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxNXB4O1xuXHRcdFx0fVx0XG5cdFx0XHRcblx0XHQmOmxhc3QtY2hpbGR7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAwO1xuXHRcdH1cblx0XHQmOmZpcnN0LWNoaWxke1xuXHRcdFx0bWFyZ2luLXRvcDogMDtcblx0XHR9XG5cdFx0fVx0XG5cdFx0bGkuZGFuZ2VyLWxpc3Qge1xuXHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuXHRcdH1cdFxuXHR9XHRcbn0iXX0= */";
      /***/
    },

    /***/
    "jWta":
    /*!***********************************!*\
      !*** ./src/app/feed/feed.page.ts ***!
      \***********************************/

    /*! exports provided: FeedPage */

    /***/
    function jWta(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedPage", function () {
        return FeedPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_feed_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./feed.page.html */
      "WrHT");
      /* harmony import */


      var _feed_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./feed.page.scss */
      "XfKD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _post_options_post_options_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../post-options/post-options.component */
      "u3n3");
      /* harmony import */


      var _comment_form_comment_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../comment-form/comment-form.page */
      "pXy3");
      /* harmony import */


      var _services_api_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/api/api.service */
      "oZWX");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/common.service */
      "OlR4");
      /* harmony import */


      var _capacitor_share__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @capacitor/share */
      "rJ4/");

      var FeedPage = /*#__PURE__*/function () {
        function FeedPage(modalController, popoverController, api, router, common) {
          _classCallCheck(this, FeedPage);

          this.modalController = modalController;
          this.popoverController = popoverController;
          this.api = api;
          this.router = router;
          this.common = common;
          this.tabs = "feed";
          this.userId = localStorage.getItem('ineat_userid');
          this.tabTitle = "Feed";
        }

        _createClass(FeedPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "shareFeed",
          value: function shareFeed(feed) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return _capacitor_share__WEBPACK_IMPORTED_MODULE_10__["Share"].share({
                        title: feed === null || feed === void 0 ? void 0 : feed.post_content,
                        text: feed === null || feed === void 0 ? void 0 : feed.post_content,
                        url: feed === null || feed === void 0 ? void 0 : feed.post_url,
                        dialogTitle: 'Share with..'
                      }).then(function () {
                        return console.log('Successful share');
                      })["catch"](function (error) {
                        return console.log('Error sharing ::: ', error);
                      });

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.getPageData();
          }
        }, {
          key: "toggleLiked",
          value: function toggleLiked(feed) {
            var _this = this;

            if (feed.icon === 'heart') {
              this.api.post('likeUnlikeSocialPost', {
                userId: this.userId,
                feedId: feed.post_id,
                likeStatus: 0
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
                  console.log(res); //this.feeds = res.data;
                  //this.myGroups = res.mygroups;
                  //this.explore = res.exploregroups;

                  feed.icon = 'heart-outline';

                  _this.getPageData();
                }
              }, function (error) {
                _this.common.stopLoading();

                _this.common.presentToast('Somw error occured. Please try again.', 'danger');
              });
            } else {
              this.api.post('likeUnlikeSocialPost', {
                userId: this.userId,
                feedId: feed.post_id,
                likeStatus: 1
              }, '').subscribe(function (result) {
                _this.common.stopLoading();

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

                  _this.common.presentToast(errMsgs, 'danger');
                } else if (res.status === 200 || res.status === '200') {
                  console.log(res); //this.feeds = res.data;
                  //this.myGroups = res.mygroups;
                  //this.explore = res.exploregroups;

                  feed.icon = 'heart';

                  _this.getPageData();
                }
              }, function (error) {
                _this.common.stopLoading();

                _this.common.presentToast('Somw error occured. Please try again.', 'danger');
              });
            }
          }
        }, {
          key: "segmentChanged",
          value: function segmentChanged(ev) {
            switch (ev.detail.value) {
              case 'mybowls':
                this.tabTitle = 'My Groups';
                break;

              case 'explore':
                this.tabTitle = 'Explore Groups';
                break;

              case 'feed':
                this.tabTitle = 'Feed';
                break;
            }
          }
        }, {
          key: "getPageData",
          value: function getPageData() {
            var _this2 = this;

            //this.common.presentLoading();
            this.api.post('getSocialPageData', {
              userId: this.userId
            }, '').subscribe(function (result) {
              _this2.common.stopLoading();

              var res = result;

              if (res.status === 422 || res.status === '422') {
                var errMsgs = '';

                var _iterator3 = _createForOfIteratorHelper(res.errors),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var x = _step3.value;
                    errMsgs += x + '</br>';
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }

                _this2.common.presentToast(errMsgs, 'danger');
              } else if (res.status === 200 || res.status === '200') {
                console.log(res);
                _this2.feeds = res.data;
                _this2.myGroups = res.mygroups;
                _this2.explore = res.exploregroups;
              }
            }, function (error) {
              _this2.common.stopLoading();

              console.log(error);
            });
          }
        }, {
          key: "presentCommentModal",
          value: function presentCommentModal(feed) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal, _yield$modal$onDidDis, data;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: _comment_form_comment_form_page__WEBPACK_IMPORTED_MODULE_6__["CommentFormPage"],
                        cssClass: 'commentformpage',
                        componentProps: {
                          userId: this.userId,
                          feedId: feed.post_id
                        }
                      });

                    case 2:
                      modal = _context2.sent;
                      _context2.next = 5;
                      return modal.present();

                    case 5:
                      _context2.next = 7;
                      return modal.onDidDismiss();

                    case 7:
                      _yield$modal$onDidDis = _context2.sent;
                      data = _yield$modal$onDidDis.data;

                      if (data) {
                        this.getPageData();
                      }

                    case 10:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "presentPopover",
          value: function presentPopover(ev, feed) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var popover, _yield$popover$onDidD, role;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.popoverController.create({
                        component: _post_options_post_options_component__WEBPACK_IMPORTED_MODULE_5__["PostOptionsComponent"],
                        cssClass: ' postoptionsDropdown',
                        mode: 'md',
                        event: ev,
                        translucent: true,
                        componentProps: {
                          userId: this.userId,
                          feed: feed
                        }
                      });

                    case 2:
                      popover = _context3.sent;
                      _context3.next = 5;
                      return popover.present();

                    case 5:
                      _context3.next = 7;
                      return popover.onDidDismiss();

                    case 7:
                      _yield$popover$onDidD = _context3.sent;
                      role = _yield$popover$onDidD.role;
                      console.log('onDidDismiss resolved with role', role);

                    case 10:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "joinBowl",
          value: function joinBowl(bowl) {
            var _this3 = this;

            this.common.presentLoading();
            this.api.post('joinSocialBowl', {
              userId: this.userId,
              bowlId: bowl.id
            }, '').subscribe(function (result) {
              _this3.common.stopLoading();

              var res = result;

              if (res.status === 422 || res.status === '422') {
                var errMsgs = '';

                var _iterator4 = _createForOfIteratorHelper(res.errors),
                    _step4;

                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var x = _step4.value;
                    errMsgs += x + '</br>';
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }

                _this3.common.presentToast(errMsgs, 'danger');
              } else if (res.status === 200 || res.status === '200') {
                _this3.common.presentToast(res.errors, 'success');

                _this3.getPageData();
              }
            }, function (error) {
              _this3.common.stopLoading();

              console.log(error);
            });
          }
        }]);

        return FeedPage;
      }();

      FeedPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
        }, {
          type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"]
        }];
      };

      FeedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-feed',
        template: _raw_loader_feed_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_feed_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FeedPage);
      /***/
    },

    /***/
    "rJ4/":
    /*!*********************************************************!*\
      !*** ./node_modules/@capacitor/share/dist/esm/index.js ***!
      \*********************************************************/

    /*! exports provided: Share */

    /***/
    function rJ4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Share", function () {
        return Share;
      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "FUe0");
      /* harmony import */


      var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./definitions */
      "T0Ky");
      /* empty/unused harmony star reexport */


      var Share = Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerPlugin"])('Share', {
        web: function web() {
          return Promise.all(
          /*! import() | web */
          [__webpack_require__.e("common"), __webpack_require__.e("web")]).then(__webpack_require__.bind(null,
          /*! ./web */
          "mxtL")).then(function (m) {
            return new m.ShareWeb();
          });
        }
      }); //# sourceMappingURL=index.js.map

      /***/
    },

    /***/
    "u3n3":
    /*!********************************************************!*\
      !*** ./src/app/post-options/post-options.component.ts ***!
      \********************************************************/

    /*! exports provided: PostOptionsComponent */

    /***/
    function u3n3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostOptionsComponent", function () {
        return PostOptionsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_post_options_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./post-options.component.html */
      "BUm5");
      /* harmony import */


      var _post_options_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./post-options.component.scss */
      "c9Ob");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/api/api.service */
      "oZWX");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _capacitor_clipboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @capacitor/clipboard */
      "PJjM");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/common.service */
      "OlR4");

      var PostOptionsComponent = /*#__PURE__*/function () {
        function PostOptionsComponent(router, api, common, popoverController) {
          _classCallCheck(this, PostOptionsComponent);

          this.router = router;
          this.api = api;
          this.common = common;
          this.popoverController = popoverController;
        }

        _createClass(PostOptionsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "shareViaEmail",
          value: function shareViaEmail() {}
        }, {
          key: "goToGroup",
          value: function goToGroup() {
            var _a;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.popoverController.dismiss();

                    case 2:
                      this.api.navCtrl.navigateRoot('/bowl-details/' + ((_a = this.feed) === null || _a === void 0 ? void 0 : _a.posted_group));

                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "copyLink",
          value: function copyLink() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this4 = this;

              var writeToClipboard;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      console.log('function works.');

                      writeToClipboard = function writeToClipboard() {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                          var _a;

                          return regeneratorRuntime.wrap(function _callee5$(_context5) {
                            while (1) {
                              switch (_context5.prev = _context5.next) {
                                case 0:
                                  _context5.next = 2;
                                  return _capacitor_clipboard__WEBPACK_IMPORTED_MODULE_7__["Clipboard"].write({
                                    string: (_a = this.feed) === null || _a === void 0 ? void 0 : _a.post_url
                                  });

                                case 2:
                                  this.common.presentToast('Copied Successfully.', 'success');

                                case 3:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          }, _callee5, this);
                        }));
                      };

                      _context6.next = 4;
                      return this.popoverController.dismiss();

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return PostOptionsComponent;
      }();

      PostOptionsComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"]
        }];
      };

      PostOptionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-post-options',
        template: _raw_loader_post_options_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_post_options_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PostOptionsComponent);
      /***/
    },

    /***/
    "xQww":
    /*!*************************************!*\
      !*** ./src/app/feed/feed.module.ts ***!
      \*************************************/

    /*! exports provided: FeedPageModule */

    /***/
    function xQww(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedPageModule", function () {
        return FeedPageModule;
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


      var _feed_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./feed-routing.module */
      "zl0E");
      /* harmony import */


      var _feed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./feed.page */
      "jWta");

      var FeedPageModule = function FeedPageModule() {
        _classCallCheck(this, FeedPageModule);
      };

      FeedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _feed_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeedPageRoutingModule"]],
        declarations: [_feed_page__WEBPACK_IMPORTED_MODULE_6__["FeedPage"]]
      })], FeedPageModule);
      /***/
    },

    /***/
    "zl0E":
    /*!*********************************************!*\
      !*** ./src/app/feed/feed-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: FeedPageRoutingModule */

    /***/
    function zl0E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedPageRoutingModule", function () {
        return FeedPageRoutingModule;
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


      var _feed_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./feed.page */
      "jWta");

      var routes = [{
        path: '',
        component: _feed_page__WEBPACK_IMPORTED_MODULE_3__["FeedPage"]
      }];

      var FeedPageRoutingModule = function FeedPageRoutingModule() {
        _classCallCheck(this, FeedPageRoutingModule);
      };

      FeedPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FeedPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=feed-feed-module-es5.js.map