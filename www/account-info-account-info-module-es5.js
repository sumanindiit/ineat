(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-info-account-info-module"], {
    /***/
    "D4L1":
    /*!*****************************************************!*\
      !*** ./src/app/account-info/account-info.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function D4L1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-segment {\n  border-radius: 14px;\n  background: transparent;\n  border: 1px solid #f3f3f3;\n  box-shadow: none;\n}\n\nion-segment ion-segment-button {\n  --border-radius: 14px;\n  color: #888;\n}\n\nion-segment ion-segment-button.segment-button-checked {\n  --indicator-box-shadow: none;\n  --indicator-color: var(--ion-color-secondary);\n  color: #fff;\n}\n\nion-segment ion-segment-button h6 {\n  margin: 10px 0;\n  font-size: 13px;\n}\n\n[padding] {\n  padding-bottom: 0;\n}\n\n[accouninfo-page] .top-ims-bx {\n  background-size: cover;\n  position: relative;\n  padding: 30px 25px 15px 25px;\n}\n\n[accouninfo-page] .top-ims-bx .img-prs {\n  position: relative;\n  margin-top: 0;\n  display: flex;\n  align-items: center;\n}\n\n[accouninfo-page] .top-ims-bx .img-prs .left-box {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  position: relative;\n  flex: 0 0 100px;\n  margin-right: 15px;\n}\n\n[accouninfo-page] .top-ims-bx .img-prs .left-box img {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n\n[accouninfo-page] .top-ims-bx .img-prs .con-pr {\n  flex: 1;\n}\n\n[accouninfo-page] .top-ims-bx .img-prs .con-pr h4 {\n  margin: 0px;\n  color: #333333;\n  font-size: 18px;\n  font-weight: 500;\n}\n\n[accouninfo-page] .top-ims-bx .img-prs .con-pr p {\n  color: #000000b3;\n  font-size: 13px;\n  margin-top: 3px;\n  font-weight: 500;\n  margin-bottom: 7px;\n}\n\n[accouninfo-page] .top-ims-bx .img-prs .con-pr ion-button {\n  font-size: 12px;\n  height: 30px;\n  --border-radius: 50px;\n  margin: 0;\n}\n\n[accouninfo-page] .top-ims-bx .img-prs .con-pr ion-button ion-icon {\n  margin-right: 5px;\n}\n\n[accouninfo-page] [personal-info] {\n  padding: 10px 25px 15px 25px;\n}\n\n[accouninfo-page] [personal-info] ion-row ion-col {\n  margin-bottom: 10px;\n}\n\n[accouninfo-page] [personal-info] ion-row ion-col label {\n  font-size: 14px;\n  color: #777;\n  display: block;\n  margin: 0;\n  font-weight: 500;\n}\n\n[accouninfo-page] [personal-info] ion-row ion-col ion-input,\n[accouninfo-page] [personal-info] ion-row ion-col ion-datetime,\n[accouninfo-page] [personal-info] ion-row ion-col ion-textarea {\n  border-bottom: 1px solid #c4c4c4;\n  border-radius: 0;\n  font-size: 15px;\n  color: #222;\n  --padding-start: 0;\n  font-weight: 500;\n}\n\n[accouninfo-page] [title-h] {\n  font-size: 17px;\n  color: #fd8a5e;\n  border-left: 2px solid #fd8a5e;\n  padding-left: 10px;\n  margin: 0 0 10px;\n  font-weight: 600;\n  line-height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n[accouninfo-page] [title-h] [addbtn] {\n  color: #1fa779;\n  display: flex;\n  align-items: center;\n}\n\n[accouninfo-page] [title-h] [addbtn] ion-icon {\n  margin-right: 5px;\n}\n\n[accouninfo-page] [password] {\n  position: relative;\n  padding: 30px 25px 15px 25px;\n}\n\n[accouninfo-page] [password] [password-form] ion-row ion-col {\n  margin: 10px 0 0;\n}\n\n[accouninfo-page] [password] [password-form] ion-row ion-col label {\n  font-size: 14px;\n  color: #777;\n  display: block;\n  margin: 0;\n  font-weight: 500;\n  margin: 0 0 10px;\n}\n\n[accouninfo-page] [password] [password-form] ion-row ion-col ion-input {\n  border: 1px solid #eee;\n  border-radius: 5px;\n  font-size: 14px;\n  color: #222;\n  padding: 10px;\n}\n\n[accouninfo-page] [password] [password-form] ion-row [btnsave] {\n  height: 50px;\n  border-radius: 10px;\n  width: 100%;\n  letter-spacing: 0;\n  margin-top: 25px;\n}\n\n[accouninfo-page] [payment-options] {\n  position: relative;\n  padding: 30px 25px 15px 25px;\n}\n\n[accouninfo-page] [payment-options] ion-radio-group {\n  padding: 15px 0 0;\n  display: block;\n}\n\n[accouninfo-page] [payment-options] ion-radio-group ion-item {\n  --background: transparent;\n  --background-hover: transparent;\n  --background-focused: transparent;\n  --inner-padding-end: 0px;\n  margin-bottom: 15px;\n  border-radius: 20px;\n  transition: 0.3s;\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n  justify-content: left;\n  border: 1px solid #eee;\n  color: #333;\n  width: 100%;\n  position: relative;\n  --padding-end: 15px;\n  --padding-top: 15px;\n  --padding-bottom: 15px;\n  --padding-start: 15px;\n}\n\n[accouninfo-page] [payment-options] ion-radio-group ion-item ion-label {\n  margin: 0px;\n  display: flex;\n  align-items: center;\n}\n\n[accouninfo-page] [payment-options] ion-radio-group ion-item ion-label h2 {\n  font-size: 14px;\n  display: flex;\n  justify-content: space-between;\n  font-weight: 600;\n  color: var(--ion-color-black);\n  margin: 0px;\n  align-items: center;\n}\n\n[accouninfo-page] [payment-options] ion-radio-group ion-item ion-label h2 span {\n  margin: 0 10px;\n  z-index: 1111;\n}\n\n[accouninfo-page] [payment-options] ion-radio-group ion-item ion-label [price-title] {\n  margin-left: auto;\n  font-weight: 600;\n  color: var(--ion-color-medium);\n}\n\n[accouninfo-page] [payment-options] ion-radio-group ion-item span {\n  z-index: 1111;\n}\n\n[accouninfo-page] [payment-options] ion-radio-group ion-item ion-radio {\n  margin: 0;\n}\n\n[accouninfo-page] [payment-options] ion-radio-group ion-item [pen-del] ion-icon {\n  margin: 0 4px;\n}\n\n[accouninfo-page] [payment-options] ion-radio-group ion-item [pen-del] [green] {\n  color: #1fa779;\n}\n\n[accouninfo-page] [payment-options] ion-radio-group ion-item [pen-del] [red] {\n  color: #ff4646;\n}\n\n[accouninfo-page] [payment-options] ion-radio-group ion-item.item-radio-checked {\n  --background: #1fa779;\n  --background-hover: #1fa779;\n  --background-focused: #1fa779;\n  background: #1fa779;\n  border-color: #1fa779;\n}\n\n[accouninfo-page] [payment-options] ion-radio-group ion-item.item-radio-checked ion-radio {\n  --color-checked: #ffffff;\n}\n\n[accouninfo-page] [payment-options] ion-radio-group ion-item.item-radio-checked ion-label h2 {\n  color: var(--ion-color-white);\n}\n\n[accouninfo-page] [payment-options] ion-radio-group ion-item.item-radio-checked [pen-del] ion-icon {\n  color: var(--ion-color-white) !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FjY291bnQtaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDakI7O0FBTEE7RUFNRSxxQkFBZ0I7RUFDaEIsV0FBVztBQUdiOztBQVZBO0VBU0csNEJBQXVCO0VBQ3ZCLDZDQUFrQjtFQUNsQixXQUFXO0FBS2Q7O0FBaEJBO0VBY0csY0FBYztFQUNkLGVBQWU7QUFNbEI7O0FBRUE7RUFIQyxpQkFBaUI7QUFLbEI7O0FBRUE7RUFGRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtBQUk5Qjs7QUFFQTtFQUpHLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtBQU10Qjs7QUFFQTtFQU5JLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0FBUXRCOztBQUVBO0VBUEssV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFTdkI7O0FBRUE7RUFQSSxPQUFPO0FBU1g7O0FBRUE7RUFUSyxXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7QUFXckI7O0FBRUE7RUFWSyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBWXZCOztBQUVBO0VBWEssZUFBZTtFQUNmLFlBQVk7RUFDWixxQkFBZ0I7RUFDaEIsU0FBUztBQWFkOztBQUVBO0VBYk0saUJBQWlCO0FBZXZCOztBQUVBO0VBVkUsNEJBQTRCO0FBWTlCOztBQUVBO0VBWEksbUJBQW1CO0FBYXZCOztBQUVBO0VBYkssZUFBZTtFQUNmLFdBQVc7RUFDWCxjQUFjO0VBQ2QsU0FBUztFQUNULGdCQUFnQjtBQWVyQjs7QUFFQTs7O0VBWkssZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFnQjtFQUNoQixnQkFBZ0I7QUFnQnJCOztBQUVBO0VBWkUsZUFBZTtFQUNmLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBY2hDOztBQUVBO0VBZEcsY0FBYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7QUFnQnRCOztBQUVBO0VBaEJJLGlCQUFpQjtBQWtCckI7O0FBRUE7RUFmRSxrQkFBa0I7RUFDbEIsNEJBQTRCO0FBaUI5Qjs7QUFFQTtFQWZLLGdCQUFnQjtBQWlCckI7O0FBRUE7RUFqQk0sZUFBZTtFQUNmLFdBQVc7RUFDWCxjQUFjO0VBQ2QsU0FBUztFQUNULGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFtQnRCOztBQUVBO0VBbEJNLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxhQUFhO0FBb0JuQjs7QUFFQTtFQWxCSyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBb0JyQjs7QUFFQTtFQWhCRSxrQkFBa0I7RUFDbEIsNEJBQTRCO0FBa0I5Qjs7QUFFQTtFQWxCRyxpQkFBaUI7RUFDakIsY0FBYztBQW9CakI7O0FBRUE7RUFwQkkseUJBQWE7RUFDYiwrQkFBbUI7RUFDbkIsaUNBQXFCO0VBQ3JCLHdCQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFjO0VBQ2QsbUJBQWM7RUFDZCxzQkFBaUI7RUFDakIscUJBQWdCO0FBc0JwQjs7QUFFQTtFQXRCSyxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtBQXdCeEI7O0FBRUE7RUF4Qk0sZUFBZTtFQUNmLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsbUJBQW1CO0FBMEJ6Qjs7QUFFQTtFQTFCTyxjQUFjO0VBQ2QsYUFBYTtBQTRCcEI7O0FBRUE7RUExQk0saUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQiw4QkFBOEI7QUE0QnBDOztBQUVBO0VBMUJLLGFBQWE7QUE0QmxCOztBQUVBO0VBM0JLLFNBQVM7QUE2QmQ7O0FBRUE7RUEzQk0sYUFBYTtBQTZCbkI7O0FBRUE7RUE1Qk0sY0FBYztBQThCcEI7O0FBRUE7RUE3Qk0sY0FBYztBQStCcEI7O0FBRUE7RUE3QksscUJBQWE7RUFDYiwyQkFBbUI7RUFDbkIsNkJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUErQjFCOztBQUVBO0VBL0JNLHdCQUFnQjtBQWlDdEI7O0FBRUE7RUEvQk8sNkJBQTZCO0FBaUNwQzs7QUFFQTtFQTlCTyx3Q0FBd0M7QUFnQy9DIiwiZmlsZSI6ImFjY291bnQtaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VnbWVudCB7XHJcblx0Ym9yZGVyLXJhZGl1czogMTRweDtcclxuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZjNmM2YzO1xyXG5cdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0aW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuXHRcdC0tYm9yZGVyLXJhZGl1czogMTRweDtcclxuXHRcdGNvbG9yOiAjODg4O1xyXG5cdFx0Ji5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcclxuXHRcdFx0LS1pbmRpY2F0b3ItYm94LXNoYWRvdzogbm9uZTtcclxuXHRcdFx0LS1pbmRpY2F0b3ItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG5cdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdH1cclxuXHRcdGg2IHtcclxuXHRcdFx0bWFyZ2luOiAxMHB4IDA7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTNweDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuW3BhZGRpbmddIHtcclxuXHRwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG5cclxuW2FjY291bmluZm8tcGFnZV0ge1xyXG5cdC50b3AtaW1zLWJ4IHtcclxuXHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRwYWRkaW5nOiAzMHB4IDI1cHggMTVweCAyNXB4O1xyXG5cdFx0LmltZy1wcnMge1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdG1hcmdpbi10b3A6IDA7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdC5sZWZ0LWJveCB7XHJcblx0XHRcdFx0d2lkdGg6IDEwMHB4O1xyXG5cdFx0XHRcdGhlaWdodDogMTAwcHg7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRmbGV4OiAwIDAgMTAwcHg7XHJcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG5cclxuXHRcdFx0XHRpbWcge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdC5jb24tcHIge1xyXG5cdFx0XHRcdGZsZXg6IDE7XHJcblx0XHRcdFx0aDQge1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRcdFx0XHRjb2xvcjogIzMzMzMzMztcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHAge1xyXG5cdFx0XHRcdFx0Y29sb3I6ICMwMDAwMDBiMztcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcclxuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDNweDtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiA3cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlvbi1idXR0b24ge1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAzMHB4O1xyXG5cdFx0XHRcdFx0LS1ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdFx0aW9uLWljb24ge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDVweDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0W3BlcnNvbmFsLWluZm9dIHtcclxuXHRcdHBhZGRpbmc6IDEwcHggMjVweCAxNXB4IDI1cHg7XHJcblx0XHRpb24tcm93IHtcclxuXHRcdFx0aW9uLWNvbCB7XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHRcdFx0XHRsYWJlbCB7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0XHRjb2xvcjogIzc3NztcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aW9uLWlucHV0LFxyXG5cdFx0XHRcdGlvbi1kYXRldGltZSxcclxuXHRcdFx0XHRpb24tdGV4dGFyZWEge1xyXG5cdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjNGM0YzQ7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAwO1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdFx0XHRcdFx0Y29sb3I6ICMyMjI7XHJcblx0XHRcdFx0XHQtLXBhZGRpbmctc3RhcnQ6IDA7XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRbdGl0bGUtaF0ge1xyXG5cdFx0Zm9udC1zaXplOiAxN3B4O1xyXG5cdFx0Y29sb3I6ICNmZDhhNWU7XHJcblx0XHRib3JkZXItbGVmdDogMnB4IHNvbGlkICNmZDhhNWU7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcblx0XHRtYXJnaW46IDAgMCAxMHB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRbYWRkYnRuXSB7XHJcblx0XHRcdGNvbG9yOiAjMWZhNzc5O1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRpb24taWNvbiB7XHJcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiA1cHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0W3Bhc3N3b3JkXSB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRwYWRkaW5nOiAzMHB4IDI1cHggMTVweCAyNXB4O1xyXG5cdFx0W3Bhc3N3b3JkLWZvcm1dIHtcclxuXHRcdFx0aW9uLXJvdyB7XHJcblx0XHRcdFx0aW9uLWNvbCB7XHJcblx0XHRcdFx0XHRtYXJnaW46IDEwcHggMCAwO1xyXG5cdFx0XHRcdFx0bGFiZWwge1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAjNzc3O1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDAgMCAxMHB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aW9uLWlucHV0IHtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAjMjIyO1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRbYnRuc2F2ZV0ge1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiA1MHB4O1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDA7XHJcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAyNXB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRbcGF5bWVudC1vcHRpb25zXSB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRwYWRkaW5nOiAzMHB4IDI1cHggMTVweCAyNXB4O1xyXG5cdFx0aW9uLXJhZGlvLWdyb3VwIHtcclxuXHRcdFx0cGFkZGluZzogMTVweCAwIDA7XHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRpb24taXRlbSB7XHJcblx0XHRcdFx0LS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRcdFx0XHQtLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50O1xyXG5cdFx0XHRcdC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcclxuXHRcdFx0XHQtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cdFx0XHRcdHRyYW5zaXRpb246IDAuM3M7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcblx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuXHRcdFx0XHRjb2xvcjogIzMzMztcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0LS1wYWRkaW5nLWVuZDogMTVweDtcclxuXHRcdFx0XHQtLXBhZGRpbmctdG9wOiAxNXB4O1xyXG5cdFx0XHRcdC0tcGFkZGluZy1ib3R0b206IDE1cHg7XHJcblx0XHRcdFx0LS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG5cdFx0XHRcdGlvbi1sYWJlbCB7XHJcblx0XHRcdFx0XHRtYXJnaW46IDBweDtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0aDIge1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1ibGFjayk7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMHB4O1xyXG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRzcGFuIHtcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDAgMTBweDtcclxuXHRcdFx0XHRcdFx0XHR6LWluZGV4OiAxMTExO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRbcHJpY2UtdGl0bGVdIHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0c3BhbiB7XHJcblx0XHRcdFx0XHR6LWluZGV4OiAxMTExO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpb24tcmFkaW8ge1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRbcGVuLWRlbF0ge1xyXG5cdFx0XHRcdFx0aW9uLWljb24ge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDAgNHB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0W2dyZWVuXSB7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAjMWZhNzc5O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0W3JlZF0ge1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogI2ZmNDY0NjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ji5pdGVtLXJhZGlvLWNoZWNrZWQge1xyXG5cdFx0XHRcdFx0LS1iYWNrZ3JvdW5kOiAjMWZhNzc5O1xyXG5cdFx0XHRcdFx0LS1iYWNrZ3JvdW5kLWhvdmVyOiAjMWZhNzc5O1xyXG5cdFx0XHRcdFx0LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICMxZmE3Nzk7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMWZhNzc5O1xyXG5cdFx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAjMWZhNzc5O1xyXG5cdFx0XHRcdFx0aW9uLXJhZGlvIHtcclxuXHRcdFx0XHRcdFx0LS1jb2xvci1jaGVja2VkOiAjZmZmZmZmO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aW9uLWxhYmVsIHtcclxuXHRcdFx0XHRcdFx0aDIge1xyXG5cdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRbcGVuLWRlbF0ge1xyXG5cdFx0XHRcdFx0XHRpb24taWNvbiB7XHJcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSkgIWltcG9ydGFudDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "H06C":
    /*!*************************************************************!*\
      !*** ./src/app/account-info/account-info-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: AccountInfoPageRoutingModule */

    /***/
    function H06C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountInfoPageRoutingModule", function () {
        return AccountInfoPageRoutingModule;
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


      var _account_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./account-info.page */
      "ruoy");

      var routes = [{
        path: '',
        component: _account_info_page__WEBPACK_IMPORTED_MODULE_3__["AccountInfoPage"]
      }];

      var AccountInfoPageRoutingModule = function AccountInfoPageRoutingModule() {
        _classCallCheck(this, AccountInfoPageRoutingModule);
      };

      AccountInfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AccountInfoPageRoutingModule);
      /***/
    },

    /***/
    "nH8s":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account-info/account-info.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function nH8s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <div flexHeader>\n      <div backHead>\n        <ion-back-button defaultHref=\"/tabs/settings\" [text]=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n      </div>\n      <ion-title class=\"ion-text-center\">Account Info</ion-title>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div padding>\n    <ion-segment mode=\"ios\" [(ngModel)]=\"tabs\" segment>\n      <ion-segment-button value=\"personal\">\n        <h6>Personal</h6>\n      </ion-segment-button>\n      <ion-segment-button value=\"password\">\n        <h6>Password</h6>\n      </ion-segment-button>\n      <ion-segment-button value=\"payment\">\n        <h6>Payment</h6>\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n  <div accouninfo-page [ngSwitch]=\"tabs\">\n    <div *ngSwitchCase=\"'personal'\">\n      <div class=\"top-ims-bx\">\n        <div class=\"img-prs\">\n          <div class=\"left-box\">\n            <img src=\"{{ userData?.image }}\">\n          </div>\n          <div class=\"con-pr\">\n            <h4>{{ userData?.first_name }} {{ userData?.last_name }}</h4>\n            <p> {{ userData?.email }} </p>\n            <ion-button slot=\"end\" btngetsocial routerLink=\"/edit-profile\">\n              <ion-icon name=\"pencil-outline\"></ion-icon> Edit Profile\n            </ion-button>\n          </div>\n        </div>\n      </div>\n      <div personal-info>\n        <ion-row>\n          <ion-col size=\"8\">\n            <label>Name</label>\n            <ion-input type=\"text\" value=\"{{ userData?.first_name }} {{ userData?.last_name }}\" readonly=\"\"></ion-input>\n          </ion-col>\n          <ion-col size=\"4\">\n            <label>User ID</label>\n            <ion-input type=\"text\" value=\"#{{ userId }}\" readonly=\"\"></ion-input>\n          </ion-col>\n          <ion-col size=\"12\">\n            <label>Email</label>\n            <ion-input type=\"email\" value=\"{{ userData?.email }}\" readonly=\"\"></ion-input>\n          </ion-col>\n          <ion-col size=\"12\">\n            <label>DOB</label>\n            <ion-datetime displayFormat=\"MM-DD\" value=\"{{ userData?.dob }}\" readonly=\"\"></ion-datetime>\n          </ion-col>\n          <ion-col size=\"12\">\n            <label>Address</label>\n            <ion-textarea rows=\"3\" type=\"text\" placeholder=\"Address\" value=\"{{ userData?.address1 }}\" readonly=\"\">\n            </ion-textarea>\n          </ion-col>\n          <ion-col size=\"12\">\n            <label>Chronic Disease* </label>\n            <ion-select disabled placeholder=\"Select One\" value=\"{{ userData?.chronic_disease}}\">\n              <ion-select-option value=\"1\">Diabetes</ion-select-option>\n              <ion-select-option value=\"2\">Coeliac</ion-select-option>\n              <ion-select-option value=\"3\">Coronary Heart Disease</ion-select-option>\n              <ion-select-option value=\"5\">IBS & IBD</ion-select-option>\n              <ion-select-option value=\"6\">Other</ion-select-option>\n            </ion-select>\n          </ion-col>\n        </ion-row>\n\n      </div>\n    </div>\n\n    <div *ngSwitchCase=\"'password'\" password>\n      <h4 title-h>Change Password</h4>\n      <form [formGroup]=\"updatePasswordForm\" (ngSubmit)=\"onPasswordSubmit()\" novalidate password-form>\n        <ion-row>\n          <ion-col size=\"12\">\n            <label>Current Password* </label>\n            <ion-input type=\"password\" formControlName=\"currentPassword\" placeholder=\"password\" value=\"\"></ion-input>\n            <ion-item class=\"form-text error\"\n              *ngIf=\"submitPasswordAttempt && errorPasswordCtr.currentPassword.errors?.required\">\n              <ion-label no-margin stacked>Current Password is required.</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n            <label>New Password*</label>\n            <ion-input type=\"password\" formControlName=\"password\" placeholder=\"password\" value=\"\"></ion-input>\n            <ion-item class='form-text error'\n              *ngIf=\"submitPasswordAttempt && errorPasswordCtr.password.errors?.required\">\n              <ion-label no-margin stacked>Password is required.</ion-label>\n            </ion-item>\n            <ion-item class='form-text error'\n              *ngIf=\"submitPasswordAttempt && errorPasswordCtr.password.errors?.pattern\">\n              <ion-label no-margin stacked wrap-text>Password must be between 6 and 12 characters with at least one\n                capital letter, one small letter, and one digit.</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n            <label>Repeat New Password* </label>\n            <ion-input type=\"password\" formControlName=\"confirmPassword\" placeholder=\"password\" value=\"\"></ion-input>\n            <ion-item class='form-text error'\n              *ngIf=\"submitPasswordAttempt && errorPasswordCtr.confirmPassword.errors?.required\">\n              <ion-label no-margin stacked>Confirm Password is required.</ion-label>\n            </ion-item>\n            <ion-item class='form-text error'\n              *ngIf=\"submitPasswordAttempt && !errorPasswordCtr.confirmPassword.errors?.required && updatePasswordForm.hasError('mismatchedPasswords') \">\n              <ion-label no-margin stacked>Passwords do not match</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-button type=\"submit\" btnsave>Submit</ion-button>\n          </ion-col>\n        </ion-row>\n      </form>\n    </div>\n\n    <div *ngSwitchCase=\"'payment'\" payment-options>\n      <h4 title-h>Payment Info <span addbtn routerLink=\"/add-card\">\n          <ion-icon name=\"add-circle-outline\"></ion-icon> Add\n        </span></h4>\n      <ion-radio-group value=\"{{ selectedCard }}\">\n\n        <ng-container *ngFor=\"let data of cardData\" >\n          <ion-item mode=\"md\" lines=\"none\" class=\"ion-no-padding\">\n            <ion-radio mode=\"md\" slot=\"start\" value=\"{{ data.id }}\"></ion-radio>\n            <ion-label>\n              <h2> <span>\n                  <img src=\"assets/img/master-card.svg\" />\n                </span> XXXX XXXX {{ data.card_number }} </h2>\n            </ion-label>\n            <span slot=\"end\" pen-del>\n              <ion-icon name=\"trash\" (click)=\"deleteUserCard(data.id)\" red></ion-icon>\n            </span>\n          </ion-item>\n        </ng-container>\n\n      </ion-radio-group>\n    </div>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "pqwD":
    /*!*****************************************************!*\
      !*** ./src/app/account-info/account-info.module.ts ***!
      \*****************************************************/

    /*! exports provided: AccountInfoPageModule */

    /***/
    function pqwD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountInfoPageModule", function () {
        return AccountInfoPageModule;
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


      var _account_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./account-info-routing.module */
      "H06C");
      /* harmony import */


      var _account_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./account-info.page */
      "ruoy");

      var AccountInfoPageModule = function AccountInfoPageModule() {
        _classCallCheck(this, AccountInfoPageModule);
      };

      AccountInfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _account_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountInfoPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_account_info_page__WEBPACK_IMPORTED_MODULE_6__["AccountInfoPage"]]
      })], AccountInfoPageModule);
      /***/
    },

    /***/
    "ruoy":
    /*!***************************************************!*\
      !*** ./src/app/account-info/account-info.page.ts ***!
      \***************************************************/

    /*! exports provided: AccountInfoPage */

    /***/
    function ruoy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountInfoPage", function () {
        return AccountInfoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_account_info_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./account-info.page.html */
      "nH8s");
      /* harmony import */


      var _account_info_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./account-info.page.scss */
      "D4L1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/api/api.service */
      "oZWX");
      /* harmony import */


      var _services_globalFooService_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/globalFooService.service */
      "3IAD");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/common.service */
      "OlR4");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AccountInfoPage = /*#__PURE__*/function () {
        function AccountInfoPage(formBuilder, globalFooService, common, api, router) {
          _classCallCheck(this, AccountInfoPage);

          this.formBuilder = formBuilder;
          this.globalFooService = globalFooService;
          this.common = common;
          this.api = api;
          this.router = router;
          this.tabs = "personal";
          this.userId = localStorage.getItem('ineat_userid');
          this.userData = JSON.parse(localStorage.getItem('ineat_userData'));
          this.submitPasswordAttempt = false;
        }

        _createClass(AccountInfoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getCardsList();
            this.updatePasswordForm = this.formBuilder.group({
              currentPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$')])],
              confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }, {
              validator: this.matchingPasswords('password', 'confirmPassword')
            });
          }
        }, {
          key: "errorPasswordCtr",
          get: function get() {
            return this.updatePasswordForm.controls;
          }
        }, {
          key: "matchingPasswords",
          value: function matchingPasswords(passwordKey, confirmPasswordKey) {
            return function (updatePasswordForm) {
              var password = updatePasswordForm.controls[passwordKey];
              var confirmPassword = updatePasswordForm.controls[confirmPasswordKey];

              if (password.value !== confirmPassword.value) {
                return {
                  mismatchedPasswords: true
                };
              }
            };
          }
        }, {
          key: "onPasswordSubmit",
          value: function onPasswordSubmit() {
            var _this = this;

            this.submitPasswordAttempt = true;

            if (!this.updatePasswordForm.valid) {
              return false;
            } else {
              this.common.presentLoading();
              var dict = this.updatePasswordForm.value;
              dict['userId'] = this.userId;
              this.api.post('updatePassword', dict, '').subscribe(function (result) {
                _this.submitPasswordAttempt = false;

                _this.common.stopLoading();

                var res;
                res = result;

                if (res.status == 422) {
                  var errMsgs = '';

                  for (var i = 0; i < res.errors.length; i++) {
                    var obj = res.errors[i];
                    errMsgs += obj + '</br>';
                  }

                  _this.common.presentToast(errMsgs, 'danger');
                } else if (res.status == 200) {
                  localStorage.clear();

                  _this.router.navigate(['/login']);

                  _this.common.presentToast('Password Updated Successfully!. Please Log in.', 'success');
                }
              }, function (error) {
                console.log(error);
              });
            }
          }
        }, {
          key: "getCardsList",
          value: function getCardsList() {
            var _this2 = this;

            this.api.post('getUserCardList', {
              userId: this.userId
            }, '').subscribe(function (result) {
              _this2.common.stopLoading();

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

                _this2.common.presentToast(errMsgs, 'danger');
              } else if (res.status === 200 || res.status === '200') {
                _this2.cardData = res.data;
                _this2.selectedCard = res.selected_id;
                console.log(_this2.cardData);
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "deleteUserCard",
          value: function deleteUserCard(cardId) {
            var _this3 = this;

            this.common.presentLoading();
            this.api.post('deleteUserCard', {
              userId: this.userId,
              cardId: cardId
            }, '').subscribe(function (result) {
              _this3.common.stopLoading();

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

                _this3.common.presentToast(errMsgs, 'danger');
              } else if (res.status === 200 || res.status === '200') {
                _this3.getCardsList();
              }
            }, function (error) {
              _this3.common.stopLoading();

              console.log(error);
            });
          }
        }]);

        return AccountInfoPage;
      }();

      AccountInfoPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _services_globalFooService_service__WEBPACK_IMPORTED_MODULE_6__["GlobalFooService"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]
        }, {
          type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }];
      };

      AccountInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-account-info',
        template: _raw_loader_account_info_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_account_info_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AccountInfoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=account-info-account-info-module-es5.js.map