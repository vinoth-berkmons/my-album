(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["albums-albums-module"],{

/***/ "./src/app/pages/albums/album-list/album-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/albums/album-list/album-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: AlbumListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumListComponent", function() { return AlbumListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var fuzzy_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fuzzy-search */ "./node_modules/fuzzy-search/src/FuzzySearch.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_common_core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/core/services */ "./src/app/common/core/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function AlbumListComponent_ng_container_20_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const photo_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", photo_r3.thumbnailUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", photo_r3.title);
} }
function AlbumListComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlbumListComponent_ng_container_20_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const album_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.selectAlbum(album_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlbumListComponent_ng_container_20_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const album_r1 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.selectAlbum(album_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AlbumListComponent_ng_container_20_div_6_Template, 2, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const album_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](album_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](7, 3, album_r1.photos, 0, 4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("By User ", album_r1.userId, "");
} }
const _c0 = function (a0) { return { "disabled": a0 }; };
const _c1 = function (a0) { return { "active": a0 }; };
class AlbumListComponent {
    constructor(albumService, photosService, activatedRoute, router) {
        this.albumService = albumService;
        this.photosService = photosService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.visibleAlbum = [];
        this.firstPage = 1;
        this.currentPage = 1;
        this.search = '';
        this.filteredAlbum = [];
        this.sortValue = '';
        this.getAlbums$ = this.albumService.getAlbums();
        this.getPhotos$ = this.photosService.getPhotos();
    }
    mapAlbums(albums, photo) {
        albums.forEach(album => {
            album.photos = photo.filter(p => p.albumId === album.id);
        });
        return albums;
    }
    ngOnInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this.getAlbums$, this.getPhotos$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(([albums, photos]) => {
            this.albums = this.mapAlbums(albums, photos);
            this.searcher = new fuzzy_search__WEBPACK_IMPORTED_MODULE_2__["default"](this.albums, ['title'], {
                caseSensitive: true,
            });
            this.filteredAlbum = this.searcher.search(this.search);
            this.visibleAlbum = this.filteredAlbum ? this.filteredAlbum.slice((this.currentPage - 1) * 10, this.currentPage * 10) : [];
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
        })).subscribe();
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
            this.filteredAlbum = this.searcher ? this.searcher.search(this.search) : this.albums;
            this.filteredAlbum = this.filteredAlbum ? this.filteredAlbum.sort((a, b) => {
                if (a[this.sortValue] < b[this.sortValue]) {
                    return -1;
                }
                if (a[this.sortValue] > b[this.sortValue]) {
                    return 1;
                }
                return 0;
            }) : this.filteredAlbum;
            this.visibleAlbum = this.filteredAlbum ? this.filteredAlbum.slice((this.currentPage - 1) * 10, this.currentPage * 10) : [];
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
    searchAlbum(val) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: {
                page: this.currentPage,
                search: val
            },
            queryParamsHandling: 'merge',
        });
    }
    sortAlbum(value) {
        console.log(value);
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: {
                page: this.currentPage,
                search: this.search,
                sort: value
            },
            queryParamsHandling: 'merge',
        });
    }
    selectAlbum(album) {
        const id = album.id;
        this.router.navigate([`../list/${id}`], {
            relativeTo: this.activatedRoute,
            state: {
                data: album
            }
        });
    }
}
AlbumListComponent.ɵfac = function AlbumListComponent_Factory(t) { return new (t || AlbumListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_core_services__WEBPACK_IMPORTED_MODULE_4__["AlbumsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_core_services__WEBPACK_IMPORTED_MODULE_4__["PhotosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AlbumListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlbumListComponent, selectors: [["app-album-list"]], decls: 39, vars: 21, consts: [[1, "container-fluid"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "d-flex"], [1, "searchbox-container"], [1, "input-group", "mb-3"], ["id", "basic-addon1", 1, "input-group-text"], [1, "bi", "bi-search"], ["type", "text", "placeholder", "Search", "aria-label", "Search", "aria-describedby", "basic-addon1", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "sortby-container"], ["aria-label", "Default select example", 1, "form-select", 3, "ngModel", "change"], ["disabled", "", "selected", ""], ["value", "id"], ["value", "title"], ["value", "userId"], [4, "ngFor", "ngForOf"], ["aria-label", "Page navigation example"], [1, "pagination"], [1, "page-item", 3, "ngClass"], [1, "page-link", 3, "click"], [1, "col-lg-3", "col-md-3", "col-sm-4"], [1, "card", "mb-3", "card-container"], [1, "card-header", "custom-ellipsis", 3, "click"], [1, "card-body", "text-success", 3, "click"], ["class", "text-center img-inside-container", 4, "ngFor", "ngForOf"], [1, "card-footer"], [1, "text-center", "img-inside-container"], ["width", "40px", 1, "rounded", 3, "src", "alt"]], template: function AlbumListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Albums");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AlbumListComponent_Template_input_ngModelChange_9_listener($event) { return ctx.searchAlbum($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AlbumListComponent_Template_select_change_11_listener($event) { return ctx.sortAlbum($event.target.value); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AlbumListComponent_ng_container_20_Template, 10, 7, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nav", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlbumListComponent_Template_a_click_25_listener() { return ctx.pageChanged(ctx.currentPage - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlbumListComponent_Template_a_click_28_listener() { return ctx.pageChanged(ctx.firstPage); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlbumListComponent_Template_a_click_31_listener() { return ctx.pageChanged(ctx.firstPage + 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlbumListComponent_Template_a_click_34_listener() { return ctx.pageChanged(ctx.firstPage + 2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlbumListComponent_Template_a_click_37_listener() { return ctx.pageChanged(ctx.currentPage + 1); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.visibleAlbum);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, (ctx.filteredAlbum == null ? null : ctx.filteredAlbum.length) / 10 === ctx.currentPage));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["SlicePipe"]], styles: [".card-container[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.img-inside-container[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWxidW1zL2FsYnVtLWxpc3QvYWxidW0tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUFFRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FsYnVtcy9hbGJ1bS1saXN0L2FsYnVtLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1jb250YWluZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLmltZy1pbnNpZGUtY29udGFpbmVyIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlbumListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-album-list',
                templateUrl: './album-list.component.html',
                styleUrls: ['./album-list.component.scss']
            }]
    }], function () { return [{ type: src_app_common_core_services__WEBPACK_IMPORTED_MODULE_4__["AlbumsService"] }, { type: src_app_common_core_services__WEBPACK_IMPORTED_MODULE_4__["PhotosService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/albums/album-routing.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/albums/album-routing.ts ***!
  \***********************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _album_list_album_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./album-list/album-list.component */ "./src/app/pages/albums/album-list/album-list.component.ts");
/* harmony import */ var _album_view_album_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./album-view/album-view.component */ "./src/app/pages/albums/album-view/album-view.component.ts");
/* harmony import */ var _albums_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./albums.component */ "./src/app/pages/albums/albums.component.ts");



const routes = [
    {
        path: '',
        component: _albums_component__WEBPACK_IMPORTED_MODULE_2__["AlbumsComponent"],
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                data: {
                    breadcrumb: 'List'
                },
                component: _album_list_album_list_component__WEBPACK_IMPORTED_MODULE_0__["AlbumListComponent"]
            },
            {
                path: 'list/:id',
                component: _album_view_album_view_component__WEBPACK_IMPORTED_MODULE_1__["AlbumViewComponent"]
            }
        ]
    },
];



/***/ }),

/***/ "./src/app/pages/albums/album-view/album-view.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/albums/album-view/album-view.component.ts ***!
  \*****************************************************************/
/*! exports provided: AlbumViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumViewComponent", function() { return AlbumViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var fuzzy_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fuzzy-search */ "./node_modules/fuzzy-search/src/FuzzySearch.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/__ivy_ngcc__/fesm2015/ng-lazyload-image.js");








function AlbumViewComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 12);
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
class AlbumViewComponent {
    constructor(router, activatedRoute) {
        var _a, _b, _c;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.search = '';
        this.defaultImage = './assets/images/spinner.gif';
        this.filteredAlbum = [];
        this.album = (_c = (_b = (_a = this.router.getCurrentNavigation()) === null || _a === void 0 ? void 0 : _a.extras) === null || _b === void 0 ? void 0 : _b.state) === null || _c === void 0 ? void 0 : _c.data;
    }
    ngOnInit() {
        var _a, _b;
        if (this.album) {
            this.searcher = new fuzzy_search__WEBPACK_IMPORTED_MODULE_2__["default"]((_a = this.album) === null || _a === void 0 ? void 0 : _a.photos, ['title'], {
                caseSensitive: true,
            });
        }
        this.filteredAlbum = (_b = this.searcher) === null || _b === void 0 ? void 0 : _b.search(this.search);
        this.sub = this.activatedRoute.queryParams.subscribe((params) => {
            var _a, _b;
            this.search = params.search;
            this.filteredAlbum = this.searcher ? (_a = this.searcher) === null || _a === void 0 ? void 0 : _a.search(this.search) : (_b = this.album) === null || _b === void 0 ? void 0 : _b.photos;
        });
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.sub.unsubscribe();
    }
    searchAlbum(val) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: {
                search: val
            },
            queryParamsHandling: 'merge',
        });
    }
}
AlbumViewComponent.ɵfac = function AlbumViewComponent_Factory(t) { return new (t || AlbumViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
AlbumViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlbumViewComponent, selectors: [["app-album-view"]], decls: 11, vars: 3, consts: [[1, "container-fluid"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "d-flex"], [1, "searchbox-container"], [1, "input-group", "mb-3"], ["id", "basic-addon1", 1, "input-group-text"], [1, "bi", "bi-search"], ["type", "text", "placeholder", "Search", "aria-label", "Search", "aria-describedby", "basic-addon1", 1, "form-control", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], [1, "col-lg-3", "col-md-3", "col-sm-4"], [1, "text-center", "img-inside-container"], [1, "img-thumbnail", 3, "defaultImage", "useSrcset", "lazyLoad"], [1, "custom-ellipsis", "mt-1"]], template: function AlbumViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AlbumViewComponent_Template_input_ngModelChange_9_listener($event) { return ctx.searchAlbum($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AlbumViewComponent_ng_container_10_Template, 6, 4, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.album == null ? null : ctx.album.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredAlbum);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_6__["LazyLoadImageDirective"]], styles: [".img-inside-container[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 5px;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWxidW1zL2FsYnVtLXZpZXcvYWxidW0tdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FsYnVtcy9hbGJ1bS12aWV3L2FsYnVtLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWluc2lkZS1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlbumViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-album-view',
                templateUrl: './album-view.component.html',
                styleUrls: ['./album-view.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/albums/albums.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/albums/albums.component.ts ***!
  \**************************************************/
/*! exports provided: AlbumsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumsComponent", function() { return AlbumsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AlbumsComponent {
    constructor() { }
    ngOnInit() {
    }
}
AlbumsComponent.ɵfac = function AlbumsComponent_Factory(t) { return new (t || AlbumsComponent)(); };
AlbumsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlbumsComponent, selectors: [["app-albums"]], decls: 1, vars: 0, template: function AlbumsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FsYnVtcy9hbGJ1bXMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlbumsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-albums',
                templateUrl: './albums.component.html',
                styleUrls: ['./albums.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/albums/albums.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/albums/albums.module.ts ***!
  \***********************************************/
/*! exports provided: AlbumsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumsModule", function() { return AlbumsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/__ivy_ngcc__/fesm2015/ng-lazyload-image.js");
/* harmony import */ var _albums_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./albums.component */ "./src/app/pages/albums/albums.component.ts");
/* harmony import */ var _album_list_album_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./album-list/album-list.component */ "./src/app/pages/albums/album-list/album-list.component.ts");
/* harmony import */ var _album_view_album_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./album-view/album-view.component */ "./src/app/pages/albums/album-view/album-view.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _albums_album_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../albums/album-routing */ "./src/app/pages/albums/album-routing.ts");











class AlbumsModule {
}
AlbumsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AlbumsModule });
AlbumsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AlbumsModule_Factory(t) { return new (t || AlbumsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_3__["LazyLoadImageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(_albums_album_routing__WEBPACK_IMPORTED_MODULE_8__["routes"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AlbumsModule, { declarations: [_albums_component__WEBPACK_IMPORTED_MODULE_4__["AlbumsComponent"], _album_list_album_list_component__WEBPACK_IMPORTED_MODULE_5__["AlbumListComponent"], _album_view_album_view_component__WEBPACK_IMPORTED_MODULE_6__["AlbumViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        ng_lazyload_image__WEBPACK_IMPORTED_MODULE_3__["LazyLoadImageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlbumsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_albums_component__WEBPACK_IMPORTED_MODULE_4__["AlbumsComponent"], _album_list_album_list_component__WEBPACK_IMPORTED_MODULE_5__["AlbumListComponent"], _album_view_album_view_component__WEBPACK_IMPORTED_MODULE_6__["AlbumViewComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    ng_lazyload_image__WEBPACK_IMPORTED_MODULE_3__["LazyLoadImageModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(_albums_album_routing__WEBPACK_IMPORTED_MODULE_8__["routes"])
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=albums-albums-module.js.map