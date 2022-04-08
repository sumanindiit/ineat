(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"], {
    /***/
    "AHrv":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function AHrv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-tabs>\n    <ion-tab-bar slot=\"bottom\">\n\t\t<ion-tab-button tab=\"home\">\n\t\t\t<ion-icon name=\"home-outline\"></ion-icon>\n\t\t</ion-tab-button>\n\t\t<ion-tab-button tab=\"feed\">\n\t\t\t<ion-icon name=\"person\"></ion-icon>\n\t\t</ion-tab-button>\n\t\t<ion-tab-button tab=\"\">\n\t\t\t<ion-icon name=\"bag-handle-outline\"></ion-icon>\n\t\t</ion-tab-button>\n\t\t<ion-tab-button tab=\"notifications\">\n\t\t\t<ion-icon name=\"hand-right-outline\"></ion-icon>\n\t\t</ion-tab-button>\n\t\t<ion-tab-button tab=\"settings\" home>\n\t\t\t<ion-icon name=\"settings-outline\"></ion-icon>\n\t\t</ion-tab-button>\n    </ion-tab-bar>\n</ion-tabs>";
      /***/
    },

    /***/
    "MJr+":
    /*!***********************************!*\
      !*** ./src/app/tabs/tabs.page.ts ***!
      \***********************************/

    /*! exports provided: TabsPage */

    /***/
    function MJr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
        return TabsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tabs.page.html */
      "AHrv");
      /* harmony import */


      var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tabs.page.scss */
      "PkIa");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TabsPage = function TabsPage() {
        _classCallCheck(this, TabsPage);
      };

      TabsPage.ctorParameters = function () {
        return [];
      };

      TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TabsPage);
      /***/
    },

    /***/
    "PkIa":
    /*!*************************************!*\
      !*** ./src/app/tabs/tabs.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function PkIa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-tabs ion-tab-bar {\n  contain: initial !important;\n}\n\nion-tabs ion-tab-bar ion-tab-button {\n  border-top: 1px solid transparent;\n}\n\nion-tabs ion-tab-bar ion-tab-button ion-icon {\n  font-size: 30px;\n  color: #aaa;\n}\n\nion-tabs ion-tab-bar ion-tab-button.tab-selected {\n  border-color: var(--ion-color-primary);\n}\n\nion-tabs ion-tab-bar ion-tab-button.tab-selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSUUsMkJBQXlCO0FBRjNCOztBQUZBO0VBTUcsaUNBQWdDO0FBQW5DOztBQU5BO0VBUUksZUFBZTtFQUNmLFdBQVU7QUFFZDs7QUFYQTtFQVlJLHNDQUFzQztBQUcxQzs7QUFmQTtFQWVLLCtCQUErQjtBQUlwQyIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10YWJzXG57XG5cdGlvbi10YWItYmFyXG5cdHtcblx0XHRjb250YWluOmluaXRpYWwhaW1wb3J0YW50O1xuXHRcdGlvbi10YWItYnV0dG9ue1xuXHRcdFx0Ym9yZGVyLXRvcDoxcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdFx0XHRpb24taWNvbntcblx0XHRcdFx0Zm9udC1zaXplOiAzMHB4O1xuXHRcdFx0XHRjb2xvcjojYWFhO1xuXHRcdFx0fVxuXHRcdFx0Ji50YWItc2VsZWN0ZWR7XG5cdFx0XHRcdGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXHRcdFx0XHRpb24taWNvbiBcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG5cdFx0XHRcdH1cdFxuXHRcdFx0fVxuXG5cdFx0fVxuXHR9XG59XG5cblxuIl19 */";
      /***/
    },

    /***/
    "hO9l":
    /*!*************************************!*\
      !*** ./src/app/tabs/tabs.module.ts ***!
      \*************************************/

    /*! exports provided: TabsPageModule */

    /***/
    function hO9l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
        return TabsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tabs-routing.module */
      "kB8F");
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tabs.page */
      "MJr+");

      var TabsPageModule = function TabsPageModule() {
        _classCallCheck(this, TabsPageModule);
      };

      TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
      })], TabsPageModule);
      /***/
    },

    /***/
    "kB8F":
    /*!*********************************************!*\
      !*** ./src/app/tabs/tabs-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: TabsPageRoutingModule */

    /***/
    function kB8F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
        return TabsPageRoutingModule;
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


      var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tabs.page */
      "MJr+");

      var routes = [{
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [{
          path: 'home',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | home-home-module */
            [__webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
            /*! ../home/home.module */
            "ct+p")).then(function (m) {
              return m.HomePageModule;
            });
          }
        }, {
          path: 'feed',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | feed-feed-module */
            [__webpack_require__.e("common"), __webpack_require__.e("feed-feed-module")]).then(__webpack_require__.bind(null,
            /*! ../feed/feed.module */
            "xQww")).then(function (m) {
              return m.FeedPageModule;
            });
          }
        }, {
          path: 'notifications',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | notifications-notifications-module */
            "notifications-notifications-module").then(__webpack_require__.bind(null,
            /*! ../notifications/notifications.module */
            "wMrW")).then(function (m) {
              return m.NotificationsPageModule;
            });
          }
        }, // {
        //   path: 'search',
        //   loadChildren: () => import('../search/search.module').then(m => m.SearchPageModule)
        // },	
        {
          path: 'settings',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | settings-settings-module */
            "settings-settings-module").then(__webpack_require__.bind(null,
            /*! ../settings/settings.module */
            "7wo0")).then(function (m) {
              return m.SettingsPageModule;
            });
          }
        }, {
          path: '',
          redirectTo: '/tabs/home',
          pathMatch: 'full'
        }]
      }, {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }];

      var TabsPageRoutingModule = function TabsPageRoutingModule() {
        _classCallCheck(this, TabsPageRoutingModule);
      };

      TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]
      })], TabsPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tabs-tabs-module-es5.js.map