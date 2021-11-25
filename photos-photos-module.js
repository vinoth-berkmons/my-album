(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["photos-photos-module"],{

/***/ "./src/app/common/core/services/photos/photo-list-resolver.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/common/core/services/photos/photo-list-resolver.service.ts ***!
  \****************************************************************************/
/*! exports provided: PhotoListResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoListResolverService", function() { return PhotoListResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .. */ "./src/app/common/core/services/index.ts");





class PhotoListResolverService {
    constructor(photoService) {
        this.photoService = photoService;
    }
    resolve(route, state) {
        return this.photoService.getPhotos()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(photos => ({ photos: photos })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => {
            const message = `Retrieval error: ${error}`;
            console.error(message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ photos: null, error: message });
        }));
    }
}
PhotoListResolverService.ɵfac = function PhotoListResolverService_Factory(t) { return new (t || PhotoListResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](___WEBPACK_IMPORTED_MODULE_3__["PhotosService"])); };
PhotoListResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PhotoListResolverService, factory: PhotoListResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhotoListResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ___WEBPACK_IMPORTED_MODULE_3__["PhotosService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/common/core/services/photos/photo-resolver.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/common/core/services/photos/photo-resolver.service.ts ***!
  \***********************************************************************/
/*! exports provided: PhotoResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoResolverService", function() { return PhotoResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .. */ "./src/app/common/core/services/index.ts");





class PhotoResolverService {
    constructor(photoService) {
        this.photoService = photoService;
    }
    resolve(route, state) {
        const id = route.paramMap.get('id');
        console.log(id);
        if (!id) {
            const message = `Photo id ${id} was not found`;
            console.error(message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ photo: null, error: message });
        }
        return this.photoService.getPhotosById(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(photo => ({ photo: photo })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => {
            const message = `Retrieval error: ${error}`;
            console.error(message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ photo: null, error: message });
        }));
    }
}
PhotoResolverService.ɵfac = function PhotoResolverService_Factory(t) { return new (t || PhotoResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](___WEBPACK_IMPORTED_MODULE_3__["PhotosService"])); };
PhotoResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PhotoResolverService, factory: PhotoResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhotoResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ___WEBPACK_IMPORTED_MODULE_3__["PhotosService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/photos/photo-list/photo-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/photos/photo-list/photo-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: PhotoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoListComponent", function() { return PhotoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var fuzzy_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fuzzy-search */ "./node_modules/fuzzy-search/src/FuzzySearch.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_common_core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/core/services */ "./src/app/common/core/services/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/__ivy_ngcc__/fesm2015/ng-lazyload-image.js");









function PhotoListComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotoListComponent_ng_container_20_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const photo_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selectPhoto(photo_r1 == null ? null : photo_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const photo_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultImage", ctx_r0.defaultImage)("useSrcset", true)("lazyLoad", photo_r1 == null ? null : photo_r1.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](photo_r1 == null ? null : photo_r1.title);
} }
const _c0 = function (a0) { return { "disabled": a0 }; };
const _c1 = function (a0) { return { "active": a0 }; };
class PhotoListComponent {
    constructor(activatedRoute, photosService, router) {
        this.activatedRoute = activatedRoute;
        this.photosService = photosService;
        this.router = router;
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.search = '';
        this.defaultImage = './assets/images/spinner.gif';
        this.firstPage = 1;
        this.currentPage = 1;
        this.visiblePhoto = [];
        this.filteredPhotos = [];
        this.sortValue = '';
    }
    ngOnInit() {
        const resolvedData = this.activatedRoute.snapshot.data['resolvedData'];
        this.photos = resolvedData === null || resolvedData === void 0 ? void 0 : resolvedData.photos;
        this.searcher = new fuzzy_search__WEBPACK_IMPORTED_MODULE_1__["default"](this.photos, ['title'], {
            caseSensitive: true,
        });
        this.filteredPhotos = this.searcher.search(this.search);
        this.visiblePhoto = this.filteredPhotos ? this.filteredPhotos.slice((this.currentPage - 1) * 10, this.currentPage * 10) : [];
        this.sub = this.activatedRoute.queryParams.subscribe((params) => {
            this.currentPage = +params.page ? +params.page : 1;
            if (this.currentPage < this.firstPage) {
                this.firstPage = this.currentPage;
            }
            else if (this.currentPage > this.firstPage + 2) {
                this.firstPage = this.currentPage - 2;
            }
            this.search = params.search;
            this.sortValue = params.sort;
            this.filteredPhotos = this.filteredPhotos ? this.filteredPhotos.sort((a, b) => {
                if (a[this.sortValue] < b[this.sortValue]) {
                    return -1;
                }
                if (a[this.sortValue] > b[this.sortValue]) {
                    return 1;
                }
                return 0;
            }) : this.filteredPhotos;
            this.filteredPhotos = this.searcher ? this.searcher.search(this.search) : this.photos;
            this.visiblePhoto = this.filteredPhotos ? this.filteredPhotos.slice((this.currentPage - 1) * 10, this.currentPage * 10) : [];
            console.log(' this.visiblePhoto', this.visiblePhoto);
        });
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.sub.unsubscribe();
    }
    pageChanged(page) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: {
                page: page === 0 ? 1 : page,
                search: this.search
            },
            queryParamsHandling: 'merge',
        });
    }
    searchPhoto(val) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: {
                search: val,
                sort: this.sortValue
            },
            queryParamsHandling: 'merge',
        });
    }
    sortPhoto(value) {
        console.log(value);
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: {
                search: this.search,
                sort: value
            },
            queryParamsHandling: 'merge',
        });
    }
    selectPhoto(id) {
        this.router.navigate([`../list/${id}`], { relativeTo: this.activatedRoute });
    }
}
PhotoListComponent.ɵfac = function PhotoListComponent_Factory(t) { return new (t || PhotoListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_core_services__WEBPACK_IMPORTED_MODULE_4__["PhotosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
PhotoListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhotoListComponent, selectors: [["app-photo-list"]], decls: 39, vars: 21, consts: [[1, "container-fluid"], [1, "row"], [1, "col-lg-12", "col-md-8", "col-sm-12", "d-flex"], [1, "searchbox-container"], [1, "input-group", "mb-3"], ["id", "basic-addon1", 1, "input-group-text"], [1, "bi", "bi-search"], ["type", "text", "placeholder", "Search", "aria-label", "Search", "aria-describedby", "basic-addon1", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "sortby-container"], ["aria-label", "Default select example", 1, "form-select", 3, "ngModel", "change"], ["disabled", "", "selected", ""], ["value", "id"], ["value", "title"], ["value", "userId"], [4, "ngFor", "ngForOf"], ["aria-label", "Page navigation example"], [1, "pagination"], [1, "page-item", 3, "ngClass"], [1, "page-link", 3, "click"], [1, "col-lg-3", "col-md-3", "col-sm-4"], [1, "text-center", "img-inside-container", 3, "click"], [1, "img-thumbnail", 3, "defaultImage", "useSrcset", "lazyLoad"], [1, "custom-ellipsis", "mt-1"]], template: function PhotoListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PhotoListComponent_Template_input_ngModelChange_9_listener($event) { return ctx.searchPhoto($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PhotoListComponent_Template_select_change_11_listener($event) { return ctx.sortPhoto($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sort by");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Author");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PhotoListComponent_ng_container_20_Template, 6, 4, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nav", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotoListComponent_Template_a_click_25_listener() { return ctx.pageChanged(ctx.currentPage - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotoListComponent_Template_a_click_28_listener() { return ctx.pageChanged(ctx.firstPage); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotoListComponent_Template_a_click_31_listener() { return ctx.pageChanged(ctx.firstPage + 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotoListComponent_Template_a_click_34_listener() { return ctx.pageChanged(ctx.firstPage + 2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotoListComponent_Template_a_click_37_listener() { return ctx.pageChanged(ctx.currentPage + 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sortValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.visiblePhoto);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.currentPage === 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx.currentPage === ctx.firstPage));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.firstPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, ctx.currentPage === ctx.firstPage + 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.firstPage + 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c1, ctx.currentPage === ctx.firstPage + 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.firstPage + 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, (ctx.filteredPhotos == null ? null : ctx.filteredPhotos.length) / 10 === ctx.currentPage));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__["LazyLoadImageDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bob3Rvcy9waG90by1saXN0L3Bob3RvLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhotoListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-photo-list',
                templateUrl: './photo-list.component.html',
                styleUrls: ['./photo-list.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: src_app_common_core_services__WEBPACK_IMPORTED_MODULE_4__["PhotosService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/photos/photo-routing.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/photos/photo-routing.ts ***!
  \***********************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _photo_list_photo_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photo-list/photo-list.component */ "./src/app/pages/photos/photo-list/photo-list.component.ts");
/* harmony import */ var _photo_view_photo_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photo-view/photo-view.component */ "./src/app/pages/photos/photo-view/photo-view.component.ts");
/* harmony import */ var _photos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photos.component */ "./src/app/pages/photos/photos.component.ts");
/* harmony import */ var _common_core_services_photos_photo_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/core/services/photos/photo-resolver.service */ "./src/app/common/core/services/photos/photo-resolver.service.ts");
/* harmony import */ var _common_core_services_photos_photo_list_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/core/services/photos/photo-list-resolver.service */ "./src/app/common/core/services/photos/photo-list-resolver.service.ts");





const routes = [
    {
        path: '',
        component: _photos_component__WEBPACK_IMPORTED_MODULE_2__["PhotosComponent"],
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: _photo_list_photo_list_component__WEBPACK_IMPORTED_MODULE_0__["PhotoListComponent"],
                resolve: { resolvedData: _common_core_services_photos_photo_list_resolver_service__WEBPACK_IMPORTED_MODULE_4__["PhotoListResolverService"] }
            },
            {
                path: 'list/:id',
                component: _photo_view_photo_view_component__WEBPACK_IMPORTED_MODULE_1__["PhotoViewComponent"],
                resolve: { resolvedData: _common_core_services_photos_photo_resolver_service__WEBPACK_IMPORTED_MODULE_3__["PhotoResolverService"] }
            }
        ]
    },
];



/***/ }),

/***/ "./src/app/pages/photos/photo-view/photo-view.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/photos/photo-view/photo-view.component.ts ***!
  \*****************************************************************/
/*! exports provided: PhotoViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoViewComponent", function() { return PhotoViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class PhotoViewComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        const resolvedData = this.activatedRoute.snapshot.data['resolvedData'];
        this.photo = resolvedData === null || resolvedData === void 0 ? void 0 : resolvedData.photo;
    }
}
PhotoViewComponent.ɵfac = function PhotoViewComponent_Factory(t) { return new (t || PhotoViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
PhotoViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhotoViewComponent, selectors: [["app-photo-view"]], decls: 5, vars: 2, consts: [[1, "container-fluid"], [1, "row"], ["alt", "...", 1, "img-fluid", "mt-5", 3, "src"]], template: function PhotoViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.photo == null ? null : ctx.photo.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.photo == null ? null : ctx.photo.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bob3Rvcy9waG90by12aWV3L3Bob3RvLXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhotoViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-photo-view',
                templateUrl: './photo-view.component.html',
                styleUrls: ['./photo-view.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/photos/photos.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/photos/photos.component.ts ***!
  \**************************************************/
/*! exports provided: PhotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosComponent", function() { return PhotosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class PhotosComponent {
    constructor() { }
    ngOnInit() {
    }
}
PhotosComponent.ɵfac = function PhotosComponent_Factory(t) { return new (t || PhotosComponent)(); };
PhotosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhotosComponent, selectors: [["app-photos"]], decls: 1, vars: 0, template: function PhotosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bob3Rvcy9waG90b3MuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhotosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-photos',
                templateUrl: './photos.component.html',
                styleUrls: ['./photos.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/photos/photos.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/photos/photos.module.ts ***!
  \***********************************************/
/*! exports provided: PhotosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosModule", function() { return PhotosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _photos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photos.component */ "./src/app/pages/photos/photos.component.ts");
/* harmony import */ var _photo_list_photo_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photo-list/photo-list.component */ "./src/app/pages/photos/photo-list/photo-list.component.ts");
/* harmony import */ var _photo_view_photo_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./photo-view/photo-view.component */ "./src/app/pages/photos/photo-view/photo-view.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _photo_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./photo-routing */ "./src/app/pages/photos/photo-routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/__ivy_ngcc__/fesm2015/ng-lazyload-image.js");











class PhotosModule {
}
PhotosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PhotosModule });
PhotosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PhotosModule_Factory(t) { return new (t || PhotosModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__["LazyLoadImageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_photo_routing__WEBPACK_IMPORTED_MODULE_6__["routes"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PhotosModule, { declarations: [_photos_component__WEBPACK_IMPORTED_MODULE_2__["PhotosComponent"], _photo_list_photo_list_component__WEBPACK_IMPORTED_MODULE_3__["PhotoListComponent"], _photo_view_photo_view_component__WEBPACK_IMPORTED_MODULE_4__["PhotoViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__["LazyLoadImageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhotosModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_photos_component__WEBPACK_IMPORTED_MODULE_2__["PhotosComponent"], _photo_list_photo_list_component__WEBPACK_IMPORTED_MODULE_3__["PhotoListComponent"], _photo_view_photo_view_component__WEBPACK_IMPORTED_MODULE_4__["PhotoViewComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__["LazyLoadImageModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_photo_routing__WEBPACK_IMPORTED_MODULE_6__["routes"])
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=photos-photos-module.js.map