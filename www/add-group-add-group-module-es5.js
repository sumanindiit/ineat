(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-group-add-group-module"], {
    /***/
    "95Th":
    /*!*******************************************************!*\
      !*** ./src/app/add-group/add-group-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: AddGroupPageRoutingModule */

    /***/
    function Th(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddGroupPageRoutingModule", function () {
        return AddGroupPageRoutingModule;
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


      var _add_group_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-group.page */
      "P7nK");

      var routes = [{
        path: '',
        component: _add_group_page__WEBPACK_IMPORTED_MODULE_3__["AddGroupPage"]
      }];

      var AddGroupPageRoutingModule = function AddGroupPageRoutingModule() {
        _classCallCheck(this, AddGroupPageRoutingModule);
      };

      AddGroupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddGroupPageRoutingModule);
      /***/
    },

    /***/
    "P7nK":
    /*!*********************************************!*\
      !*** ./src/app/add-group/add-group.page.ts ***!
      \*********************************************/

    /*! exports provided: AddGroupPage */

    /***/
    function P7nK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddGroupPage", function () {
        return AddGroupPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_group_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-group.page.html */
      "xMmC");
      /* harmony import */


      var _add_group_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-group.page.scss */
      "wHPq");
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
      /* harmony import */


      var _capacitor_camera__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @capacitor/camera */
      "/s3u");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var AddGroupPage = /*#__PURE__*/function () {
        function AddGroupPage(formBuilder, globalFooService, common, api, router, plt, actionSheetCtrl) {
          _classCallCheck(this, AddGroupPage);

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

        _createClass(AddGroupPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.addGroupForm = this.formBuilder.group({
              groupDescription: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10)]],
              groupTitle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]]
            });
          }
        }, {
          key: "errorCtr",
          get: function get() {
            return this.addGroupForm.controls;
          }
        }, {
          key: "selectImageSource",
          value: function selectImageSource() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var buttons, actionSheet;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      buttons = [{
                        text: 'Take Photo',
                        icon: 'camera',
                        handler: function handler() {
                          _this.addImage(_capacitor_camera__WEBPACK_IMPORTED_MODULE_9__["CameraSource"].Camera);
                        }
                      }, {
                        text: 'Choose From Gallery',
                        icon: 'image',
                        handler: function handler() {
                          _this.addImage(_capacitor_camera__WEBPACK_IMPORTED_MODULE_9__["CameraSource"].Photos);
                        }
                      }]; // Only allow file selection inside a browser

                      if (!this.plt.is('hybrid')) {
                        buttons.push({
                          text: 'Choose a File',
                          icon: 'attach',
                          handler: function handler() {
                            _this.fileInput.nativeElement.click();
                          }
                        });
                      }

                      _context.next = 4;
                      return this.actionSheetCtrl.create({
                        header: 'Select Image Source',
                        buttons: buttons
                      });

                    case 4:
                      actionSheet = _context.sent;
                      _context.next = 7;
                      return actionSheet.present();

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "addImage",
          value: function addImage(source) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var image, blobData, imageName;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return _capacitor_camera__WEBPACK_IMPORTED_MODULE_9__["Camera"].getPhoto({
                        quality: 60,
                        allowEditing: false,
                        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_9__["CameraResultType"].Base64,
                        source: source
                      });

                    case 2:
                      image = _context2.sent;
                      blobData = this.b64toBlob(image.base64String, "image/".concat(image.format));
                      imageName = 'imagee';
                      this.postImage = 'data:image/png;base64,' + image.base64String;
                      this.uploadBlobData = blobData;
                      this.uploadedExtension = image.format;

                    case 8:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "uploadFile",
          value: function uploadFile(event) {
            var eventObj = event;
            var target = eventObj.target;
            var file = target.files[0];
          } // Helper function

        }, {
          key: "b64toBlob",
          value: function b64toBlob(b64Data) {
            var contentType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var sliceSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 512;
            var byteCharacters = atob(b64Data);
            var byteArrays = [];

            for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
              var slice = byteCharacters.slice(offset, offset + sliceSize);
              var byteNumbers = new Array(slice.length);

              for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
              }

              var byteArray = new Uint8Array(byteNumbers);
              byteArrays.push(byteArray);
            }

            var blob = new Blob(byteArrays, {
              type: contentType
            });
            return blob;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this2 = this;

            this.submitAttempt = true;

            if (!this.addGroupForm.valid) {
              return false;
            } else {
              this.common.presentLoading();
              var dict = this.addGroupForm.value;
              var imgName = (+new Date()).toString(36).slice(-5);
              var formData = new FormData();

              if (typeof this.uploadBlobData === 'undefined') {} else {
                formData.append('file', this.uploadBlobData, 'myimage.' + this.uploadedExtension);
              }

              formData.append('description', this.addGroupForm.value.groupDescription);
              formData.append('title', this.addGroupForm.value.groupTitle);
              formData.append('userId', this.userId);
              this.api.post('addSocialUserGroup', formData, '').subscribe(function (result) {
                _this2.submitAttempt = false;

                _this2.common.stopLoading();

                var res;
                res = result;

                if (res.status == 422) {
                  var errMsgs = '';

                  for (var i = 0; i < res.errors.length; i++) {
                    var obj = res.errors[i];
                    errMsgs += obj + '</br>';
                  }

                  _this2.common.presentToast(errMsgs, 'danger');
                } else if (res.status == 200) {
                  _this2.common.presentToast('Group added successfully!.', 'success');

                  _this2.api.navCtrl.navigateRoot('/tabs/feed');
                }
              }, function (error) {
                console.log(error);
              });
            }
          }
        }]);

        return AddGroupPage;
      }();

      AddGroupPage.ctorParameters = function () {
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
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ActionSheetController"]
        }];
      };

      AddGroupPage.propDecorators = {
        fileInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['fileInput', {
            "static": false
          }]
        }]
      };
      AddGroupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-group',
        template: _raw_loader_add_group_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_group_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddGroupPage);
      /***/
    },

    /***/
    "sUlC":
    /*!***********************************************!*\
      !*** ./src/app/add-group/add-group.module.ts ***!
      \***********************************************/

    /*! exports provided: AddGroupPageModule */

    /***/
    function sUlC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddGroupPageModule", function () {
        return AddGroupPageModule;
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


      var _add_group_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-group-routing.module */
      "95Th");
      /* harmony import */


      var _add_group_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add-group.page */
      "P7nK");

      var AddGroupPageModule = function AddGroupPageModule() {
        _classCallCheck(this, AddGroupPageModule);
      };

      AddGroupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _add_group_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddGroupPageRoutingModule"]],
        declarations: [_add_group_page__WEBPACK_IMPORTED_MODULE_6__["AddGroupPage"]]
      })], AddGroupPageModule);
      /***/
    },

    /***/
    "wHPq":
    /*!***********************************************!*\
      !*** ./src/app/add-group/add-group.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function wHPq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "[btngetsocial] {\n  height: 30px;\n  --padding: 0;\n  --min-height: 1px;\n  font-size: 12px;\n}\n\n[center] {\n  text-align: center;\n  font-weight: 500;\n}\n\n[userImg] {\n  width: 150px;\n  height: 150px;\n  position: relative;\n  margin: 0 auto;\n}\n\n[userImg] img {\n  border-radius: 250px;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n[userImg] ion-button {\n  min-width: 1px;\n  min-height: 1px;\n  width: 40px;\n  height: 40px;\n  border-radius: 50px;\n  background: var(--primary-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  --border-radius: 50px;\n  --padding: 0 !important;\n  padding: 0 !important;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  border: 2px solid #fff;\n}\n\n[userImg] ion-button ion-icon {\n  min-width: 50px;\n}\n\n[form] {\n  margin: 0px 0 0;\n}\n\n[form] ion-row {\n  margin: 10px 0 0;\n}\n\n[form] ion-row ion-col label {\n  font-size: 13px;\n  color: #777;\n  display: block;\n  margin: 0 0 8px;\n}\n\n[form] ion-row ion-col ion-input, [form] ion-row ion-col ion-textarea, [form] ion-row ion-col ion-select {\n  border: 1px solid #eee;\n  border-radius: 5px;\n  font-size: 14px;\n  color: #222;\n  padding: 10px;\n}\n\n[form] ion-row ion-col .coverImages {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 10px;\n  flex-wrap: wrap;\n}\n\n[form] ion-row ion-col .coverImages span {\n  width: 30%;\n  position: relative;\n}\n\n[form] ion-row ion-col .coverImages span img {\n  border-radius: 15px;\n  height: 110px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n[form] ion-row ion-col .coverImages span ion-icon {\n  position: absolute;\n  right: 10px;\n  top: 7px;\n  background: red;\n  color: white;\n  padding: 5px;\n  font-size: 13px;\n  border-radius: 5px;\n}\n\n[btnsave] {\n  height: 50px;\n  border-radius: 10px;\n  width: 100%;\n  margin-top: 80px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FkZC1ncm91cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxZQUFZO0VBQ1QsWUFBVTtFQUNWLGlCQUFhO0VBQ2IsZUFBZTtBQUNuQjs7QUFFQTtFQUFDLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFFakI7O0FBRUE7RUFEQyxZQUFXO0VBQ1gsYUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFhO0FBR2Q7O0FBRUE7RUFIRSxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBaUI7S0FBakIsaUJBQWlCO0FBS25COztBQUVBO0VBSkUsY0FBYztFQUNYLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIscUJBQWdCO0VBQ2hCLHVCQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUTtFQUNSLHNCQUFxQjtBQU0xQjs7QUFFQTtFQU5NLGVBQWU7QUFRckI7O0FBRUE7RUFMQyxlQUFjO0FBT2Y7O0FBRUE7RUFQRSxnQkFBZTtBQVNqQjs7QUFFQTtFQVJJLGVBQWU7RUFDZixXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWM7QUFVbEI7O0FBRUE7RUFUSSxzQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0VBQ1gsYUFBWTtBQVdoQjs7QUFFQTtFQVZJLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFZbkI7O0FBRUE7RUFaSyxVQUFVO0VBQ1Ysa0JBQWtCO0FBY3ZCOztBQUVBO0VBZE0sbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixvQkFBaUI7S0FBakIsaUJBQWlCO0FBZ0J2Qjs7QUFFQTtFQWZNLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsUUFBUTtFQUNSLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7QUFpQnhCOztBQUVBO0VBWEMsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCO0FBYWpCIiwiZmlsZSI6ImFkZC1ncm91cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJbYnRuZ2V0c29jaWFsXXtcblx0aGVpZ2h0OiAzMHB4O1xuICAgIC0tcGFkZGluZzogMDtcbiAgICAtLW1pbi1oZWlnaHQ6IDFweDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5bY2VudGVyXXtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LXdlaWdodDogNTAwO1xufVxuW3VzZXJJbWdde1xuXHR3aWR0aDoxNTBweDtcblx0aGVpZ2h0OjE1MHB4O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG1hcmdpbjowIGF1dG87XG5cdGltZ3tcblx0XHRib3JkZXItcmFkaXVzOiAyNTBweDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdH1cblx0aW9uLWJ1dHRvbntcblx0XHRtaW4td2lkdGg6IDFweDtcblx0ICAgIG1pbi1oZWlnaHQ6IDFweDtcblx0ICAgIHdpZHRoOiA0MHB4O1xuXHQgICAgaGVpZ2h0OiA0MHB4O1xuXHQgICAgYm9yZGVyLXJhZGl1czogNTBweDtcblx0ICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xuXHQgICAgZGlzcGxheTogZmxleDtcblx0ICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdCAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0ICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcblx0ICAgIC0tcGFkZGluZzogMCAhaW1wb3J0YW50O1xuXHQgICAgcGFkZGluZzogMCAhaW1wb3J0YW50OyBcblx0ICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ICAgIHJpZ2h0OiAwO1xuXHQgICAgYm90dG9tOjA7XG5cdCAgICBib3JkZXI6MnB4IHNvbGlkICNmZmY7XG5cdCAgICBpb24taWNvbntcblx0ICAgIFx0bWluLXdpZHRoOiA1MHB4O1xuXHQgICAgfVxuXHR9XG59XG5bZm9ybV17XG5cdG1hcmdpbjowcHggMCAwO1xuXHRpb24tcm93e1xuXHRcdG1hcmdpbjoxMHB4IDAgMDtcblx0XHRpb24tY29se1xuXHRcdFx0bGFiZWx7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRcdFx0Y29sb3I6ICM3Nzc7XG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRtYXJnaW46MCAwIDhweDtcblx0XHRcdH1cblx0XHRcdGlvbi1pbnB1dCwgaW9uLXRleHRhcmVhLCBpb24tc2VsZWN0e1xuXHRcdFx0XHRib3JkZXI6MXB4IHNvbGlkICNlZWU7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDVweDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRjb2xvcjogIzIyMjtcblx0XHRcdFx0cGFkZGluZzoxMHB4O1xuXHRcdFx0fVxuXHRcdFx0LmNvdmVySW1hZ2VzIHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRtYXJnaW4tdG9wOiAxMHB4O1xuXHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0XHRcdHNwYW4ge1xuXHRcdFx0XHRcdHdpZHRoOiAzMCU7XG5cdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdGltZyB7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxNXB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxMTBweDtcblx0XHRcdFx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpb24taWNvbiB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRyaWdodDogMTBweDtcblx0XHRcdFx0XHRcdHRvcDogN3B4O1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogcmVkO1xuXHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdFx0cGFkZGluZzogNXB4O1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5bYnRuc2F2ZV17XG5cdGhlaWdodDogNTBweDtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0d2lkdGg6IDEwMCU7XG5cdG1hcmdpbi10b3A6IDgwcHg7XG59Il19 */";
      /***/
    },

    /***/
    "xMmC":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-group/add-group.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function xMmC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<div flexHeader>\n\t\t\t<div backHead>\n\t\t\t\t<ion-back-button routerLink=\"/tabs/feed\" ></ion-back-button>\n\t\t\t</div>\n\t\t\t<ion-title>Add Group</ion-title>\n\t\t</div>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div padding>\n\t\t<div form>\n\t\t\t<form [formGroup]=\"addGroupForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<label>Group Name</label>\n\t\t\t\t\t\t<ion-input placeholder=\"Group Name\" formControlName=\"groupTitle\"></ion-input>\n\t\t\t\t\t\t<ion-item class=\"form-text error\" *ngIf=\"submitAttempt && errorCtr.groupTitle.errors?.required\">\n\t\t\t\t\t\t\t<ion-label no-margin stacked>Please enter group name</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item class=\"form-text error\"\n\t\t\t\t\t\t\t*ngIf=\"submitAttempt && errorCtr.groupTitle.errors?.minlength\">\n\t\t\t\t\t\t\t<ion-label no-margin stacked>Min 10 chars long.</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t<ion-textarea placeholder=\"Desciption\" formControlName=\"groupDescription\"></ion-textarea>\n\t\t\t\t\t\t<ion-item class=\"form-text error\"\n\t\t\t\t\t\t\t*ngIf=\"submitAttempt && errorCtr.groupDescription.errors?.required\">\n\t\t\t\t\t\t\t<ion-label no-margin stacked>Please enter description</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item class=\"form-text error\"\n\t\t\t\t\t\t\t*ngIf=\"submitAttempt && errorCtr.groupDescription.errors?.minlength\">\n\t\t\t\t\t\t\t<ion-label no-margin stacked>Min 3 chars long.</ion-label>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<label>Add a cover image</label>\n\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<ion-button (click)=\"selectImageSource()\">\n\t\t\t\t\t\t\t\t<ion-icon name=\"camera\"></ion-icon>\n\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<input type=\"file\" accept=\"image/*\" id=\"fileupload\" (change)=\"uploadFile($event)\"\n\t\t\t\t\t\t\tname=\"fileupload\" style=\"display:none;\" />\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"12\" *ngIf=\"postImage !=''\">\n\t\t\t\t\t\t<div class=\"coverImages\">\n\t\t\t\t\t\t\t<span><img src=\"{{ postImage }}\" alt=\"\"></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-button type=\"submit\" btnsave>Add Group</ion-button>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</form>\n\t\t</div>\n\n\t</div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=add-group-add-group-module-es5.js.map