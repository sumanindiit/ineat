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

      var GoogleAuthWeb = /*#__PURE__*/function (_capacitor_core__WEBP2) {
        _inherits(GoogleAuthWeb, _capacitor_core__WEBP2);

        var _super2 = _createSuper(GoogleAuthWeb);

        function GoogleAuthWeb() {
          _classCallCheck(this, GoogleAuthWeb);

          return _super2.call(this);
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
            var _signIn = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      return _context6.abrupt("return", new Promise( /*#__PURE__*/function () {
                        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(resolve, reject) {
                          var _a, serverAuthCode, needsOfflineAccess, offlineAccessResponse, googleUser, user;

                          return regeneratorRuntime.wrap(function _callee5$(_context5) {
                            while (1) {
                              switch (_context5.prev = _context5.next) {
                                case 0:
                                  _context5.prev = 0;
                                  needsOfflineAccess = (_a = _this4.options.grantOfflineAccess) !== null && _a !== void 0 ? _a : false;

                                  if (!needsOfflineAccess) {
                                    _context5.next = 9;
                                    break;
                                  }

                                  _context5.next = 5;
                                  return gapi.auth2.getAuthInstance().grantOfflineAccess();

                                case 5:
                                  offlineAccessResponse = _context5.sent;
                                  serverAuthCode = offlineAccessResponse.code;
                                  _context5.next = 11;
                                  break;

                                case 9:
                                  _context5.next = 11;
                                  return gapi.auth2.getAuthInstance().signIn();

                                case 11:
                                  googleUser = gapi.auth2.getAuthInstance().currentUser.get();

                                  if (!needsOfflineAccess) {
                                    _context5.next = 15;
                                    break;
                                  }

                                  _context5.next = 15;
                                  return googleUser.reloadAuthResponse();

                                case 15:
                                  user = _this4.getUserFrom(googleUser);
                                  user.serverAuthCode = serverAuthCode;
                                  resolve(user);
                                  _context5.next = 23;
                                  break;

                                case 20:
                                  _context5.prev = 20;
                                  _context5.t0 = _context5["catch"](0);
                                  reject(_context5.t0);

                                case 23:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          }, _callee5, null, [[0, 20]]);
                        }));

                        return function (_x3, _x4) {
                          return _ref.apply(this, arguments);
                        };
                      }()));

                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6);
            }));

            function signIn() {
              return _signIn.apply(this, arguments);
            }

            return signIn;
          }()
        }, {
          key: "refresh",
          value: function () {
            var _refresh = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var authResponse;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return gapi.auth2.getAuthInstance().currentUser.get().reloadAuthResponse();

                    case 2:
                      authResponse = _context7.sent;
                      return _context7.abrupt("return", {
                        accessToken: authResponse.access_token,
                        idToken: authResponse.id_token,
                        refreshToken: ''
                      });

                    case 4:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            }));

            function refresh() {
              return _refresh.apply(this, arguments);
            }

            return refresh;
          }()
        }, {
          key: "signOut",
          value: function () {
            var _signOut = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      return _context8.abrupt("return", gapi.auth2.getAuthInstance().signOut());

                    case 1:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8);
            }));

            function signOut() {
              return _signOut.apply(this, arguments);
            }

            return signOut;
          }()
        }, {
          key: "addUserChangeListener",
          value: function () {
            var _addUserChangeListener = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.gapiLoaded;

                    case 2:
                      gapi.auth2.getAuthInstance().currentUser.listen(function (googleUser) {
                        _this5.notifyListeners('userChange', googleUser.isSignedIn() ? _this5.getUserFrom(googleUser) : null);
                      });

                    case 3:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
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

    }
  }]);
})();
//# sourceMappingURL=web-es5.js.map