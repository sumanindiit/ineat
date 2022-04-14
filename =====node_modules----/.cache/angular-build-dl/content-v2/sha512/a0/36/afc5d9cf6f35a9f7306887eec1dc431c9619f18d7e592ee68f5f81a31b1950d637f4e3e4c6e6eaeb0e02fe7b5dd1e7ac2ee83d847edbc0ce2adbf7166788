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
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<div flexHeader>\n\t\t\t<div backHead>\n\t\t\t\t<ion-back-button routerLink=\"/tabs/feed\"></ion-back-button>\n\t\t\t</div>\n\t\t\t<ion-title>Create Discussion</ion-title>\n\t\t</div>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div padding>\n\t\t<div form>\n\t\t\t<form [formGroup]=\"addPostForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<label>What's on Your Mind?</label>\n\t\t\t\t\t\t<ion-input formControlName=\"postDescription\" placeholder=\"What's on Your Mind\"></ion-input>\n\t\t\t\t\t\t<ion-item class=\"form-text error\"\n\t\t\t\t\t\t\t*ngIf=\"submitAttempt && errorCtr.postDescription.errors?.required\">\n\t\t\t\t\t\t\t<ion-label no-margin stacked>Please enter description</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item class=\"form-text error\"\n\t\t\t\t\t\t\t*ngIf=\"submitAttempt && errorCtr.postDescription.errors?.minlength\">\n\t\t\t\t\t\t\t<ion-label no-margin stacked>Min 3 chars long.</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<label>Select Group</label>\n\t\t\t\t\t\t<ion-select formControlName=\"postGroup\" value=\"\" [interfaceOptions]=\"customAlertOptions\"\n\t\t\t\t\t\t\tinterface=\"action-sheet\" placeholder=\"Select Group\">\n\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let val of allGroups\" value=\"{{val.id}}\">{{val.title}}\n\t\t\t\t\t\t\t</ion-select-option>\n\t\t\t\t\t\t</ion-select>\n\n\n\t\t\t\t\t\t<ion-item class='form-text error' *ngIf=\"submitAttempt && errorCtr.postGroup.errors?.required\">\n\t\t\t\t\t\t\t<ion-label no-margin stacked>Please select at least one group.</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<label>Add a cover image</label>\n\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<ion-button (click)=\"selectImageSource()\">\n\t\t\t\t\t\t\t\t<ion-icon name=\"camera\"></ion-icon>\n\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<input type=\"file\" accept=\"image/*\" id=\"fileupload\" (change)=\"uploadFile($event)\"\n\t\t\t\t\t\t\tname=\"fileupload\" style=\"display:none;\" />\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"12\" *ngIf=\"postImage !=''\">\n\t\t\t\t\t\t<div class=\"coverImages\">\n\t\t\t\t\t\t\t<span><img src=\"{{ postImage }}\" alt=\"\"></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-button type=\"submit\" btnsave>Share</ion-button>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</form>\n\t\t</div>\n\n\t</div>\n</ion-content>");

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api/api.service */ "oZWX");
/* harmony import */ var _services_globalFooService_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/globalFooService.service */ "3IAD");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/common.service */ "OlR4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/camera */ "/s3u");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");











let AddBowlPage = class AddBowlPage {
    constructor(formBuilder, globalFooService, common, api, router, plt, actionSheetCtrl) {
        this.formBuilder = formBuilder;
        this.globalFooService = globalFooService;
        this.common = common;
        this.api = api;
        this.router = router;
        this.plt = plt;
        this.actionSheetCtrl = actionSheetCtrl;
        this.userId = localStorage.getItem('ineat_userid');
        this.submitAttempt = false;
        this.userData = JSON.parse(localStorage.getItem('ineat_userData'));
    }
    ngOnInit() {
        this.addPostForm = this.formBuilder.group({
            postDescription: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]],
            postGroup: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
        this.getGroups();
    }
    getGroups() {
        this.api.post('getUserSocialGroups', { userId: this.userId }, '')
            .subscribe((result) => {
            const res = result;
            if (res.status === 422 || res.status === '422') {
                let errMsgs = '';
                for (const x of res.errors) {
                    errMsgs += x + '</br>';
                }
                this.allGroups = [];
            }
            else if (res.status === 200 || res.status === '200') {
                this.allGroups = res.data;
            }
        }, (error) => {
            console.log(error);
        });
    }
    get errorCtr() {
        return this.addPostForm.controls;
    }
    selectImageSource() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const buttons = [
                {
                    text: 'Take Photo',
                    icon: 'camera',
                    handler: () => {
                        this.addImage(_capacitor_camera__WEBPACK_IMPORTED_MODULE_9__["CameraSource"].Camera);
                    }
                },
                {
                    text: 'Choose From Gallery',
                    icon: 'image',
                    handler: () => {
                        this.addImage(_capacitor_camera__WEBPACK_IMPORTED_MODULE_9__["CameraSource"].Photos);
                    }
                }
            ];
            // Only allow file selection inside a browser
            if (!this.plt.is('hybrid')) {
                buttons.push({
                    text: 'Choose a File',
                    icon: 'attach',
                    handler: () => {
                        this.fileInput.nativeElement.click();
                    }
                });
            }
            const actionSheet = yield this.actionSheetCtrl.create({
                header: 'Select Image Source',
                buttons
            });
            yield actionSheet.present();
        });
    }
    addImage(source) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_9__["Camera"].getPhoto({
                quality: 60,
                allowEditing: false,
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_9__["CameraResultType"].Base64,
                source
            });
            const blobData = this.b64toBlob(image.base64String, `image/${image.format}`);
            const imageName = 'imagee';
            this.postImage = 'data:image/png;base64,' + image.base64String;
            this.uploadBlobData = blobData;
            this.uploadedExtension = image.format;
        });
    }
    uploadFile(event) {
        const eventObj = event;
        const target = eventObj.target;
        const file = target.files[0];
    }
    // Helper function
    b64toBlob(b64Data, contentType = '', sliceSize = 512) {
        const byteCharacters = atob(b64Data);
        const byteArrays = [];
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);
            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        const blob = new Blob(byteArrays, { type: contentType });
        return blob;
    }
    onSubmit() {
        this.submitAttempt = true;
        if (!this.addPostForm.valid) {
            return false;
        }
        else {
            this.common.presentLoading();
            let dict = this.addPostForm.value;
            const imgName = (+new Date).toString(36).slice(-5);
            const formData = new FormData();
            if (typeof this.uploadBlobData === 'undefined') { }
            else {
                formData.append('file', this.uploadBlobData, 'myimage.' + this.uploadedExtension);
            }
            formData.append('description', this.addPostForm.value.postDescription);
            formData.append('group', this.addPostForm.value.postGroup);
            formData.append('userId', this.userId);
            this.api.post('addSocialPost', formData, '')
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
                    this.common.presentToast('Feed added successfully!.', 'success');
                    this.api.navCtrl.navigateRoot('/tabs/feed');
                }
            }, (error) => {
                console.log(error);
            });
        }
    }
};
AddBowlPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_globalFooService_service__WEBPACK_IMPORTED_MODULE_6__["GlobalFooService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ActionSheetController"] }
];
AddBowlPage.propDecorators = {
    fileInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['fileInput', { static: false },] }]
};
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