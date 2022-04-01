(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["web"],{

/***/ "OwEV":
/*!**************************************************************************!*\
  !*** ./node_modules/@capacitor-community/facebook-login/dist/esm/web.js ***!
  \**************************************************************************/
/*! exports provided: FacebookLoginWeb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookLoginWeb", function() { return FacebookLoginWeb; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "FUe0");

class FacebookLoginWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"] {
    constructor() {
        super({
            name: 'FacebookLogin',
            platforms: ['web'],
        });
    }
    initialize(options) {
        const defaultOptions = { version: 'v10.0' };
        return new Promise((resolve, reject) => {
            try {
                return this.loadScript(options.locale).then(() => {
                    FB.init(Object.assign(Object.assign({}, defaultOptions), options));
                    resolve();
                });
            }
            catch (err) {
                reject(err);
            }
        });
    }
    loadScript(locale) {
        if (typeof document === 'undefined') {
            return Promise.resolve();
        }
        const scriptId = 'fb';
        const scriptEl = document === null || document === void 0 ? void 0 : document.getElementById(scriptId);
        if (scriptEl) {
            return Promise.resolve();
        }
        const head = document.getElementsByTagName('head')[0];
        const script = document.createElement('script');
        return new Promise((resolve) => {
            script.defer = true;
            script.async = true;
            script.id = scriptId;
            script.onload = () => { resolve(); };
            script.src = `https://connect.facebook.net/${locale !== null && locale !== void 0 ? locale : 'en_US'}/sdk.js`;
            head.appendChild(script);
        });
    }
    async login(options) {
        console.log('FacebookLoginWeb.login', options);
        return new Promise((resolve, reject) => {
            FB.login(response => {
                console.debug('FB.login', response);
                if (response.status === 'connected') {
                    resolve({
                        accessToken: {
                            token: response.authResponse.accessToken,
                        },
                    });
                }
                else {
                    reject({
                        accessToken: {
                            token: null,
                        },
                    });
                }
            }, { scope: options.permissions.join(',') });
        });
    }
    async logout() {
        return new Promise(resolve => {
            FB.logout(() => resolve());
        });
    }
    async getCurrentAccessToken() {
        return new Promise((resolve, reject) => {
            FB.getLoginStatus(response => {
                if (response.status === 'connected') {
                    const result = {
                        accessToken: {
                            applicationId: undefined,
                            declinedPermissions: [],
                            expires: undefined,
                            isExpired: undefined,
                            lastRefresh: undefined,
                            permissions: [],
                            token: response.authResponse.accessToken,
                            userId: response.authResponse.userID,
                        },
                    };
                    resolve(result);
                }
                else {
                    reject({
                        accessToken: {
                            token: null,
                        },
                    });
                }
            });
        });
    }
    async getProfile(options) {
        const fields = options.fields.join(',');
        return new Promise((resolve, reject) => {
            FB.api('/me', { fields }, response => {
                if (response.error) {
                    reject(response.error.message);
                    return;
                }
                resolve(response);
            });
        });
    }
}
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "npad":
/*!*****************************************************************************!*\
  !*** ./node_modules/@codetrix-studio/capacitor-google-auth/dist/esm/web.js ***!
  \*****************************************************************************/
/*! exports provided: GoogleAuthWeb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleAuthWeb", function() { return GoogleAuthWeb; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "FUe0");

class GoogleAuthWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"] {
    constructor() {
        super();
    }
    loadScript() {
        if (typeof document === 'undefined') {
            return;
        }
        const scriptId = 'gapi';
        const scriptEl = document === null || document === void 0 ? void 0 : document.getElementById(scriptId);
        if (scriptEl) {
            return;
        }
        const head = document.getElementsByTagName('head')[0];
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.defer = true;
        script.async = true;
        script.id = scriptId;
        script.onload = this.platformJsLoaded.bind(this);
        script.src = 'https://apis.google.com/js/platform.js';
        head.appendChild(script);
    }
    initialize(_options = {
        clientId: '',
        scopes: [],
        grantOfflineAccess: false,
    }) {
        var _a, _b;
        if (typeof window === 'undefined') {
            return;
        }
        const metaClientId = (_a = document.getElementsByName('google-signin-client_id')[0]) === null || _a === void 0 ? void 0 : _a.content;
        const clientId = _options.clientId || metaClientId || '';
        if (!clientId) {
            console.warn('GoogleAuthPlugin - clientId is empty');
        }
        this.options = {
            clientId,
            grantOfflineAccess: (_b = _options.grantOfflineAccess) !== null && _b !== void 0 ? _b : false,
            scopes: _options.scopes || [],
        };
        this.gapiLoaded = new Promise((resolve) => {
            // HACK: Relying on window object, can't get property in gapi.load callback
            window.gapiResolve = resolve;
            this.loadScript();
        });
        this.addUserChangeListener();
    }
    platformJsLoaded() {
        gapi.load('auth2', () => {
            const clientConfig = {
                client_id: this.options.clientId,
            };
            if (this.options.scopes.length) {
                clientConfig.scope = this.options.scopes.join(' ');
            }
            gapi.auth2.init(clientConfig);
            window.gapiResolve();
        });
    }
    async signIn() {
        return new Promise(async (resolve, reject) => {
            var _a;
            try {
                let serverAuthCode;
                const needsOfflineAccess = (_a = this.options.grantOfflineAccess) !== null && _a !== void 0 ? _a : false;
                if (needsOfflineAccess) {
                    const offlineAccessResponse = await gapi.auth2.getAuthInstance().grantOfflineAccess();
                    serverAuthCode = offlineAccessResponse.code;
                }
                else {
                    await gapi.auth2.getAuthInstance().signIn();
                }
                const googleUser = gapi.auth2.getAuthInstance().currentUser.get();
                if (needsOfflineAccess) {
                    // HACK: AuthResponse is null if we don't do this when using grantOfflineAccess
                    await googleUser.reloadAuthResponse();
                }
                const user = this.getUserFrom(googleUser);
                user.serverAuthCode = serverAuthCode;
                resolve(user);
            }
            catch (error) {
                reject(error);
            }
        });
    }
    async refresh() {
        const authResponse = await gapi.auth2.getAuthInstance().currentUser.get().reloadAuthResponse();
        return {
            accessToken: authResponse.access_token,
            idToken: authResponse.id_token,
            refreshToken: '',
        };
    }
    async signOut() {
        return gapi.auth2.getAuthInstance().signOut();
    }
    async addUserChangeListener() {
        await this.gapiLoaded;
        gapi.auth2.getAuthInstance().currentUser.listen((googleUser) => {
            this.notifyListeners('userChange', googleUser.isSignedIn() ? this.getUserFrom(googleUser) : null);
        });
    }
    getUserFrom(googleUser) {
        const user = {};
        const profile = googleUser.getBasicProfile();
        user.email = profile.getEmail();
        user.familyName = profile.getFamilyName();
        user.givenName = profile.getGivenName();
        user.id = profile.getId();
        user.imageUrl = profile.getImageUrl();
        user.name = profile.getName();
        const authResponse = googleUser.getAuthResponse(true);
        user.authentication = {
            accessToken: authResponse.access_token,
            idToken: authResponse.id_token,
            refreshToken: '',
        };
        return user;
    }
}
//# sourceMappingURL=web.js.map

/***/ })

}]);
//# sourceMappingURL=web-es2015.js.map