webpackJsonp([7],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(32);
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
            selector: 'page-changep-password',template:/*ion-inline-start:"C:\wamp\www\mit\mystorytelling-mobile\src\pages\changep-password\changep-password.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>change Password</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <div class="cover" align="center">\n\n    <img class="profile-image" src="assets/imgs/profile.png">\n\n      <h4>Mohamed Ahamada</h4>\n\n  </div>\n\n  <ion-list>\n\n      <form [formGroup]="authForm" (ngSubmit)="onSubmit(authForm.value)">\n\n\n\n        <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">\n\n            <input class="input100" type="text" placeholder="old Password"  [(ngModel)]="user.oldPassword" formControlName="oldPassword">\n\n            <span class="focus-input100"></span>\n\n            <span class="symbol-input100">\n\n              <ion-icon class="symbol-input100" name="key" item-start></ion-icon>\n\n            </span>\n\n        </div>\n\n\n\n        <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">\n\n          <input class="input100" type="password" placeholder="new Password"  [(ngModel)]="user.newPassword" formControlName="newPassword">\n\n          <span class="focus-input100"></span>\n\n          <span class="symbol-input100">\n\n            <ion-icon class="symbol-input100" name="key" item-start></ion-icon>\n\n          </span>\n\n        </div>\n\n\n\n        <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">\n\n          <input class="input100" type="password" placeholder="repeated Password" [(ngModel)]="user.repeatedPassword" formControlName="repeatedPassword">\n\n          <span class="focus-input100"></span>\n\n          <span class="symbol-input100">\n\n            <ion-icon class="symbol-input100" name="key" item-start></ion-icon>\n\n          </span>\n\n        </div>\n\n        <button  ion-button block class="login100-form-btn" type="submit">change Password</button>\n\n\n\n      </form>\n\n\n\n\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp\www\mit\mystorytelling-mobile\src\pages\changep-password\changep-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], ChangepPasswordPage);
    return ChangepPasswordPage;
}());

//# sourceMappingURL=changep-password.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChoosePlanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
    function ChoosePlanPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.slides = [
            {
                title: "Plan name",
                description: "The <b>Plan name</b> showcases a number of useful components that are included out of the box with Ionic.",
                image: "assets/imgs/welcome.png",
            },
            {
                title: "Plan name",
                description: "<b>Plan name</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
                image: "assets/imgs/welcome.png",
            },
            {
                title: "Plan name",
                description: "The <b>Plan name</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
                image: "assets/imgs/welcome.png",
            }
        ];
    }
    ChoosePlanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChoosePlanPage');
    };
    ChoosePlanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-choose-plan',template:/*ion-inline-start:"C:\wamp\www\mit\mystorytelling-mobile\src\pages\choose-plan\choose-plan.html"*/'<ion-content class="tutorial-page">\n\n  <ion-slides pager>\n    <ion-slide *ngFor="let slide of slides">\n      <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button color="primary">Annuler</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <img [src]="slide.image" class="slide-image"/>\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n      <p [innerHTML]="slide.description"></p>\n    </ion-slide>\n    <ion-slide>\n      <ion-toolbar>\n      </ion-toolbar>\n      <img src="assets/imgs/profile.png" class="slide-image"/>\n      <h2 class="slide-title">Premium</h2>\n      <button ion-button large clear icon-end color="primary">\n        Continue\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\wamp\www\mit\mystorytelling-mobile\src\pages\choose-plan\choose-plan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ChoosePlanPage);
    return ChoosePlanPage;
}());

//# sourceMappingURL=choose-plan.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__choose_plan_choose_plan__ = __webpack_require__(109);
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
    function EventsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EventsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventsPage');
    };
    EventsPage.prototype.createEvent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__choose_plan_choose_plan__["a" /* ChoosePlanPage */]);
    };
    EventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-events',template:/*ion-inline-start:"C:\wamp\www\mit\mystorytelling-mobile\src\pages\events\events.html"*/'<ion-content id="events">\n  <div class="background">\n    <img src="" alt="">\n  </div>\n  <a (click)="createEvent()"><div class="create-btn">\n    <ion-icon name="md-arrow-round-forward" item-start></ion-icon>\n  </div></a>\n  <div class="welcome-msg">\n    <h3>Welcome !</h3>\n    <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s</p>\n      <button ion-button block class="login100-form-btn marginTop signup" color="primary" (click)="createEvent()">Create Your Event</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\wamp\www\mit\mystorytelling-mobile\src\pages\events\events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], EventsPage);
    return EventsPage;
}());

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailCheckPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_welcome__ = __webpack_require__(44);
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
            selector: 'page-mail-check',template:/*ion-inline-start:"C:\wamp\www\mit\mystorytelling-mobile\src\pages\mail-check\mail-check.html"*/'<ion-content padding>\n\n  <div class="check-mail">\n\n    <h1>Check your Email</h1>\n\n    <ion-icon name="mail"></ion-icon>\n\n    <p>An email has been sent to you. It contains an activation link you must click to activate your account.</p>\n\n      <h6><a (click)="home()" >Home Page</a></h6>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp\www\mit\mystorytelling-mobile\src\pages\mail-check\mail-check.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], MailCheckPage);
    return MailCheckPage;
}());

//# sourceMappingURL=mail-check.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordRequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(32);
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
            selector: 'page-password-request',template:/*ion-inline-start:"C:\wamp\www\mit\mystorytelling-mobile\src\pages\password-request\password-request.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>password-request</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <form [formGroup]="authForm" (ngSubmit)="onSubmit(authForm.value)">\n\n\n\n      <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">\n\n          <input class="input100" type="text" placeholder="Email" [(ngModel)]="user.email" formControlName="email">\n\n          <span class="focus-input100"></span>\n\n          <span class="symbol-input100">\n\n            <ion-icon class="symbol-input100" name="mail" item-start></ion-icon>\n\n          </span>\n\n      </div>\n\n    <button  ion-button block class="login100-form-btn" type="submit">Reset Password</button>\n\n\n\n  </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp\www\mit\mystorytelling-mobile\src\pages\password-request\password-request.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], PasswordRequestPage);
    return PasswordRequestPage;
}());

//# sourceMappingURL=password-request.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__welcome_welcome__ = __webpack_require__(44);
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
            selector: 'page-profil',template:/*ion-inline-start:"C:\wamp\www\mit\mystorytelling-mobile\src\pages\profil\profil.html"*/'<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp\www\mit\mystorytelling-mobile\src\pages\profil\profil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
    ], ProfilPage);
    return ProfilPage;
}());

//# sourceMappingURL=profil.js.map

/***/ }),

/***/ 125:
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
webpackEmptyAsyncContext.id = 125;

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/changep-password/changep-password.module": [
		300,
		6
	],
	"../pages/choose-plan/choose-plan.module": [
		301,
		5
	],
	"../pages/events/events.module": [
		302,
		4
	],
	"../pages/mail-check/mail-check.module": [
		303,
		3
	],
	"../pages/password-request/password-request.module": [
		304,
		2
	],
	"../pages/profil/profil.module": [
		305,
		1
	],
	"../pages/welcome/welcome.module": [
		306,
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
webpackAsyncContext.id = 167;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
            selector: 'page-about',template:/*ion-inline-start:"C:\wamp\www\mit\mystorytelling-mobile\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp\www\mit\mystorytelling-mobile\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
            selector: 'page-contact',template:/*ion-inline-start:"C:\wamp\www\mit\mystorytelling-mobile\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp\www\mit\mystorytelling-mobile\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_upload_upload__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_auth_auth__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_api_api__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_register_register__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_changep_password_changep_password__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_profilprovider_profilprovider__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_profil_profil__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_user_user__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_mail_check_mail_check__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_password_request_password_request__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_events_events__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_choose_plan_choose_plan__ = __webpack_require__(109);
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
                __WEBPACK_IMPORTED_MODULE_24__pages_choose_plan_choose_plan__["a" /* ChoosePlanPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* StoryTellingApp */], {}, {
                    links: [
                        { loadChildren: '../pages/changep-password/changep-password.module#ChangepPasswordPageModule', name: 'ChangepPasswordPage', segment: 'changep-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/choose-plan/choose-plan.module#ChoosePlanPageModule', name: 'ChoosePlanPage', segment: 'choose-plan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/events/events.module#EventsPageModule', name: 'EventsPage', segment: 'events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mail-check/mail-check.module#MailCheckPageModule', name: 'MailCheckPage', segment: 'mail-check', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/password-request/password-request.module#PasswordRequestPageModule', name: 'PasswordRequestPage', segment: 'password-request', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_24__pages_choose_plan_choose_plan__["a" /* ChoosePlanPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_profilprovider_profilprovider__["a" /* ProfilproviderProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_user_user__["a" /* UserProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    API_END_POINT: 'http://ocalhost:8001',
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 265:
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

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoryTellingApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_profil_profil__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_changep_password_changep_password__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_password_request_password_request__ = __webpack_require__(112);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\wamp\www\mit\mystorytelling-mobile\src\app\app.html"*/'<ion-menu [content]="content">\n\n        <ion-header>\n\n          <ion-toolbar>\n\n            <ion-title>Menu</ion-title>\n\n          </ion-toolbar>\n\n        </ion-header>\n\n        <!-- <ion-content>\n\n          <ion-list>\n\n            <ion-item>\n\n                    <ion-icon name="contact" item-start></ion-icon>\n\n                         Edit Profil\n\n            </ion-item>\n\n            <ion-item>\n\n                    <ion-icon name="key" item-start></ion-icon>\n\n                         Change Password\n\n            </ion-item>\n\n            <ion-item>\n\n                    <ion-icon name="calendar" item-start></ion-icon>\n\n                         My Events\n\n            </ion-item>\n\n            <ion-item menu-close  (click)="openPage()">\n\n                    <ion-icon name="log-out" item-start></ion-icon>\n\n                         Log out\n\n              <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n              {{p.title}}\n\n            </button>\n\n            </ion-item>\n\n        </ion-list>\n\n        </ion-content> -->\n\n        <ion-content>\n\n          <ion-list>\n\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n              {{p.title}}\n\n            </button>\n\n          </ion-list>\n\n        </ion-content>\n\n      </ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content></ion-nav>\n\n'/*ion-inline-end:"C:\wamp\www\mit\mystorytelling-mobile\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
    ], StoryTellingApp);
    return StoryTellingApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(51);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\wamp\www\mit\mystorytelling-mobile\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Login" tabIcon="person"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\wamp\www\mit\mystorytelling-mobile\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__ = __webpack_require__(297);
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
            selector: 'page-upload',template:/*ion-inline-start:"C:\wamp\www\mit\mystorytelling-mobile\src\pages\upload\upload.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <p>{{imageURI}}</p>\n\n    <button ion-button color="secondary" (click)="getImage()">Get Image</button>\n\n  </ion-item>\n\n  <!-- <ion-item>\n\n    <h4>Image Preview</h4>\n\n    <img src="{{imageFileName}}" *ngIf="imageFileName" alt="Ionic File" width="300" />\n\n  </ion-item> -->\n\n  <ion-item>\n\n    <button ion-button (click)="uploadFile()">Upload</button>\n\n  </ion-item>\n\n</ion-content>'/*ion-inline-end:"C:\wamp\www\mit\mystorytelling-mobile\src\pages\upload\upload.html"*/,
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

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilproviderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
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

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(84);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_routes__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(43);
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
        var loginPath = 'http://localhost:8000/api/login_check';
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

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(51);
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
            selector: 'page-welcome',template:/*ion-inline-start:"C:\wamp\www\mit\mystorytelling-mobile\src\pages\welcome\welcome.html"*/'<ion-content id="welcome">\n\n  <div class="blur">\n\n  </div>\n\n  <h1>Welcome</h1>\n\n  <h2>On board</h2>\n\n  <div class="message">\n\n    <img src="../assets/imgs/welcome.png" alt="">\n\n    <h5>All the fun starts here!</h5>\n\n    <p>Tell your story with the pictures of your guests</p>\n\n  </div>\n\n  <div class="buttons">\n\n    <button type="button" name="button" (click)="signup()">Sign Up</button>\n\n    <p>\n\n      Have an account? Cool!<br>\n\n      <a (click)="login()">Login in Then</a>\n\n    </p>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp\www\mit\mystorytelling-mobile\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__events_events__ = __webpack_require__(110);
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
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__events_events__["a" /* EventsPage */]);
                });
            }).catch(function (err) {
                _this.loading.dismiss();
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
            selector: 'page-home',template:/*ion-inline-start:"C:\wamp\www\mit\mystorytelling-mobile\src\pages\home\home.html"*/'<ion-content>\n\n  <div class="circle-one"></div>\n\n  <div class="circle-two"></div>\n\n  <div class="circle-tree"></div>\n\n  <div class="circle-four"></div>\n\n  <div class="titre-registe">\n\n      <h1>log in</h1>\n\n      <h4>to continue</h4>\n\n  </div>\n\n<form [formGroup]="authForm" (ngSubmit)="doLogin(authForm.value)">\n\n<div class="inputs">\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-input type="text" formControlName="username" placeholder="Pseudo" [(ngModel)]="loginData.username"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-input type="password" type="password" formControlName="password" placeholder="Password" [(ngModel)]="loginData.password"></ion-input>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n  <div class="buttons">\n\n    <button ion-button type="submit" name="button">log in</button>\n\n  </div>\n\n</div>\n\n</form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp\www\mit\mystorytelling-mobile\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mail_check_mail_check__ = __webpack_require__(111);
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
            selector: 'page-register',template:/*ion-inline-start:"C:\wamp\www\mit\mystorytelling-mobile\src\pages\register\register.html"*/'<ion-content id="register">\n\n  <div class="circle-two"></div>\n\n  <div class="titre-registe">\n\n      <h1>sign up</h1>\n\n      <h4>to continue</h4>\n\n  </div>\n\n  <div class="inputs">\n\n    <ion-list>\n\n\n\n      <ion-item>\n\n        <ion-input type="text" placeholder="Username"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-input type="email" placeholder="email"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-input type="password" placeholder="Password"></ion-input>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n    <div class="buttons">\n\n      <button type="button" name="button">log in</button>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp\www\mit\mystorytelling-mobile\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(264);
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

/***/ })

},[212]);
//# sourceMappingURL=main.js.map