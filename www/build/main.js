webpackJsonp([3],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_service_data_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lesson_list_lesson_list__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_audio__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(62);
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








var HomePage = (function () {
    function HomePage(file, audio, navCtrl, dataService, platform, storage, menuCtrl) {
        this.file = file;
        this.audio = audio;
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.platform = platform;
        this.storage = storage;
        this.menuCtrl = menuCtrl;
    }
    HomePage.prototype.ngOnInit = function () {
        this.init();
    };
    HomePage.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.platform.ready()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.storage.get('introShown')];
                    case 2:
                        result = _a.sent();
                        if (!result) {
                            this.navCtrl.setRoot('IntroPage');
                        }
                        else {
                            this.menuCtrl.enable(true, 'menu');
                            this.dataService.ModulesObservable.subscribe(function () {
                                _this.getModule();
                            });
                            this.getModule();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.getModule = function () {
        return __awaiter(this, void 0, void 0, function () {
            var temp, _a, title, description, series;
            return __generator(this, function (_b) {
                temp = this.dataService.getModule();
                if (temp.length > 0) {
                    _a = temp[0].module, title = _a.title, description = _a.description, series = _a.series;
                    this.module = {
                        title: title,
                        description: description,
                        series: series
                    };
                    if (this.module) {
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.openLessonList = function (chapters, title) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__lesson_list_lesson_list__["a" /* LessonListPage */], { chapters: chapters, title: title });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\David\WebstormProjects\dwApp\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="menu">\n\n\n\n    <ion-buttons start>\n\n      <button menuToggle ion-button icon-only>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n\n\n    <ion-title>\n\n      DW Warum Nicht!\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="card-background-page">\n\n\n\n  <ion-card class="main-bg">\n\n\n\n    <ion-card-header class="header">\n\n      {{module?.title}}\n\n    </ion-card-header>\n\n\n\n    <ion-card-content class="header" style="text-align: justify">\n\n      {{module?.description}}\n\n    </ion-card-content>\n\n\n\n  </ion-card>\n\n\n\n  <ion-card class="series-card" *ngFor="let serie of module?.series;let i=index" (click)="openLessonList(serie.chapters,serie.title)">\n\n    <img [src]="\'assets/series/\'+(i+1)+\'.jpg\'"/>\n\n    <div class="bg">\n\n      <div class="card-title">{{serie.title}}</div>\n\n      <div class="card-subtitle">{{serie.chapters.length-6}} Chapters</div>\n\n    </div>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\David\WebstormProjects\dwApp\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_audio__["a" /* AudioProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_data_service_data_service__["a" /* DataService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 125:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 125;

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		329,
		2
	],
	"../pages/intro/intro.module": [
		330,
		1
	],
	"../pages/settings/settings.module": [
		331,
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
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 167;

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LessonListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_audio__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_document_viewer__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_service_data_service__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LessonListPage = (function () {
    function LessonListPage(dataService, audio, document, iab, navParams, modalCtrl) {
        this.dataService = dataService;
        this.audio = audio;
        this.document = document;
        this.iab = iab;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    LessonListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.chapters = this.navParams.get('chapters');
        this.chapters = this.chapters.filter(function (item) { return item.media; });
        this.title = this.navParams.get('title');
        this.tracks = this.audio.tracks
            .filter(function (track) {
            return _this.chapters.find(function (chapter) { return chapter.title === track.title; });
        });
        console.log("Current Track is ", this.current);
    };
    LessonListPage.prototype.ionViewWillEnter = function () {
        this.content.resize();
        this.current = this.audio.tracks[this.audio.current];
    };
    LessonListPage.prototype.play = function (track) {
        this.content.resize();
        if (track.isPlaying) {
            this.audio.tracks.forEach(function (track) { return track.stop(); });
        }
        else {
            this.audio.tracks.forEach(function (track) { return track.stop(); });
            this.current = track;
            this.audio.play(this.audio.tracks.indexOf(track));
        }
    };
    return LessonListPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
], LessonListPage.prototype, "content", void 0);
LessonListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-lesson-list',template:/*ion-inline-start:"C:\Users\David\WebstormProjects\dwApp\src\pages\lesson-list\lesson-list.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="menu">\n\n    <ion-title>{{title}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content no-padding>\n\n\n\n\n\n  <ion-list no-lines>\n\n    <ng-container *ngFor="let track of tracks">\n\n      <button ion-item detail-none [ngClass]="{\'playing\':track.isPlaying}" (click)="play(track)">\n\n        <ion-icon *ngIf="!track.isPlaying" name="play" item-left color="menu"></ion-icon>\n\n        <ion-icon *ngIf="track.isPlaying" name="pause" item-left color="menu"></ion-icon>\n\n        <ion-spinner *ngIf="track.isLoading" item-right></ion-spinner>\n\n        <h2>{{track.title}}</h2>\n\n        <p *ngIf="track.isPlaying">Playing</p>\n\n      </button>\n\n    </ng-container>\n\n\n\n  </ion-list>\n\n\n\n\n\n</ion-content>\n\n\n\n<ion-footer padding *ngIf="current">\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-2 *ngIf="current">\n\n        <button *ngIf="!current.isPlaying" ion-fab color="light" (click)="play(current)"><ion-icon name="play"></ion-icon></button>\n\n        <button *ngIf="current.isPlaying" ion-fab color="light" (click)="play(current)"><ion-icon name="pause"></ion-icon></button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <audio-track-progress-bar duration progress #audioTrack [audioTrack]="current" style="width: 100%; margin: 10px"></audio-track-progress-bar>\n\n        <div style="display: flex; justify-content: center;">\n\n          <div *ngIf="current && current.hasLoaded" style="color: #fff">{{ current?.title }}</div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\David\WebstormProjects\dwApp\src\pages\lesson-list\lesson-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_data_service_data_service__["a" /* DataService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_audio__["a" /* AudioProvider */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_document_viewer__["a" /* DocumentViewer */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
], LessonListPage);

//# sourceMappingURL=lesson-list.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(250);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_audio__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_data_service_data_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_lesson_list_lesson_list__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_pdf_viewer__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_pdf_viewer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_pdf_viewer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_pdf_pdf__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_transfer__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_document_viewer__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_in_app_browser__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_audio_service_audio_service__ = __webpack_require__(328);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11_ng2_pdf_viewer__["PdfViewerComponent"],
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_lesson_list_lesson_list__["a" /* LessonListPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_pdf_pdf__["a" /* PdfPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_7_ionic_audio__["b" /* IonicAudioModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7_ionic_audio__["c" /* defaultAudioProviderFactory */]),
            __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_lesson_list_lesson_list__["a" /* LessonListPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_pdf_pdf__["a" /* PdfPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_document_viewer__["a" /* DocumentViewer */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_9__providers_data_service_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_18__providers_audio_service_audio_service__["a" /* AudioService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.aboutPage = 'AboutPage';
        this.homePage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.settingsPage = 'SettingsPage';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.openPage = function (page) {
        this.rootPage = page;
    };
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\David\WebstormProjects\dwApp\src\app\app.html"*/'<ion-menu [content]="mycontent" id="menu">\n\n\n\n  <ion-content>\n\n\n\n    <div class="logo" text-center>\n\n      <img src="assets/images/dw.png" alt="logo" style="width: 100%">\n\n      <p class="motto">Deutsch , Warum Nicht!</p>\n\n    </div>\n\n\n\n    <ion-list no-lines>\n\n      <button ion-item menuClose (click)="openPage(homePage)">\n\n        <ion-icon name="home" item-left color="menu"></ion-icon> Home\n\n      </button>\n\n      <button ion-item menuClose (click)="openPage(settingsPage)">\n\n        <ion-icon name="settings" item-left color="menu"></ion-icon> Settings\n\n      </button>\n\n      <button ion-item menuClose (click)="openPage(aboutPage)">\n\n        <ion-icon name="alert" item-left color="menu"></ion-icon> About\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\David\WebstormProjects\dwApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 311:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdfPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_document_viewer__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PdfPage = (function () {
    function PdfPage(iab, document, navParams, viewCtrl, platform) {
        this.iab = iab;
        this.document = document;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.zoom = 1;
        this.isDevice = false;
        this.isDevice = this.platform.is("cordova");
    }
    PdfPage.prototype.ionViewDidLoad = function () {
        this.src = this.navParams.get('src');
        this.title = this.navParams.get('title');
    };
    PdfPage.prototype.openPDF = function () {
        var browser = this.iab.create('http://www.dw.com/downloads/25629156/eng1-01.pdf');
        browser.show();
        var options = {
            title: 'My PDF'
        };
        //this.document.viewDocument('assets/myFile.pdf', 'application/pdf', options)
    };
    PdfPage.prototype.onDissmis = function () {
        this.viewCtrl.dismiss();
    };
    PdfPage.prototype.zoomOut = function () {
        if (this.zoom < 2) {
            this.zoom += 0.2;
        }
    };
    PdfPage.prototype.zoomIn = function () {
        if (this.zoom > 0.5) {
            this.zoom -= 0.2;
        }
    };
    return PdfPage;
}());
PdfPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-pdf',template:/*ion-inline-start:"C:\Users\David\WebstormProjects\dwApp\src\pages\pdf\pdf.html"*/'<ion-header>\n\n  <ion-navbar color="menu">\n    <ion-buttons start>\n      <button ion-button icon-only (click)="onDissmis()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Exercises</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <a href="https://docs.google.com/gview?embedded=true&url=http://www.dw.com/downloads/25629156/eng1-01.pdf">GOOGLE</a>\n\n  <button ion-button (click)="openPDF()">PDF</button>\n\n  <ng-template #other_content>PDF only supported on native devices</ng-template>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\David\WebstormProjects\dwApp\src\pages\pdf\pdf.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_document_viewer__["a" /* DocumentViewer */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
], PdfPage);

//# sourceMappingURL=pdf.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AudioService = (function () {
    function AudioService() {
    }
    return AudioService;
}());
AudioService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], AudioService);

//# sourceMappingURL=audio-service.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_audio__ = __webpack_require__(47);
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







var DataService = (function () {
    function DataService(audio, file, http, storage) {
        var _this = this;
        this.audio = audio;
        this.file = file;
        this.http = http;
        this.storage = storage;
        this.modulesData = [];
        this.langList = [
            {
                code: 'en',
                name: 'English'
            },
            {
                code: 'es',
                name: 'Español'
            },
            {
                code: 'ru',
                name: 'Русский'
            },
            {
                code: 'tr',
                name: 'Türkçe'
            },
        ];
        this.loadedModules = {};
        this.ModulesObservable = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            _this.ModulesObserver = observer;
        });
        this.langList.forEach(function (lang) { return _this.loadedModules[lang.code] = false; });
        console.log('LOADED MODULES:', this.loadedModules);
        this.init();
    }
    DataService.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storage.get('lang')];
                    case 1:
                        _a.currLang = (_b.sent()) || "en";
                        this.http.get('assets/modules.json')
                            .subscribe(function (data) {
                            data.json().forEach(function (d) { return _this.modulesData.push(d); });
                            _this.ModulesObserver.next();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    DataService.prototype.getModule = function () {
        var _this = this;
        this.getMedia();
        return this.modulesData.filter(function (module) { return module.lang === _this.currLang; });
    };
    DataService.prototype.getMedia = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var tracks, i, fileName, path, localFound, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.modulesData.length > 0)) return [3 /*break*/, 7];
                        if (!!this.loadedModules[this.currLang]) return [3 /*break*/, 7];
                        tracks = this.modulesData.filter(function (module) { return module.lang === _this.currLang; })[0].module.series
                            .reduce(function (prev, next) { return prev.concat(next.chapters); }, [])
                            .filter(function (track) { return track.media; });
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < tracks.length)) return [3 /*break*/, 6];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        fileName = tracks[i].media.mp3.split('/').pop();
                        path = this.file.externalDataDirectory + this.currLang + "/";
                        return [4 /*yield*/, this.checkFile(fileName)];
                    case 3:
                        localFound = _a.sent();
                        if (localFound) {
                            this.audio.create({
                                src: path + fileName,
                                title: tracks[i].title
                            });
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        console.log("Local File Not Found falling back to url:", err_1);
                        this.audio.create({
                            src: tracks[i].media.mp3,
                            title: tracks[i].title
                        });
                        return [3 /*break*/, 5];
                    case 5:
                        i++;
                        return [3 /*break*/, 1];
                    case 6:
                        this.loadedModules[this.currLang] = true;
                        console.log("TRACKS : ", this.audio.tracks);
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    DataService.prototype.checkFile = function (fileName) {
        return __awaiter(this, void 0, void 0, function () {
            var path;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.file.externalDataDirectory + this.currLang + "/";
                        return [4 /*yield*/, this.file.checkFile(path, fileName)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DataService.prototype.setLanguage = function (lang) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.currLang = lang;
                        return [4 /*yield*/, this.storage.set("lang", this.currLang)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_audio__["a" /* AudioProvider */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], DataService);

//# sourceMappingURL=data-service.js.map

/***/ })

},[231]);
//# sourceMappingURL=main.js.map