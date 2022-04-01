(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feed-feed-module"], {
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


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<div flexHeader>\n\t\t\t<div backHead>\n\t\t\t\t<ion-back-button></ion-back-button>\n\t\t\t\t<ion-title>Feed</ion-title>\n\t\t\t</div>\n\t\t\t<div ml-auto>\n\t\t\t\t<ion-button routerLink=\"/messages\" fill=\"none\"><ion-icon name=\"chatbubble-ellipses-outline\"></ion-icon></ion-button>\n\t\t\t\t<ion-button routerLink=\"/notifications\" fill=\"none\"><ion-icon name=\"notifications-outline\"></ion-icon></ion-button>\n\t\t\t\t<ion-button fill=\"none\" ><ion-icon name=\"search-outline\"></ion-icon></ion-button>\n\t\t\t</div>\n\t\t</div>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div padding>\n\t\t<ion-segment mode=\"ios\" [(ngModel)]=\"tabs\" segment>\n\t\t\t<ion-segment-button value=\"feed\">\n\t\t\t\t<h6>Feed</h6>\n\t\t\t</ion-segment-button>\n\t\t\t<ion-segment-button value=\"mybowls\">\n\t\t\t\t<h6>My Bowls</h6>\n\t\t\t</ion-segment-button>\n\t\t\t<ion-segment-button value=\"explore\">\n\t\t\t\t<h6>Explore</h6>\n\t\t\t</ion-segment-button>\n\t\t</ion-segment>\n\t</div>\n\n\t\t<div feedPage [ngSwitch]=\"tabs\">\n\t\t\t<div *ngSwitchCase=\"'feed'\">\n\t\t\t\t<div posts>\n\t\t\t\t\t<div postinner class=\"ion-padding\">\n\t\t\t\t\t\t<ion-item lines=\"none\" class=\"ion-no-padding\"> \n\t\t\t\t\t\t\t<ion-avatar>\n\t\t\t\t\t\t\t\t<img src=\"assets/img/bowl1.png\"/>\n\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t\t<h2 routerLink=\"/otherprofile\">Ineat Official <span>8 min</span></h2>\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t<ion-buttons slot=\"end\"><ion-icon name=\"ellipsis-vertical\"></ion-icon></ion-buttons>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<p desc>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>\n\t\t\t\t\t\t<ion-card class=\"ion-no-margin\">\n\t\t\t\t\t\t\t<ion-card-content class=\"ion-no-padding\">\n\t\t\t\t\t\t\t\t<div commentcounts>\n\t\t\t\t\t\t\t\t\t<div posticons>\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" hearticon><ion-icon name=\"heart\"></ion-icon></a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><ion-icon name=\"chatbubble-outline\"></ion-icon></a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><ion-icon name=\"arrow-redo-outline\"></ion-icon></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t\t\t<ion-col size=\"8\" pl-0>\n\t\t\t\t\t\t\t\t\t\t\t<p>Liked <b>yanna_summer</b> and <b>12k more</b></p>\n\t\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"ion-text-right\" pr-0>\n\t\t\t\t\t\t\t\t\t\t\t<p>Comments  <b>15</b></p>\n\t\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\" class=\"ion-no-padding\"> \n\t\t\t\t\t\t\t\t\t<ion-avatar>\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/img2.jpg\" alt=\"\" />\n\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t\t\t\t<h2>Moa Rotunia . <span>2 min</span></h2>\n\t\t\t\t\t\t\t\t\t\t<p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>\n\t\t\t\t\t\t\t\t\t\t<div btns>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\">Like</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t</ion-card-content>\n\t\t\t\t\t\t</ion-card>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div postinner class=\"ion-padding\">\n\t\t\t\t\t\t<ion-item lines=\"none\" class=\"ion-no-padding\"> \n\t\t\t\t\t\t\t<ion-avatar>\n\t\t\t\t\t\t\t\t<img src=\"assets/img/bowl1.png\"/>\n\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t\t<h2 routerLink=\"/otherprofile\">Ineat Official <span>8 min</span></h2>\n\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t<ion-buttons slot=\"end\"><ion-icon name=\"ellipsis-vertical\"></ion-icon></ion-buttons>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<p desc>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>\n\t\t\t\t\t\t<ion-card class=\"ion-no-margin\">\n\t\t\t\t\t\t\t<ion-card-content class=\"ion-no-padding\">\n\t\t\t\t\t\t\t\t<div commentcounts>\n\t\t\t\t\t\t\t\t\t<div posticons>\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" hearticon><ion-icon name=\"heart\"></ion-icon></a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><ion-icon name=\"chatbubble-outline\"></ion-icon></a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><ion-icon name=\"arrow-redo-outline\"></ion-icon></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t\t\t<ion-col size=\"8\" pl-0>\n\t\t\t\t\t\t\t\t\t\t\t<p>Liked <b>yanna_summer</b> and <b>12k more</b></p>\n\t\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t\t<ion-col size=\"4\" class=\"ion-text-right\" pr-0>\n\t\t\t\t\t\t\t\t\t\t\t<p>Comments  <b>15</b></p>\n\t\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\" class=\"ion-no-padding\"> \n\t\t\t\t\t\t\t\t\t<ion-avatar>\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/img2.jpg\" alt=\"\" />\n\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t\t\t\t<h2>Moa Rotunia . <span>2 min</span></h2>\n\t\t\t\t\t\t\t\t\t\t<p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>\n\t\t\t\t\t\t\t\t\t\t<div btns>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\">Like</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t</ion-card-content>\n\t\t\t\t\t\t</ion-card>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div *ngSwitchCase=\"'mybowls'\">\n\t\t\t\t<ul mybowlsPage>\n\t\t\t\t\t<li routerLink=\"/bowl-details\">\n\t\t\t\t\t\t<span bowlimg><img src=\"assets/img/bowl1.png\" alt=\"\"> </span>\n\t\t\t\t\t\t<div ritBowl>\n\t\t\t\t\t\t\t<h4>Consulting</h4>\n\t\t\t\t\t\t\t<p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci...</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li routerLink=\"/bowl-details\">\n\t\t\t\t\t\t<span bowlimg><img src=\"assets/img/bowl2.png\" alt=\"\"> </span>\n\t\t\t\t\t\t<div ritBowl>\n\t\t\t\t\t\t\t<h4>Black Consultants</h4>\n\t\t\t\t\t\t\t<p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci...</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li routerLink=\"/bowl-details\">\n\t\t\t\t\t\t<span bowlimg><img src=\"assets/img/bowl1.png\" alt=\"\"> </span>\n\t\t\t\t\t\t<div ritBowl>\n\t\t\t\t\t\t\t<h4>All Things MBB</h4>\n\t\t\t\t\t\t\t<p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci...</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li routerLink=\"/bowl-details\">\n\t\t\t\t\t\t<span bowlimg><img src=\"assets/img/bowl2.png\" alt=\"\"> </span>\n\t\t\t\t\t\t<div ritBowl>\n\t\t\t\t\t\t\t<h4>Consulting Exit Oppo...</h4>\n\t\t\t\t\t\t\t<p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci...</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\n\t\t\t<div *ngSwitchCase=\"'explore'\">\n\t\t\t\t<ul mybowlsPage explorePage>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<span bowlimg><img src=\"assets/img/bowl1.png\" alt=\"\"> <label> <ion-icon name=\"people\"></ion-icon> 99,583</label> </span>\n\t\t\t\t\t\t<div ritBowl>\n\t\t\t\t\t\t\t<h4>Startup and Entrepreneurship</h4>\n\t\t\t\t\t\t\t<p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci...</p>\n\t\t\t\t\t\t\t<ion-button btn-join>Join</ion-button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<span bowlimg><img src=\"assets/img/bowl2.png\" alt=\"\"> <label> <ion-icon name=\"people\"></ion-icon> 99,583</label> </span>\n\t\t\t\t\t\t<div ritBowl>\n\t\t\t\t\t\t\t<h4>Startup and Entrepreneurship</h4>\n\t\t\t\t\t\t\t<p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci...</p>\n\t\t\t\t\t\t\t<ion-button btn-join>Join</ion-button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<span bowlimg><img src=\"assets/img/bowl1.png\" alt=\"\"> <label> <ion-icon name=\"people\"></ion-icon> 99,583</label> </span>\n\t\t\t\t\t\t<div ritBowl>\n\t\t\t\t\t\t\t<h4>Startup and Entrepreneurship</h4>\n\t\t\t\t\t\t\t<p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci...</p>\n\t\t\t\t\t\t\t<ion-button btn-join>Join</ion-button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<span bowlimg><img src=\"assets/img/bowl2.png\" alt=\"\"> <label> <ion-icon name=\"people\"></ion-icon> 99,583</label> </span>\n\t\t\t\t\t\t<div ritBowl>\n\t\t\t\t\t\t\t<h4>Startup and Entrepreneurship</h4>\n\t\t\t\t\t\t\t<p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci...</p>\n\t\t\t\t\t\t\t<ion-button btn-join>Join</ion-button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<span bowlimg><img src=\"assets/img/bowl1.png\" alt=\"\"> <label> <ion-icon name=\"people\"></ion-icon> 99,583</label> </span>\n\t\t\t\t\t\t<div ritBowl>\n\t\t\t\t\t\t\t<h4>Startup and Entrepreneurship</h4>\n\t\t\t\t\t\t\t<p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci...</p>\n\t\t\t\t\t\t\t<ion-button btn-join>Join</ion-button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\n</ion-content>\n";
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


      __webpack_exports__["default"] = "ion-segment {\n  border-radius: 14px;\n  background: transparent;\n  border: 1px solid #f3f3f3;\n  box-shadow: none;\n}\n\nion-segment ion-segment-button {\n  --border-radius:14px;\n  color: #888;\n}\n\nion-segment ion-segment-button.segment-button-checked {\n  --indicator-box-shadow:none;\n  --indicator-color:var(--ion-color-secondary);\n  color: #fff;\n}\n\nion-segment ion-segment-button h6 {\n  margin: 10px 0;\n  font-size: 13px;\n}\n\n[padding] {\n  padding-bottom: 0;\n}\n\nul[mybowlsPage] {\n  list-style: none;\n  padding: 0px 20px 20px;\n  margin: 0;\n}\n\nul[mybowlsPage] li {\n  display: flex;\n  align-items: center;\n  margin: 0px 0 0;\n  padding: 15px 0;\n  border-bottom: 1px solid #eee;\n}\n\nul[mybowlsPage] li [bowlimg] {\n  margin-right: 20px;\n}\n\nul[mybowlsPage] li [bowlimg] img {\n  width: 90px;\n  min-width: 90px;\n  height: 90px;\n  border-radius: 15px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nul[mybowlsPage] li h4 {\n  font-size: 16px;\n  font-weight: 500;\n  margin: 0 0 5px;\n}\n\nul[mybowlsPage] li p {\n  font-size: 13px;\n  color: #888;\n  margin: 0;\n}\n\nul[mybowlsPage][explorePage] li {\n  align-items: flex-start;\n}\n\nul[mybowlsPage][explorePage] li [bowlimg] label {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  color: var(--ion-color-secondary);\n}\n\nul[mybowlsPage][explorePage] li [bowlimg] label ion-icon {\n  margin-right: 5px;\n}\n\nul[mybowlsPage][explorePage] li [btn-join] {\n  --padding-start:30px;\n  --padding-end:30px;\n  font-size: 12px;\n  margin: 15px 0 0;\n  min-height: 20px;\n  height: 34px;\n}\n\n[posts] [postinner] {\n  background: var(--ion-color-black);\n  border-bottom: 7px solid #eee;\n  padding: 10px 20px;\n}\n\n[posts] [postinner] [desc] {\n  margin-top: 0px;\n  line-height: 1.5;\n  font-size: 17px;\n  font-weight: 500;\n}\n\n[posts] [postinner] ion-item {\n  --inner-padding-end:0px;\n  --background:transparent;\n  overflow: visible;\n}\n\n[posts] [postinner] ion-item ion-avatar {\n  width: 40px;\n  height: 40px;\n}\n\n[posts] [postinner] ion-item ion-label {\n  margin-left: 10px;\n  margin-top: 0px;\n}\n\n[posts] [postinner] ion-item ion-label h2 {\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 3px;\n}\n\n[posts] [postinner] ion-item ion-label h2 span {\n  font-weight: 400;\n  font-size: 12px;\n}\n\n[posts] [postinner] ion-item ion-label h2 span:before {\n  content: \".\";\n  position: relative;\n  top: -3px;\n  font-size: 25px;\n  color: #666;\n  margin-right: 5px;\n}\n\n[posts] [postinner] ion-item ion-label ion-buttons {\n  background: var(--ion-color-primary);\n  color: var(--ion-color-white);\n  font-size: 12px;\n  padding: 4px 10px;\n  display: inline-block;\n  border-radius: 10px;\n}\n\n[posts] [postinner] ion-item ion-label ion-buttons ion-icon {\n  transform: translateY(1px);\n  margin-right: 3px;\n}\n\n[posts] [postinner] ion-item ion-buttons[slot=\"end\"] {\n  background: rgba(0, 0, 0, 0.05);\n  color: #C4C4C4;\n  border-radius: 50%;\n  padding: 6px;\n  font-size: 14px;\n}\n\n[posts] [postinner] ion-card {\n  background: transparent;\n  box-shadow: none;\n}\n\n[posts] [postinner] ion-card [postimg] img {\n  max-height: 250px;\n  min-height: 250px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  border-radius: 24px;\n}\n\n[posts] [postinner] ion-card ion-card-content [commentcounts] [posticons] a {\n  text-decoration: none;\n  font-size: 26px;\n  margin-right: 15px;\n  color: rgba(0, 0, 0, 0.3);\n}\n\n[posts] [postinner] ion-card ion-card-content [commentcounts] [posticons] a[hearticon] {\n  color: var(--ion-color-secondary);\n}\n\n[posts] [postinner] ion-card ion-card-content [commentcounts] [pl-0] {\n  padding-left: 0px;\n}\n\n[posts] [postinner] ion-card ion-card-content [commentcounts] [pr-0] {\n  padding-right: 0px;\n}\n\n[posts] [postinner] ion-card ion-card-content [commentcounts] p {\n  font-size: 12px;\n  line-height: 18px;\n  font-weight: 400;\n  color: #222;\n}\n\n[posts] [postinner] ion-card ion-card-content [commentcounts] p b {\n  font-weight: 600;\n}\n\n[posts] [postinner] ion-card ion-card-content ion-item {\n  align-items: start;\n  --inner-padding-end:0px;\n  --background:transparent;\n  overflow: visible;\n}\n\n[posts] [postinner] ion-card ion-card-content ion-item ion-avatar {\n  width: 35px;\n  height: 35px;\n  box-shadow: none;\n}\n\n[posts] [postinner] ion-card ion-card-content ion-item ion-label {\n  white-space: normal;\n  margin-left: 10px;\n}\n\n[posts] [postinner] ion-card ion-card-content ion-item ion-label [btns] a {\n  text-decoration: none;\n  font-size: 12px;\n  line-height: 18px;\n  font-weight: 600;\n  margin-right: 25px;\n  color: #222;\n}\n\n[posts] [postinner] ion-card ion-card-content ion-item ion-label h2 {\n  font-size: 13px;\n  font-weight: 600;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n[posts] [postinner] ion-card ion-card-content ion-item ion-label p {\n  font-size: 13px;\n  line-height: 20px;\n  font-weight: 400;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2ZlZWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsbUJBQWtCO0VBQ2xCLHVCQUFzQjtFQUN0Qix5QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2pCOztBQUxBO0VBTUUsb0JBQWdCO0VBQ2hCLFdBQVc7QUFHYjs7QUFWQTtFQVNHLDJCQUF1QjtFQUN2Qiw0Q0FBa0I7RUFDbEIsV0FBVztBQUtkOztBQWhCQTtFQWNHLGNBQWM7RUFDZCxlQUFlO0FBTWxCOztBQUVBO0VBSEMsaUJBQWlCO0FBS2xCOztBQUhBO0VBQ0MsZ0JBQWdCO0VBQ2hCLHNCQUFxQjtFQUNyQixTQUFRO0FBTVQ7O0FBVEE7RUFLRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWM7RUFDZCxlQUFjO0VBQ2QsNkJBQTRCO0FBUTlCOztBQWpCQTtFQVdHLGtCQUFpQjtBQVVwQjs7QUFyQkE7RUFhSSxXQUFVO0VBQ1YsZUFBYztFQUNkLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsb0JBQWlCO0tBQWpCLGlCQUFpQjtBQVlyQjs7QUE3QkE7RUFxQkcsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFjO0FBWWpCOztBQW5DQTtFQTBCRyxlQUFlO0VBQ2YsV0FBVztFQUNYLFNBQVE7QUFhWDs7QUF6Q0E7RUFpQ0csdUJBQXVCO0FBWTFCOztBQTdDQTtFQW9DSyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUNBQWlDO0FBYXRDOztBQXJEQTtFQTBDTSxpQkFBZ0I7QUFldEI7O0FBekRBO0VBK0NJLG9CQUFnQjtFQUNoQixrQkFBYztFQUNkLGVBQWU7RUFDZixnQkFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBY2hCOztBQUVBO0VBUkUsa0NBQWlDO0VBQ2pDLDZCQUE0QjtFQUM1QixrQkFBaUI7QUFVbkI7O0FBRUE7RUFWRyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWM7RUFDZCxnQkFBZTtBQVlsQjs7QUFFQTtFQVhHLHVCQUFvQjtFQUNwQix3QkFBYTtFQUNiLGlCQUFnQjtBQWFuQjs7QUFFQTtFQWJJLFdBQVc7RUFDWCxZQUFZO0FBZWhCOztBQUVBO0VBZEksaUJBQWdCO0VBQ2hCLGVBQWM7QUFnQmxCOztBQUVBO0VBaEJLLGVBQWM7RUFDZCxnQkFBZTtFQWFmLGtCQUFpQjtBQU10Qjs7QUFFQTtFQW5CTSxnQkFBZTtFQUNmLGVBQWM7QUFxQnBCOztBQUVBO0VBckJPLFlBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGVBQWU7RUFDZixXQUFXO0VBQ1gsaUJBQWdCO0FBdUJ2Qjs7QUFFQTtFQW5CTSxvQ0FBb0M7RUFDcEMsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQXFCekI7O0FBRUE7RUFyQk8sMEJBQTBCO0VBQzFCLGlCQUFnQjtBQXVCdkI7O0FBRUE7RUFwQkssK0JBQTRCO0VBQzVCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7QUFzQnBCOztBQUVBO0VBcEJJLHVCQUFzQjtFQUN0QixnQkFBZ0I7QUFzQnBCOztBQUVBO0VBckJNLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsb0JBQWdCO0tBQWhCLGlCQUFnQjtFQUNoQixXQUFVO0VBQ1YsbUJBQWtCO0FBdUJ4Qjs7QUFFQTtFQWxCUSxxQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGtCQUFpQjtFQUNqQix5QkFBb0I7QUFvQjVCOztBQUVBO0VBbkJTLGlDQUFnQztBQXFCekM7O0FBRUE7RUFsQk8saUJBQWdCO0FBb0J2Qjs7QUFFQTtFQW5CTyxrQkFBaUI7QUFxQnhCOztBQUVBO0VBcEJPLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWU7RUFDZixXQUFXO0FBc0JsQjs7QUFFQTtFQXRCUSxnQkFBZTtBQXdCdkI7O0FBRUE7RUFuQk0sa0JBQWtCO0VBQ2xCLHVCQUFvQjtFQUNwQix3QkFBYTtFQUNiLGlCQUFnQjtBQXFCdEI7O0FBRUE7RUFyQk8sV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZTtBQXVCdEI7O0FBRUE7RUF0Qk8sbUJBQWtCO0VBQ2xCLGlCQUFnQjtBQXdCdkI7O0FBRUE7RUF2QlMscUJBQW9CO0VBQ3BCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsV0FBVztBQXlCcEI7O0FBRUE7RUF2QlEsZUFBYztFQUNkLGdCQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFpQjtBQXlCekI7O0FBRUE7RUF4QlEsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZTtBQTBCdkIiLCJmaWxlIjoiZmVlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VnbWVudHtcclxuXHRib3JkZXItcmFkaXVzOjE0cHg7XHJcblx0YmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuXHRib3JkZXI6MXB4IHNvbGlkICNmM2YzZjM7XHJcblx0Ym94LXNoYWRvdzogbm9uZTsgXHJcblx0aW9uLXNlZ21lbnQtYnV0dG9ue1xyXG5cdFx0LS1ib3JkZXItcmFkaXVzOjE0cHg7XHJcblx0XHRjb2xvcjogIzg4ODtcclxuXHRcdCYuc2VnbWVudC1idXR0b24tY2hlY2tlZHtcclxuXHRcdFx0LS1pbmRpY2F0b3ItYm94LXNoYWRvdzpub25lO1xyXG5cdFx0XHQtLWluZGljYXRvci1jb2xvcjp2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuXHRcdFx0Y29sb3I6ICNmZmY7IFxyXG5cdFx0fVxyXG5cdFx0aDZ7XHJcblx0XHRcdG1hcmdpbjogMTBweCAwO1xyXG5cdFx0XHRmb250LXNpemU6IDEzcHg7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbltwYWRkaW5nXXtcclxuXHRwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG51bFtteWJvd2xzUGFnZV17XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHRwYWRkaW5nOjBweCAyMHB4IDIwcHg7XHJcblx0bWFyZ2luOjA7XHJcblx0bGl7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdG1hcmdpbjowcHggMCAwO1xyXG5cdFx0cGFkZGluZzoxNXB4IDA7XHJcblx0XHRib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZWVlO1xyXG5cdFx0W2Jvd2xpbWdde1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6MjBweDtcclxuXHRcdFx0aW1ne1xyXG5cdFx0XHRcdHdpZHRoOjkwcHg7XHJcblx0XHRcdFx0bWluLXdpZHRoOjkwcHg7XHJcblx0XHRcdFx0aGVpZ2h0OiA5MHB4O1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcblx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGg0e1xyXG5cdFx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdG1hcmdpbjowIDAgNXB4O1xyXG5cdFx0fVxyXG5cdFx0cHtcclxuXHRcdFx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdFx0XHRjb2xvcjogIzg4ODtcclxuXHRcdFx0bWFyZ2luOjA7XHJcblx0XHR9XHJcblx0fVxyXG5cdCZbZXhwbG9yZVBhZ2Vde1xyXG5cdFx0bGl7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cdFx0XHRbYm93bGltZ117XHJcblx0XHRcdFx0bGFiZWx7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG5cdFx0XHRcdFx0aW9uLWljb257XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDo1cHg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdFtidG4tam9pbl17XHJcblx0XHRcdFx0LS1wYWRkaW5nLXN0YXJ0OjMwcHg7XHJcblx0XHRcdFx0LS1wYWRkaW5nLWVuZDozMHB4O1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdFx0XHRtYXJnaW46MTVweCAwIDA7XHJcblx0XHRcdFx0bWluLWhlaWdodDogMjBweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDM0cHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbltwb3N0c117XHJcblx0W3Bvc3Rpbm5lcl17XHJcblx0XHRiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1ibGFjayk7XHJcblx0XHRib3JkZXItYm90dG9tOjdweCBzb2xpZCAjZWVlO1xyXG5cdFx0cGFkZGluZzoxMHB4IDIwcHg7XHJcblx0XHRbZGVzY117ICBcclxuXHRcdFx0bWFyZ2luLXRvcDogMHB4O1xyXG5cdFx0XHRsaW5lLWhlaWdodDogMS41O1xyXG5cdFx0XHRmb250LXNpemU6MTdweDtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6NTAwO1xyXG5cdFx0fVxyXG5cdFx0aW9uLWl0ZW17XHJcblx0XHRcdC0taW5uZXItcGFkZGluZy1lbmQ6MHB4O1xyXG5cdFx0XHQtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcblx0XHRcdG92ZXJmbG93OnZpc2libGU7XHJcblx0XHRcdGlvbi1hdmF0YXJ7XHJcblx0XHRcdFx0d2lkdGg6IDQwcHg7XHJcblx0XHRcdFx0aGVpZ2h0OiA0MHB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlvbi1sYWJlbHtcclxuXHRcdFx0XHRtYXJnaW4tbGVmdDoxMHB4O1xyXG5cdFx0XHRcdG1hcmdpbi10b3A6MHB4O1xyXG5cdFx0XHRcdGgye1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOjE0cHg7XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDo1MDA7XHJcblx0XHRcdFx0XHRzcGFue1xyXG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDo0MDA7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZToxMnB4O1xyXG5cdFx0XHRcdFx0XHQmOmJlZm9yZXtcclxuXHRcdFx0XHRcdFx0XHRjb250ZW50OlwiLlwiO1xyXG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRcdFx0XHR0b3A6IC0zcHg7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyNXB4O1xyXG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjNjY2O1xyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDo1cHg7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206M3B4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aW9uLWJ1dHRvbnN7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuXHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogNHB4IDEwcHg7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRcdFx0XHRcdFx0aW9uLWljb257XHJcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OjNweDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpb24tYnV0dG9uc1tzbG90PVwiZW5kXCJde1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSgwLDAsMCwgLjA1KTtcclxuXHRcdFx0XHRcdGNvbG9yOiAjQzRDNEM0O1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdFx0cGFkZGluZzogNnB4O1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpb24tY2FyZHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG5cdFx0XHRcdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0XHRcdFx0W3Bvc3RpbWddeyBcclxuXHRcdFx0XHRcdGltZ3tcclxuXHRcdFx0XHRcdFx0bWF4LWhlaWdodDoyNTBweDtcclxuXHRcdFx0XHRcdFx0bWluLWhlaWdodDoyNTBweDtcclxuXHRcdFx0XHRcdFx0b2JqZWN0LWZpdDpjb3ZlcjtcclxuXHRcdFx0XHRcdFx0d2lkdGg6MTAwJTtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czoyNHB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpb24tY2FyZC1jb250ZW50e1xyXG5cdFx0XHRcdFx0W2NvbW1lbnRjb3VudHNde1xyXG5cdFx0XHRcdFx0XHRbcG9zdGljb25zXXtcclxuXHRcdFx0XHRcdFx0XHRhe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDI2cHg7XHJcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6MTVweDtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOnJnYmEoMCwwLDAsLjMpO1xyXG5cdFx0XHRcdFx0XHRcdFx0JltoZWFydGljb25dXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOnZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRbcGwtMF17XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1sZWZ0OjBweDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRbcHItMF17XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1yaWdodDowcHg7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0cHtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDE4cHg7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6NDAwO1xyXG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjMjIyO1xyXG5cdFx0XHRcdFx0XHRcdGJ7XHJcblx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDo2MDA7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlvbi1pdGVte1xyXG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogc3RhcnQ7XHJcblx0XHRcdFx0XHRcdC0taW5uZXItcGFkZGluZy1lbmQ6MHB4O1xyXG5cdFx0XHRcdFx0XHQtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcblx0XHRcdFx0XHRcdG92ZXJmbG93OnZpc2libGU7XHJcblx0XHRcdFx0XHRcdGlvbi1hdmF0YXJ7XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDM1cHg7XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAzNXB4O1xyXG5cdFx0XHRcdFx0XHRcdGJveC1zaGFkb3c6bm9uZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRpb24tbGFiZWx7XHJcblx0XHRcdFx0XHRcdFx0d2hpdGUtc3BhY2U6bm9ybWFsO1xyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OjEwcHg7XHJcblx0XHRcdFx0XHRcdFx0W2J0bnNde1xyXG5cdFx0XHRcdFx0XHRcdFx0YXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDE4cHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OjYwMDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OjI1cHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjMjIyO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRoMntcclxuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZToxM3B4O1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6NjAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogNXB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTo1cHg7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHB7XHJcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEzcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRcdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OjQwMDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0gICBcclxuXHR9ICJdfQ== */";
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

      var FeedPage = /*#__PURE__*/function () {
        function FeedPage() {
          _classCallCheck(this, FeedPage);

          this.tabs = "feed";
        }

        _createClass(FeedPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FeedPage;
      }();

      FeedPage.ctorParameters = function () {
        return [];
      };

      FeedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-feed',
        template: _raw_loader_feed_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_feed_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FeedPage);
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