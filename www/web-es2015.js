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

/***/ }),

/***/ "wzPO":
/*!********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/web.js ***!
  \********************************************************/
/*! exports provided: CameraWeb, Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraWeb", function() { return CameraWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "FUe0");
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ "dTEF");


class CameraWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"] {
    async getPhoto(options) {
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            if (options.webUseInput || options.source === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraSource"].Photos) {
                this.fileInputExperience(options, resolve);
            }
            else if (options.source === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraSource"].Prompt) {
                let actionSheet = document.querySelector('pwa-action-sheet');
                if (!actionSheet) {
                    actionSheet = document.createElement('pwa-action-sheet');
                    document.body.appendChild(actionSheet);
                }
                actionSheet.header = options.promptLabelHeader || 'Photo';
                actionSheet.cancelable = false;
                actionSheet.options = [
                    { title: options.promptLabelPhoto || 'From Photos' },
                    { title: options.promptLabelPicture || 'Take Picture' },
                ];
                actionSheet.addEventListener('onSelection', async (e) => {
                    const selection = e.detail;
                    if (selection === 0) {
                        this.fileInputExperience(options, resolve);
                    }
                    else {
                        this.cameraExperience(options, resolve, reject);
                    }
                });
            }
            else {
                this.cameraExperience(options, resolve, reject);
            }
        });
    }
    async pickImages(_options) {
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve) => {
            this.multipleFileInputExperience(resolve);
        });
    }
    async cameraExperience(options, resolve, reject) {
        if (customElements.get('pwa-camera-modal')) {
            const cameraModal = document.createElement('pwa-camera-modal');
            cameraModal.facingMode =
                options.direction === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraDirection"].Front ? 'user' : 'environment';
            document.body.appendChild(cameraModal);
            try {
                await cameraModal.componentOnReady();
                cameraModal.addEventListener('onPhoto', async (e) => {
                    const photo = e.detail;
                    if (photo === null) {
                        reject(new _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["CapacitorException"]('User cancelled photos app'));
                    }
                    else if (photo instanceof Error) {
                        reject(photo);
                    }
                    else {
                        resolve(await this._getCameraPhoto(photo, options));
                    }
                    cameraModal.dismiss();
                    document.body.removeChild(cameraModal);
                });
                cameraModal.present();
            }
            catch (e) {
                this.fileInputExperience(options, resolve);
            }
        }
        else {
            console.error(`Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/pwa-elements.`);
            this.fileInputExperience(options, resolve);
        }
    }
    fileInputExperience(options, resolve) {
        let input = document.querySelector('#_capacitor-camera-input');
        const cleanup = () => {
            var _a;
            (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
        };
        if (!input) {
            input = document.createElement('input');
            input.id = '_capacitor-camera-input';
            input.type = 'file';
            input.hidden = true;
            document.body.appendChild(input);
            input.addEventListener('change', (_e) => {
                const file = input.files[0];
                let format = 'jpeg';
                if (file.type === 'image/png') {
                    format = 'png';
                }
                else if (file.type === 'image/gif') {
                    format = 'gif';
                }
                if (options.resultType === 'dataUrl' ||
                    options.resultType === 'base64') {
                    const reader = new FileReader();
                    reader.addEventListener('load', () => {
                        if (options.resultType === 'dataUrl') {
                            resolve({
                                dataUrl: reader.result,
                                format,
                            });
                        }
                        else if (options.resultType === 'base64') {
                            const b64 = reader.result.split(',')[1];
                            resolve({
                                base64String: b64,
                                format,
                            });
                        }
                        cleanup();
                    });
                    reader.readAsDataURL(file);
                }
                else {
                    resolve({
                        webPath: URL.createObjectURL(file),
                        format: format,
                    });
                    cleanup();
                }
            });
        }
        input.accept = 'image/*';
        input.capture = true;
        if (options.source === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraSource"].Photos ||
            options.source === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraSource"].Prompt) {
            input.removeAttribute('capture');
        }
        else if (options.direction === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraDirection"].Front) {
            input.capture = 'user';
        }
        else if (options.direction === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraDirection"].Rear) {
            input.capture = 'environment';
        }
        input.click();
    }
    multipleFileInputExperience(resolve) {
        let input = document.querySelector('#_capacitor-camera-input-multiple');
        const cleanup = () => {
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
            input.addEventListener('change', (_e) => {
                const photos = [];
                // eslint-disable-next-line @typescript-eslint/prefer-for-of
                for (let i = 0; i < input.files.length; i++) {
                    const file = input.files[i];
                    let format = 'jpeg';
                    if (file.type === 'image/png') {
                        format = 'png';
                    }
                    else if (file.type === 'image/gif') {
                        format = 'gif';
                    }
                    photos.push({
                        webPath: URL.createObjectURL(file),
                        format: format,
                    });
                }
                resolve({ photos });
                cleanup();
            });
        }
        input.accept = 'image/*';
        input.click();
    }
    _getCameraPhoto(photo, options) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            const format = photo.type.split('/')[1];
            if (options.resultType === 'uri') {
                resolve({
                    webPath: URL.createObjectURL(photo),
                    format: format,
                    saved: false,
                });
            }
            else {
                reader.readAsDataURL(photo);
                reader.onloadend = () => {
                    const r = reader.result;
                    if (options.resultType === 'dataUrl') {
                        resolve({
                            dataUrl: r,
                            format: format,
                            saved: false,
                        });
                    }
                    else {
                        resolve({
                            base64String: r.split(',')[1],
                            format: format,
                            saved: false,
                        });
                    }
                };
                reader.onerror = e => {
                    reject(e);
                };
            }
        });
    }
    async checkPermissions() {
        if (typeof navigator === 'undefined' || !navigator.permissions) {
            throw this.unavailable('Permissions API not available in this browser');
        }
        try {
            // https://developer.mozilla.org/en-US/docs/Web/API/Permissions/query
            // the specific permissions that are supported varies among browsers that implement the
            // permissions API, so we need a try/catch in case 'camera' is invalid
            const permission = await window.navigator.permissions.query({
                name: 'camera',
            });
            return {
                camera: permission.state,
                photos: 'granted',
            };
        }
        catch (_a) {
            throw this.unavailable('Camera permissions are not available in this browser');
        }
    }
    async requestPermissions() {
        throw this.unimplemented('Not implemented on web.');
    }
}
const Camera = new CameraWeb();

//# sourceMappingURL=web.js.map

/***/ })

}]);
//# sourceMappingURL=web-es2015.js.map