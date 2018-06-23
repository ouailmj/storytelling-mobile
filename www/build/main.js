webpackJsonp([14],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ChangepPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangepPasswordPage = (function () {
    function ChangepPasswordPage(navCtrl, navParams, formBuilder, authService, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.user = {
            "oldPassword": "",
            "newPassword": "",
            "repeatedPassword": ""
        };
        this.authForm = formBuilder.group({
            oldPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)])],
            newPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)])],
            repeatedPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)])],
        }, { validator: this.matchingPasswords('newPassword', 'repeatedPassword') });
    }
    ChangepPasswordPage.prototype.matchingPasswords = function (passwordKey, confirmPasswordKey) {
        return function (group) {
            var password = group.controls[passwordKey];
            var confirmPassword = group.controls[confirmPasswordKey];
            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        };
    };
    ChangepPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangepPasswordPage');
    };
    ChangepPasswordPage.prototype.onSubmit = function (value) {
        var _this = this;
        if (this.authForm.valid) {
            this.showLoader();
            this.authService.changePpassword(this.user).then(function (res) {
                console.log(res);
                _this.loading.dismiss();
            }).catch(function (error) {
                console.log(error);
            });
        }
        else {
            console.log(this.authForm.controls);
        }
    };
    ChangepPasswordPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    ChangepPasswordPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ChangepPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-changep-password',template:/*ion-inline-start:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/changep-password/changep-password.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>change Password</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div class="cover" align="center">\n    <img class="profile-image" src="assets/imgs/profile.png">\n      <h4>Mohamed Ahamada</h4>\n  </div>\n  <ion-list>\n      <form [formGroup]="authForm" (ngSubmit)="onSubmit(authForm.value)">\n\n        <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">\n            <input class="input100" type="text" placeholder="old Password"  [(ngModel)]="user.oldPassword" formControlName="oldPassword">\n            <span class="focus-input100"></span>\n            <span class="symbol-input100">\n              <ion-icon class="symbol-input100" name="key" item-start></ion-icon>\n            </span>\n        </div>\n\n        <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">\n          <input class="input100" type="password" placeholder="new Password"  [(ngModel)]="user.newPassword" formControlName="newPassword">\n          <span class="focus-input100"></span>\n          <span class="symbol-input100">\n            <ion-icon class="symbol-input100" name="key" item-start></ion-icon>\n          </span>\n        </div>\n\n        <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">\n          <input class="input100" type="password" placeholder="repeated Password" [(ngModel)]="user.repeatedPassword" formControlName="repeatedPassword">\n          <span class="focus-input100"></span>\n          <span class="symbol-input100">\n            <ion-icon class="symbol-input100" name="key" item-start></ion-icon>\n          </span>\n        </div>\n        <button  ion-button block class="login100-form-btn" type="submit">change Password</button>\n\n      </form>\n\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/changep-password/changep-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], ChangepPasswordPage);
    return ChangepPasswordPage;
}());

//# sourceMappingURL=changep-password.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailCheckPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_welcome__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MailCheckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MailCheckPage = (function () {
    function MailCheckPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MailCheckPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MailCheckPage');
    };
    MailCheckPage.prototype.home = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__welcome_welcome__["a" /* WelcomePage */]);
    };
    MailCheckPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mail-check',template:/*ion-inline-start:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/mail-check/mail-check.html"*/'<ion-content padding>\n  <div class="check-mail">\n    <h1>Check your Email</h1>\n    <ion-icon name="mail"></ion-icon>\n    <p>An email has been sent to you. It contains an activation link you must click to activate your account.</p>\n      <h6><a (click)="home()" >Home Page</a></h6>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/mail-check/mail-check.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], MailCheckPage);
    return MailCheckPage;
}());

//# sourceMappingURL=mail-check.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_event_event__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__choose_plan_choose_plan__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event_information_event_information__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event_challenge_event_challenge__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cover_event_cover_event__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__payment_payment__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__invite_friends_invite_friends__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__finish_create_event_finish_create_event__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the NewEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewEventPage = (function () {
    function NewEventPage(navCtrl, loadingCtrl, navParams, eventProvider, toastCtrl, storage) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.eventProvider = eventProvider;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
    }
    NewEventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewEventPage');
    };
    NewEventPage.prototype.createEvent = function () {
        var _this = this;
        this.showLoader();
        this.eventProvider.newEvent().then(function (result) {
            _this.loading.dismiss();
            console.log(result);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__choose_plan_choose_plan__["a" /* ChoosePlanPage */]);
        }).catch(function (err) {
            _this.eventProvider.getEvent(err['error']['appEventURI']).then(function (rep) {
                _this.storage.set('currentEvent', rep);
                _this.loading.dismiss();
                _this.switchToCurrentStep(rep.currentStep);
            }).catch(function (error) {
                _this.presentToast(error.statusText);
            });
        });
    };
    NewEventPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    /**
     * redirect to current step
     * @param currentStep
     */
    NewEventPage.prototype.switchToCurrentStep = function (currentStep) {
        //TODO: push to specific page
        switch (currentStep) {
            case 'choose-plan': {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__choose_plan_choose_plan__["a" /* ChoosePlanPage */]);
                break;
            }
            case 'event-information': {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__event_information_event_information__["a" /* EventInformationPage */]);
                break;
            }
            case 'event-challenge': {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__event_challenge_event_challenge__["a" /* EventChallengePage */]);
                break;
            }
            case 'event-cover': {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__cover_event_cover_event__["a" /* CoverEventPage */]);
                break;
            }
            case 'payment': {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__payment_payment__["a" /* PaymentPage */]);
                break;
            }
            case 'invite-friends': {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__invite_friends_invite_friends__["a" /* InviteFriendsPage */]);
                break;
            }
            default: {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__finish_create_event_finish_create_event__["a" /* FinishCreateEventPage */]);
                break;
            }
        }
    };
    NewEventPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loding...'
        });
        this.loading.present();
    };
    NewEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-event',template:/*ion-inline-start:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/new-event/new-event.html"*/'<!--\n  Generated template for the NewEventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content id="new-event">\n  <div class="background">\n    <img src="" alt="">\n  </div>\n  <a (click)="createEvent()"><div class="create-btn">\n    <ion-icon name="md-arrow-round-forward" item-start></ion-icon>\n  </div></a>\n  <div class="welcome-msg">\n    <h3>Welcome !</h3>\n    <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s</p>\n    <button ion-button block class="login100-form-btn marginTop signup" color="primary" (click)="createEvent()">Create Your Event</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/new-event/new-event.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_event_event__["a" /* EventProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_event_event__["a" /* EventProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _f || Object])
    ], NewEventPage);
    return NewEventPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=new-event.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordRequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PasswordRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PasswordRequestPage = (function () {
    function PasswordRequestPage(navCtrl, navParams, formBuilder, authService, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.user = {
            "email": "",
        };
        this.authForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30)])],
        });
    }
    PasswordRequestPage.prototype.onSubmit = function (value) {
        var _this = this;
        if (this.authForm.valid) {
            this.showLoader();
            this.authService.resetPassword(this.user).then(function (res) {
                console.log(res);
                _this.loading.dismiss();
            }).catch(function (error) {
                console.log(error);
            });
        }
        else {
            console.log(this.authForm.controls);
        }
    };
    PasswordRequestPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    PasswordRequestPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PasswordRequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-password-request',template:/*ion-inline-start:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/password-request/password-request.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>password-request</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <form [formGroup]="authForm" (ngSubmit)="onSubmit(authForm.value)">\n\n      <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">\n          <input class="input100" type="text" placeholder="Email" [(ngModel)]="user.email" formControlName="email">\n          <span class="focus-input100"></span>\n          <span class="symbol-input100">\n            <ion-icon class="symbol-input100" name="mail" item-start></ion-icon>\n          </span>\n      </div>\n    <button  ion-button block class="login100-form-btn" type="submit">Reset Password</button>\n\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/password-request/password-request.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], PasswordRequestPage);
    return PasswordRequestPage;
}());

//# sourceMappingURL=password-request.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__welcome_welcome__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilPage = (function () {
    function ProfilPage(navCtrl, navParams, loadingCtrl, toastCtrl, storage, formBuilder, authService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.user = {
            username: "string",
            password: "",
            email: "string",
            fullName: "string",
            phoneNumber: "string",
            timezoneId: "string",
        };
        this.authForm = formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('[a-zA-Z]*'), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(30)])],
            fullName: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('[a-zA-Z]*'), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(30)])],
            phoneNumber: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('[0-9]*'), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(30)])],
            timezoneId: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(30)])],
            email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(30)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(6)])],
        });
        this.storage.get('user').then(function (user) {
            if (user === null) {
                return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__welcome_welcome__["a" /* WelcomePage */]).then(function (page) {
                    console.log(page);
                }).catch(function (err) {
                    console.log(err);
                });
            }
            _this.user.email = user.email;
            _this.user.fullName = user.fullName;
            _this.user.phoneNumber = user.phoneNumber;
            _this.user.timezoneId = user.timezoneId;
            _this.user.username = user.username;
        }).catch(function (err) {
            // this.navCtrl.push(WelcomePage)
        });
    }
    // matchingPasswords(passwordKey: string) {
    //   console.log('matchingPasswords==========<<>>')
    //   return (group: FormGroup): {[key: string]: any} => {
    //     let password = group.controls[passwordKey];
    //     if (password.value !== '12345678') {
    //       console.log('matchingPasswords==========<<>>')
    //       return {
    //         mismatchedPasswords: true
    //       };
    //     }
    //   }
    // }
    // console.log(passwordKey);
    //     this.authService.login({username:'test',password:"123456"}).then((result) => {
    //           this.storage.set('token', result.token);
    //           console.log(result.token)
    //           return {
    //             mismatchedPasswords: false
    //           };
    //       }
    //       ).catch(err=>{
    //         return {
    //           mismatchedPasswords: true
    //         };
    //       });
    //       return {
    //         mismatchedPasswords: false
    //       };
    ProfilPage.prototype.onSubmit = function (value) {
        var _this = this;
        console.log("submit");
        if (this.authForm.valid) {
            console.log("valide");
            this.authService.updateUser(this.user).then(function (res) {
                console.log(res);
            }).catch(function (err) {
                _this.presentToast("Password incorrect !!");
            });
        }
    };
    ProfilPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    ProfilPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ProfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profil',template:/*ion-inline-start:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/profil/profil.html"*/'<ion-content padding>\n  \n  \n    \n    <button class="menu-btn" ion-button menuToggle icon-only>\n        <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <form [formGroup]="authForm" (ngSubmit)="onSubmit(authForm.value)">\n        \n        <div class="cover" align="center">\n          <img class="profile-image" src="assets/imgs/profile.png">\n            <h4>Mohamed Ahamada</h4>\n        </div>\n      <ion-list>\n        <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">\n            <input class="input100" type="text" placeholder="Full Name" [(ngModel)]="user.fullName" formControlName="fullName">\n            <span class="focus-input100"></span>\n            <span class="symbol-input100">\n              <ion-icon class="symbol-input100" name="person" item-start></ion-icon>\n            </span>\n          </div>\n\n          <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">\n              <input class="input100" type="text" placeholder="Pseudo" [(ngModel)]="user.username" formControlName="username">\n              <span class="focus-input100"></span>\n              <span class="symbol-input100">\n                <ion-icon class="symbol-input100" name="contact" item-start></ion-icon>\n              </span>\n          </div>\n\n          <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">\n              <input class="input100" type="text" placeholder="Email" [(ngModel)]="user.email" formControlName="email">\n              <span class="focus-input100"></span>\n              <span class="symbol-input100">\n                <ion-icon class="symbol-input100" name="mail" item-start></ion-icon>\n              </span>\n          </div>\n\n          <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">\n              <input class="input100" type="text" placeholder="Phone Number" [(ngModel)]="user.phoneNumber" formControlName="phoneNumber">\n              <span class="focus-input100"></span>\n              <span class="symbol-input100">\n                <ion-icon class="symbol-input100" name="call" item-start></ion-icon>\n              </span>\n          </div>\n\n          <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">\n              <input class="input100" type="text" placeholder="TimeZone" [(ngModel)]="user.timezoneId" formControlName="timezoneId">\n              <span class="focus-input100"></span>\n              <span class="symbol-input100">\n                <ion-icon class="symbol-input100" name="globe" item-start></ion-icon>\n              </span>\n          </div>\n          <hr>\n          <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">\n              <input class="input100" type="password" placeholder="Password" [(ngModel)]="user.password" formControlName="password">\n              <span class="focus-input100"></span>\n              <span class="symbol-input100">\n                <ion-icon class="symbol-input100" name="key" item-start></ion-icon>\n              </span>\n          </div>\n\n        \n      </ion-list>\n      <button ion-button block class="login100-form-btn marginTop signup" color="primary" >Save</button>\n      <button ion-button block class="login100-form-btn dlt-btn">Delete Account</button>\n  </form>\n  </ion-content>\n'/*ion-inline-end:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/profil/profil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
    ], ProfilPage);
    return ProfilPage;
}());

//# sourceMappingURL=profil.js.map

/***/ }),

/***/ 133:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 133;

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/changep-password/changep-password.module": [
		309,
		13
	],
	"../pages/choose-plan/choose-plan.module": [
		310,
		12
	],
	"../pages/cover-event/cover-event.module": [
		311,
		11
	],
	"../pages/event-challenge/event-challenge.module": [
		312,
		10
	],
	"../pages/event-information/event-information.module": [
		313,
		9
	],
	"../pages/events/events.module": [
		314,
		8
	],
	"../pages/finish-create-event/finish-create-event.module": [
		315,
		7
	],
	"../pages/invite-friends/invite-friends.module": [
		316,
		6
	],
	"../pages/mail-check/mail-check.module": [
		317,
		5
	],
	"../pages/new-event/new-event.module": [
		318,
		4
	],
	"../pages/password-request/password-request.module": [
		319,
		3
	],
	"../pages/payment/payment.module": [
		320,
		2
	],
	"../pages/profil/profil.module": [
		321,
		1
	],
	"../pages/welcome/welcome.module": [
		322,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 175;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    API_END_POINT: 'http://192.168.1.10:8000',
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventRoutes; });
var EventRoutes = {
    apiChoosePlan: '/api/event/choose-plan/',
    apiEventInformation: '/api/event/event-information/',
    apiEventPurchase: 'api/event_purchases/',
    apiPlan: 'api/plans/',
    apiPropositionChallenges: '/api/proposition_challenges',
    apiEventChallenge: '/api/event/event-challenge/',
    apiPayment: '/api/event/add-payment/',
    apiIsTotalPayed: '/api/is-total-payed/',
    apiInviteFriends: '/api/event/invite-friends/',
};
//# sourceMappingURL=event.routes.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(244);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_upload_upload__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_auth_auth__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_api_api__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_register_register__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_changep_password_changep_password__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_profilprovider_profilprovider__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_profil_profil__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_user_user__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_mail_check_mail_check__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_password_request_password_request__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_events_events__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_choose_plan_choose_plan__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_event_event__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_event_information_event_information__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_new_event_new_event__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_cover_event_cover_event__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_event_challenge_event_challenge__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_invite_friends_invite_friends__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_payment_payment__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_finish_create_event_finish_create_event__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* StoryTellingApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_profil_profil__["a" /* ProfilPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_mail_check_mail_check__["a" /* MailCheckPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_changep_password_changep_password__["a" /* ChangepPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_upload_upload__["a" /* UploadPage */], __WEBPACK_IMPORTED_MODULE_22__pages_password_request_password_request__["a" /* PasswordRequestPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_choose_plan_choose_plan__["a" /* ChoosePlanPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_event_information_event_information__["a" /* EventInformationPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_new_event_new_event__["a" /* NewEventPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_cover_event_cover_event__["a" /* CoverEventPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_event_challenge_event_challenge__["a" /* EventChallengePage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_invite_friends_invite_friends__["a" /* InviteFriendsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_finish_create_event_finish_create_event__["a" /* FinishCreateEventPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* StoryTellingApp */], {}, {
                    links: [
                        { loadChildren: '../pages/changep-password/changep-password.module#ChangepPasswordPageModule', name: 'ChangepPasswordPage', segment: 'changep-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/choose-plan/choose-plan.module#ChoosePlanPageModule', name: 'ChoosePlanPage', segment: 'choose-plan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cover-event/cover-event.module#CoverEventPageModule', name: 'CoverEventPage', segment: 'cover-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event-challenge/event-challenge.module#EventChallengePageModule', name: 'EventChallengePage', segment: 'event-challenge', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event-information/event-information.module#EventInformationPageModule', name: 'EventInformationPage', segment: 'event-information', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/events/events.module#EventsPageModule', name: 'EventsPage', segment: 'events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/finish-create-event/finish-create-event.module#FinishCreateEventPageModule', name: 'FinishCreateEventPage', segment: 'finish-create-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/invite-friends/invite-friends.module#InviteFriendsPageModule', name: 'InviteFriendsPage', segment: 'invite-friends', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mail-check/mail-check.module#MailCheckPageModule', name: 'MailCheckPage', segment: 'mail-check', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-event/new-event.module#NewEventPageModule', name: 'NewEventPage', segment: 'new-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/password-request/password-request.module#PasswordRequestPageModule', name: 'PasswordRequestPage', segment: 'password-request', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profil/profil.module#ProfilPageModule', name: 'ProfilPage', segment: 'profil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* StoryTellingApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_profil_profil__["a" /* ProfilPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_mail_check_mail_check__["a" /* MailCheckPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_changep_password_changep_password__["a" /* ChangepPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_upload_upload__["a" /* UploadPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_password_request_password_request__["a" /* PasswordRequestPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_choose_plan_choose_plan__["a" /* ChoosePlanPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_event_information_event_information__["a" /* EventInformationPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_new_event_new_event__["a" /* NewEventPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_cover_event_cover_event__["a" /* CoverEventPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_event_challenge_event_challenge__["a" /* EventChallengePage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_invite_friends_invite_friends__["a" /* InviteFriendsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_finish_create_event_finish_create_event__["a" /* FinishCreateEventPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_profilprovider_profilprovider__["a" /* ProfilproviderProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_event_event__["a" /* EventProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRoutes; });
var AuthRoutes = {
    apiLoginCheckUrl: '/api/login_check',
    apiReg: '/api/users',
    apiResPass: '/api/me/change-password',
    apirestPass: '/api/me/forgot-password-request',
};
//# sourceMappingURL=auth.routes.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_routes__ = __webpack_require__(177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the EventProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var EventProvider = (function () {
    function EventProvider(apiProvider, storage) {
        this.apiProvider = apiProvider;
        this.storage = storage;
        console.log('Hello EventProvider Provider');
    }
    EventProvider.prototype.newEvent = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('token').then(function (tok) {
                var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]();
                headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                headers = headers.set('Authorization', 'Bearer ' + tok);
                _this.apiProvider.get('/api/event/new', { headers: headers }).then(function (rep) {
                    console.log('frfrfrfrf');
                    console.log(rep);
                    resolve("ok");
                }).catch(function (error) {
                    console.log('error');
                    reject(error);
                });
            }).catch(function (error) {
                reject('erro');
            });
        });
    };
    EventProvider.prototype.getEvent = function (route) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('token').then(function (tok) {
                var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]();
                headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                headers = headers.set('Authorization', 'Bearer ' + tok);
                _this.apiProvider.get(route, { headers: headers }).then(function (rep) {
                    resolve(rep);
                }).catch(function (error) {
                    reject(error);
                });
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    EventProvider.prototype.addChoosePlan = function (choosePlanData, id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('token').then(function (tok) {
                var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]();
                headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                headers = headers.set('Authorization', 'Bearer ' + tok);
                console.log(__WEBPACK_IMPORTED_MODULE_4__event_routes__["a" /* EventRoutes */].apiChoosePlan + id);
                _this.apiProvider.post(__WEBPACK_IMPORTED_MODULE_4__event_routes__["a" /* EventRoutes */].apiChoosePlan + id, choosePlanData, { headers: headers }).then(function (rep) {
                    console.log(rep);
                    resolve("ok");
                }).catch(function (error) {
                    reject(error);
                });
            }).catch(function (error) {
                console.log(error.status);
            });
        });
    };
    EventProvider.prototype.addEventInformation = function (eventInformationData, id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('token').then(function (tok) {
                var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]();
                headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                headers = headers.set('Authorization', 'Bearer ' + tok);
                console.log(__WEBPACK_IMPORTED_MODULE_4__event_routes__["a" /* EventRoutes */].apiEventInformation + id);
                var data = {
                    "description": eventInformationData.description,
                    "title": eventInformationData.title,
                    "place": eventInformationData.place,
                    "startsAt": eventInformationData.startsAt,
                    "endsAt": eventInformationData.endsAt,
                    "idCat": eventInformationData.idCat
                };
                _this.apiProvider.post(__WEBPACK_IMPORTED_MODULE_4__event_routes__["a" /* EventRoutes */].apiEventInformation + id, data, { headers: headers }).then(function (rep) {
                    console.log(rep);
                    resolve("ok");
                }).catch(function (error) {
                    reject(error);
                });
            }).catch(function (error) {
                console.log(error.status);
            });
        });
    };
    EventProvider.prototype.isFreePlan = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('token').then(function (tok) {
                var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]();
                headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                headers = headers.set('Authorization', 'Bearer ' + tok);
                _this.apiProvider.get(url, { headers: headers }).then(function (rep) {
                    console.log('resultat  ', rep.plan);
                    _this.apiProvider.get(rep.plan, { headers: headers }).then(function (plan) {
                        if (plan.planKey !== 'free') {
                            resolve(false);
                        }
                        else {
                            resolve(true);
                        }
                    }).catch(function (error) {
                        reject(error);
                    });
                }).catch(function (error) {
                    reject(error);
                });
            }).catch(function (error) {
                console.log(error.status);
            });
        });
    };
    EventProvider.prototype.addEventChallenge = function (challenges, id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('token').then(function (tok) {
                var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]();
                headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                headers = headers.set('Authorization', 'Bearer ' + tok);
                console.log(__WEBPACK_IMPORTED_MODULE_4__event_routes__["a" /* EventRoutes */].apiEventChallenge + id);
                var data = {
                    "challenges": challenges
                };
                _this.apiProvider.post(__WEBPACK_IMPORTED_MODULE_4__event_routes__["a" /* EventRoutes */].apiEventChallenge + id, data, { headers: headers }).then(function (rep) {
                    console.log(rep);
                    resolve("ok");
                }).catch(function (error) {
                    reject(error);
                });
            }).catch(function (error) {
                console.log(error.status);
            });
        });
    };
    EventProvider.prototype.addPaymentForEvent = function (eventPayment, id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('token').then(function (tok) {
                var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]();
                headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                headers = headers.set('Authorization', 'Bearer ' + tok);
                var data = {
                    "monthExpire": +eventPayment.monthExpire,
                    "cvv": +eventPayment.cvv,
                    "numberCard": +eventPayment.numberCard,
                    "yearExpire": +eventPayment.yearExpire,
                    "price": +eventPayment.price
                };
                _this.apiProvider.post(__WEBPACK_IMPORTED_MODULE_4__event_routes__["a" /* EventRoutes */].apiPayment + id, data, { headers: headers }).then(function (rep) {
                    resolve("ok");
                }).catch(function (error) {
                    console.log(error.status);
                    reject(error);
                });
            }).catch(function (error) {
                console.log(error.status);
            });
        });
    };
    EventProvider.prototype.addInviteFriends = function (emails, id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('token').then(function (tok) {
                var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]();
                headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                headers = headers.set('Authorization', 'Bearer ' + tok);
                var data = {
                    "emails": emails
                };
                _this.apiProvider.post(__WEBPACK_IMPORTED_MODULE_4__event_routes__["a" /* EventRoutes */].apiInviteFriends + id, data, { headers: headers }).then(function (rep) {
                    resolve(rep);
                }).catch(function (error) {
                    console.log(error.status);
                    reject(error);
                });
            }).catch(function (error) {
                console.log(error.status);
            });
        });
    };
    EventProvider.prototype.isTotalPayed = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('token').then(function (tok) {
                var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]();
                headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                headers = headers.set('Authorization', 'Bearer ' + tok);
                _this.storage.get('currentEvent').then(function (event) {
                    _this.apiProvider.get(__WEBPACK_IMPORTED_MODULE_4__event_routes__["a" /* EventRoutes */].apiIsTotalPayed + event.id, { headers: headers }).then(function (isTotalPayed) {
                        resolve(isTotalPayed);
                    }).catch(function (error) {
                        reject(error);
                    });
                }).catch(function (error) {
                    reject(error);
                });
            }).catch(function (error) {
                console.log(error.status);
            });
        });
    };
    EventProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
    ], EventProvider);
    return EventProvider;
}());

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoryTellingApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_profil_profil__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_changep_password_changep_password__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_password_request_password_request__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var StoryTellingApp = (function () {
    function StoryTellingApp(platform, statusBar, splashScreen, storage) {
        this.storage = storage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.pages = [
            { title: 'Edit Profil', component: __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */] },
            { title: 'Change Password', component: __WEBPACK_IMPORTED_MODULE_6__pages_changep_password_changep_password__["a" /* ChangepPasswordPage */] },
            { title: 'reset password', component: __WEBPACK_IMPORTED_MODULE_8__pages_password_request_password_request__["a" /* PasswordRequestPage */] },
            { title: 'upload', component: __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */] },
            { title: 'profil', component: __WEBPACK_IMPORTED_MODULE_5__pages_profil_profil__["a" /* ProfilPage */] },
            { title: 'Log out', component: __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */] }
        ];
    }
    StoryTellingApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.title === 'Log out') {
            this.storage.remove('user');
            this.storage.remove('token');
        }
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], StoryTellingApp.prototype, "nav", void 0);
    StoryTellingApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/app/app.html"*/'<ion-menu [content]="content">\n        <ion-header>\n          <ion-toolbar>\n            <ion-title>Menu</ion-title>\n          </ion-toolbar>\n        </ion-header>\n        <!-- <ion-content>\n          <ion-list>\n            <ion-item>\n                    <ion-icon name="contact" item-start></ion-icon>\n                         Edit Profil\n            </ion-item>\n            <ion-item>\n                    <ion-icon name="key" item-start></ion-icon>\n                         Change Password\n            </ion-item>\n            <ion-item>\n                    <ion-icon name="calendar" item-start></ion-icon>\n                         My Events\n            </ion-item>\n            <ion-item menu-close  (click)="openPage()">\n                    <ion-icon name="log-out" item-start></ion-icon>\n                         Log out\n              <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n              {{p.title}}\n            </button>\n            </ion-item>\n        </ion-list>\n        </ion-content> -->\n        <ion-content>\n          <ion-list>\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n              {{p.title}}\n            </button>\n          </ion-list>\n        </ion-content>\n      </ion-menu>\n\n<ion-nav [root]="rootPage" #content></ion-nav>\n'/*ion-inline-end:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
    ], StoryTellingApp);
    return StoryTellingApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Login" tabIcon="person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the UploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UploadPage = (function () {
    function UploadPage(navCtrl, transfer, 
        // private camera: Camera,
        loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.transfer = transfer;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    UploadPage.prototype.getImage = function () {
        // const options: CameraOptions = {
        //   quality: 100,
        //   destinationType: this.camera.DestinationType.FILE_URI,
        //   sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        // }
        // this.camera.getPicture(options).then((imageData) => {
        //   this.imageURI = imageData;
        // }, (err) => {
        //   console.log(err);
        //   this.presentToast(err);
        // });
    };
    UploadPage.prototype.uploadFile = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Uploading..."
        });
        loader.present();
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: 'ionicfile',
            fileName: 'ionicfile',
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {}
        };
        fileTransfer.upload(this.imageURI, 'http://192.168.0.7:8080/api/uploadImage', options)
            .then(function (data) {
            console.log(data + " Uploaded Successfully");
            _this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg";
            loader.dismiss();
            _this.presentToast("Image uploaded successfully");
        }, function (err) {
            console.log(err);
            loader.dismiss();
            _this.presentToast(err);
        });
    };
    UploadPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 6000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    UploadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-upload',template:/*ion-inline-start:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/upload/upload.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <p>{{imageURI}}</p>\n    <button ion-button color="secondary" (click)="getImage()">Get Image</button>\n  </ion-item>\n  <!-- <ion-item>\n    <h4>Image Preview</h4>\n    <img src="{{imageFileName}}" *ngIf="imageFileName" alt="Ionic File" width="300" />\n  </ion-item> -->\n  <ion-item>\n    <button ion-button (click)="uploadFile()">Upload</button>\n  </ion-item>\n</ion-content>'/*ion-inline-end:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/upload/upload.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], UploadPage);
    return UploadPage;
}());

//# sourceMappingURL=upload.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilproviderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ProfilproviderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProfilproviderProvider = (function () {
    function ProfilproviderProvider(http) {
        this.http = http;
        console.log('Hello ProfilproviderProvider Provider');
    }
    ProfilproviderProvider.prototype.getProfilData = function () {
    };
    ProfilproviderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ProfilproviderProvider);
    return ProfilproviderProvider;
}());

//# sourceMappingURL=profilprovider.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserProvider = (function () {
    function UserProvider(http, storage, apiProvider) {
        this.http = http;
        this.storage = storage;
        this.apiProvider = apiProvider;
        console.log('Hello UserProvider Provider');
    }
    UserProvider.prototype.getUser = function () {
    };
    UserProvider.prototype.updateUser = function (userdata) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('token').then(function (tok) {
                var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
                headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                headers = headers.set('Authorization', 'Bearer ' + tok);
                _this.apiProvider.put('/api/update-profile', userdata, { headers: headers }).then(function (rep) {
                    console.log(rep);
                    resolve("ok");
                }).catch(function (error) {
                    reject(error);
                });
            }).catch(function (error) {
                reject('erro');
            });
        });
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], Storage, __WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* ApiProvider */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiProvider = (function () {
    function ApiProvider(http) {
        this.http = http;
        console.log('Hello ApiProvider Provider');
    }
    ApiProvider_1 = ApiProvider;
    ApiProvider.getFullUrl = function (url) {
        return __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_END_POINT + url;
    };
    ApiProvider.prototype.get = function (url, options) {
        var _this = this;
        return new Promise((function (resolve, reject) {
            _this.http.get(ApiProvider_1.getFullUrl(url), options).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        }));
    };
    ApiProvider.prototype.put = function (url, body, options) {
        var _this = this;
        return new Promise((function (resolve, reject) {
            _this.http.put(ApiProvider_1.getFullUrl(url), body, options).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        }));
    };
    ApiProvider.prototype.post = function (url, body, options) {
        var _this = this;
        return new Promise((function (resolve, reject) {
            _this.http.post(ApiProvider_1.getFullUrl(url), body, options)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        }));
    };
    ApiProvider.prototype.delete = function (url, options) {
        return this.http.delete(ApiProvider_1.getFullUrl(url), options);
    };
    ApiProvider.prototype.request = function (method, url, options) {
        return this.http.request(method, ApiProvider_1.getFullUrl(url), options);
    };
    ApiProvider.prototype.patch = function (url, body, options) {
        return this.http.patch(ApiProvider_1.getFullUrl(url), body, options);
    };
    ApiProvider = ApiProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ApiProvider);
    return ApiProvider;
    var ApiProvider_1;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_routes__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = (function () {
    function AuthProvider(apiProvider, storage) {
        this.apiProvider = apiProvider;
        this.storage = storage;
        console.log('Hello AuthProvider Provider');
    }
    AuthProvider.prototype.login = function (userData) {
        var _this = this;
        var loginPath = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].API_END_POINT + '/api/login_check';
        var formData = new FormData();
        formData.append("_username", userData.username);
        formData.append("_password", userData.password);
        return new Promise(function (resolve, reject) {
            fetch(loginPath, {
                method: 'POST',
                body: formData
            })
                .then(_this.handleErrors)
                .then(function (response) {
                response.json().then(function (result) {
                    _this.storage.set('token', result.token);
                    resolve(result);
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    AuthProvider.prototype.handleErrors = function (response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    };
    AuthProvider.prototype.register = function (userData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.apiProvider.post(__WEBPACK_IMPORTED_MODULE_2__auth_routes__["a" /* AuthRoutes */].apiReg, userData).then(function (data) {
                resolve(data);
            }).catch(function (error) {
                reject(error.error.violations);
            });
        });
    };
    AuthProvider.prototype.setUserProfil = function () {
    };
    AuthProvider.prototype.changePpassword = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('token').then(function (tok) {
                var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]();
                headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                headers = headers.set('Authorization', 'Bearer ' + tok);
                _this.apiProvider.post(__WEBPACK_IMPORTED_MODULE_2__auth_routes__["a" /* AuthRoutes */].apiResPass, credentials, { headers: headers }).then(function (rep) {
                    _this.storage.remove('token');
                    _this.storage.remove('user');
                    _this.storage.set('token', rep.token);
                    console.log(rep);
                    resolve("ok");
                }).catch(function (error) {
                    reject(error);
                });
            }).catch(function (error) {
                console.log(error.status);
            });
        });
    };
    AuthProvider.prototype.updateUser = function (userdata) {
        var _this = this;
        var credentials = {
            "username": userdata.username,
            "fullName": userdata.fullName,
            "email": userdata.email,
            "phoneNumber": userdata.phoneNumber,
            "timeZone": userdata.timezoneId,
            "password": userdata.password
        };
        return new Promise(function (resolve, reject) {
            _this.storage.get('token').then(function (tok) {
                var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]();
                headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                headers = headers.set('Authorization', 'Bearer ' + tok);
                _this.apiProvider.post('/api/me/change-profile', credentials, { headers: headers }).then(function (rep) {
                    _this.storage.set('token', rep.token);
                    resolve("ok");
                }).catch(function (error) {
                    reject(error);
                });
            }).catch(function (error) {
                console.log(error.status);
            });
        });
    };
    AuthProvider.prototype.getUserProfil = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('token').then(function (tok) {
                var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]();
                headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                headers = headers.set('Authorization', 'Bearer ' + tok);
                _this.apiProvider.get('/api/current-user', { headers: headers }).then(function (rep) {
                    _this.storage.set('user', rep);
                    resolve("ok");
                }).catch(function (error) {
                    reject(error);
                });
            }).catch(function (error) {
                reject('erro');
            });
        });
    };
    AuthProvider.prototype.resetPassword = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('token').then(function (tok) {
                var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]();
                headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                headers = headers.set('Authorization', 'Bearer ' + tok);
                _this.apiProvider.post(__WEBPACK_IMPORTED_MODULE_2__auth_routes__["a" /* AuthRoutes */].apirestPass, credentials, { headers: headers }).then(function (rep) {
                    _this.storage.set('user', rep);
                    resolve("ok");
                }).catch(function (error) {
                    reject(error);
                });
            }).catch(function (error) {
                reject('erro');
            });
        });
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__choose_plan_choose_plan__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventsPage = (function () {
    function EventsPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
    }
    EventsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventsPage');
    };
    EventsPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    /**
    * redirect to current step
    * @param currentStep
    */
    EventsPage.prototype.switchToCurrentStep = function (currentStep) {
        //TODO: push to specific page
        switch (currentStep) {
            case 'choose-plan': {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__choose_plan_choose_plan__["a" /* ChoosePlanPage */]);
                break;
            }
            case 'event-information': {
                //statements;
                console.log('event-information1');
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__choose_plan_choose_plan__["a" /* ChoosePlanPage */]);
                break;
            }
            case 'event-challenge': {
                //statements;
                console.log('event-challenge');
                break;
            }
            case 'event-cover': {
                //statements;
                console.log('event-cover');
                break;
            }
            case 'payment': {
                //statements;
                console.log('payment');
                break;
            }
            case 'invite-friends': {
                //statements;
                console.log('invite-friends');
                break;
            }
            case 'finish': {
                //statements;
                console.log('finish');
                break;
            }
            default: {
                //statements;
                break;
            }
        }
    };
    EventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-events',template:/*ion-inline-start:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/events/events.html"*/'<ion-content id="events">\n\n</ion-content>\n'/*ion-inline-end:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/events/events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], EventsPage);
    return EventsPage;
}());

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoverEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_payment__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_event_event__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__invite_friends_invite_friends__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CoverEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CoverEventPage = (function () {
    function CoverEventPage(navCtrl, loadingCtrl, navParams, eventProvider, storage) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.eventProvider = eventProvider;
        this.storage = storage;
    }
    CoverEventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CoverEventPage');
    };
    CoverEventPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader();
        this.storage.get('currentEvent').then(function (event) {
            _this.eventProvider.isFreePlan(event.eventPurchase).then(function (res) {
                if (res) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__invite_friends_invite_friends__["a" /* InviteFriendsPage */]);
                }
                else {
                    _this.eventProvider.isTotalPayed().then(function (res) {
                        _this.loading.dismiss();
                        if (res.isPayed) {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__invite_friends_invite_friends__["a" /* InviteFriendsPage */]);
                        }
                        else {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__payment_payment__["a" /* PaymentPage */]);
                        }
                    }).catch(function (err) {
                        _this.loading.dismiss();
                        console.log(err);
                    });
                }
                console.log(res);
            }).catch(function (error) {
                console.log(error);
            });
        }).catch(function (err) { console.log(err); });
    };
    CoverEventPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loding...'
        });
        this.loading.present();
    };
    CoverEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cover-event',template:/*ion-inline-start:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/cover-event/cover-event.html"*/'<!--\n  Generated template for the CoverEventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>coverEvent</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n  <div>\n    <form (ngSubmit)="onSubmit()">\n\n      <button type="submit" ion-button large clear icon-end color="primary">\n        Continue\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/cover-event/cover-event.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_event_event__["a" /* EventProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_event_event__["a" /* EventProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]) === "function" && _e || Object])
    ], CoverEventPage);
    return CoverEventPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=cover-event.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InviteFriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_event_event__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__finish_create_event_finish_create_event__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the InviteFriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InviteFriendsPage = (function () {
    function InviteFriendsPage(navCtrl, navParams, loadingCtrl, formBuilder, toastCtrl, storage, eventProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.eventProvider = eventProvider;
        this.emails = [];
        this.email = '';
        this.authForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
        });
    }
    InviteFriendsPage.prototype.removeEmail = function (index) {
        this.emails.splice(index, 1);
    };
    InviteFriendsPage.prototype.addEmail = function () {
        if (this.authForm.valid) {
            if (this.emails.indexOf(this.email) == -1) {
                this.emails.push(this.email);
            }
            else {
                this.presentToast("déja exist");
            }
        }
        else {
            this.presentToast("required email");
        }
    };
    InviteFriendsPage.prototype.send = function () {
        var _this = this;
        this.showLoader();
        console.log('emails', this.emails);
        this.storage.get('currentEvent').then(function (event) {
            _this.eventProvider.addInviteFriends(_this.emails, event.id).then(function (res) {
                _this.loading.dismiss();
                console.log(res);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__finish_create_event_finish_create_event__["a" /* FinishCreateEventPage */]);
            }).catch(function (error) { _this.loading.dismiss(); console.log(error); });
        }).catch(function (error) { console.log(error); });
    };
    InviteFriendsPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    InviteFriendsPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loding...'
        });
        this.loading.present();
    };
    InviteFriendsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-invite-friends',template:/*ion-inline-start:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/invite-friends/invite-friends.html"*/'<!--\n  Generated template for the InviteFriendsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>inviteFriends</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-card >\n\n    <form [formGroup]="authForm" (ngSubmit)="addEmail(authForm.value)">\n      <ion-item>\n        <ion-input type="email" formControlName="email" placeholder="email" [(ngModel)]="email"></ion-input>\n      </ion-item>\n      <button ion-button icon-only type="submit">\n        add Email\n      </button>\n    </form>\n  </ion-card>\n  <ion-card  *ngFor="let email of this.emails" (tap)="removeEmail(index)">\n    <ion-item>\n      {{email}}\n    </ion-item>\n  </ion-card>\n\n  <button type="button" ion-button large clear icon-end color="primary"  (click)="send()">\n    Continue\n    <ion-icon name="arrow-forward"></ion-icon>\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/invite-friends/invite-friends.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__providers_event_event__["a" /* EventProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_event_event__["a" /* EventProvider */]) === "function" && _g || Object])
    ], InviteFriendsPage);
    return InviteFriendsPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=invite-friends.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomePage = (function () {
    function WelcomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    WelcomePage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    WelcomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/welcome/welcome.html"*/'<ion-content id="welcome">\n  <div class="blur">\n  </div>\n  <h1>Welcome</h1>\n  <h2>On board</h2>\n  <div class="message">\n    <img src="../assets/imgs/welcome.png" alt="">\n    <h5>All the fun starts here!</h5>\n    <p>Tell your story with the pictures of your guests</p>\n  </div>\n  <div class="buttons">\n    <button type="button" name="button" (click)="signup()">Sign Up</button>\n    <p>\n      Have an account? Cool!<br>\n      <a (click)="login()">Login in Then</a>\n    </p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/welcome/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__new_event_new_event__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl, loadingCtrl, toastCtrl, authService, storage, formBuilder) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.loginData = {
            username: "admin",
            password: "f%/R4Uk#](wUvM'V",
        };
        this.errorAuthentication = false;
        this.navCtrl = navCtrl;
        this.authForm = formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
        });
    }
    /*logout(){
      const root = this.app.goRootnav();
      root.popToRoot();
    }*/
    HomePage.prototype.goSignUpPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    HomePage.prototype.doLogin = function (value) {
        var _this = this;
        if (this.authForm.valid) {
            this.showLoader();
            this.authService.login(this.loginData).then(function (result) {
                console.log(result.token);
                _this.loading.dismiss();
                _this.authService.getUserProfil().then(function (res) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__new_event_new_event__["a" /* NewEventPage */]);
                });
            }).catch(function (err) {
                _this.loading.dismiss();
                console.log(err);
                _this.presentToast("incorrect username or password !!");
            });
        }
    };
    HomePage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    HomePage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    HomePage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/home/home.html"*/'<ion-content>\n  <div class="circle-one"></div>\n  <div class="circle-two"></div>\n  <div class="circle-tree"></div>\n  <div class="circle-four"></div>\n  <div class="titre-registe">\n      <h1>log in</h1>\n      <h4>to continue</h4>\n  </div>\n<form [formGroup]="authForm" (ngSubmit)="doLogin(authForm.value)">\n<div class="inputs">\n  <ion-list>\n\n    <ion-item>\n      <ion-input type="text" formControlName="username" placeholder="Pseudo" [(ngModel)]="loginData.username"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="password" type="password" formControlName="password" placeholder="Password" [(ngModel)]="loginData.password"></ion-input>\n    </ion-item>\n\n  </ion-list>\n  <div class="buttons">\n    <button ion-button type="submit" name="button">log in</button>\n  </div>\n</div>\n</form>\n</ion-content>\n'/*ion-inline-end:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mail_check_mail_check__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, loadingCtrl, toastCtrl, authService, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.regData = { "username": "", "plainPassword": "", "email": "" };
        this.navCtrl = navCtrl;
        this.authForm = formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[a-zA-Z]*'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(30)])],
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(30)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(8)])],
        });
    }
    RegisterPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    RegisterPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__mail_check_mail_check__["a" /* MailCheckPage */]);
    };
    RegisterPage.prototype.onSubmit = function (value) {
        var _this = this;
        console.log("submit");
        var messageError = "";
        if (this.authForm.valid) {
            console.log("valid");
            this.regData.username = value.username;
            this.regData.plainPassword = value.password;
            this.regData.email = value.email;
            this.showLoader();
            this.authService.register(this.regData).then(function (result) {
                _this.loading.dismiss();
                // this.navCtrl.pop();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__mail_check_mail_check__["a" /* MailCheckPage */]);
                console.log(result);
            }, function (err) {
                err.map(function (val, key) {
                    if (key === 0)
                        messageError = val.propertyPath + " : " + val.message;
                });
                _this.loading.dismiss();
                _this.presentToast(messageError);
            });
            // this.nav.push(HomePage);
        }
        else {
            this.presentToast("invalid data");
        }
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.doSignup = function () {
        var _this = this;
        this.showLoader();
        this.authService.register(this.regData).then(function (result) {
            _this.loading.dismiss();
            // this.navCtrl.pop();
            console.log(result);
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast("err");
        });
    };
    RegisterPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    RegisterPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/register/register.html"*/'<ion-content id="register">\n  <div class="circle-two"></div>\n  <div class="titre-registe">\n      <h1>sign up</h1>\n      <h4>to continue</h4>\n  </div>\n  <div class="inputs">\n    <ion-list>\n\n      <ion-item>\n        <ion-input type="text" placeholder="Username"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="email" placeholder="email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="password" placeholder="Password"></ion-input>\n      </ion-item>\n\n    </ion-list>\n    <div class="buttons">\n      <button type="button" name="button">log in</button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChoosePlanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_events__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_event_event__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__event_information_event_information__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the ChoosePlanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChoosePlanPage = (function () {
    function ChoosePlanPage(navCtrl, loadingCtrl, navParams, storage, apiProvider, eventProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.apiProvider = apiProvider;
        this.eventProvider = eventProvider;
        this.plans = [];
        this.planChoice = "";
        this.storage.get('token').then(function (tok) {
            var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]();
            headers = headers.set('Content-Type', 'application/json; charset=utf-8');
            headers = headers.set('Authorization', 'Bearer ' + tok);
            _this.apiProvider.get('/api/plans', { headers: headers }).then(function (dataPlans) {
                _this.plans = dataPlans['hydra:member'];
            }).catch(function (error) { });
        }).catch(function (error) { });
    }
    ChoosePlanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChoosePlanPage');
    };
    ChoosePlanPage.prototype.cancelAction = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__events_events__["a" /* EventsPage */]);
    };
    ChoosePlanPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader();
        var choosePlanData = {
            planKey: this.planChoice,
        };
        console.log("attrqssqq", choosePlanData);
        this.storage.get('currentEvent').then(function (event) {
            console.log("finish", event);
            console.log("ddd", event.id);
            _this.eventProvider.addChoosePlan(choosePlanData, event.id).then(function (res) {
                _this.loading.dismiss();
                console.log(res);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__event_information_event_information__["a" /* EventInformationPage */]);
            }).catch(function (error) {
                _this.loading.dismiss();
                console.log(error);
            });
        }).catch(function (err) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__events_events__["a" /* EventsPage */]);
        });
    };
    ChoosePlanPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loding...'
        });
        this.loading.present();
    };
    ChoosePlanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-choose-plan',template:/*ion-inline-start:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/choose-plan/choose-plan.html"*/'<ion-content class="tutorial-page">\n\n  <form (ngSubmit)="onSubmit()">\n  <ion-slides pager>\n    <ion-slide *ngFor="let plan of this.plans">\n      <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button color="primary" type="button" (click)="cancelAction()">Annuler</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <img [src]="" class="slide-image"/>\n      <h2 class="slide-title" [innerHTML]="plan.name"></h2>\n      <h3 class="slide-title" [innerHTML]="plan.price/100 + \' €\'"></h3>\n      <p [innerHTML]="plan.description"></p>\n      <button type="submit" (click)="planChoice=plan.planKey"  ion-button large clear icon-end color="primary">\n        Continue\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n  </ion-slides>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/choose-plan/choose-plan.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__providers_event_event__["a" /* EventProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_event_event__["a" /* EventProvider */]) === "function" && _f || Object])
    ], ChoosePlanPage);
    return ChoosePlanPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=choose-plan.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventInformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_event_event__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__events_events__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__event_challenge_event_challenge__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cover_event_cover_event__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the EventInformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventInformationPage = (function () {
    function EventInformationPage(navCtrl, navParams, loadingCtrl, apiProvider, storage, eventProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.apiProvider = apiProvider;
        this.storage = storage;
        this.eventProvider = eventProvider;
        this.eventInformation = {
            "description": "sdz",
            "endsAt": new Date().toString(),
            "idCat": 2,
            "place": "hto",
            "startsAt": new Date().toString(),
            "title": " sqdzdzd"
        };
        this.categories = [];
        this.storage.get('token').then(function (tok) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
            headers = headers.set('Content-Type', 'application/json; charset=utf-8');
            headers = headers.set('Authorization', 'Bearer ' + tok);
            _this.apiProvider.get('/api/categories', { headers: headers }).then(function (dataCategories) {
                _this.categories = dataCategories['hydra:member'];
            }).catch(function (error) { });
        }).catch(function (error) { });
    }
    EventInformationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventInformationPage');
    };
    EventInformationPage.prototype.onSubmit = function () {
        var _this = this;
        this.storage.get('currentEvent').then(function (event) {
            _this.eventProvider.addEventInformation(_this.eventInformation, event.id).then(function (res) {
                _this.eventProvider.isFreePlan(event.eventPurchase).then(function (res) {
                    _this.loading.dismiss();
                    if (res) {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__cover_event_cover_event__["a" /* CoverEventPage */]);
                    }
                    else {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__event_challenge_event_challenge__["a" /* EventChallengePage */]);
                    }
                    console.log(res);
                }).catch(function (error) {
                    _this.loading.dismiss();
                    console.log(error);
                });
            }).catch(function (error) {
                console.log(error);
            });
        }).catch(function (err) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__events_events__["a" /* EventsPage */]);
        });
    };
    EventInformationPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loding...'
        });
        this.loading.present();
    };
    EventInformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-information',template:/*ion-inline-start:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/event-information/event-information.html"*/'<!--\n  Generated template for the EventInformationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>eventInformation</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n  <div>\n    <form (ngSubmit)="onSubmit()">\n      <ion-list>\n        <ion-item>\n          <ion-textarea placeholder="Enter a description" name="description" [(ngModel)]="eventInformation.description" ></ion-textarea>\n        </ion-item>\n        <ion-item>\n          <ion-input  placeholder="event name" name="title" [(ngModel)]="eventInformation.title" ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input  placeholder="event place" name="place" [(ngModel)]="eventInformation.place" ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>startsAt Date</ion-label>\n          <ion-datetime displayFormat="DD-MM-YYYY HH:mm a" name="startsAt" max="2050-12-01"  [(ngModel)]="eventInformation.startsAt" ></ion-datetime>\n        </ion-item>\n        <ion-item>\n          <ion-label>endsAt Date</ion-label>\n          <ion-datetime displayFormat="DD-MM-YYYY HH:mm a" name="endsAt" max="2050-12-01"  [(ngModel)]="eventInformation.endsAt" ></ion-datetime>\n        </ion-item>\n\n      <ion-item>\n        <ion-select [ngModelOptions]="{standalone: true}" [(ngModel)]="eventInformation.idCat">\n          <ion-option  *ngFor="let cat of this.categories" value="{{cat.id}}">{{cat.title}}</ion-option>\n        </ion-select>\n      </ion-item>\n      </ion-list>\n      <button type="submit" ion-button large clear icon-end color="primary">\n        Continue\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/event-information/event-information.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__providers_event_event__["a" /* EventProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_event_event__["a" /* EventProvider */]) === "function" && _f || Object])
    ], EventInformationPage);
    return EventInformationPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=event-information.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventChallengePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_event_event_routes__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cover_event_cover_event__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_event_event__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__events_events__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the EventChallengePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventChallengePage = (function () {
    function EventChallengePage(navCtrl, navParams, loadingCtrl, storage, apiProvider, eventProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.apiProvider = apiProvider;
        this.eventProvider = eventProvider;
        this.propositions = [];
        this.challenges = [];
        this.challengeEvent = {
            "description": ''
        };
        this.storage.get('token').then(function (tok) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
            headers = headers.set('Content-Type', 'application/json; charset=utf-8');
            headers = headers.set('Authorization', 'Bearer ' + tok);
            _this.apiProvider.get(__WEBPACK_IMPORTED_MODULE_5__providers_event_event_routes__["a" /* EventRoutes */].apiPropositionChallenges, { headers: headers }).then(function (dataPropositions) {
                _this.propositions = dataPropositions['hydra:member'];
            }).catch(function (error) { });
        }).catch(function (error) { });
    }
    EventChallengePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventChallengePage');
    };
    EventChallengePage.prototype.onSubmit = function () {
        this.challenges.push(this.challengeEvent.description);
    };
    EventChallengePage.prototype.removeChallenge = function (index) {
        this.challenges.splice(index, 1);
    };
    EventChallengePage.prototype.send = function () {
        var _this = this;
        this.showLoader();
        console.log(this.challengeEvent);
        this.storage.get('currentEvent').then(function (event) {
            _this.eventProvider.addEventChallenge(_this.challenges, event.id).then(function (res) {
                _this.loading.dismiss();
                console.log(res);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cover_event_cover_event__["a" /* CoverEventPage */]);
            }).catch(function (error) {
                _this.loading.dismiss();
                console.log(error);
            });
        }).catch(function (err) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__events_events__["a" /* EventsPage */]);
        });
    };
    EventChallengePage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loding...'
        });
        this.loading.present();
    };
    EventChallengePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-challenge',template:/*ion-inline-start:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/event-challenge/event-challenge.html"*/'<!--\n  Generated template for the EventChallengePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>eventChallenge</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n  <div>\n    <form (ngSubmit)="onSubmit()">\n      <ion-list>\n        <ion-item>\n          <ion-textarea placeholder="Enter a description" name="description" [(ngModel)]="challengeEvent.description" ></ion-textarea>\n        </ion-item>\n\n        <ion-item>\n          <ion-select [ngModelOptions]="{standalone: true}" [(ngModel)]="challengeEvent.description">\n            <ion-option  *ngFor="let proposition of this.propositions" value="{{proposition.description}}">{{proposition.description}}</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n\n      <button ion-button icon-only type="submit">\n        add défi\n      </button>\n    </form>\n\n      <ion-card  *ngFor="let challenge of this.challenges" (tap)="removeChallenge(index)">\n        <ion-item>\n          {{challenge}}\n        </ion-item>\n      </ion-card>\n\n      <button type="button" ion-button large clear icon-end color="primary" (click)="send()">\n        Continue\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/event-challenge/event-challenge.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__providers_event_event__["a" /* EventProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_event_event__["a" /* EventProvider */]) === "function" && _f || Object])
    ], EventChallengePage);
    return EventChallengePage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=event-challenge.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invite_friends_invite_friends__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_event_event__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__events_events__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentPage = (function () {
    function PaymentPage(navCtrl, loadingCtrl, navParams, storage, eventProvider) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.eventProvider = eventProvider;
        this.payment = {
            numberCard: null,
            monthExpire: null,
            yearExpire: null,
            cvv: null,
            price: null,
        };
    }
    PaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentPage');
    };
    PaymentPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader();
        console.log(this.payment);
        this.storage.get('currentEvent').then(function (event) {
            _this.eventProvider.addPaymentForEvent(_this.payment, event.id).then(function (res) {
                _this.loading.dismiss();
                console.log("addPaymentForEvent", res);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__invite_friends_invite_friends__["a" /* InviteFriendsPage */]);
            }).catch(function (error) {
                _this.loading.dismiss();
                console.log(error);
            });
        }).catch(function (err) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__events_events__["a" /* EventsPage */]);
        });
    };
    PaymentPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loding...'
        });
        this.loading.present();
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment',template:/*ion-inline-start:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/payment/payment.html"*/'<!--\n  Generated template for the PaymentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>payment</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div>\n    <form (ngSubmit)="onSubmit()">\n      <ion-list>\n        <ion-item>\n          <ion-input  placeholder="CARD NUMBER" name="cardNumber" [(ngModel)]="payment.numberCard" ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input  placeholder="EXPIRATION DATE MONTH" name="experationDateMonth" [(ngModel)]="payment.monthExpire" ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input  placeholder="EXPIRATION DATE YEAR" name="experationDateYear" [(ngModel)]="payment.yearExpire" ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input  placeholder="CVV CODE" name="cvv" [(ngModel)]="payment.cvv" ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input  placeholder="PRICE" name="price" [(ngModel)]="payment.price" ></ion-input>\n        </ion-item>\n\n      </ion-list>\n      <button type="submit" ion-button large clear icon-end color="primary">\n        Continue\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/payment/payment.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_event_event__["a" /* EventProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_event_event__["a" /* EventProvider */]) === "function" && _e || Object])
    ], PaymentPage);
    return PaymentPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinishCreateEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FinishCreateEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FinishCreateEventPage = (function () {
    function FinishCreateEventPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FinishCreateEventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FinishCreateEventPage');
    };
    FinishCreateEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-finish-create-event',template:/*ion-inline-start:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/finish-create-event/finish-create-event.html"*/'<!--\n  Generated template for the FinishCreateEventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>finishCreateEvent</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/soufianemit/Projects/MIT/ionic/mystorytelling-mobile/src/pages/finish-create-event/finish-create-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], FinishCreateEventPage);
    return FinishCreateEventPage;
}());

//# sourceMappingURL=finish-create-event.js.map

/***/ })

},[222]);
//# sourceMappingURL=main.js.map