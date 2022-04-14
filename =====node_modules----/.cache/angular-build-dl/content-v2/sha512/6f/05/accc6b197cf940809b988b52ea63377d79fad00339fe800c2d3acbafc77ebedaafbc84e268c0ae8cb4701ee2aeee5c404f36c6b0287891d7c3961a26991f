(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"], {
    /***/
    "6h0i":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function h0i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<h3>{{ stepTitle }}</h3>\n\t<ul steps>\n\t\t<li class=\"active\">\n\t\t\t<ion-icon name=\"checkmark\"></ion-icon>\n\t\t</li>\n\t\t<li [ngClass]=\"{'active': active1 === 'step1'}\">\n\t\t\t<ion-icon name=\"checkmark\"></ion-icon>\n\t\t</li>\n\t\t<li [ngClass]=\"{'active': active2 === 'step2'}\">\n\t\t\t<ion-icon name=\"checkmark\"></ion-icon>\n\t\t</li>\n\t\t<li [ngClass]=\"{'active': active3 === 'step3'}\"></li>\n\t\t<li #active4></li>\n\t</ul>\n</ion-header>\n\n<ion-content botmbg>\n\t<div slideBox>\n\t\t<ion-slides #mySlider>\n\t\t\t<ion-slide>\n\t\t\t\t<div padding>\n\t\t\t\t\t<h4 title>Let’s find your perfect menu. Are you living with a medical condition?</h4>\n\n\n\t\t\t\t\t<ul groupRadio radio-group ngDefaultControl [(ngModel)]=\"diseaseSuffer\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<input id=\"yes\" type=\"radio\" value=\"Yes\" name=\"disease-suffer\"\n\t\t\t\t\t\t\t\t[checked]=\"this.diseaseSuffer==='Yes'\">\n\t\t\t\t\t\t\t<label for=\"yes\"><span></span> Yes</label>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<input id=\"no\" type=\"radio\" value=\"No\" name=\"disease-suffer\"\n\t\t\t\t\t\t\t\t[checked]=\"this.diseaseSuffer==='No'\">\n\t\t\t\t\t\t\t<label for=\"no\"><span></span> No</label>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"selectDiseaseError\">\n\t\t\t\t\t\t<ion-label no-margin stacked>Please select at least one option.</ion-label>\n\t\t\t\t\t</ion-item>\n\n\t\t\t\t\t<ion-button (click)=\"swipeNext($event)\" btncontinue>Continue <ion-icon name=\"arrow-forward-outline\">\n\t\t\t\t\t\t</ion-icon>\n\t\t\t\t\t</ion-button>\n\n\t\t\t\t</div>\n\t\t\t</ion-slide>\n\t\t\t<ion-slide>\n\t\t\t\t<div padding>\n\t\t\t\t\t<h4 title>What illness are you living with?</h4>\n\t\t\t\t\t<ul groupRadio radio-group ngDefaultControl [(ngModel)]=\"illnesSufferFrom\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<input id=\"dia\" type=\"radio\" value=\"1\" name=\"sufferfrom\"\n\t\t\t\t\t\t\t\t[checked]=\"this.illnesSufferFrom==='1'\">\n\t\t\t\t\t\t\t<label for=\"dia\"><span></span> I have diabetes</label>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<input id=\"coe\" type=\"radio\" value=\"2\" name=\"sufferfrom\"\n\t\t\t\t\t\t\t\t[checked]=\"this.illnesSufferFrom==='2'\">\n\t\t\t\t\t\t\t<label for=\"coe\"><span></span> I’m Coeliac</label>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<input id=\"coro\" type=\"radio\" value=\"3\" name=\"sufferfrom\"\n\t\t\t\t\t\t\t\t[checked]=\"this.illnesSufferFrom==='3'\">\n\t\t\t\t\t\t\t<label for=\"coro\"><span></span>I have coronary heart disease</label>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<input id=\"gut\" type=\"radio\" value=\"5\" name=\"sufferfrom\"\n\t\t\t\t\t\t\t\t[checked]=\"this.illnesSufferFrom==='5'\">\n\t\t\t\t\t\t\t<label for=\"gut\"><span></span> IBS & IBD</label>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<input id=\"other\" type=\"radio\" value=\"6\" name=\"sufferfrom\"\n\t\t\t\t\t\t\t\t[checked]=\"this.illnesSufferFrom==='6'\">\n\t\t\t\t\t\t\t<label for=\"other\"><span></span> Other</label>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"diseaseError\">\n\t\t\t\t\t\t<ion-label no-margin stacked>Please select at least one disease.</ion-label>\n\t\t\t\t\t</ion-item>\n\n\t\t\t\t\t<ion-button (click)=\"swipePrevious($event)\" btnback>\n\t\t\t\t\t\t<ion-icon name=\"arrow-back-outline\"></ion-icon>\n\t\t\t\t\t</ion-button>\n\t\t\t\t\t<ion-button (click)=\"swipeNext()\" btncontinue>Continue <ion-icon name=\"arrow-forward-outline\">\n\t\t\t\t\t\t</ion-icon>\n\t\t\t\t\t</ion-button>\n\t\t\t\t</div>\n\t\t\t</ion-slide>\n\t\t\t<ion-slide>\n\t\t\t\t<div padding>\n\t\t\t\t\t<h4 title>Tell us how you prefer to eat</h4>\n\t\t\t\t\t<ul groupRadio radio-group ngDefaultControl [(ngModel)]=\"userPreference\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<input id=\"vege\" type=\"radio\" value=\"2\" name=\"preference\"\n\t\t\t\t\t\t\t\t[checked]=\"this.userPreference==='2'\">\n\t\t\t\t\t\t\t<label for=\"vege\"><span></span> Vegetarian</label>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<input id=\"meat\" type=\"radio\" value=\"1\" name=\"preference\"\n\t\t\t\t\t\t\t\t[checked]=\"this.userPreference==='1'\">\n\t\t\t\t\t\t\t<label for=\"meat\"><span></span> Meat and Vegetables</label>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"preferenceError\">\n\t\t\t\t\t\t<ion-label no-margin stacked>Please select at least one preference.</ion-label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-button (click)=\"swipePrevious($event)\" btnback>\n\t\t\t\t\t\t<ion-icon name=\"arrow-back-outline\"></ion-icon>\n\t\t\t\t\t</ion-button>\n\t\t\t\t\t<ion-button (click)=\"swipeNext()\" btncontinue>Continue <ion-icon name=\"arrow-forward-outline\">\n\t\t\t\t\t\t</ion-icon>\n\t\t\t\t\t</ion-button>\n\t\t\t\t</div>\n\t\t\t</ion-slide>\n\t\t\t<ion-slide>\n\t\t\t\t<div padding>\n\t\t\t\t\t<label>Choose your plan preferece</label>\n\t\t\t\t\t<ion-segment mode=\"ios\" [(ngModel)]=\"tabs\" segment>\n\t\t\t\t\t\t<ng-container *ngFor=\"let data of planData\">\n\t\t\t\t\t\t\t<ion-segment-button value=\"{{ data.planId }}\" class=\"\"\n\t\t\t\t\t\t\t\t(click)=\"planChanged($event, data.pricePerMeal)\">\n\t\t\t\t\t\t\t\t<h6>{{ data.boxCategory }}</h6>\n\t\t\t\t\t\t\t</ion-segment-button>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</ion-segment>\n\t\t\t\t\t<div form-group>\n\t\t\t\t\t\t<label>How many people are eating?</label>\n\t\t\t\t\t\t<ul groupRadio flexRow radio-group ngDefaultControl [(ngModel)]=\"noOfPeople\">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<input id=\"peo1\" type=\"radio\" value=\"1\" (click)=\"planChanged($event, selectBoxPrice)\"\n\t\t\t\t\t\t\t\t\tname=\"people\" checked>\n\t\t\t\t\t\t\t\t<label for=\"peo1\"><span></span> 1</label>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<input id=\"peo2\" type=\"radio\" value=\"2\" name=\"people\"\n\t\t\t\t\t\t\t\t\t(click)=\"planChanged($event, selectBoxPrice)\">\n\t\t\t\t\t\t\t\t<label for=\"peo2\"><span></span> 2</label>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<input id=\"peo3\" type=\"radio\" value=\"3\" name=\"people\"\n\t\t\t\t\t\t\t\t\t(click)=\"planChanged($event, selectBoxPrice)\">\n\t\t\t\t\t\t\t\t<label for=\"peo3\"><span></span> 3</label>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<input id=\"peo3\" type=\"radio\" value=\"4\" name=\"people\"\n\t\t\t\t\t\t\t\t\t(click)=\"planChanged($event, selectBoxPrice)\">\n\t\t\t\t\t\t\t\t<label for=\"peo3\"><span></span>4</label>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div form-group>\n\t\t\t\t\t\t<label>How many mealtimes is it for?</label>\n\t\t\t\t\t\t<ul groupRadio flexRow radio-group ngDefaultControl [(ngModel)]=\"recepiesSelect\">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<input id=\"recipesweek1\" type=\"radio\" value=\"3\"\n\t\t\t\t\t\t\t\t\t(click)=\"planChanged($event, selectBoxPrice)\" name=\"recipesweek\" >\n\t\t\t\t\t\t\t\t<label for=\"recipesweek1\"><span></span> 3</label>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<input id=\"recipesweek4\" type=\"radio\" value=\"4\"\n\t\t\t\t\t\t\t\t\t(click)=\"planChanged($event, selectBoxPrice)\" name=\"recipesweek\" checked>\n\t\t\t\t\t\t\t\t<label for=\"recipesweek4\"><span></span> 4</label>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<input id=\"recipesweek2\" type=\"radio\" value=\"5\" name=\"recipesweek\"\n\t\t\t\t\t\t\t\t\t(click)=\"planChanged($event, selectBoxPrice)\">\n\t\t\t\t\t\t\t\t<label for=\"recipesweek2\"><span></span> 5</label>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<input id=\"recipesweek3\" type=\"radio\" value=\"6\" name=\"recipesweek\"\n\t\t\t\t\t\t\t\t\t(click)=\"planChanged($event, selectBoxPrice)\">\n\t\t\t\t\t\t\t\t<label for=\"recipesweek3\"><span></span> 6</label>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div form-group>\n\t\t\t\t\t\t<label>Both type</label>\n\t\t\t\t\t\t<p>{{ recepiesSlect }} meals for {{ peopleSelect }} people per week<br>\n\t\t\t\t\t\t\t{{ totalServing }} servings at £{{ selectBoxPrice }} per serving.</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div form-group subtotal>\n\t\t\t\t\t\t<p>Box Price <span>£{{ totalPrice }}</span></p>\n\t\t\t\t\t\t<p>Shipping <span>£{{ shippingPrice }}</span></p>\n\t\t\t\t\t\t<p><b>First Box Total </b><span><b>£{{ finalPrice }}</b></span></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<ion-button (click)=\"swipePrevious($event)\" btnback>\n\t\t\t\t\t<ion-icon name=\"arrow-back-outline\"></ion-icon>\n\t\t\t\t</ion-button>\n\t\t\t\t<ion-button btncontinue (click)=\"swipeNext($event)\">Continue <ion-icon name=\"arrow-forward-outline\">\n\t\t\t\t\t</ion-icon>\n\t\t\t\t</ion-button>\n\t\t\t</ion-slide>\n\t\t\t<ion-slide>\n\t\t\t\t<div padding widthfull>\n\t\t\t\t\t<form>\n\t\t\t\t\t\t<ion-label>Username</ion-label>\n\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t<ion-input name=\"username\" type=\"text\" [(ngModel)]=\"userName\" placeholder=\"Username\">\n\t\t\t\t\t\t\t</ion-input>\n\t\t\t\t\t\t</ion-item>\n\n\t\t\t\t\t\t<ion-label>Password</ion-label>\n\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t<ion-input name=\"password\" paswd type=\"password\" [(ngModel)]=\"password\"\n\t\t\t\t\t\t\t\tplaceholder=\"Password\">\n\t\t\t\t\t\t\t</ion-input>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" showpas>Show</a>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"registerError\">\n\t\t\t\t\t\t\t<ion-label no-margin stacked>Please fill above details.</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-button btn-login (click)=\"swipeNext($event)\">Continue <ion-icon\n\t\t\t\t\t\t\t\tname=\"arrow-forward-outline\"></ion-icon>\n\t\t\t\t\t\t</ion-button>\n\n\t\t\t\t\t\t<small orlogin>or sign in with</small>\n\t\t\t\t\t\t<ul social>\n\t\t\t\t\t\t\t<li><a href=\"javascript:void(0)\"><img src=\"assets/img/google.svg\" alt=\"\"></a></li>\n\t\t\t\t\t\t\t<li><a href=\"javascript:void(0)\"><img src=\"assets/img/facebook.svg\" alt=\"\"></a></li>\n\t\t\t\t\t\t\t<li><a href=\"javascript:void(0)\"><img src=\"assets/img/apple.svg\" alt=\"\"></a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</form>\n\n\t\t\t\t\t<ion-button (click)=\"swipePrevious($event)\" btnback>\n\t\t\t\t\t\t<ion-icon name=\"arrow-back-outline\"></ion-icon>\n\t\t\t\t\t</ion-button>\n\t\t\t\t</div>\n\t\t\t</ion-slide>\n\t\t\t<ion-slide class=\"fullHight\">\n\t\t\t\t<div padding>\n\t\t\t\t\t<div readymeal>\n\t\t\t\t\t\t<span><img src=\"assets/img/img1.png\" alt=\"\"> </span>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<h5>Ready Meal</h5>\n\t\t\t\t\t\t\t<p>{{ recepiesSlect }} meals for {{ peopleSelect }} people per week<br>\n\t\t\t\t\t\t\t\t{{ totalServing }} servings at £{{ selectBoxPrice }} per serving</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div form-group subtotal>\n\t\t\t\t\t\t<p>Box Price <span>£{{ totalPrice }}</span></p>\n\t\t\t\t\t\t<p>Shipping <span>£{{ shippingPrice }}</span></p>\n\t\t\t\t\t\t<p><b>First Box Total </b><span><b>£{{ finalPrice }}</b></span></p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div billingDe>\n\t\t\t\t\t\t<h5 subhdng>Billing Details</h5>\n\n\t\t\t\t\t\t<div form-group>\n\t\t\t\t\t\t\t<ion-label>Name*</ion-label>\n\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"deliveryName\" type=\"text\" placeholder=\"\"></ion-input>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t<span class=\"error\" *ngIf=\"errors.indexOf(deliveryName) >= 0 && is_submit == true\">Please\n\t\t\t\t\t\t\t\tenter your name.</span>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div form-group>\n\t\t\t\t\t\t\t<ion-label>Surname</ion-label>\n\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"deliverySurname\" type=\"text\"></ion-input>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div form-group>\n\t\t\t\t\t\t\t<ion-label>Address Line 1*</ion-label>\n\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"deliveryAddressLine1\" type=\"text\"></ion-input>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t<span class=\"error\"\n\t\t\t\t\t\t\t\t*ngIf=\"errors.indexOf(deliveryAddressLine1) >= 0 && is_submit == true\">Please enter your\n\t\t\t\t\t\t\t\taddress.</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div form-group>\n\t\t\t\t\t\t\t<ion-label>Address Line 2*</ion-label>\n\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"deliveryAddressLine2\" type=\"text\"></ion-input>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t<span class=\"error\"\n\t\t\t\t\t\t\t\t*ngIf=\"errors.indexOf(deliveryAddressLine2) >= 0 && is_submit == true\">Please enter your\n\t\t\t\t\t\t\t\taddress.</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div form-group>\n\t\t\t\t\t\t\t<ion-label>Date Of Birth*</ion-label>\n\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t\t<ion-datetime [(ngModel)]=\"deliveryDob\" displayFormat=\"MM/DD\" placeholder=\"Select Date\">\n\t\t\t\t\t\t\t\t</ion-datetime>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t<span class=\"error\" *ngIf=\"errors.indexOf(deliveryDob) >= 0 && is_submit == true\">Please\n\t\t\t\t\t\t\t\tenter your DOB.</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div form-group>\n\t\t\t\t\t\t\t<ion-label>Additional Email</ion-label>\n\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"deliveryEmail\" type=\"email\"></ion-input>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t<span class=\"error\" *ngIf=\"errors.indexOf(deliveryEmail) >= 0 && is_submit == true\">Please\n\t\t\t\t\t\t\t\tenter your email address</span>\n\t\t\t\t\t\t\t<span class=\"error\"\n\t\t\t\t\t\t\t\t*ngIf=\"errors.indexOf(deliveryEmail) == -1 && is_submit == true && !reg_exp.test(deliveryEmail.toLowerCase())\">Please\n\t\t\t\t\t\t\t\tenter valid email address</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div form-group>\n\t\t\t\t\t\t\t<ion-label>City *</ion-label>\n\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"deliveryCity\" type=\"text\"></ion-input>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t<span class=\"error\" *ngIf=\"errors.indexOf(deliveryCity) >= 0 && is_submit == true\">Please\n\t\t\t\t\t\t\t\tenter your city.</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div form-group>\n\t\t\t\t\t\t\t<ion-label>Country *</ion-label>\n\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"deliveryCountry\" type=\"text\"></ion-input>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t<span class=\"error\" *ngIf=\"errors.indexOf(deliveryCountry) >= 0 && is_submit == true\">Please\n\t\t\t\t\t\t\t\tenter your country.</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div form-group>\n\t\t\t\t\t\t\t<ion-label>Postcode *</ion-label>\n\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"deliveryPostCode\" type=\"text\"></ion-input>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t<span class=\"error\"\n\t\t\t\t\t\t\t\t*ngIf=\"errors.indexOf(deliveryPostCode) >= 0 && is_submit == true\">Please enter your\n\t\t\t\t\t\t\t\tpostcode.</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div form-group>\n\t\t\t\t\t\t\t<ion-label>Phone *</ion-label>\n\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"deliveryPhone\" type=\"tel\"></ion-input>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t<span class=\"error\" *ngIf=\"errors.indexOf(deliveryPhone) >= 0 && is_submit == true\">Please\n\t\t\t\t\t\t\t\tenter your phonenumber.</span>\n\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div billAdrs>\n\t\t\t\t\t\t<h5 subhdng>Select Billing Address {{billingAddressValue}}</h5>\n\t\t\t\t\t\t<ion-radio-group value=\"{{billingAddressValue}}\" [(ngModel)]=\"billingAddressValue\"\n\t\t\t\t\t\t\tname=\"billingAddress\">\n\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t<ion-label>Use Delivery Address</ion-label>\n\t\t\t\t\t\t\t\t<ion-radio slot=\"start\" value=\"2\" (click)=\"showBillingAddressFn('no')\"\n\t\t\t\t\t\t\t\t\t[checked]=\"this.billingAddressValue==='2'\">\n\t\t\t\t\t\t\t\t</ion-radio>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t<ion-label>Add New Address</ion-label>\n\t\t\t\t\t\t\t\t<ion-radio slot=\"start\" value=\"1\" (click)=\"showBillingAddressFn('yes')\"\n\t\t\t\t\t\t\t\t\t[checked]=\"this.billingAddressValue==='1'\"></ion-radio>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t<span class=\"error\"\n\t\t\t\t\t\t\t\t*ngIf=\"errors.indexOf(billingAddressValue) >= 0 && is_submit == true\">Please\n\t\t\t\t\t\t\t\tenter your billing Address.</span>\n\t\t\t\t\t\t</ion-radio-group>\n\t\t\t\t\t\t<ng-container *ngIf=\"showBillingAddress\">\n\n\t\t\t\t\t\t\t<div form-group>\n\t\t\t\t\t\t\t\t<ion-label>Name*</ion-label>\n\t\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"billingName\" type=\"text\" placeholder=\"\"></ion-input>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<span class=\"error\" *ngIf=\"errors.indexOf(billingName) >= 0 && is_submit == true\">Please\n\t\t\t\t\t\t\t\t\tenter your name.</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div form-group>\n\t\t\t\t\t\t\t\t<ion-label>Surname</ion-label>\n\t\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"billingSurname\" type=\"text\"></ion-input>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div form-group>\n\t\t\t\t\t\t\t\t<ion-label>Address Line 1*</ion-label>\n\t\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"billingAddressLine1\" type=\"text\"></ion-input>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<span class=\"error\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"errors.indexOf(billingAddressLine1) >= 0 && is_submit == true\">Please enter\n\t\t\t\t\t\t\t\t\tyour address.</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div form-group>\n\t\t\t\t\t\t\t\t<ion-label>Address Line 2*</ion-label>\n\t\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"billingAddressLine2\" type=\"text\"></ion-input>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<span class=\"error\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"errors.indexOf(billingAddressLine2) >= 0 && is_submit == true\">Please enter\n\t\t\t\t\t\t\t\t\tyour address.</span>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div form-group>\n\t\t\t\t\t\t\t\t<ion-label>City *</ion-label>\n\t\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"billingCity\" type=\"text\"></ion-input>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<span class=\"error\" *ngIf=\"errors.indexOf(billingCity) >= 0 && is_submit == true\">Please\n\t\t\t\t\t\t\t\t\tenter your city.</span>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div form-group>\n\t\t\t\t\t\t\t\t<ion-label>Postcode *</ion-label>\n\t\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"billingPostCode\" type=\"text\"></ion-input>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<span class=\"error\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"errors.indexOf(billingPostCode) >= 0 && is_submit == true\">Please enter your\n\t\t\t\t\t\t\t\t\tpostcode.</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div form-group>\n\t\t\t\t\t\t\t\t<ion-label>Phone *</ion-label>\n\t\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"billingPhone\" type=\"tel\"></ion-input>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t<span class=\"error\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"errors.indexOf(billingPhone) >= 0 && is_submit == true\">Please enter your\n\t\t\t\t\t\t\t\t\tphone number.</span>\n\t\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div contactless>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<span><img src=\"assets/img/icon2.png\" alt=\"\"> </span>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<h5>Contactless Delivery</h5>\n\t\t\t\t\t\t\t\t\t<p>Boxes are delivered fast and safe</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<span><img src=\"assets/img/img1.png\" alt=\"\"> </span>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<h5>Green to the last mile</h5>\n\t\t\t\t\t\t\t\t\t<p>Green to the last mile</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"flexBTn\">\n\t\t\t\t\t\t<ion-button (click)=\"swipePrevious($event)\" btnback>\n\t\t\t\t\t\t\t<ion-icon name=\"arrow-back-outline\"></ion-icon>\n\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t<ion-button (click)=\"swipeNext($event)\" btncontinue>Continue <ion-icon\n\t\t\t\t\t\t\t\tname=\"arrow-forward-outline\">\n\t\t\t\t\t\t\t</ion-icon>\n\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-slide>\n\t\t\t<ion-slide class=\"fullHight\">\n\t\t\t\t<div padding>\n\t\t\t\t\t<div readymeal>\n\t\t\t\t\t\t<span><img src=\"assets/img/img1.png\" alt=\"\"> </span>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<h5>Ready Meal</h5>\n\t\t\t\t\t\t\t<p>{{ recepiesSlect }} meals for {{ peopleSelect }} people per week<br>\n\t\t\t\t\t\t\t\t{{ totalServing }} servings at £{{ selectBoxPrice }} per serving</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div form-group subtotal>\n\t\t\t\t\t\t<p>Box Price <span>£{{ totalPrice }}</span></p>\n\t\t\t\t\t\t<p>Shipping <span>£{{ shippingPrice }}</span></p>\n\t\t\t\t\t\t<p><b>First Box Total </b><span><b>£{{ finalPrice }}</b></span></p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div billingDe>\n\t\t\t\t\t\t<h5 subhdng>When do you want your delivery?</h5>\n\n\t\t\t\t\t\t<div deliveryDeta>\n\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t<ion-icon name=\"location\"></ion-icon>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<p>{{ deliveryAddressLine1 }}. <br>\n\t\t\t\t\t\t\t\t{{ deliveryCity}}, {{deliveryCountry}} {{ deliveryPostCode }}</p>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div form-group>\n\t\t\t\t\t\t\t<ion-label>Add Delivery Details</ion-label>\n\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t\t<ion-select interface=\"action-sheet\" [(ngModel)]=\"addressOptions\" placeholder=\"Choose\"\n\t\t\t\t\t\t\t\t\t#deliverySelect (ionChange)=\"onChangeDeliverySelect(deliverySelect.value)\">\n\t\t\t\t\t\t\t\t\t<ion-select-option value=\"1\">Want Delivery One day a Week</ion-select-option>\n\t\t\t\t\t\t\t\t\t<ion-select-option value=\"2\">Want Delivery Multiple days a Week</ion-select-option>\n\t\t\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t<span class=\"error\" *ngIf=\"errors.indexOf(addressOptions) >= 0 && is_submit == true\">\n\t\t\t\t\t\t\t\tPlease select at least one delivery option.\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div form-group>\n\t\t\t\t\t\t\t<ion-label>Date</ion-label>\n\t\t\t\t\t\t\t<ng-container *ngIf=\"!showdeliverySelect\">\n\t\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t\t\t<ion-datetime displayFormat=\"MM/DD/YYYY\" [min]=\"minDate\" [max]=\"maxDate\"\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"singleSelecteDate\"></ion-datetime>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t<ng-container *ngIf=\"showdeliverySelect\">\n\t\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t\t\t<ion-datetime displayFormat=\"MM/DD/YYYY\" (ionChange)=\"changeMinDate()\"\n\t\t\t\t\t\t\t\t\t\t[max]=\"maxDate\" [min]=\"minDate\" [(ngModel)]=\"multipleSelecteDate1\">\n\t\t\t\t\t\t\t\t\t</ion-datetime>\n\t\t\t\t\t\t\t\t</ion-item>\n\n\t\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t\t\t<ion-datetime displayFormat=\"MM/DD/YYYY\" [min]=\"multiMinDate\" [max]=\"maxDate\"\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"multipleSelecteDate2\"></ion-datetime>\n\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div form-group>\n\t\t\t\t\t\t\t<ion-label>Choose delivery instructions</ion-label>\n\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t\t<ion-select interface=\"action-sheet\" placeholder=\"Choose\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"deliveryInstructions\">\n\t\t\t\t\t\t\t\t\t<ion-select-option value=\"At front Door\">At front Door</ion-select-option>\n\t\t\t\t\t\t\t\t\t<ion-select-option value=\"At back Door\">At back Door</ion-select-option>\n\t\t\t\t\t\t\t\t\t<ion-select-option value=\"Concierge\">Concierge</ion-select-option>\n\t\t\t\t\t\t\t\t\t<ion-select-option value=\"Others\">Others</ion-select-option>\n\t\t\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t<span class=\"error\" *ngIf=\"errors.indexOf(deliveryInstructions) >= 0 && is_submit == true\">\n\t\t\t\t\t\t\t\tPlease select at least one delivery instructions.\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div contactless>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<span><img src=\"assets/img/icon2.png\" alt=\"\"> </span>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<h5>Contactless Delivery</h5>\n\t\t\t\t\t\t\t\t\t<p>Boxes are delivered fast and safe</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<span><img src=\"assets/img/img1.png\" alt=\"\"> </span>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<h5>Green to the last mile</h5>\n\t\t\t\t\t\t\t\t\t<p>Green to the last mile</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"flexBTn\">\n\t\t\t\t\t\t<ion-button (click)=\"swipePrevious($event)\" btnback>\n\t\t\t\t\t\t\t<ion-icon name=\"arrow-back-outline\"></ion-icon>\n\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t<ion-button (click)=\"swipeNext($event)\" btncontinue>Continue <ion-icon\n\t\t\t\t\t\t\t\tname=\"arrow-forward-outline\">\n\t\t\t\t\t\t\t</ion-icon>\n\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-slide>\n\t\t\t<ion-slide class=\"fullHight\">\n\t\t\t\t<div padding>\n\t\t\t\t\t<div readymeal>\n\t\t\t\t\t\t<span><img src=\"assets/img/img1.png\" alt=\"\"> </span>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<h5>Ready Meal</h5>\n\t\t\t\t\t\t\t<p>{{ recepiesSlect }} meals for {{ peopleSelect }} people per week<br>\n\t\t\t\t\t\t\t\t{{ totalServing }} servings at £{{ selectBoxPrice }} per serving</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div form-group subtotal>\n\t\t\t\t\t\t<p>Box Price <span>£{{ totalPrice }}</span></p>\n\t\t\t\t\t\t<p>Shipping <span>£{{ shippingPrice }}</span></p>\n\t\t\t\t\t\t<p><b>First Box Total </b><span><b>£{{ finalPrice }}</b></span></p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div billingDe inside style=\"margin-top:30px\">\n\t\t\t\t\t\t<h6>Card Details</h6>\n\t\t\t\t\t\t<p>InEat is a flexible subscription service. You can modify, pause, or cancel 4 days (5 in\n\t\t\t\t\t\t\tNorthern Ireland) before your next delivery.</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div billAdrs>\n\t\t\t\t\t\t<ion-radio-group value=\"biff\">\n\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t<ion-label>Add a credit or debit card</ion-label>\n\t\t\t\t\t\t\t\t<ion-radio slot=\"start\" value=\"biff\"></ion-radio>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t</ion-radio-group>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div form-group>\n\t\t\t\t\t\t<ion-label>Card Number*</ion-label>\n\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t<ion-input type=\"number\" [(ngModel)]=\"cardNumber\"></ion-input>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<span class=\"error\" *ngIf=\"errors.indexOf(cardNumber) >= 0 && is_submit == true\">\n\t\t\t\t\t\t\tPlease enter your card number.\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div form-group>\n\t\t\t\t\t\t<ion-label>Expiry Date*</ion-label>\n\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t<ion-datetime displayFormat=\"MM/YYYY\" [min]=\"minDate\" [max]=\"maxDate\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"cardExipryDate\"></ion-datetime>\n\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<span class=\"error\" *ngIf=\"errors.indexOf(cardExipryDate) >= 0 && is_submit == true\">\n\t\t\t\t\t\t\tPlease enter your card expiry date.\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div form-group>\n\t\t\t\t\t\t<ion-label>Security Code*(?)</ion-label>\n\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t<ion-input type=\"text\" [(ngModel)]=\"cardCvv\"></ion-input>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<span class=\"error\" *ngIf=\"errors.indexOf(cardCvv) >= 0 && is_submit == true\">\n\t\t\t\t\t\t\tPlease enter your card cvv.\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div billAdrs mt-3>\n\t\t\t\t\t\t<ion-radio-group value=\"biff\">\n\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t<ion-label>I accept the terms and conditions and I have read the privacy policy.\n\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t<ion-checkbox slot=\"start\" value=\"1\" [(ngModel)]=\"termsChecked\"></ion-checkbox>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t<span class=\"error\" *ngIf=\"termsChecked == false && is_submit == true\">\n\t\t\t\t\t\t\t\tPlease accept ours terms and conditions.\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t\t<ion-label>Yes, I'd like exclusive offers, competitions and news emailed to me.\n\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t<ion-checkbox slot=\"start\" value=\"1\" [(ngModel)]=\"offersChecked\"></ion-checkbox>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t</ion-radio-group>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div contactless>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<span><img src=\"assets/img/icon2.png\" alt=\"\"> </span>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<h5>Save Money</h5>\n\t\t\t\t\t\t\t\t\t<p>Spend less on dinner every week</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<span><img src=\"assets/img/img1.png\" alt=\"\"> </span>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<h5>Flexible, No Lock-In Plans</h5>\n\t\t\t\t\t\t\t\t\t<p>Skip, pause or cancel anytime</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"flexBTn\">\n\t\t\t\t\t\t<ion-button (click)=\"swipePrevious($event)\" btnback>\n\t\t\t\t\t\t\t<ion-icon name=\"arrow-back-outline\"></ion-icon>\n\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t<ion-button (click)=\"swipeNext($event)\" btncontinue>Continue <ion-icon\n\t\t\t\t\t\t\t\tname=\"arrow-forward-outline\">\n\t\t\t\t\t\t\t</ion-icon>\n\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-slide>\n\n\t\t</ion-slides>\n\t</div>\n</ion-content>";
      /***/
    },

    /***/
    "RPFs":
    /*!*************************************************!*\
      !*** ./src/app/signup/signup-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: SignupPageRoutingModule */

    /***/
    function RPFs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function () {
        return SignupPageRoutingModule;
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


      var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./signup.page */
      "yL7A");

      var routes = [{
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
      }];

      var SignupPageRoutingModule = function SignupPageRoutingModule() {
        _classCallCheck(this, SignupPageRoutingModule);
      };

      SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SignupPageRoutingModule);
      /***/
    },

    /***/
    "T9iC":
    /*!*****************************************!*\
      !*** ./src/app/signup/signup.module.ts ***!
      \*****************************************/

    /*! exports provided: SignupPageModule */

    /***/
    function T9iC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPageModule", function () {
        return SignupPageModule;
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


      var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./signup-routing.module */
      "RPFs");
      /* harmony import */


      var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./signup.page */
      "yL7A");

      var SignupPageModule = function SignupPageModule() {
        _classCallCheck(this, SignupPageModule);
      };

      SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
      })], SignupPageModule);
      /***/
    },

    /***/
    "fJgH":
    /*!*****************************************!*\
      !*** ./src/app/signup/signup.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function fJgH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header h3 {\n  display: block;\n  text-align: center;\n  font-weight: 600;\n  margin: 25px 0 0;\n}\n\n[btncontinue] {\n  position: absolute;\n  font-size: 14px;\n  height: 50px;\n  display: flex;\n  --padding-start:20px;\n  --padding-end:20px;\n  align-items: center;\n  bottom: 0;\n  right: 20px;\n  z-index: 10;\n  justify-content: center;\n}\n\n[btncontinue] ion-icon {\n  margin-left: 10px;\n}\n\n[btnback] {\n  position: absolute;\n  font-size: 14px;\n  height: 50px;\n  display: flex;\n  --padding-start:20px;\n  --padding-end:20px;\n  align-items: center;\n  bottom: 0;\n  left: 20px;\n  z-index: 10;\n  justify-content: center;\n}\n\n[slideBox] {\n  display: flex;\n}\n\n[slideBox] ion-slide {\n  height: 400px;\n}\n\n[slideBox] ion-slide.fullHight {\n  overflow-y: auto;\n  min-height: 100%;\n}\n\n[slideBox] ion-slide.fullHight [btncontinue] {\n  position: relative;\n  right: 0;\n  margin-top: 15px;\n  width: 100%;\n  max-width: 160px;\n  margin-left: auto;\n}\n\n[slideBox] ion-slide.fullHight [btnback] {\n  position: relative;\n  right: 0;\n  margin-top: 15px;\n  width: 100%;\n  max-width: 60px;\n  margin-right: auto;\n}\n\nion-slides ion-slide {\n  min-height: 84vh;\n  align-items: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n}\n\nion-slides ion-slide ion-segment {\n  border-radius: 14px;\n  background: transparent;\n  border: 1px solid #f3f3f3;\n  box-shadow: none;\n}\n\nion-slides ion-slide ion-segment ion-segment-button {\n  --border-radius:14px;\n  color: #888;\n}\n\nion-slides ion-slide ion-segment ion-segment-button.segment-button-checked {\n  --indicator-box-shadow:none;\n  --indicator-color:var(--ion-color-secondary);\n  color: #fff;\n}\n\nion-slides ion-slide ion-segment ion-segment-button.active {\n  --indicator-box-shadow:none;\n  --indicator-color:var(--ion-color-secondary);\n  background-color: var(--ion-color-secondary);\n  --background: var(--ion-color-secondary);\n  color: #fff;\n}\n\nion-slides ion-slide ion-segment ion-segment-button h6 {\n  margin: 10px 0;\n  font-size: 13px;\n}\n\nion-slides ion-slide [form-group] {\n  margin-top: 20px;\n}\n\nion-slides ion-slide [form-group] label {\n  color: #777;\n  margin: 0 0 10px;\n  display: block;\n  font-size: 14px;\n}\n\nion-slides ion-slide [form-group] p {\n  color: #111;\n  font-weight: 500;\n  margin: 0;\n  font-size: 14px;\n}\n\nion-slides ion-slide [form-group][subtotal] {\n  border-top: 1px dashed #444;\n  padding-top: 15px;\n}\n\nion-slides ion-slide [form-group][subtotal] p {\n  display: flex;\n  align-items: center;\n  margin-bottom: 5px;\n}\n\nion-slides ion-slide [form-group][subtotal] p span {\n  margin-left: auto;\n}\n\n[title] {\n  font-size: 22px;\n  font-weight: 500;\n  color: #666;\n  margin: 40px 0 25px;\n}\n\n[padding] {\n  width: 100%;\n}\n\n[groupRadio] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n[groupRadio] li {\n  margin: 0 0 15px;\n}\n\n[groupRadio] li input {\n  display: none;\n}\n\n[groupRadio] li input + label {\n  height: 55px;\n  border-radius: 80px;\n  padding: 0 45px 0 30px;\n  transition: .3s;\n  display: inline-flex;\n  align-items: center;\n  font-size: 16px;\n  justify-content: center;\n  border: 1px solid #eee;\n  color: #333;\n}\n\n[groupRadio] li input + label span {\n  width: 25px;\n  height: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #ddd;\n  border-radius: 50px;\n  margin-right: 15px;\n}\n\n[groupRadio] li input:checked + label {\n  background: var(--ion-color-primary);\n  color: #fff;\n}\n\n[groupRadio] li input:checked + label span {\n  background: #fff;\n  border-color: #fff;\n}\n\n[groupRadio] li input:checked + label span:before {\n  content: \"\\2713\";\n  color: var(--ion-color-primary);\n}\n\n[groupRadio][flexRow] {\n  flex-direction: row;\n  display: flex;\n  overflow-y: scroll;\n}\n\n[groupRadio][flexRow] li {\n  margin: 0;\n}\n\n[groupRadio][flexRow] li input + label {\n  padding: 0 20px;\n  margin-right: 10px;\n  margin-bottom: 0;\n  height: 45px;\n}\n\nform ion-label {\n  margin-top: 30px;\n  display: block;\n  font-size: 14px;\n  color: #333;\n}\n\nform ion-item {\n  --background: none;\n  --padding-start:0;\n  position: relative;\n}\n\nform ion-item ion-input {\n  font-size: 15px;\n  --background: none;\n}\n\nform ion-item ion-select {\n  font-size: 15px;\n  --background: none;\n  width: 100%;\n}\n\nform [showpas] {\n  font-size: 13px;\n  position: absolute;\n  text-decoration: none;\n  color: var(--ion-color-secondary);\n  right: 15px;\n}\n\nform [btn-login] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 50px;\n  margin: 40px 0 0;\n}\n\nform [btn-login] ion-icon {\n  margin-left: 10px;\n}\n\nform [orlogin] {\n  margin: 30px 0 0;\n  text-transform: uppercase;\n  font-size: 11px;\n  letter-spacing: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nform [social] {\n  list-style: none;\n  padding: 0;\n  margin: 15px 0 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nform [social] li {\n  margin: 0 10px;\n}\n\nform [social] li img {\n  width: 30px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n[widthfull] {\n  width: 100%;\n}\n\n[header] {\n  position: fixed;\n  left: 0;\n  right: 0;\n  background: #fff;\n}\n\n[topheading] {\n  position: fixed;\n  top: -75px;\n  left: 0;\n  right: 0;\n  text-align: center;\n}\n\n[readymeal] {\n  display: flex;\n  align-items: center;\n}\n\n[readymeal] span {\n  border: 1px solid #eee;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 80px;\n  margin-right: 15px;\n  height: 80px;\n}\n\n[readymeal] span img {\n  width: 50px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n[readymeal] h5 {\n  font-size: 16px;\n  font-weight: 500;\n  margin: 0 0 15px;\n}\n\n[readymeal] p {\n  color: #777;\n  margin: 0;\n  font-size: 13px;\n}\n\n[subhdng] {\n  color: var(--ion-color-secondary);\n  border-left: 2px solid var(--ion-color-secondary);\n  padding: 0 0 0 15px;\n  margin: 35px 0 15px;\n  font-weight: 600;\n  font-size: 17px;\n}\n\n[billAdrs] ion-item {\n  --background: transparent;\n  --padding-start:0;\n}\n\n[billAdrs] ion-item ion-radio {\n  margin-right: 10px;\n}\n\n[contactless] {\n  margin: 30px 0;\n}\n\n[contactless] ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n[contactless] ul li {\n  display: flex;\n  align-items: center;\n  background: #fcfcfc;\n  padding: 20px;\n  border: 1px solid #eee;\n  border-radius: 15px;\n  margin: 0 0 15px;\n}\n\n[contactless] ul li span {\n  margin-right: 20px;\n}\n\n[contactless] ul li span img {\n  width: 60px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n[contactless] ul li div h5 {\n  margin: 0 0 10px;\n  font-size: 16px;\n}\n\n[contactless] ul li div p {\n  margin: 0 0;\n  font-size: 14px;\n}\n\n[deliveryDeta] {\n  display: flex;\n  align-items: center;\n}\n\n[deliveryDeta] span {\n  width: 40px;\n  height: 40px;\n  border-radius: 50px;\n  background: var(--ion-color-secondary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 15px;\n}\n\n[deliveryDeta] span ion-icon {\n  font-size: 20px;\n  color: #fff;\n}\n\n[deliveryDeta] p {\n  font-size: 15px;\n}\n\n[billingDe][inside] {\n  margin-bottom: 30px;\n}\n\n[billingDe][inside] h6 {\n  font-size: 16px;\n  font-weight: 600;\n}\n\n[billingDe][inside] p {\n  margin: 0;\n  font-size: 14px;\n}\n\n[billingDe][d-flex] {\n  display: flex;\n  margin: 30px 0 0;\n}\n\n[billingDe][d-flex] h5 {\n  margin: 0 0 5px;\n}\n\n[billingDe][d-flex] h5 + p {\n  font-size: 14px;\n  color: #666;\n  margin: 0;\n}\n\n[billingDe][d-flex] [sortIcons] {\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n}\n\n[billingDe][d-flex] [sortIcons] a {\n  width: 40px;\n  height: 40px;\n  border-radius: 50px;\n  border: 1px solid #eee;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n[billingDe][d-flex] [sortIcons] a ion-icon {\n  color: #666;\n  font-size: 20px;\n}\n\n[billingDe][d-flex] [sortIcons] a[cart] {\n  background: var(--ion-color-primary);\n  border-color: var(--ion-color-primary);\n  margin-right: 10px;\n}\n\n[billingDe][d-flex] [sortIcons] a[cart] ion-icon {\n  color: #fff;\n}\n\n[searchbar] {\n  background: #f5f5f5;\n  border-radius: 50px;\n  overflow: hidden;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n[searchbar] ion-searchbar {\n  --background: none;\n  padding: 0;\n  --box-shadow: none;\n}\n\n.mealCol {\n  border-radius: 20px;\n  overflow-y: hidden;\n  position: relative;\n  background: #fff;\n  border: 1px solid #eee;\n  /*box-shadow: 0 0 15px rgba(0,0,0, .07); */\n  margin-bottom: 0px;\n}\n\n.mealCont {\n  padding: 0 15px;\n  text-align: left;\n}\n\n[selectMeal] {\n  margin: 20px 0 0;\n}\n\n[selectMeal] ion-row {\n  margin-left: -5px;\n  margin-right: -5px;\n}\n\n.iconsRow li a {\n  width: 35px;\n  height: 35px;\n  border-radius: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #24a778;\n}\n\n.iconsRow li a[orangecolor] {\n  background: #FD8A5E;\n}\n\n.iconsRow li a[lightblue] {\n  background: #63BBB7;\n}\n\n.iconsRow li a img {\n  width: 17px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.mealImg {\n  height: 150px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  border-radius: 20px;\n}\n\n.mealCol h6 {\n  font-weight: 700;\n  font-size: 14px;\n  margin: 15px 0 5px;\n  font-family: var(--poppins);\n}\n\n.mealCol h6 a {\n  color: #111;\n  text-decoration: none;\n  font-size: 15px;\n}\n\n.mealCol h6 a:hover {\n  text-decoration: none;\n  color: var(--primary-color);\n}\n\n.mealCol p {\n  margin: 0;\n  color: #999;\n  font-size: 13px;\n}\n\n.mealCol ul {\n  list-style: none;\n  display: flex;\n  padding: 10px 0 20px;\n  margin: 0;\n}\n\n.mealCol ul li {\n  margin-right: 7px;\n  display: flex;\n  align-items: center;\n}\n\n.mealCol ul li p {\n  color: #666;\n  font-size: 13px;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n\n.mealCol ul li p i {\n  margin-right: 5px;\n}\n\n.mealCol ul li label {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  height: 24px;\n  color: #fff;\n  padding: 0 12px;\n  border-radius: 8px;\n  text-transform: uppercase;\n  font-size: 13px;\n  background: var(--primary-color);\n}\n\n.mealCol ul li label.dia {\n  background: #8ad5d1;\n}\n\n.absomeal {\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9;\n}\n\n.absomeal label {\n  height: 31px;\n  padding: 0 12px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--ion-color-primary);\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: 600;\n  font-size: 12px;\n  border-radius: 50px;\n}\n\n.absomeal a {\n  margin-left: auto;\n  width: 30px;\n  height: 30px;\n  border-radius: 50px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n  font-size: 16px;\n  margin-right: 7px;\n  color: var(--primary-color);\n  position: relative;\n  top: -6px;\n}\n\n.absomeal a:hover {\n  text-decoration: none;\n}\n\n.flexBTn {\n  display: flex;\n}\n\n.flexBTn [btnback] {\n  left: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZTtBQUFqQjs7QUFFQTtFQUVDLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixvQkFBZ0I7RUFDaEIsa0JBQWM7RUFDZCxtQkFBbUI7RUFDZixTQUFTO0VBQ1YsV0FBVztFQUNkLFdBQVc7RUFDWCx1QkFBdUI7QUFBeEI7O0FBRUE7RUFBRSxpQkFBaUI7QUFFbkI7O0FBRUE7RUFDQyxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQWdCO0VBQ2hCLGtCQUFjO0VBQ2QsbUJBQW1CO0VBQ2YsU0FBUztFQUNWLFVBQVU7RUFDYixXQUFXO0VBQ1gsdUJBQXVCO0FBQ3hCOztBQUVBO0VBS0ksYUFBYTtBQUhqQjs7QUFFQTtFQUdFLGFBQWE7QUFEZjs7QUFFQTtFQUdHLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFEbkI7O0FBRUE7RUFDSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtFQUFJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0FBRXRCOztBQUdBO0VBRUUsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0FBRGxCOztBQUpBO0VBT0csbUJBQWtCO0VBQ2xCLHVCQUFzQjtFQUN0Qix5QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ25COztBQVhBO0VBWUksb0JBQWdCO0VBQ2hCLFdBQVc7QUFHZjs7QUFoQkE7RUFlSywyQkFBdUI7RUFDdkIsNENBQWtCO0VBQ2xCLFdBQVc7QUFLaEI7O0FBdEJBO0VBb0JLLDJCQUF1QjtFQUN2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Q3BDLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7QUF5RXZCOztBQXRFQTtFQUVHLGlCQUFpQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFNBQVM7QUF3RWI7O0FBcEVBO0VBRUUscUJBQXFCO0FBc0V2Qjs7QUFsRUE7RUFDQyxhQUFhO0FBcUVkOztBQXRFQTtFQUdFLE9BQU87QUF1RVQiLCJmaWxlIjoic2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XHJcblx0aDN7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRtYXJnaW46MjVweCAwIDA7XHJcblx0fVxyXG59XHJcbltidG5jb250aW51ZV17XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRoZWlnaHQ6IDUwcHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHQtLXBhZGRpbmctc3RhcnQ6MjBweDtcclxuXHQtLXBhZGRpbmctZW5kOjIwcHg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHQgICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcblx0ei1pbmRleDogMTA7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0aW9uLWljb257XHJcblx0XHRtYXJnaW4tbGVmdDogMTBweDtcclxuXHR9XHJcbn1cclxuXHJcbltidG5iYWNrXXtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGhlaWdodDogNTBweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC0tcGFkZGluZy1zdGFydDoyMHB4O1xyXG5cdC0tcGFkZGluZy1lbmQ6MjBweDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdCAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG5cdHotaW5kZXg6IDEwO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdC8vIGlvbi1pY29ue1xyXG5cdC8vIFx0bWFyZ2luLWxlZnQ6IDEwcHg7XHJcblx0Ly8gfVxyXG59XHJcblxyXG5bc2xpZGVCb3hde1xyXG4gICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cdGlvbi1zbGlkZXtcclxuXHRcdGhlaWdodDogNDAwcHg7XHJcblx0fVxyXG5cdGlvbi1zbGlkZXtcclxuXHRcdCYuZnVsbEhpZ2h0e1xyXG5cdFx0XHRvdmVyZmxvdy15OiBhdXRvO1xyXG5cdFx0XHRtaW4taGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRbYnRuY29udGludWVde1xyXG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRyaWdodDogMDtcclxuXHRcdFx0XHRtYXJnaW4tdG9wOiAxNXB4O1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdG1heC13aWR0aDogMTYwcHg7XHJcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0XHRcdH1cclxuXHRcdFx0W2J0bmJhY2tde1xyXG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRyaWdodDogMDtcclxuXHRcdFx0XHRtYXJnaW4tdG9wOiAxNXB4O1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdG1heC13aWR0aDogNjBweDtcclxuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuaW9uLXNsaWRlc3tcclxuXHRpb24tc2xpZGV7XHJcblx0XHRtaW4taGVpZ2h0OiA4NHZoO1xyXG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdFx0aW9uLXNlZ21lbnR7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6MTRweDtcclxuXHRcdFx0YmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuXHRcdFx0Ym9yZGVyOjFweCBzb2xpZCAjZjNmM2YzO1xyXG5cdFx0XHRib3gtc2hhZG93OiBub25lOyBcclxuXHRcdFx0aW9uLXNlZ21lbnQtYnV0dG9ue1xyXG5cdFx0XHRcdC0tYm9yZGVyLXJhZGl1czoxNHB4O1xyXG5cdFx0XHRcdGNvbG9yOiAjODg4O1xyXG5cdFx0XHRcdCYuc2VnbWVudC1idXR0b24tY2hlY2tlZHtcclxuXHRcdFx0XHRcdC0taW5kaWNhdG9yLWJveC1zaGFkb3c6bm9uZTtcclxuXHRcdFx0XHRcdC0taW5kaWNhdG9yLWNvbG9yOnZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG5cdFx0XHRcdFx0Y29sb3I6ICNmZmY7IFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQmLmFjdGl2ZXtcclxuXHRcdFx0XHRcdC0taW5kaWNhdG9yLWJveC1zaGFkb3c6bm9uZTtcclxuXHRcdFx0XHRcdC0taW5kaWNhdG9yLWNvbG9yOnZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcblx0XHRcdFx0XHQtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG5cdFx0XHRcdFx0Y29sb3I6ICNmZmY7IFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdGg2e1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAxMHB4IDA7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDEzcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRbZm9ybS1ncm91cF17XHJcblx0XHRcdG1hcmdpbi10b3A6IDIwcHg7XHJcblx0XHRcdGxhYmVse1xyXG5cdFx0XHRcdGNvbG9yOiAjNzc3O1xyXG5cdFx0XHRcdG1hcmdpbjowIDAgMTBweDtcclxuXHRcdFx0XHRkaXNwbGF5OmJsb2NrO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0fVxyXG5cdFx0XHRwe1xyXG5cdFx0XHRcdGNvbG9yOiAjMTExO1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0bWFyZ2luOjA7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdCZbc3VidG90YWxde1xyXG5cdFx0XHRcdGJvcmRlci10b3A6IDFweCBkYXNoZWQgIzQ0NDtcclxuXHRcdFx0XHRwYWRkaW5nLXRvcDoxNXB4O1xyXG5cdFx0XHRcdHB7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDVweDtcclxuXHRcdFx0XHRcdHNwYW57XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5bdGl0bGVde1xyXG5cdGZvbnQtc2l6ZTogMjJweDtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdGNvbG9yOiAjNjY2O1xyXG5cdG1hcmdpbjo0MHB4IDAgMjVweDtcclxufVxyXG5bcGFkZGluZ117XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuW2dyb3VwUmFkaW9de1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0cGFkZGluZzowO1xyXG5cdG1hcmdpbjowO1xyXG5cdGxpe1xyXG5cdFx0bWFyZ2luOjAgMCAxNXB4O1xyXG5cdFx0aW5wdXR7XHJcblx0XHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHRcdCYgKyBsYWJlbHtcclxuXHRcdFx0XHRoZWlnaHQ6IDU1cHg7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogODBweDtcclxuXHRcdFx0XHRwYWRkaW5nOjAgNDVweCAwIDMwcHg7XHJcblx0XHRcdFx0dHJhbnNpdGlvbjogLjNzO1xyXG5cdFx0XHRcdGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdGJvcmRlcjoxcHggc29saWQgI2VlZTtcclxuXHRcdFx0XHRjb2xvcjogIzMzMztcclxuXHRcdFx0XHRzcGFue1xyXG5cdFx0XHRcdFx0d2lkdGg6IDI1cHg7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDI1cHg7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0Ym9yZGVyOjFweCBzb2xpZCAjZGRkO1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcclxuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMTVweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0JjpjaGVja2Vke1xyXG5cdFx0XHRcdCYgKyBsYWJlbHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuXHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcdFx0c3BhbntcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcdFx0XHQmOmJlZm9yZXtcclxuXHRcdFx0XHRcdFx0XHRjb250ZW50OlwiXFwyNzEzXCI7XHJcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQmW2ZsZXhSb3dde1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cdFx0bGl7XHJcblx0XHRcdG1hcmdpbjowO1xyXG5cdFx0XHRpbnB1dHtcclxuXHRcdFx0XHQmICsgbGFiZWx7XHJcblx0XHRcdFx0XHRwYWRkaW5nOjAgMjBweDtcclxuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMTBweDtcclxuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDA7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDQ1cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbmZvcm17XHJcblx0aW9uLWxhYmVse1xyXG5cdFx0bWFyZ2luLXRvcDozMHB4O1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0Y29sb3I6ICMzMzM7XHJcblx0fVxyXG5cdGlvbi1pdGVte1xyXG5cdFx0LS1iYWNrZ3JvdW5kOiBub25lO1xyXG5cdFx0LS1wYWRkaW5nLXN0YXJ0OjA7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRpb24taW5wdXR7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTVweDtcclxuXHRcdFx0LS1iYWNrZ3JvdW5kOiBub25lO1xyXG5cdFx0fVxyXG5cdFx0aW9uLXNlbGVjdHtcclxuXHRcdFx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdFx0XHQtLWJhY2tncm91bmQ6IG5vbmU7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRbc2hvd3Bhc117XHJcblx0XHRmb250LXNpemU6IDEzcHg7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcblx0XHRyaWdodDogMTVweDtcclxuXHR9XHJcblx0W2J0bi1sb2dpbl17XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRoZWlnaHQ6IDUwcHg7XHJcblx0XHRtYXJnaW46NDBweCAwIDA7XHJcblx0XHRpb24taWNvbntcclxuXHRcdFx0bWFyZ2luLWxlZnQ6MTBweDtcclxuXHRcdH1cclxuXHR9XHJcblx0W29ybG9naW5de1xyXG5cdFx0bWFyZ2luOjMwcHggMCAwO1xyXG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRcdGZvbnQtc2l6ZTogMTFweDtcclxuXHRcdGxldHRlci1zcGFjaW5nOiAxcHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxuXHRbc29jaWFsXXtcclxuXHRcdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0XHRwYWRkaW5nOjA7XHJcblx0XHRtYXJnaW46MTVweCAwIDMwcHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0bGl7XHJcblx0XHRcdG1hcmdpbjowIDEwcHg7XHJcblx0XHRcdGltZ3tcclxuXHRcdFx0XHR3aWR0aDogMzBweDtcclxuXHRcdFx0XHRvYmplY3QtZml0OiBjb250YWluO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblt3aWR0aGZ1bGxde1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcbltoZWFkZXJde1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRsZWZ0OjA7XHJcblx0cmlnaHQ6IDA7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5bdG9waGVhZGluZ117XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAtNzVweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5bcmVhZHltZWFsXXtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0c3BhbntcclxuXHRcdGJvcmRlcjoxcHggc29saWQgI2VlZTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0d2lkdGg6IDgwcHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcblx0XHRoZWlnaHQ6IDgwcHg7XHJcblx0XHRpbWd7XHJcblx0XHRcdHdpZHRoOiA1MHB4O1xyXG5cdFx0XHRvYmplY3QtZml0OiBjb250YWluO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRoNXtcclxuXHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRtYXJnaW46MCAwIDE1cHg7XHJcblx0fVxyXG5cdHB7XHJcblx0XHRjb2xvcjogIzc3NztcclxuXHRcdG1hcmdpbjowO1xyXG5cdFx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdH1cclxufVxyXG5bc3ViaGRuZ117XHJcblx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG5cdGJvcmRlci1sZWZ0OjJweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuXHRwYWRkaW5nOjAgMCAwIDE1cHg7XHJcblx0bWFyZ2luOjM1cHggMCAxNXB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0Zm9udC1zaXplOiAxN3B4O1xyXG59XHJcbltiaWxsQWRyc117XHJcblx0aW9uLWl0ZW17XHJcblx0XHQtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdFx0LS1wYWRkaW5nLXN0YXJ0OjA7XHJcblx0XHRpb24tcmFkaW97XHJcblx0XHRcdG1hcmdpbi1yaWdodDoxMHB4O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5bY29udGFjdGxlc3Nde1xyXG5cdG1hcmdpbjozMHB4IDA7XHJcblx0dWx7XHJcblx0XHRsaXN0LXN0eWxlOiBub25lO1xyXG5cdFx0cGFkZGluZzowO1xyXG5cdFx0bWFyZ2luOjA7XHJcblx0XHRsaXtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0YmFja2dyb3VuZDogI2ZjZmNmYztcclxuXHRcdFx0cGFkZGluZzoyMHB4OyBcclxuXHRcdFx0Ym9yZGVyOjFweCBzb2xpZCAjZWVlO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5cdFx0XHRtYXJnaW46MCAwIDE1cHg7XHJcblx0XHRcdHNwYW57XHJcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OjIwcHg7XHJcblx0XHRcdFx0aW1ne1xyXG5cdFx0XHRcdFx0d2lkdGg6IDYwcHg7XHJcblx0XHRcdFx0XHRvYmplY3QtZml0OiBjb250YWluO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRkaXZ7XHJcblx0XHRcdFx0aDV7XHJcblx0XHRcdFx0XHRtYXJnaW46MCAwIDEwcHg7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG5cdFx0XHRcdFx0bWFyZ2luOjAgMDtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuW2RlbGl2ZXJ5RGV0YV17XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHNwYW57XHJcblx0XHR3aWR0aDo0MHB4O1xyXG5cdFx0aGVpZ2h0OiA0MHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcclxuXHRcdGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdG1hcmdpbi1yaWdodDogMTVweDtcclxuXHRcdGlvbi1pY29ue1xyXG5cdFx0XHRmb250LXNpemU6IDIwcHg7XHJcblx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRwe1xyXG5cdFx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdH1cclxufVxyXG5bYmlsbGluZ0RlXVtpbnNpZGVde1xyXG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblx0aDZ7XHJcblx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdH1cclxuXHRwe1xyXG5cdFx0bWFyZ2luOjA7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0fVxyXG59XHJcbltiaWxsaW5nRGVde1xyXG5cdCZbZC1mbGV4XXtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRtYXJnaW46MzBweCAwIDA7XHJcblx0XHRoNXsgXHJcblx0XHRcdG1hcmdpbjowIDAgNXB4O1xyXG5cdFx0XHQmICsgcHtcclxuXHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRjb2xvcjogIzY2NjtcclxuXHRcdFx0bWFyZ2luOjA7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFtzb3J0SWNvbnNde1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogYXV0bztcclxuXHRcdFx0YXtcclxuXHRcdFx0XHR3aWR0aDogNDBweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDQwcHg7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcclxuXHRcdFx0XHRib3JkZXI6MXB4IHNvbGlkICNlZWU7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdGlvbi1pY29ue1xyXG5cdFx0XHRcdFx0Y29sb3I6ICM2NjY7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDIwcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdCZbY2FydF17XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcblx0XHRcdFx0XHRib3JkZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cdFx0XHRcdFx0aW9uLWljb257XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5bc2VhcmNoYmFyXXtcclxuXHRiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRoZWlnaHQ6IDUwcHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGlvbi1zZWFyY2hiYXJ7XHJcblx0XHQtLWJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBcdHBhZGRpbmc6IDA7XHJcbiAgICBcdC0tYm94LXNoYWRvdzogbm9uZTtcclxuXHR9XHJcbn1cclxuLm1lYWxDb2x7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6I2ZmZjtcclxuICBib3JkZXI6MXB4IHNvbGlkICNlZWU7XHJcbiAgLypib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKDAsMCwwLCAuMDcpOyAqL1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4ubWVhbENvbnR7XHJcbiAgcGFkZGluZzowIDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5bc2VsZWN0TWVhbF17XHJcblx0bWFyZ2luOjIwcHggMCAwO1xyXG5cdGlvbi1yb3d7XHJcblx0XHRtYXJnaW4tbGVmdDogLTVweDtcclxuXHRcdG1hcmdpbi1yaWdodDogLTVweDtcclxuXHR9XHJcbn1cclxuLmljb25zUm93IGxpIGEge1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICMyNGE3Nzg7XHJcbiAgICAmW29yYW5nZWNvbG9yXXtcclxuICAgIFx0YmFja2dyb3VuZDogI0ZEOEE1RTtcclxuICAgIH1cclxuICAgICZbbGlnaHRibHVlXXtcclxuXHRcdGJhY2tncm91bmQ6ICM2M0JCQjc7XHJcbiAgICB9XHJcbn1cclxuLmljb25zUm93IGxpIGEgaW1nIHtcclxuICAgIHdpZHRoOiAxN3B4O1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxufVxyXG4ubWVhbEltZ3tcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuLm1lYWxDb2wgaDZ7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOjE1cHggMCA1cHg7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLXBvcHBpbnMpO1xyXG59XHJcbi5tZWFsQ29sIGg2IGF7XHJcbiAgY29sb3I6ICMxMTE7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4ubWVhbENvbCBoNiBhOmhvdmVye1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbn1cclxuLm1lYWxDb2wgcHtcclxuICBtYXJnaW46MDtcclxuICBjb2xvcjogIzk5OTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLm1lYWxDb2wgdWx7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6MTBweCAwIDIwcHg7XHJcbiAgbWFyZ2luOjA7XHJcbn1cclxuLm1lYWxDb2wgdWwgbGl7XHJcbiAgbWFyZ2luLXJpZ2h0OjdweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLm1lYWxDb2wgdWwgbGkgcHtcclxuICBjb2xvcjogIzY2NjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbWFyZ2luOjA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5tZWFsQ29sIHVsIGxpIHAgaXtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4ubWVhbENvbCB1bCBsaSBsYWJlbHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjowO1xyXG4gIGhlaWdodDogMjRweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOjAgMTJweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbn1cclxuXHJcbi5tZWFsQ29sIHVsIGxpIGxhYmVsLmRpYXtcclxuICBiYWNrZ3JvdW5kOiM4YWQ1ZDE7IFxyXG59XHJcblxyXG4uYWJzb21lYWx7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIHRvcDogMTVweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHotaW5kZXg6IDk7XHJcbn1cclxuXHJcbi5hYnNvbWVhbCBsYWJlbHtcclxuICAgIGhlaWdodDogMzFweDtcclxuICAgIHBhZGRpbmc6IDAgMTJweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbn1cclxuXHJcbi5hYnNvbWVhbCBhe1xyXG5cclxuICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTZweDtcclxuXHJcbn1cclxuXHJcbi5hYnNvbWVhbCBhOmhvdmVye1xyXG5cclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG59XHJcblxyXG4uZmxleEJUbntcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdFtidG5iYWNrXXtcclxuXHRcdGxlZnQ6IDA7XHJcblx0fVxyXG59Il19 */";
      /***/
    },

    /***/
    "yL7A":
    /*!***************************************!*\
      !*** ./src/app/signup/signup.page.ts ***!
      \***************************************/

    /*! exports provided: SignupPage */

    /***/
    function yL7A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
        return SignupPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./signup.page.html */
      "6h0i");
      /* harmony import */


      var _signup_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./signup.page.scss */
      "fJgH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/api/api.service */
      "oZWX");
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../config */
      "Vx+w");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/common.service */
      "OlR4");

      var SignupPage = /*#__PURE__*/function () {
        function SignupPage(menuController, common, api, cd) {
          _classCallCheck(this, SignupPage);

          this.menuController = menuController;
          this.common = common;
          this.api = api;
          this.cd = cd;
          this.selectDiseaseError = false;
          this.diseaseError = false;
          this.preferenceError = false;
          this.registerError = false;
          this.showBillingAddress = false;
          this.showdeliverySelect = false;
          this.errors = ['', null, undefined];
          this.is_submit = false;
          this.myDate = 'mydate';
          this.termsChecked = true;
          this.offersChecked = false;
          this.minDate = new Date().toISOString();
          this.maxDate = new Date();
          this.multiMinDate = new Date().toISOString();
          this.menuController.enable(false);
          this.tabs = 1;
          this.reg_exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          this.diseaseSuffer = '';
          this.illnesSufferFrom = '';
          this.userPreference = '';
          this.noOfPeople = '';
          this.userName = '';
          this.password = '';
          this.addressOptions = '';
          this.singleSelecteDate = '';
          this.multipleSelecteDate1 = '';
          this.multipleSelecteDate2 = '';
          this.deliveryInstructions = '';
          this.cardNumber = '';
          this.cardExipryDate = '';
          this.cardCvv = '';
        }

        _createClass(SignupPage, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.slides.lockSwipes(true); //this.slides.lockSwipeToNext(true);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.stepTitle = 'Choose Plan';
            this.planData = this.getMealPlans();
            this.maxDate = this.add_years(this.maxDate, 10).toISOString();
            this.billingAddressValue = 2;

            if (localStorage.getItem('is_logged_in') == 'true') {
              this.intitializeUserData();
            }
          }
        }, {
          key: "onChange",
          value: function onChange($event) {
            console.log($event);
          }
        }, {
          key: "changeMinDate",
          value: function changeMinDate() {
            console.log(this.multipleSelecteDate1);
            this.multiMinDate = new Date(this.multipleSelecteDate1).toISOString();
          }
        }, {
          key: "onChangeDeliverySelect",
          value: function onChangeDeliverySelect(value) {
            console.log(value);

            if (value == 2) {
              this.showdeliverySelect = true;
            } else {
              this.showdeliverySelect = false;
            }
          }
        }, {
          key: "getMealPlans",
          value: function getMealPlans() {
            var _this = this;

            this.api.post('getMealPlans', '', '').subscribe(function (result) {
              var res;
              res = result;

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
              } else if (res.status == 200) {
                _this.planData = res.data.planData;
                _this.shippingPrice = Number(res.data.shippingPrice).toFixed(2);
                var firstprice = res.data.planData[0].pricePerMeal;
                console.log(firstprice);

                _this.planChanged('', firstprice);
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "planChanged",
          value: function planChanged(ev, price) {
            this.selectBoxPrice = Number(price).toFixed(2);
            var peopleValue = document.querySelector('input[name="people"]:checked').value;
            var recepiesWeek = document.querySelector('input[name="recipesweek"]:checked').value;
            this.peopleSelect = peopleValue;
            this.recepiesSlect = recepiesWeek;
            this.totalServing = Number(peopleValue) * Number(recepiesWeek);
            this.totalPrice = Number(this.selectBoxPrice * this.totalServing).toFixed(2);
            var withshipping = Number(this.totalPrice) + Number(this.shippingPrice);
            this.finalPrice = withshipping.toFixed(2);
            this.recepiesSelect = recepiesWeek;
            this.noOfPeople = peopleValue;
          }
        }, {
          key: "showBillingAddressFn",
          value: function showBillingAddressFn(toShow) {
            if (toShow == 'yes') {
              this.showBillingAddress = true;
            } else {
              this.showBillingAddress = false;
            }
          }
        }, {
          key: "add_years",
          value: function add_years(dt, n) {
            return new Date(dt.setFullYear(dt.getFullYear() + n));
          }
        }, {
          key: "swipeNext",
          value: function swipeNext(e) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log('clickedon', e);
                      _context.next = 3;
                      return this.slides.getActiveIndex().then(function (index) {
                        _this2.currentSlide = index;
                        console.log(_this2.currentSlide);

                        switch (index) {
                          case 0:
                            console.log(_this2.diseaseSuffer);
                            var getDiseaseSelectedValue = document.querySelector('input[name="disease-suffer"]:checked');

                            if (getDiseaseSelectedValue != null) {
                              _this2.selectDiseaseError = false;

                              _this2.swipeSlider();
                            } else {
                              _this2.selectDiseaseError = true;
                            }

                            break;

                          case 1:
                            var getDiseaseValue = document.querySelector('input[name="sufferfrom"]:checked');
                            console.log(_this2.illnesSufferFrom);

                            if (getDiseaseValue != null) {
                              _this2.diseaseError = false;

                              _this2.swipeSlider();
                            } else {
                              _this2.diseaseError = true;
                            }

                            break;

                          case 2:
                            var getPreferenceValue = document.querySelector('input[name="preference"]:checked');

                            if (getPreferenceValue != null) {
                              _this2.preferenceError = false;

                              _this2.swipeSlider();

                              _this2.stepTitle = 'Personalise Your Box';
                            } else {
                              _this2.preferenceError = true;
                            }

                            break;

                          case 3:
                            if (localStorage.getItem('is_logged_in') == 'true') {
                              _this2.slides.lockSwipes(false);

                              _this2.slides.slideTo(5);

                              _this2.slides.lockSwipes(true);

                              _this2.stepTitle = 'Order Summary';
                              _this2.active2 = 'step2';
                              _this2.active1 = 'step1';
                            } else {
                              _this2.swipeSlider();

                              _this2.stepTitle = 'Access InEat Account';
                              _this2.active1 = 'step2';
                            }

                            break;

                          case 4:
                            var getusernameValue = document.querySelector('input[name="username"]').value;
                            var getpasswordValue = document.querySelector('input[name="password"]').value;
                            console.log(getusernameValue);
                            console.log(getpasswordValue);

                            if (getusernameValue != null && getusernameValue != '' && getpasswordValue != null && getpasswordValue != "") {
                              _this2.api.post('checkUserExists', {
                                email: getusernameValue,
                                password: getpasswordValue
                              }, '').subscribe(function (result) {
                                var res;
                                res = result;

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

                                  _this2.common.presentToast(errMsgs, 'danger');
                                } else if (res.status == 200 || res.status === '200') {
                                  if (res.exists == 0 || res.exists == '0') {
                                    _this2.registerError = false;

                                    _this2.swipeSlider();

                                    _this2.stepTitle = 'Order Summary';
                                    _this2.active2 = 'step2';
                                    _this2.active1 = 'step1';
                                  } else {
                                    _this2.registerError = false;

                                    _this2.swipeSlider();

                                    _this2.stepTitle = 'Order Summary';
                                    _this2.active2 = 'step2';
                                    _this2.active1 = 'step1';
                                    localStorage.setItem('ineat_userData', JSON.stringify(res.data));

                                    var userId = _this2.api.encryptData(res.userId, _config__WEBPACK_IMPORTED_MODULE_6__["config"].ENC_SALT);

                                    localStorage.setItem('ineat_userid', res.userId);
                                    localStorage.setItem('ineat_token', userId);
                                    localStorage.setItem('is_logged_in', 'true');

                                    _this2.intitializeUserData();
                                  }
                                }
                              }, function (error) {
                                console.log(error);
                              });
                            } else {
                              _this2.registerError = true;
                            }

                            break;

                          case 5:
                            _this2.is_submit = true;
                            console.log(_this2.billingAddressValue);

                            if (_this2.errors.indexOf(_this2.deliveryName) >= 0 || _this2.errors.indexOf(_this2.deliveryEmail) >= 0 || !_this2.reg_exp.test(String(_this2.deliveryEmail).toLowerCase()) || _this2.errors.indexOf(_this2.deliveryAddressLine1) >= 0 || _this2.errors.indexOf(_this2.deliveryAddressLine2) >= 0 || _this2.errors.indexOf(_this2.deliveryDob) >= 0 || _this2.errors.indexOf(_this2.deliveryCity) >= 0 || _this2.errors.indexOf(_this2.deliveryCountry) >= 0 || _this2.errors.indexOf(_this2.deliveryPostCode) >= 0 || _this2.errors.indexOf(_this2.deliveryPhone) >= 0 || _this2.errors.indexOf(_this2.billingAddressValue) >= 0) {
                              return false;
                            } else {
                              if (_this2.billingAddressValue == 1) {
                                if (_this2.errors.indexOf(_this2.billingName) >= 0 || _this2.errors.indexOf(_this2.billingAddressLine1) >= 0 || _this2.errors.indexOf(_this2.billingAddressLine2) >= 0 || _this2.errors.indexOf(_this2.billingCity) >= 0 || _this2.errors.indexOf(_this2.billingCountry) >= 0 || _this2.errors.indexOf(_this2.billingPostCode) >= 0 || _this2.errors.indexOf(_this2.billingPhone) >= 0) {
                                  return false;
                                } else {
                                  _this2.swipeSlider();

                                  _this2.stepTitle = 'Order Summary';
                                  _this2.active2 = 'step2';
                                }
                              } else {
                                _this2.swipeSlider();

                                _this2.stepTitle = 'Order Summary';
                                _this2.active2 = 'step2';
                              }
                            }

                            break;

                          case 6:
                            _this2.is_submit = true;

                            if (_this2.errors.indexOf(_this2.addressOptions) >= 0 || _this2.errors.indexOf(_this2.deliveryInstructions) >= 0) {
                              console.log('thisaddresss', _this2.addressOptions);
                              return false;
                            } else {
                              _this2.swipeSlider();

                              _this2.stepTitle = 'Order Summary';
                              _this2.active2 = 'step3';
                              _this2.is_submit = false;
                            }

                            break;

                          case 7:
                            _this2.is_submit = true;
                            console.log(_this2.errors.indexOf(_this2.cardNumber));
                            console.log(_this2.errors.indexOf(_this2.cardExipryDate));
                            console.log(_this2.errors.indexOf(_this2.cardCvv));
                            console.log(_this2.termsChecked);

                            if (_this2.errors.indexOf(_this2.cardNumber) > 0 || _this2.errors.indexOf(_this2.cardExipryDate) > 0 || _this2.errors.indexOf(_this2.cardCvv) > 0 || _this2.termsChecked != true) {
                              console.log('herer');
                              return false;
                            } else {
                              _this2.signUpFormObject = {
                                'diseasesuffer': _this2.diseaseSuffer,
                                'illnesSufferFrom': _this2.illnesSufferFrom,
                                'userPreference': _this2.userPreference,
                                'tabs': _this2.tabs,
                                'noOfPeople': _this2.noOfPeople,
                                'recepiesSelect': _this2.recepiesSelect,
                                'username': _this2.userName,
                                'password': _this2.password,
                                'billingAddressValue': _this2.billingAddressValue,
                                'deliveryName': _this2.deliveryName,
                                'deliverySurname': _this2.deliverySurname,
                                'deliveryEmail': _this2.deliveryEmail,
                                'deliveryAddressLine1': _this2.deliveryAddressLine1,
                                'deliveryAddressLine2': _this2.deliveryAddressLine2,
                                'deliveryDob': _this2.deliveryDob,
                                'deliveryCity': _this2.deliveryCity,
                                'deliveryCountry': _this2.deliveryCountry,
                                'deliveryPostCode': _this2.deliveryPostCode,
                                'deliveryPhone': _this2.deliveryPhone,
                                'billingName': _this2.billingName,
                                'billingSurname': _this2.billingSurname,
                                'billingEmail': _this2.billingEmail,
                                'billingAddressLine1': _this2.billingAddressLine1,
                                'billingAddressLine2': _this2.billingAddressLine2,
                                'billingCity': _this2.billingCity,
                                'billingCountry': _this2.billingCountry,
                                'billingPostCode': _this2.billingPostCode,
                                'billingPhone': _this2.billingPhone,
                                'addressOptions': _this2.addressOptions,
                                'singleSelecteDate': _this2.singleSelecteDate,
                                'multipleSelecteDate1': _this2.multipleSelecteDate1,
                                'multipleSelecteDate2': _this2.multipleSelecteDate2,
                                'deliveryInstructions': _this2.deliveryInstructions,
                                'cardNumber': _this2.cardNumber,
                                'cardExipryDate': _this2.cardExipryDate,
                                'cardCvv': _this2.cardCvv
                              };

                              _this2.api.post('registerUser', _this2.signUpFormObject, '').subscribe(function (result) {
                                var res;
                                res = result;

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
                                } else if (res.status == 200 || res.status === '200') {
                                  if (localStorage.getItem('is_logged_in') == 'true') {
                                    _this2.api.navCtrl.navigateRoot('/meals');
                                  } else {
                                    localStorage.setItem('ineat_userData', JSON.stringify(res.data));

                                    var userId = _this2.api.encryptData(res.userId, _config__WEBPACK_IMPORTED_MODULE_6__["config"].ENC_SALT);

                                    localStorage.setItem('ineat_userid', res.userId);
                                    localStorage.setItem('ineat_token', userId);
                                    var userToken = res.token;
                                    localStorage.setItem('user_access_token', userToken);
                                    localStorage.setItem('is_logged_in', 'true');

                                    _this2.api.navCtrl.navigateRoot('/meals');
                                  }
                                  /* redirect to m*/


                                  console.log(res);
                                }
                              }, function (error) {
                                console.log(error);
                              });

                              console.table('comlptevalue', _this2.signUpFormObject);
                            }

                            break;
                        }
                      });

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "swipeSlider",
          value: function swipeSlider() {
            this.is_submit = false;
            this.slides.lockSwipes(false);
            this.slides.slideNext();
            this.slides.lockSwipes(true);
          }
        }, {
          key: "swipePrevious",
          value: function swipePrevious(e) {
            this.slides.lockSwipes(false);
            this.slides.slidePrev();
            this.slides.lockSwipes(true);
          }
        }, {
          key: "intitializeUserData",
          value: function intitializeUserData() {
            this.userData = JSON.parse(localStorage.getItem('ineat_userData'));

            if (this.userData.diseasesuffer == 1 || this.userData.diseasesuffer == '1') {
              console.log('abc');
              this.diseaseSuffer = 'Yes';
            } else {
              this.diseaseSuffer = 'No';
            }

            this.illnesSufferFrom = this.userData.chronic_disease;
            this.userPreference = this.userData.food_prefrence;
            this.tabs = this.userData.plan_box_type;
            this.noOfPeople = this.userData.people_count;
            this.recepiesSelect = this.userData.meal_count;
            this.deliveryName = this.userData.first_name;
            this.deliverySurname = this.userData.last_name;
            this.deliveryAddressLine1 = this.userData.address1;
            this.deliveryAddressLine2 = this.userData.address2;
            this.deliveryDob = this.userData.dob;
            this.deliveryEmail = this.userData.email;
            this.deliveryCity = this.userData.city;
            this.deliveryCountry = this.userData.country;
            this.deliveryPostCode = this.userData.postcode;
            this.deliveryPhone = this.userData.phone_number;
            this.billingAddressValue = 2;

            if (this.userData.billing_first_name != null) {
              this.billingAddressValue = 1;
              this.showBillingAddress = true;
            }

            this.billingName = this.userData.billing_first_name;
            this.billingSurname = this.userData.billing_last_name;
            this.billingAddressLine1 = this.userData.billing_address1;
            this.billingAddressLine2 = this.userData.billing_address2;
            this.billingCity = this.userData.billing_city;
            this.billingPostCode = this.userData.billing_postcode;
            this.billingPhone = this.userData.billing_phone_number;
          }
        }]);

        return SignupPage;
      }();

      SignupPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]
        }, {
          type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      };

      SignupPage.propDecorators = {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['mySlider']
        }]
      };
      SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-signup',
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SignupPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=signup-signup-module-es5.js.map