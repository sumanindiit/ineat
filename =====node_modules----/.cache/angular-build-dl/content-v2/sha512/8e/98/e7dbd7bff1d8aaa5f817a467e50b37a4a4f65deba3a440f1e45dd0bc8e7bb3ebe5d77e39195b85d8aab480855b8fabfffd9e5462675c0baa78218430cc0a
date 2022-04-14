(function () {
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["web"], {
    /***/
    "OwEV":
    /*!**************************************************************************!*\
      !*** ./node_modules/@capacitor-community/facebook-login/dist/esm/web.js ***!
      \**************************************************************************/

    /*! exports provided: FacebookLoginWeb */

    /***/
    function OwEV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FacebookLoginWeb", function () {
        return FacebookLoginWeb;
      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "FUe0");

      var FacebookLoginWeb = /*#__PURE__*/function (_capacitor_core__WEBP) {
        _inherits(FacebookLoginWeb, _capacitor_core__WEBP);

        var _super = _createSuper(FacebookLoginWeb);

        function FacebookLoginWeb() {
          _classCallCheck(this, FacebookLoginWeb);

          return _super.call(this, {
            name: 'FacebookLogin',
            platforms: ['web']
          });
        }

        _createClass(FacebookLoginWeb, [{
          key: "initialize",
          value: function initialize(options) {
            var _this = this;

            var defaultOptions = {
              version: 'v10.0'
            };
            return new Promise(function (resolve, reject) {
              try {
                return _this.loadScript(options.locale).then(function () {
                  FB.init(Object.assign(Object.assign({}, defaultOptions), options));
                  resolve();
                });
              } catch (err) {
                reject(err);
              }
            });
          }
        }, {
          key: "loadScript",
          value: function loadScript(locale) {
            if (typeof document === 'undefined') {
              return Promise.resolve();
            }

            var scriptId = 'fb';
            var scriptEl = document === null || document === void 0 ? void 0 : document.getElementById(scriptId);

            if (scriptEl) {
              return Promise.resolve();
            }

            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            return new Promise(function (resolve) {
              script.defer = true;
              script.async = true;
              script.id = scriptId;

              script.onload = function () {
                resolve();
              };

              script.src = "https://connect.facebook.net/".concat(locale !== null && locale !== void 0 ? locale : 'en_US', "/sdk.js");
              head.appendChild(script);
            });
          }
        }, {
          key: "login",
          value: function () {
            var _login = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log('FacebookLoginWeb.login', options);
                      return _context.abrupt("return", new Promise(function (resolve, reject) {
                        FB.login(function (response) {
                          console.debug('FB.login', response);

                          if (response.status === 'connected') {
                            resolve({
                              accessToken: {
                                token: response.authResponse.accessToken
                              }
                            });
                          } else {
                            reject({
                              accessToken: {
                                token: null
                              }
                            });
                          }
                        }, {
                          scope: options.permissions.join(',')
                        });
                      }));

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            function login(_x) {
              return _login.apply(this, arguments);
            }

            return login;
          }()
        }, {
          key: "logout",
          value: function () {
            var _logout = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      return _context2.abrupt("return", new Promise(function (resolve) {
                        FB.logout(function () {
                          return resolve();
                        });
                      }));

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));

            function logout() {
              return _logout.apply(this, arguments);
            }

            return logout;
          }()
        }, {
          key: "getCurrentAccessToken",
          value: function () {
            var _getCurrentAccessToken = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      return _context3.abrupt("return", new Promise(function (resolve, reject) {
                        FB.getLoginStatus(function (response) {
                          if (response.status === 'connected') {
                            var result = {
                              accessToken: {
                                applicationId: undefined,
                                declinedPermissions: [],
                                expires: undefined,
                                isExpired: undefined,
                                lastRefresh: undefined,
                                permissions: [],
                                token: response.authResponse.accessToken,
                                userId: response.authResponse.userID
                              }
                            };
                            resolve(result);
                          } else {
                            reject({
                              accessToken: {
                                token: null
                              }
                            });
                          }
                        });
                      }));

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));

            function getCurrentAccessToken() {
              return _getCurrentAccessToken.apply(this, arguments);
            }

            return getCurrentAccessToken;
          }()
        }, {
          key: "getProfile",
          value: function () {
            var _getProfile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(options) {
              var fields;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      fields = options.fields.join(',');
                      return _context4.abrupt("return", new Promise(function (resolve, reject) {
                        FB.api('/me', {
                          fields: fields
                        }, function (response) {
                          if (response.error) {
                            reject(response.error.message);
                            return;
                          }

                          resolve(response);
                        });
                      }));

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            }));

            function getProfile(_x2) {
              return _getProfile.apply(this, arguments);
            }

            return getProfile;
          }()
        }]);

        return FacebookLoginWeb;
      }(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"]); //# sourceMappingURL=web.js.map

      /***/

    },

    /***/
    "mxtL":
    /*!*******************************************************!*\
      !*** ./node_modules/@capacitor/share/dist/esm/web.js ***!
      \*******************************************************/

    /*! exports provided: ShareWeb */

    /***/
    function mxtL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShareWeb", function () {
        return ShareWeb;
      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "FUe0");

      var ShareWeb = /*#__PURE__*/function (_capacitor_core__WEBP2) {
        _inherits(ShareWeb, _capacitor_core__WEBP2);

        var _super2 = _createSuper(ShareWeb);

        function ShareWeb() {
          _classCallCheck(this, ShareWeb);

          return _super2.apply(this, arguments);
        }

        _createClass(ShareWeb, [{
          key: "canShare",
          value: function () {
            var _canShare = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (!(typeof navigator === 'undefined' || !navigator.share)) {
                        _context5.next = 4;
                        break;
                      }

                      return _context5.abrupt("return", {
                        value: false
                      });

                    case 4:
                      return _context5.abrupt("return", {
                        value: true
                      });

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            }));

            function canShare() {
              return _canShare.apply(this, arguments);
            }

            return canShare;
          }()
        }, {
          key: "share",
          value: function () {
            var _share = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(options) {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (!(typeof navigator === 'undefined' || !navigator.share)) {
                        _context6.next = 2;
                        break;
                      }

                      throw this.unavailable('Share API not available in this browser');

                    case 2:
                      _context6.next = 4;
                      return navigator.share({
                        title: options.title,
                        text: options.text,
                        url: options.url
                      });

                    case 4:
                      return _context6.abrupt("return", {});

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function share(_x3) {
              return _share.apply(this, arguments);
            }

            return share;
          }()
        }]);

        return ShareWeb;
      }(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"]); //# sourceMappingURL=web.js.map

      /***/

    },

    /***/
    "npad":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@codetrix-studio/capacitor-google-auth/dist/esm/web.js ***!
      \*****************************************************************************/

    /*! exports provided: GoogleAuthWeb */

    /***/
    function npad(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoogleAuthWeb", function () {
        return GoogleAuthWeb;
      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "FUe0");

      var GoogleAuthWeb = /*#__PURE__*/function (_capacitor_core__WEBP3) {
        _inherits(GoogleAuthWeb, _capacitor_core__WEBP3);

        var _super3 = _createSuper(GoogleAuthWeb);

        function GoogleAuthWeb() {
          _classCallCheck(this, GoogleAuthWeb);

          return _super3.call(this);
        }

        _createClass(GoogleAuthWeb, [{
          key: "loadScript",
          value: function loadScript() {
            if (typeof document === 'undefined') {
              return;
            }

            var scriptId = 'gapi';
            var scriptEl = document === null || document === void 0 ? void 0 : document.getElementById(scriptId);

            if (scriptEl) {
              return;
            }

            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.defer = true;
            script.async = true;
            script.id = scriptId;
            script.onload = this.platformJsLoaded.bind(this);
            script.src = 'https://apis.google.com/js/platform.js';
            head.appendChild(script);
          }
        }, {
          key: "initialize",
          value: function initialize() {
            var _this2 = this;

            var _options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
              clientId: '',
              scopes: [],
              grantOfflineAccess: false
            };

            var _a, _b;

            if (typeof window === 'undefined') {
              return;
            }

            var metaClientId = (_a = document.getElementsByName('google-signin-client_id')[0]) === null || _a === void 0 ? void 0 : _a.content;
            var clientId = _options.clientId || metaClientId || '';

            if (!clientId) {
              console.warn('GoogleAuthPlugin - clientId is empty');
            }

            this.options = {
              clientId: clientId,
              grantOfflineAccess: (_b = _options.grantOfflineAccess) !== null && _b !== void 0 ? _b : false,
              scopes: _options.scopes || []
            };
            this.gapiLoaded = new Promise(function (resolve) {
              // HACK: Relying on window object, can't get property in gapi.load callback
              window.gapiResolve = resolve;

              _this2.loadScript();
            });
            this.addUserChangeListener();
          }
        }, {
          key: "platformJsLoaded",
          value: function platformJsLoaded() {
            var _this3 = this;

            gapi.load('auth2', function () {
              var clientConfig = {
                client_id: _this3.options.clientId
              };

              if (_this3.options.scopes.length) {
                clientConfig.scope = _this3.options.scopes.join(' ');
              }

              gapi.auth2.init(clientConfig);
              window.gapiResolve();
            });
          }
        }, {
          key: "signIn",
          value: function () {
            var _signIn = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      return _context8.abrupt("return", new Promise( /*#__PURE__*/function () {
                        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(resolve, reject) {
                          var _a, serverAuthCode, needsOfflineAccess, offlineAccessResponse, googleUser, user;

                          return regeneratorRuntime.wrap(function _callee7$(_context7) {
                            while (1) {
                              switch (_context7.prev = _context7.next) {
                                case 0:
                                  _context7.prev = 0;
                                  needsOfflineAccess = (_a = _this4.options.grantOfflineAccess) !== null && _a !== void 0 ? _a : false;

                                  if (!needsOfflineAccess) {
                                    _context7.next = 9;
                                    break;
                                  }

                                  _context7.next = 5;
                                  return gapi.auth2.getAuthInstance().grantOfflineAccess();

                                case 5:
                                  offlineAccessResponse = _context7.sent;
                                  serverAuthCode = offlineAccessResponse.code;
                                  _context7.next = 11;
                                  break;

                                case 9:
                                  _context7.next = 11;
                                  return gapi.auth2.getAuthInstance().signIn();

                                case 11:
                                  googleUser = gapi.auth2.getAuthInstance().currentUser.get();

                                  if (!needsOfflineAccess) {
                                    _context7.next = 15;
                                    break;
                                  }

                                  _context7.next = 15;
                                  return googleUser.reloadAuthResponse();

                                case 15:
                                  user = _this4.getUserFrom(googleUser);
                                  user.serverAuthCode = serverAuthCode;
                                  resolve(user);
                                  _context7.next = 23;
                                  break;

                                case 20:
                                  _context7.prev = 20;
                                  _context7.t0 = _context7["catch"](0);
                                  reject(_context7.t0);

                                case 23:
                                case "end":
                                  return _context7.stop();
                              }
                            }
                          }, _callee7, null, [[0, 20]]);
                        }));

                        return function (_x4, _x5) {
                          return _ref.apply(this, arguments);
                        };
                      }()));

                    case 1:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8);
            }));

            function signIn() {
              return _signIn.apply(this, arguments);
            }

            return signIn;
          }()
        }, {
          key: "refresh",
          value: function () {
            var _refresh = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var authResponse;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return gapi.auth2.getAuthInstance().currentUser.get().reloadAuthResponse();

                    case 2:
                      authResponse = _context9.sent;
                      return _context9.abrupt("return", {
                        accessToken: authResponse.access_token,
                        idToken: authResponse.id_token,
                        refreshToken: ''
                      });

                    case 4:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9);
            }));

            function refresh() {
              return _refresh.apply(this, arguments);
            }

            return refresh;
          }()
        }, {
          key: "signOut",
          value: function () {
            var _signOut = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      return _context10.abrupt("return", gapi.auth2.getAuthInstance().signOut());

                    case 1:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10);
            }));

            function signOut() {
              return _signOut.apply(this, arguments);
            }

            return signOut;
          }()
        }, {
          key: "addUserChangeListener",
          value: function () {
            var _addUserChangeListener = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.gapiLoaded;

                    case 2:
                      gapi.auth2.getAuthInstance().currentUser.listen(function (googleUser) {
                        _this5.notifyListeners('userChange', googleUser.isSignedIn() ? _this5.getUserFrom(googleUser) : null);
                      });

                    case 3:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));

            function addUserChangeListener() {
              return _addUserChangeListener.apply(this, arguments);
            }

            return addUserChangeListener;
          }()
        }, {
          key: "getUserFrom",
          value: function getUserFrom(googleUser) {
            var user = {};
            var profile = googleUser.getBasicProfile();
            user.email = profile.getEmail();
            user.familyName = profile.getFamilyName();
            user.givenName = profile.getGivenName();
            user.id = profile.getId();
            user.imageUrl = profile.getImageUrl();
            user.name = profile.getName();
            var authResponse = googleUser.getAuthResponse(true);
            user.authentication = {
              accessToken: authResponse.access_token,
              idToken: authResponse.id_token,
              refreshToken: ''
            };
            return user;
          }
        }]);

        return GoogleAuthWeb;
      }(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"]); //# sourceMappingURL=web.js.map

      /***/

    },

    /***/
    "wzPO":
    /*!********************************************************!*\
      !*** ./node_modules/@capacitor/camera/dist/esm/web.js ***!
      \********************************************************/

    /*! exports provided: CameraWeb, Camera */

    /***/
    function wzPO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CameraWeb", function () {
        return CameraWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Camera", function () {
        return Camera;
      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "FUe0");
      /* harmony import */


      var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./definitions */
      "dTEF");

      var CameraWeb = /*#__PURE__*/function (_capacitor_core__WEBP4) {
        _inherits(CameraWeb, _capacitor_core__WEBP4);

        var _super4 = _createSuper(CameraWeb);

        function CameraWeb() {
          _classCallCheck(this, CameraWeb);

          return _super4.apply(this, arguments);
        }

        _createClass(CameraWeb, [{
          key: "getPhoto",
          value: function () {
            var _getPhoto = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(options) {
              var _this6 = this;

              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      return _context14.abrupt("return", new Promise( /*#__PURE__*/function () {
                        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(resolve, reject) {
                          var actionSheet;
                          return regeneratorRuntime.wrap(function _callee13$(_context13) {
                            while (1) {
                              switch (_context13.prev = _context13.next) {
                                case 0:
                                  if (options.webUseInput || options.source === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraSource"].Photos) {
                                    _this6.fileInputExperience(options, resolve);
                                  } else if (options.source === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraSource"].Prompt) {
                                    actionSheet = document.querySelector('pwa-action-sheet');

                                    if (!actionSheet) {
                                      actionSheet = document.createElement('pwa-action-sheet');
                                      document.body.appendChild(actionSheet);
                                    }

                                    actionSheet.header = options.promptLabelHeader || 'Photo';
                                    actionSheet.cancelable = false;
                                    actionSheet.options = [{
                                      title: options.promptLabelPhoto || 'From Photos'
                                    }, {
                                      title: options.promptLabelPicture || 'Take Picture'
                                    }];
                                    actionSheet.addEventListener('onSelection', /*#__PURE__*/function () {
                                      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(e) {
                                        var selection;
                                        return regeneratorRuntime.wrap(function _callee12$(_context12) {
                                          while (1) {
                                            switch (_context12.prev = _context12.next) {
                                              case 0:
                                                selection = e.detail;

                                                if (selection === 0) {
                                                  _this6.fileInputExperience(options, resolve);
                                                } else {
                                                  _this6.cameraExperience(options, resolve, reject);
                                                }

                                              case 2:
                                              case "end":
                                                return _context12.stop();
                                            }
                                          }
                                        }, _callee12);
                                      }));

                                      return function (_x9) {
                                        return _ref3.apply(this, arguments);
                                      };
                                    }());
                                  } else {
                                    _this6.cameraExperience(options, resolve, reject);
                                  }

                                case 1:
                                case "end":
                                  return _context13.stop();
                              }
                            }
                          }, _callee13);
                        }));

                        return function (_x7, _x8) {
                          return _ref2.apply(this, arguments);
                        };
                      }()));

                    case 1:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14);
            }));

            function getPhoto(_x6) {
              return _getPhoto.apply(this, arguments);
            }

            return getPhoto;
          }()
        }, {
          key: "pickImages",
          value: function () {
            var _pickImages = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(_options) {
              var _this7 = this;

              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      return _context16.abrupt("return", new Promise( /*#__PURE__*/function () {
                        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(resolve) {
                          return regeneratorRuntime.wrap(function _callee15$(_context15) {
                            while (1) {
                              switch (_context15.prev = _context15.next) {
                                case 0:
                                  _this7.multipleFileInputExperience(resolve);

                                case 1:
                                case "end":
                                  return _context15.stop();
                              }
                            }
                          }, _callee15);
                        }));

                        return function (_x11) {
                          return _ref4.apply(this, arguments);
                        };
                      }()));

                    case 1:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16);
            }));

            function pickImages(_x10) {
              return _pickImages.apply(this, arguments);
            }

            return pickImages;
          }()
        }, {
          key: "cameraExperience",
          value: function () {
            var _cameraExperience = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(options, resolve, reject) {
              var _this8 = this;

              var cameraModal;
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      if (!customElements.get('pwa-camera-modal')) {
                        _context18.next = 16;
                        break;
                      }

                      cameraModal = document.createElement('pwa-camera-modal');
                      cameraModal.facingMode = options.direction === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraDirection"].Front ? 'user' : 'environment';
                      document.body.appendChild(cameraModal);
                      _context18.prev = 4;
                      _context18.next = 7;
                      return cameraModal.componentOnReady();

                    case 7:
                      cameraModal.addEventListener('onPhoto', /*#__PURE__*/function () {
                        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(e) {
                          var photo;
                          return regeneratorRuntime.wrap(function _callee17$(_context17) {
                            while (1) {
                              switch (_context17.prev = _context17.next) {
                                case 0:
                                  photo = e.detail;

                                  if (!(photo === null)) {
                                    _context17.next = 5;
                                    break;
                                  }

                                  reject(new _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["CapacitorException"]('User cancelled photos app'));
                                  _context17.next = 14;
                                  break;

                                case 5:
                                  if (!(photo instanceof Error)) {
                                    _context17.next = 9;
                                    break;
                                  }

                                  reject(photo);
                                  _context17.next = 14;
                                  break;

                                case 9:
                                  _context17.t0 = resolve;
                                  _context17.next = 12;
                                  return _this8._getCameraPhoto(photo, options);

                                case 12:
                                  _context17.t1 = _context17.sent;
                                  (0, _context17.t0)(_context17.t1);

                                case 14:
                                  cameraModal.dismiss();
                                  document.body.removeChild(cameraModal);

                                case 16:
                                case "end":
                                  return _context17.stop();
                              }
                            }
                          }, _callee17);
                        }));

                        return function (_x15) {
                          return _ref5.apply(this, arguments);
                        };
                      }());
                      cameraModal.present();
                      _context18.next = 14;
                      break;

                    case 11:
                      _context18.prev = 11;
                      _context18.t0 = _context18["catch"](4);
                      this.fileInputExperience(options, resolve);

                    case 14:
                      _context18.next = 18;
                      break;

                    case 16:
                      console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/pwa-elements.");
                      this.fileInputExperience(options, resolve);

                    case 18:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this, [[4, 11]]);
            }));

            function cameraExperience(_x12, _x13, _x14) {
              return _cameraExperience.apply(this, arguments);
            }

            return cameraExperience;
          }()
        }, {
          key: "fileInputExperience",
          value: function fileInputExperience(options, resolve) {
            var input = document.querySelector('#_capacitor-camera-input');

            var cleanup = function cleanup() {
              var _a;

              (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
            };

            if (!input) {
              input = document.createElement('input');
              input.id = '_capacitor-camera-input';
              input.type = 'file';
              input.hidden = true;
              document.body.appendChild(input);
              input.addEventListener('change', function (_e) {
                var file = input.files[0];
                var format = 'jpeg';

                if (file.type === 'image/png') {
                  format = 'png';
                } else if (file.type === 'image/gif') {
                  format = 'gif';
                }

                if (options.resultType === 'dataUrl' || options.resultType === 'base64') {
                  var reader = new FileReader();
                  reader.addEventListener('load', function () {
                    if (options.resultType === 'dataUrl') {
                      resolve({
                        dataUrl: reader.result,
                        format: format
                      });
                    } else if (options.resultType === 'base64') {
                      var b64 = reader.result.split(',')[1];
                      resolve({
                        base64String: b64,
                        format: format
                      });
                    }

                    cleanup();
                  });
                  reader.readAsDataURL(file);
                } else {
                  resolve({
                    webPath: URL.createObjectURL(file),
                    format: format
                  });
                  cleanup();
                }
              });
            }

            input.accept = 'image/*';
            input.capture = true;

            if (options.source === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraSource"].Photos || options.source === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraSource"].Prompt) {
              input.removeAttribute('capture');
            } else if (options.direction === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraDirection"].Front) {
              input.capture = 'user';
            } else if (options.direction === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraDirection"].Rear) {
              input.capture = 'environment';
            }

            input.click();
          }
        }, {
          key: "multipleFileInputExperience",
          value: function multipleFileInputExperience(resolve) {
            var input = document.querySelector('#_capacitor-camera-input-multiple');

            var cleanup = function cleanup() {
              var _a;

              (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
            };

            if (!input) {
              input = document.createElement('input');
              input.id = '_capacitor-camera-input-multiple';
              input.type = 'file';
              input.hidden = true;
              input.multiple = true;
              document.body.appendChild(input);
              input.addEventListener('change', function (_e) {
                var photos = []; // eslint-disable-next-line @typescript-eslint/prefer-for-of

                for (var i = 0; i < input.files.length; i++) {
                  var file = input.files[i];
                  var format = 'jpeg';

                  if (file.type === 'image/png') {
                    format = 'png';
                  } else if (file.type === 'image/gif') {
                    format = 'gif';
                  }

                  photos.push({
                    webPath: URL.createObjectURL(file),
                    format: format
                  });
                }

                resolve({
                  photos: photos
                });
                cleanup();
              });
            }

            input.accept = 'image/*';
            input.click();
          }
        }, {
          key: "_getCameraPhoto",
          value: function _getCameraPhoto(photo, options) {
            return new Promise(function (resolve, reject) {
              var reader = new FileReader();
              var format = photo.type.split('/')[1];

              if (options.resultType === 'uri') {
                resolve({
                  webPath: URL.createObjectURL(photo),
                  format: format,
                  saved: false
                });
              } else {
                reader.readAsDataURL(photo);

                reader.onloadend = function () {
                  var r = reader.result;

                  if (options.resultType === 'dataUrl') {
                    resolve({
                      dataUrl: r,
                      format: format,
                      saved: false
                    });
                  } else {
                    resolve({
                      base64String: r.split(',')[1],
                      format: format,
                      saved: false
                    });
                  }
                };

                reader.onerror = function (e) {
                  reject(e);
                };
              }
            });
          }
        }, {
          key: "checkPermissions",
          value: function () {
            var _checkPermissions = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              var permission;
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      if (!(typeof navigator === 'undefined' || !navigator.permissions)) {
                        _context19.next = 2;
                        break;
                      }

                      throw this.unavailable('Permissions API not available in this browser');

                    case 2:
                      _context19.prev = 2;
                      _context19.next = 5;
                      return window.navigator.permissions.query({
                        name: 'camera'
                      });

                    case 5:
                      permission = _context19.sent;
                      return _context19.abrupt("return", {
                        camera: permission.state,
                        photos: 'granted'
                      });

                    case 9:
                      _context19.prev = 9;
                      _context19.t0 = _context19["catch"](2);
                      throw this.unavailable('Camera permissions are not available in this browser');

                    case 12:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this, [[2, 9]]);
            }));

            function checkPermissions() {
              return _checkPermissions.apply(this, arguments);
            }

            return checkPermissions;
          }()
        }, {
          key: "requestPermissions",
          value: function () {
            var _requestPermissions = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      throw this.unimplemented('Not implemented on web.');

                    case 1:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));

            function requestPermissions() {
              return _requestPermissions.apply(this, arguments);
            }

            return requestPermissions;
          }()
        }]);

        return CameraWeb;
      }(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"]);

      var Camera = new CameraWeb(); //# sourceMappingURL=web.js.map

      /***/
    }
  }]);
})();
//# sourceMappingURL=web-es5.js.map