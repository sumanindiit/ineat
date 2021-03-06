(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "+S3T":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/confirm-modal/confirm-modal.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\t<div confirmBox>\n\t\t<h4>Order Confirmation</h4>\n\t\t<p>Are you sure you want to place this order?</p>\n\t\t<div d-flex>\n\t\t\t<ion-button btncontinue btnCancel (click)=\"dismiss()\">Cancel</ion-button>\n\t\t\t<ion-button btncontinue (click)=\"confirm()\">Confirm</ion-button>\n\t\t</div>\n\t</div>\n</ion-content>\n");

/***/ }),

/***/ "/s3u":
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/*! exports provided: CameraSource, CameraDirection, CameraResultType, Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "FUe0");
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ "dTEF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraSource", function() { return _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraDirection", function() { return _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraResultType", function() { return _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraResultType"]; });


const Camera = Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerPlugin"])('Camera', {
    web: () => Promise.all(/*! import() | web */[__webpack_require__.e("common"), __webpack_require__.e("web")]).then(__webpack_require__.bind(null, /*! ./web */ "wzPO")).then(m => new m.CameraWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "0/6H":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e806d1f6.js */ "A36C");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-f49d994d.js */ "iWo5");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "3IAD":
/*!******************************************************!*\
  !*** ./src/app/services/globalFooService.service.ts ***!
  \******************************************************/
/*! exports provided: GlobalFooService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalFooService", function() { return GlobalFooService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



let GlobalFooService = class GlobalFooService {
    constructor() {
        this.fooSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    publishSomeData(data) {
        this.fooSubject.next(data);
    }
    getObservable() {
        return this.fooSubject;
    }
};
GlobalFooService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GlobalFooService);



/***/ }),

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "F+fE":
/*!*******************************************************!*\
  !*** ./src/app/confirm-modal/confirm-modal.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("[confirmBox] {\n  max-width: 300px;\n  width: 90%;\n  margin: 120px auto 0;\n  background: #fff;\n  padding: 30px 20px;\n  text-align: center;\n  border-radius: 15px;\n}\n\n[confirmBox] h4 {\n  font-weight: 500;\n  color: #444;\n  margin: 0 0 20px;\n}\n\n[confirmBox] p {\n  font-size: 14px;\n  font-weight: 400;\n  color: #666;\n  margin: 0 0 15px;\n}\n\n[confirmBox] [d-flex] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n[confirmBox] [d-flex] [btncontinue] {\n  font-size: 14px;\n  height: 50px;\n  width: 100%;\n  border-radius: 10px;\n  display: flex;\n  --background: var(--ion-color-secondary);\n  margin-right: 10px;\n  --padding-start:20px;\n  --padding-end:20px;\n  align-items: center;\n  justify-content: center;\n}\n\n[confirmBox] [d-flex] [btncontinue] ion-icon {\n  margin-left: 10px;\n}\n\n[confirmBox] [d-flex] [btncontinue]:last-child {\n  margin-right: 0;\n}\n\n[confirmBox] [d-flex] [btncontinue][btnCancel] {\n  --background: #fff;\n  border: 1px solid #eee;\n  color: #333;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbmZpcm0tbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixvQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3BCOztBQUVBO0VBREUsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxnQkFBZTtBQUdqQjs7QUFFQTtFQUZFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVTtFQUNWLGdCQUFlO0FBSWpCOztBQUVBO0VBSEUsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFLekI7O0FBRUE7RUFMRyxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVU7RUFDVixtQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHdDQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG9CQUFnQjtFQUNoQixrQkFBYztFQUNkLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFPMUI7O0FBRUE7RUFQSSxpQkFBaUI7QUFTckI7O0FBRUE7RUFSSSxlQUFjO0FBVWxCOztBQUVBO0VBVEksa0JBQWE7RUFDYixzQkFBcUI7RUFDckIsV0FBVztBQVdmIiwiZmlsZSI6ImNvbmZpcm0tbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW2NvbmZpcm1Cb3hde1xyXG5cdG1heC13aWR0aDogMzAwcHg7XHJcblx0d2lkdGg6IDkwJTtcclxuXHRtYXJnaW46MTIwcHggYXV0byAwO1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0cGFkZGluZzozMHB4IDIwcHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcblx0aDR7XHJcblx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0Y29sb3I6ICM0NDQ7XHJcblx0XHRtYXJnaW46MCAwIDIwcHg7XHJcblx0fVxyXG5cdHB7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0Y29sb3I6IzY2NjtcclxuXHRcdG1hcmdpbjowIDAgMTVweDtcclxuXHR9XHJcblx0W2QtZmxleF17XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0W2J0bmNvbnRpbnVlXXtcclxuXHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRoZWlnaHQ6IDUwcHg7XHJcblx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6MTBweDtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0LS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuXHRcdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cdFx0XHQtLXBhZGRpbmctc3RhcnQ6MjBweDtcclxuXHRcdFx0LS1wYWRkaW5nLWVuZDoyMHB4O1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0aW9uLWljb257XHJcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IDEwcHg7XHJcblx0XHRcdH1cclxuXHRcdFx0JjpsYXN0LWNoaWxke1xyXG5cdFx0XHRcdG1hcmdpbi1yaWdodDowO1xyXG5cdFx0XHR9XHJcblx0XHRcdCZbYnRuQ2FuY2VsXXtcclxuXHRcdFx0XHQtLWJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRcdFx0Ym9yZGVyOjFweCBzb2xpZCAjZWVlO1xyXG5cdFx0XHRcdGNvbG9yOiAjMzMzO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbltidG5jb250aW51ZV17XHJcblx0XHJcbn0iXX0= */");

/***/ }),

/***/ "MEpN":
/*!*****************************************************!*\
  !*** ./src/app/confirm-modal/confirm-modal.page.ts ***!
  \*****************************************************/
/*! exports provided: ConfirmModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalPage", function() { return ConfirmModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_confirm_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./confirm-modal.page.html */ "+S3T");
/* harmony import */ var _confirm_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirm-modal.page.scss */ "F+fE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api/api.service */ "oZWX");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/common.service */ "OlR4");








let ConfirmModalPage = class ConfirmModalPage {
    constructor(modalController, route, common, api) {
        this.modalController = modalController;
        this.common = common;
        this.api = api;
        this.userId = localStorage.getItem('ineat_userid');
        this.userData = localStorage.getItem('ineat_userData');
    }
    ngOnInit() { }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': true
        });
    }
    confirm() {
        this.modalController.dismiss({
            'dismissed': true
        });
        this.api.navCtrl.navigateRoot('/order-placed');
        // this.api.post('confirmUserMeal', { userId: this.userId }, '')
        //   .subscribe(
        //     (result) => {
        //       this.common.stopLoading();
        //       const res: any = result;
        //       if (res.status === 422 || res.status === '422') {
        //         let errMsgs = '';
        //         for (const x of res.errors) {
        //           errMsgs += x + '</br>';
        //         }
        //         this.common.presentToast(errMsgs, 'danger');
        //       }
        //       else if (res.status === 200 || res.status === '200') {
        //         this.api.navCtrl.navigateRoot('/order-placed');
        //         //console.log(res);
        //       }
        //     },
        //     (error) => {
        //       console.log(error);
        //     });
    }
};
ConfirmModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] }
];
ConfirmModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-confirm-modal',
        template: _raw_loader_confirm_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_confirm_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ConfirmModalPage);



/***/ }),

/***/ "PH02":
/*!***********************************************************!*\
  !*** ./node_modules/@capacitor/clipboard/dist/esm/web.js ***!
  \***********************************************************/
/*! exports provided: ClipboardWeb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardWeb", function() { return ClipboardWeb; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "FUe0");

class ClipboardWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"] {
    async write(options) {
        if (typeof navigator === 'undefined' || !navigator.clipboard) {
            throw this.unavailable('Clipboard API not available in this browser');
        }
        if (options.string !== undefined) {
            await this.writeText(options.string);
        }
        else if (options.url) {
            await this.writeText(options.url);
        }
        else if (options.image) {
            if (typeof ClipboardItem !== 'undefined') {
                try {
                    const blob = await (await fetch(options.image)).blob();
                    const clipboardItemInput = new ClipboardItem({ [blob.type]: blob });
                    await navigator.clipboard.write([clipboardItemInput]);
                }
                catch (err) {
                    throw new Error('Failed to write image');
                }
            }
            else {
                throw this.unavailable('Writing images to the clipboard is not supported in this browser');
            }
        }
        else {
            throw new Error('Nothing to write');
        }
    }
    async read() {
        if (typeof navigator === 'undefined' || !navigator.clipboard) {
            throw this.unavailable('Clipboard API not available in this browser');
        }
        if (typeof ClipboardItem !== 'undefined') {
            try {
                const clipboardItems = await navigator.clipboard.read();
                const type = clipboardItems[0].types[0];
                const clipboardBlob = await clipboardItems[0].getType(type);
                const data = await this._getBlobData(clipboardBlob, type);
                return { value: data, type };
            }
            catch (err) {
                return this.readText();
            }
        }
        else {
            return this.readText();
        }
    }
    async readText() {
        if (typeof navigator === 'undefined' ||
            !navigator.clipboard ||
            !navigator.clipboard.readText) {
            throw this.unavailable('Reading from clipboard not supported in this browser');
        }
        const text = await navigator.clipboard.readText();
        return { value: text, type: 'text/plain' };
    }
    async writeText(text) {
        if (typeof navigator === 'undefined' ||
            !navigator.clipboard ||
            !navigator.clipboard.writeText) {
            throw this.unavailable('Writting to clipboard not supported in this browser');
        }
        await navigator.clipboard.writeText(text);
    }
    _getBlobData(clipboardBlob, type) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            if (type.includes('image')) {
                reader.readAsDataURL(clipboardBlob);
            }
            else {
                reader.readAsText(clipboardBlob);
            }
            reader.onloadend = () => {
                const r = reader.result;
                resolve(r);
            };
            reader.onerror = e => {
                reject(e);
            };
        });
    }
}
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "PJjM":
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/clipboard/dist/esm/index.js ***!
  \*************************************************************/
/*! exports provided: Clipboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clipboard", function() { return Clipboard; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "FUe0");
/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web */ "PH02");
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definitions */ "v06m");
/* empty/unused harmony star reexport */

const Clipboard = Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerPlugin"])('Clipboard', {
    web: () => new _web__WEBPACK_IMPORTED_MODULE_1__["ClipboardWeb"](),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "W7Za":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comment-form/comment-form.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\t<div padding>\n\t\t<div form>\n\t\t\t<form [formGroup]=\"commentForm\" (ngSubmit)=\"onAddCommentSubmit()\" novalidate>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<label>Comment</label>\n\t\t\t\t\t\t<ion-textarea formControlName=\"commentDesc\" rows=\"5\" placeholder=\"Desciption\"></ion-textarea>\n\t\t\t\t\t\t<ion-item class=\"form-text error\"\n\t\t\t\t\t\t\t*ngIf=\"submitAttempt && erroraddCardCtr.commentDesc.errors?.required\">\n\t\t\t\t\t\t\t<ion-label no-margin stacked>Please enter Comment.</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-button type=\"submit\" btnsave>Submit</ion-button>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</form>\n\t\t</div>\n\n\t</div>\n</ion-content>");

/***/ }),

/***/ "ZaV5":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  if (el.componentOnReady) {
    await el.componentOnReady();
  }
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "dTEF":
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/*! exports provided: CameraSource, CameraDirection, CameraResultType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraSource", function() { return CameraSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraDirection", function() { return CameraDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraResultType", function() { return CameraResultType; });
var CameraSource;
(function (CameraSource) {
    /**
     * Prompts the user to select either the photo album or take a photo.
     */
    CameraSource["Prompt"] = "PROMPT";
    /**
     * Take a new photo using the camera.
     */
    CameraSource["Camera"] = "CAMERA";
    /**
     * Pick an existing photo fron the gallery or photo album.
     */
    CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function (CameraDirection) {
    CameraDirection["Rear"] = "REAR";
    CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function (CameraResultType) {
    CameraResultType["Uri"] = "uri";
    CameraResultType["Base64"] = "base64";
    CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));
//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "pXy3":
/*!***************************************************!*\
  !*** ./src/app/comment-form/comment-form.page.ts ***!
  \***************************************************/
/*! exports provided: CommentFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentFormPage", function() { return CommentFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_comment_form_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./comment-form.page.html */ "W7Za");
/* harmony import */ var _comment_form_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comment-form.page.scss */ "zzFy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api/api.service */ "oZWX");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/common.service */ "OlR4");








let CommentFormPage = class CommentFormPage {
    constructor(modalCtrl, common, formBuilder, api) {
        this.modalCtrl = modalCtrl;
        this.common = common;
        this.formBuilder = formBuilder;
        this.api = api;
        this.submitAttempt = false;
    }
    ngOnInit() {
        this.commentForm = this.formBuilder.group({
            commentDesc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
        });
    }
    get erroraddCardCtr() {
        return this.commentForm.controls;
    }
    onAddCommentSubmit() {
        this.submitAttempt = true;
        if (!this.commentForm.valid) {
            return false;
        }
        else {
            this.common.presentLoading();
            let dict = this.commentForm.value;
            dict['userId'] = this.userId;
            dict['feedId'] = this.feedId;
            this.api.post('addComment', dict, '')
                .subscribe((result) => {
                this.submitAttempt = false;
                this.common.stopLoading();
                let res;
                res = result;
                if (res.status == 422) {
                    var errMsgs = '';
                    for (var i = 0; i < res.errors.length; i++) {
                        var obj = res.errors[i];
                        errMsgs += obj + '</br>';
                    }
                    this.common.presentToast(errMsgs, 'danger');
                }
                else if (res.status == 200) {
                    this.common.presentToast('Comment added Successfully!.', 'success');
                    this.dismiss();
                }
            }, (error) => {
                console.log(error);
            });
        }
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalCtrl.dismiss({
            'dismissed': true
        });
    }
};
CommentFormPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] }
];
CommentFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-comment-form',
        template: _raw_loader_comment_form_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_comment_form_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CommentFormPage);



/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "v06m":
/*!*******************************************************************!*\
  !*** ./node_modules/@capacitor/clipboard/dist/esm/definitions.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ "zzFy":
/*!*****************************************************!*\
  !*** ./src/app/comment-form/comment-form.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("[form] {\n  margin: 0px 0 0;\n}\n\n[form] ion-row {\n  margin: 10px 0 0;\n}\n\n[form] ion-row ion-col label {\n  font-size: 17px;\n  font-weight: 600;\n  letter-spacing: -0.5px;\n}\n\n[form] ion-row ion-col ion-input, [form] ion-row ion-col ion-textarea, [form] ion-row ion-col ion-select {\n  border: 1px solid #eee;\n  border-radius: 5px;\n  font-size: 14px;\n  color: #222;\n  padding: 10px;\n}\n\n[btnsave] {\n  height: 50px;\n  border-radius: 10px;\n  width: 100%;\n  margin-top: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbW1lbnQtZm9ybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHQyxlQUFjO0FBRGY7O0FBRUE7RUFDRSxnQkFBZTtBQUNqQjs7QUFFQTtFQUFnQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUV0Qzs7QUFFQTtFQURJLHNCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxhQUFZO0FBR2hCOztBQUVBO0VBQ0MsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsYUFBYTtBQUNkIiwiZmlsZSI6ImNvbW1lbnQtZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblx0XG5bZm9ybV17XG5cdG1hcmdpbjowcHggMCAwO1xuXHRpb24tcm93e1xuXHRcdG1hcmdpbjoxMHB4IDAgMDtcblx0XHRpb24tY29se1xuXHRcdFx0bGFiZWx7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcblx0XHRcdH1cblx0XHRcdGlvbi1pbnB1dCwgaW9uLXRleHRhcmVhLCBpb24tc2VsZWN0e1xuXHRcdFx0XHRib3JkZXI6MXB4IHNvbGlkICNlZWU7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDVweDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRjb2xvcjogIzIyMjtcblx0XHRcdFx0cGFkZGluZzoxMHB4O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuW2J0bnNhdmVde1xuXHRoZWlnaHQ6IDUwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdHdpZHRoOiAxMDAlO1xuXHRtYXJnaW4tdG9wOiAwO1xufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map