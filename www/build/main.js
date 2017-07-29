webpackJsonp([3],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
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
    function DataService(http, storage) {
        var _this = this;
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
        this.ModulesObservable = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            _this.ModulesObserver = observer;
        });
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
        return this.modulesData.filter(function (module) { return module.lang === _this.currLang; });
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], DataService);

//# sourceMappingURL=data-service.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_service_data_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lesson_list_lesson_list__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
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
    function HomePage(navCtrl, dataService, platform, storage, menuCtrl) {
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.platform = platform;
        this.storage = storage;
        this.menuCtrl = menuCtrl;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.storage.get('introShown').then(function (result) {
                if (!result) {
                    _this.navCtrl.setRoot('IntroPage');
                }
                else {
                    _this.menuCtrl.enable(true, 'menu');
                    _this.dataService.ModulesObservable.subscribe(function () {
                        var temp = _this.dataService.getModule();
                        var _a = temp[0].module, title = _a.title, description = _a.description, series = _a.series;
                        _this.module = {
                            title: title,
                            description: description,
                            series: series
                        };
                    });
                    var temp = _this.dataService.getModule();
                    if (temp.length > 0) {
                        var _a = temp[0].module, title = _a.title, description = _a.description, series = _a.series;
                        _this.module = {
                            title: title,
                            description: description,
                            series: series
                        };
                    }
                    _this.lang = _this.dataService.currLang;
                }
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
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\David\WebstormProjects\dwApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="menu">\n\n    <ion-buttons start>\n      <button menuToggle ion-button icon-only>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n\n    <ion-title>\n      DW Warum Nicht!\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n\n  <ion-card class="main-bg">\n\n    <ion-card-header class="header">\n      {{module?.title}}\n    </ion-card-header>\n\n    <ion-card-content class="header" style="text-align: justify">\n      {{module?.description}}\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card class="series-card" *ngFor="let serie of module?.series;let i=index" (click)="openLessonList(serie.chapters,serie.title)">\n    <img [src]="\'assets/series/\'+(i+1)+\'.jpg\'"/>\n    <div class="bg">\n      <div class="card-title">{{serie.title}}</div>\n      <div class="card-subtitle">{{serie.chapters.length}} Chapters</div>\n    </div>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\David\WebstormProjects\dwApp\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_data_service_data_service__["a" /* DataService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		329,
		2
	],
	"../pages/intro/intro.module": [
		328,
		1
	],
	"../pages/settings/settings.module": [
		330,
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
webpackAsyncContext.id = 163;

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LessonListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_audio__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pdf_pdf__ = __webpack_require__(173);
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
    function LessonListPage(navParams, _audioProvider, modalCtrl) {
        this.navParams = navParams;
        this._audioProvider = _audioProvider;
        this.modalCtrl = modalCtrl;
    }
    LessonListPage.prototype.ionViewDidLoad = function () {
        this.chapters = this.navParams.get('chapters');
        this.title = this.navParams.get('title');
        this.tracks = this.chapters.filter(function (item) { return item.media; }).map(function (item) {
            return {
                title: item.title,
                src: item.media ? item.media.mp3 : ""
            };
        });
    };
    LessonListPage.prototype.openDoc = function (index) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__pdf_pdf__["a" /* PdfPage */], { src: this.chapters[index].media.pdf, title: this.chapters[index].title });
        modal.present();
    };
    LessonListPage.prototype.play = function () {
        this._audioProvider.tracks.forEach(function (track) { return track.pause(); });
    };
    LessonListPage.prototype.onTrackFinished = function (event) {
    };
    return LessonListPage;
}());
LessonListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-lesson-list',template:/*ion-inline-start:"C:\Users\David\WebstormProjects\dwApp\src\pages\lesson-list\lesson-list.html"*/'<ion-header>\n\n  <ion-navbar color="menu">\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding>\n\n  <ion-list>\n    <audio-track #audio *ngFor="let track of tracks;let i=index"  [track]="track" (onFinish)="onTrackFinished($event)">\n      <ion-item>\n        <ion-thumbnail item-left (click)="play()">\n          <audio-track-play dark [audioTrack]="audio"><ion-spinner></ion-spinner></audio-track-play>\n        </ion-thumbnail>\n        <div item-content style="width:100%">\n          <p><strong>{{audio.title}}</strong></p>\n          <audio-track-progress-bar dark duration progress [audioTrack]="audio" [ngStyle]="{visibility: audio.isPlaying ? \'visible\' : \'hidden\'}"></audio-track-progress-bar>\n        </div>\n        <div item-right>\n          <button ion-button clear icon-only (click)="openDoc(i)"><ion-icon name="document" class="big-icon"></ion-icon></button>\n        </div>\n      </ion-item>\n    </audio-track>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\David\WebstormProjects\dwApp\src\pages\lesson-list\lesson-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_audio__["a" /* AudioProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], LessonListPage);

//# sourceMappingURL=lesson-list.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdfPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_document_viewer__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(178);
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
    function PdfPage(iab, transfer, file, document, navParams, viewCtrl, platform) {
        this.iab = iab;
        this.transfer = transfer;
        this.file = file;
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
    PdfPage.prototype.download = function () {
        var _this = this;
        var url = 'http://www.dw.com/downloads/25629156/eng1-01.pdf';
        var fileTransfer = this.transfer.create();
        fileTransfer.download(url, this.file.dataDirectory + 'test.pdf').then(function (entry) {
            var options = {
                title: 'My PDF'
            };
            _this.document.viewDocument(entry.toURL(), 'application/pdf', options);
            console.log('download complete: ' + entry.toURL());
        }, function (error) {
            console.log("PDF ERROR:", error);
        });
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
        selector: 'page-pdf',template:/*ion-inline-start:"C:\Users\David\WebstormProjects\dwApp\src\pages\pdf\pdf.html"*/'<ion-header>\n\n  <ion-navbar color="menu">\n    <ion-buttons start>\n      <button ion-button icon-only (click)="onDissmis()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Exercises</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n\n  <ion-fab bottom right>\n    <button ion-fab (click)="zoomIn()"><ion-icon name="add"></ion-icon></button>\n    <button ion-fab (click)="zoomOut()"><ion-icon name="remove"></ion-icon></button>\n\n  </ion-fab>\n\n  <a [href]="src" target="_blank">PDF LINK</a>\n\n  <button ion-button (click)="openPDF()">PDF</button>\n\n  <pdf-viewer [src]="src"\n              [zoom]="zoom"\n              [show-all]="true"\n              [original-size]="false"\n              style="display: block;"\n  ></pdf-viewer>\n\n  <ng-template #other_content>PDF only supported on native devices</ng-template>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\David\WebstormProjects\dwApp\src\pages\pdf\pdf.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_document_viewer__["a" /* DocumentViewer */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
], PdfPage);

//# sourceMappingURL=pdf.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(251);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_audio__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_data_service_data_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_lesson_list_lesson_list__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_pdf_viewer__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_pdf_viewer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_pdf_viewer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_pdf_pdf__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_transfer__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_document_viewer__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_in_app_browser__ = __webpack_require__(178);
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
            __WEBPACK_IMPORTED_MODULE_12__pages_pdf_pdf__["a" /* PdfPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_7_ionic_audio__["b" /* IonicAudioModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7_ionic_audio__["c" /* defaultAudioProviderFactory */]),
            __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_lesson_list_lesson_list__["a" /* LessonListPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_pdf_pdf__["a" /* PdfPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_document_viewer__["a" /* DocumentViewer */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_9__providers_data_service_data_service__["a" /* DataService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(113);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\David\WebstormProjects\dwApp\src\app\app.html"*/'<ion-menu [content]="mycontent" id="menu">\n\n  <ion-content>\n\n    <div class="logo" text-center>\n      <img src="assets/images/dw.png" alt="logo" style="width: 100%">\n      <p class="motto">Deutsch , Warum Nicht!</p>\n    </div>\n\n    <ion-list>\n      <button ion-item menuClose (click)="openPage(homePage)">\n        Home\n      </button>\n      <button ion-item menuClose (click)="openPage(settingsPage)">\n        Settings\n      </button>\n      <button ion-item menuClose (click)="openPage(aboutPage)">\n        About\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\David\WebstormProjects\dwApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 312:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[232]);
//# sourceMappingURL=main.js.map