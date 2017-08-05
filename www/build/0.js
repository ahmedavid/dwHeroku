webpackJsonp([0],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_progress_bar_progress_bar__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SettingsPageModule = (function () {
    function SettingsPageModule() {
    }
    return SettingsPageModule;
}());
SettingsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_3__components_progress_bar_progress_bar__["a" /* ProgressBarComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]
        ]
    })
], SettingsPageModule);

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_service_data_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_audio__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var SettingsPage = (function () {
    function SettingsPage(audio, dataService, platform, transfer, file) {
        this.audio = audio;
        this.dataService = dataService;
        this.platform = platform;
        this.transfer = transfer;
        this.file = file;
        this.counter = 0;
        this.count = 0;
        this.percentage = 0;
        this.lang = this.dataService.currLang;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        this.count = this.dataService.modulesData[0].module.series.reduce(function (prev, next) {
            return prev + next.chapters.length - 6;
        }, 0);
    };
    SettingsPage.prototype.onChangeLang = function () {
        this.dataService.setLanguage(this.lang);
        this.audio.current = null;
        //this.audio.tracks = []
        console.log("Tracks in Provider", this.audio.tracks);
    };
    SettingsPage.prototype.getChapter = function (chapter, serie) {
        return __awaiter(this, void 0, void 0, function () {
            var fileTransfer, pdfTitle, mp3Title, pdf, mp3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fileTransfer = this.transfer.create();
                        if (!chapter.media) return [3 /*break*/, 7];
                        pdfTitle = chapter.media.pdf.split('/').pop();
                        mp3Title = chapter.media.mp3.split('/').pop();
                        pdf = void 0;
                        mp3 = void 0;
                        if (!this.platform.is('ios')) return [3 /*break*/, 3];
                        return [4 /*yield*/, fileTransfer.download(chapter.media.pdf, this.file.dataDirectory + '/' + this.lang + '/' + pdfTitle)];
                    case 1:
                        pdf = _a.sent();
                        return [4 /*yield*/, fileTransfer.download(chapter.media.mp3, this.file.dataDirectory + '/' + this.lang + '/' + mp3Title)];
                    case 2:
                        mp3 = _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!this.platform.is('android')) return [3 /*break*/, 6];
                        return [4 /*yield*/, fileTransfer.download(chapter.media.pdf, this.file.externalDataDirectory + '/' + this.lang + '/' + pdfTitle)];
                    case 4:
                        pdf = _a.sent();
                        return [4 /*yield*/, fileTransfer.download(chapter.media.mp3, this.file.externalDataDirectory + '/' + this.lang + '/' + mp3Title)];
                    case 5:
                        mp3 = _a.sent();
                        _a.label = 6;
                    case 6:
                        this.counter++;
                        this.percentage = Math.ceil((this.counter / this.count) * 100);
                        console.log('download complete: ' + pdf.toURL());
                        console.log('download complete: ' + mp3.toURL());
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.getChapters = function (chapters, serie) {
        return __awaiter(this, void 0, void 0, function () {
            var i, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < chapters.length)) return [3 /*break*/, 6];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.getChapter(chapters[i], serie)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        console.log("ERROR:", err_1);
                        return [3 /*break*/, 5];
                    case 5:
                        i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.getSerie = function (serie) {
        return __awaiter(this, void 0, void 0, function () {
            var chapters, serieTitle;
            return __generator(this, function (_a) {
                chapters = serie.chapters;
                serieTitle = serie.title;
                this.getChapters(chapters, serieTitle);
                return [2 /*return*/];
            });
        });
    };
    SettingsPage.prototype.getSeries = function (series) {
        return __awaiter(this, void 0, void 0, function () {
            var i, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < series.length)) return [3 /*break*/, 6];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.getSerie(series[i])];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        err_2 = _a.sent();
                        console.log("ERROR:", err_2);
                        return [3 /*break*/, 5];
                    case 5:
                        i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.download = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var series;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.counter = 0;
                        this.percentage = 0;
                        series = this.dataService.modulesData.filter(function (module) { return module.lang === _this.dataService.currLang; })[0].module.series;
                        return [4 /*yield*/, this.getSeries(series)];
                    case 1:
                        _a.sent();
                        this.dataService.loadedModules[this.dataService.currLang] = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-settings',template:/*ion-inline-start:"C:\Users\David\WebstormProjects\dwApp\src\pages\settings\settings.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="menu">\n\n\n\n    <ion-buttons start>\n\n      <button menuToggle ion-button icon-only>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Settings</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list no-border no-lines>\n\n\n\n    <ion-item>\n\n      <ion-label>Course Language</ion-label>\n\n      <ion-select [(ngModel)]="lang" (ionChange)="onChangeLang()">\n\n        <ion-option *ngFor="let lang of dataService.langList" [value]="lang.code">\n\n          {{lang.name}}\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n\n\n\n\n\n\n  <button block ion-button icon-start color="menu" (click)="download()"><ion-icon name="cloud-download" color="light"></ion-icon> Make Available Offline</button>\n\n\n\n  <ion-label text-center="">downloaded {{counter}} of {{count}}</ion-label>\n\n  <progress-bar [progress]="percentage"></progress-bar>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\David\WebstormProjects\dwApp\src\pages\settings\settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_audio__["a" /* AudioProvider */],
        __WEBPACK_IMPORTED_MODULE_1__providers_data_service_data_service__["a" /* DataService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressBarComponent = (function () {
    function ProgressBarComponent() {
    }
    return ProgressBarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('progress'),
    __metadata("design:type", Object)
], ProgressBarComponent.prototype, "progress", void 0);
ProgressBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'progress-bar',template:/*ion-inline-start:"C:\Users\David\WebstormProjects\dwApp\src\components\progress-bar\progress-bar.html"*/'<div class="progress-outer">\n\n  <div class="progress-inner" [style.width]="progress + \'%\'">\n\n    {{progress}}%\n\n  </div>\n\n</div>\n\n'/*ion-inline-end:"C:\Users\David\WebstormProjects\dwApp\src\components\progress-bar\progress-bar.html"*/
    }),
    __metadata("design:paramtypes", [])
], ProgressBarComponent);

//# sourceMappingURL=progress-bar.js.map

/***/ })

});
//# sourceMappingURL=0.js.map