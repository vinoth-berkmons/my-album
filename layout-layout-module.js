(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"],{

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_layout_aside_aside_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared-layout/aside/aside.component */ "./src/app/layout/shared-layout/aside/aside.component.ts");
/* harmony import */ var _shared_layout_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-layout/header/header.component */ "./src/app/layout/shared-layout/header/header.component.ts");
/* harmony import */ var _shared_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared-layout/breadcrumb/breadcrumb.component */ "./src/app/layout/shared-layout/breadcrumb/breadcrumb.component.ts");







class LayoutComponent {
    constructor(router) {
        this.router = router;
        this.loading = true;
        router.events.subscribe((routerEvent) => {
            this.checkRouterEvent(routerEvent);
        });
    }
    checkRouterEvent(routerEvent) {
        if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
            this.loading = true;
        }
        if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] ||
            routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"] ||
            routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
            this.loading = false;
        }
    }
    ngOnInit() {
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 9, vars: 0, consts: [[1, "wrapper"], ["data-color", "danger", "data-background-color", "white", "data-image", "./assets/img/sidebar-1.jpg", 1, "sidebar"], [1, "sidebar-background"], [1, "main-panel"], [1, "content-container"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-aside");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_layout_aside_aside_component__WEBPACK_IMPORTED_MODULE_2__["AsideComponent"], _shared_layout_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _shared_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".sidebar[_ngcontent-%COMP%] {\n  height: 100%;\n  max-height: 100%;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 2;\n  width: 260px;\n  background: #fff;\n  box-shadow: 0 10px 20px 9px #523f6912;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  height: 100vh;\n}\n\n.sidebar[_ngcontent-%COMP%]   .sidebar-background[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  height: 100%;\n  width: 100%;\n  display: block;\n  top: 0;\n  left: 0;\n  background-size: cover;\n  background-position: center center;\n}\n\n.main-panel[_ngcontent-%COMP%] {\n  position: relative;\n  float: right;\n  width: calc(100% - 260px);\n  transition: 0.33s, cubic-bezier(0.685, 0.0473, 0.346, 1);\n}\n\n.sidebar[data-color=danger][_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  background-color: #4800bb;\n  box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(244, 67, 54, 0.4);\n}\n\n.content-container[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDRSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7QUFDSjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0UsTUFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx3REFBQTtBQUNGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxzRkFBQTtBQUFGOztBQUdBO0VBQ0EsYUFBQTtBQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHdpZHRoOiAyNjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCA5cHggIzUyM2Y2OTEyO1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLnNpZGViYXIgLnNpZGViYXItYmFja2dyb3VuZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxufVxyXG5cclxuLm1haW4tcGFuZWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI2MHB4KTtcclxuICB0cmFuc2l0aW9uOiAwLjMzcywgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKTtcclxufVxyXG5cclxuXHJcbi5zaWRlYmFyW2RhdGEtY29sb3I9ZGFuZ2VyXSBsaS5hY3RpdmUgPiBhIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDgwMGJiO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggMHB4IHJnYigwIDAgMCAvIDE0JSksIDAgN3B4IDEwcHggLTVweCByZ2IoMjQ0IDY3IDU0IC8gNDAlKTtcclxufVxyXG5cclxuLmNvbnRlbnQtY29udGFpbmVyIHtcclxucGFkZGluZzogMTVweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout',
                templateUrl: './layout.component.html',
                styleUrls: ['./layout.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/routing */ "./src/app/pages/routing.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _shared_layout_aside_aside_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared-layout/aside/aside.component */ "./src/app/layout/shared-layout/aside/aside.component.ts");
/* harmony import */ var _shared_layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared-layout/header/header.component */ "./src/app/layout/shared-layout/header/header.component.ts");
/* harmony import */ var _shared_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared-layout/breadcrumb/breadcrumb.component */ "./src/app/layout/shared-layout/breadcrumb/breadcrumb.component.ts");










const routes = [
    {
        path: '',
        component: _layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
        children: _pages_routing__WEBPACK_IMPORTED_MODULE_3__["Routing"]
    }
];
class LayoutModule {
}
LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function LayoutModule_Factory(t) { return new (t || LayoutModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LayoutModule, { declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
        _shared_layout_aside_aside_component__WEBPACK_IMPORTED_MODULE_5__["AsideComponent"],
        _shared_layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _shared_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
                    _shared_layout_aside_aside_component__WEBPACK_IMPORTED_MODULE_5__["AsideComponent"],
                    _shared_layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _shared_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layout/shared-layout/aside/aside.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/shared-layout/aside/aside.component.ts ***!
  \***************************************************************/
/*! exports provided: ROUTES, AsideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideComponent", function() { return AsideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function (a0) { return [a0]; };
function AsideComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", menuItem_r1.class, " nav-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, menuItem_r1.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](menuItem_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuItem_r1.title);
} }
const ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'bi bi-speedometer', class: '' },
    { path: '/posts', title: 'Posts', icon: 'bi bi-file-post', class: '' },
    { path: '/albums', title: 'Album', icon: 'bi bi-journal-album', class: '' },
    { path: '/photos', title: 'Photos', icon: 'bi bi-images', class: '' }
];
class AsideComponent {
    constructor() { }
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
AsideComponent.ɵfac = function AsideComponent_Factory(t) { return new (t || AsideComponent)(); };
AsideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AsideComponent, selectors: [["app-aside"]], decls: 8, vars: 1, consts: [[1, "logo"], [1, "simple-text"], [1, "logo-img"], ["width", "40px", "src", "./assets/images/angular.png"], [1, "sidebar-wrapper"], [1, "nav"], ["routerLinkActive", "active", 3, "class", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active"], [1, "nav-link", 3, "routerLink"]], template: function AsideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " My App ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AsideComponent_li_7_Template, 5, 10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["img[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  border-style: none;\n}\n\n.logo[_ngcontent-%COMP%] {\n  padding: 15px 0px;\n  margin: 0;\n  display: block;\n  position: relative;\n  z-index: 4;\n}\n\n.simple-text[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  padding: 5px 0px;\n  display: inline-block;\n  font-size: 18px;\n  color: #3C4858;\n  white-space: nowrap;\n  font-weight: 400;\n  line-height: 30px;\n  overflow: hidden;\n  text-align: center;\n  display: block;\n}\n\n.logo-img[_ngcontent-%COMP%] {\n  width: 35px;\n  display: block;\n  max-height: 30px;\n  margin-left: 13px;\n  margin-right: 15px;\n}\n\n.logo-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 35px;\n  top: 16px;\n  position: absolute;\n}\n\n.sidebar-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  height: calc(100vh- 75px);\n  overflow: auto;\n  width: 260px;\n  z-index: 4;\n  padding-bottom: 30px;\n}\n\n.nav[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: block;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\ni[_ngcontent-%COMP%] {\n  font-size: 24px;\n  float: left;\n  margin-right: 15px;\n  line-height: 30px;\n  width: 30px;\n  text-align: center;\n  color: #a9afbb;\n}\n\nli.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  background-color: #4800bb;\n  box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(72, 0, 187, 0.47);\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NoYXJlZC1sYXlvdXQvYXNpZGUvYXNpZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQUY7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FBRUY7O0FBQUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFHRjs7QUFEQTtFQUNFLHlCQUFBO0VBQ0Esc0ZBQUE7RUFDQSxXQUFBO0FBSUYiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvc2hhcmVkLWxheW91dC9hc2lkZS9hc2lkZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW1nIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcclxufVxyXG4ubG9nbyB7XHJcbiAgcGFkZGluZzogMTVweCAwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiA0O1xyXG59XHJcbi5zaW1wbGUtdGV4dCB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBwYWRkaW5nOiA1cHggMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICMzQzQ4NTg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5sb2dvLWltZyB7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWF4LWhlaWdodDogMzBweDtcclxuICBtYXJnaW4tbGVmdDogMTNweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5sb2dvLWltZyBpbWcge1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIHRvcDogMTZweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5zaWRlYmFyLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmgtIDc1cHgpO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIHdpZHRoOiAyNjBweDtcclxuICB6LWluZGV4OiA0O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcbi5uYXYge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbmkge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjYTlhZmJiO1xyXG59XHJcbmxpLmFjdGl2ZSA+IGEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ODAwYmI7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCAwcHggcmdiKDAgMCAwIC8gMTQlKSwgMCA3cHggMTBweCAtNXB4IHJnYig3MiAwIDE4NyAvIDQ3JSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aside',
                templateUrl: './aside.component.html',
                styleUrls: ['./aside.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/layout/shared-layout/breadcrumb/breadcrumb.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/layout/shared-layout/breadcrumb/breadcrumb.component.ts ***!
  \*************************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function BreadcrumbComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadcrumb_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", breadcrumb_r1.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", breadcrumb_r1.label, " ");
} }
class BreadcrumbComponent {
    /**
    /*.filter(event => event instanceof NavigationEnd)
   .distinctUntilChanged()
   .map(event =>  this.buildBreadCrumb(this.activatedRoute.root)); */
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        let breadcrumb = {
            label: 'Dashboard',
            url: ''
        };
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])).subscribe(event => {
            //set breadcrumbs
            let root = this.route.root;
            this.breadcrumbs = this.getBreadcrumbs(root);
            this.breadcrumbs = [breadcrumb, ...this.breadcrumbs];
        });
    }
    getBreadcrumbs(route, url = "", breadcrumbs = []) {
        const ROUTE_DATA_BREADCRUMB = 'title';
        //get the child routes
        let children = route.children;
        //return if there are no more children
        if (children.length === 0) {
            return breadcrumbs;
        }
        //iterate over each children
        for (let child of children) {
            //verify primary route
            if (child.outlet !== _angular_router__WEBPACK_IMPORTED_MODULE_1__["PRIMARY_OUTLET"] || child.snapshot.url.length == 0) {
                continue;
            }
            //verify the custom data property "breadcrumb" is specified on the route
            if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                return this.getBreadcrumbs(child, url, breadcrumbs);
            }
            //get the route's URL segment
            let routeURL = child.snapshot.url.map(segment => segment.path).join("/");
            //append route URL to URL
            url += `/${routeURL}`;
            //add breadcrumb
            let breadcrumb = {
                label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
                url: url
            };
            breadcrumbs.push(breadcrumb);
            //recursive
            return this.getBreadcrumbs(child, url, breadcrumbs);
        }
        return breadcrumbs;
    }
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
BreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreadcrumbComponent, selectors: [["app-breadcrumb"]], decls: 2, vars: 1, consts: [[1, "breadcrumb"], ["class", "breadcrumb-item", 4, "ngFor", "ngForOf"], [1, "breadcrumb-item"], [3, "routerLink"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_li_1_Template, 3, 2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.breadcrumbs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaGFyZWQtbGF5b3V0L2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-breadcrumb',
                templateUrl: './breadcrumb.component.html',
                styleUrls: ['./breadcrumb.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/shared-layout/header/header.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/shared-layout/header/header.component.ts ***!
  \*****************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 4, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "header-bg"], [1, "container-fluid"], [1, "navbar-brand"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome to My App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".header-bg[_ngcontent-%COMP%] {\n  background: white;\n  z-index: 99;\n  box-shadow: 0 10px 30px 0 #523f690d;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NoYXJlZC1sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3NoYXJlZC1sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItYmcge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgIzUyM2Y2OTBkO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/routing.ts":
/*!**********************************!*\
  !*** ./src/app/pages/routing.ts ***!
  \**********************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
const Routing = [
    {
        path: 'dashboard',
        loadChildren: () => Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("default~albums-albums-module~dashboard-dashboard-module~photos-photos-module"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "./src/app/pages/dashboard/dashboard.module.ts")).then((m) => m.DashboardModule)
    },
    {
        path: 'posts',
        loadChildren: () => Promise.all(/*! import() | posts-posts-module */[__webpack_require__.e("default~albums-albums-module~photos-photos-module~posts-posts-module"), __webpack_require__.e("posts-posts-module")]).then(__webpack_require__.bind(null, /*! ./posts/posts.module */ "./src/app/pages/posts/posts.module.ts")).then((m) => m.PostsModule)
    },
    {
        path: 'albums',
        loadChildren: () => Promise.all(/*! import() | albums-albums-module */[__webpack_require__.e("default~albums-albums-module~photos-photos-module~posts-posts-module"), __webpack_require__.e("default~albums-albums-module~dashboard-dashboard-module~photos-photos-module"), __webpack_require__.e("albums-albums-module")]).then(__webpack_require__.bind(null, /*! ./albums/albums.module */ "./src/app/pages/albums/albums.module.ts")).then((m) => m.AlbumsModule),
        data: { title: 'Albums' }
    },
    {
        path: 'photos',
        loadChildren: () => Promise.all(/*! import() | photos-photos-module */[__webpack_require__.e("default~albums-albums-module~photos-photos-module~posts-posts-module"), __webpack_require__.e("default~albums-albums-module~dashboard-dashboard-module~photos-photos-module"), __webpack_require__.e("photos-photos-module")]).then(__webpack_require__.bind(null, /*! ./photos/photos.module */ "./src/app/pages/photos/photos.module.ts")).then((m) => m.PhotosModule)
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
    }
];



/***/ })

}]);
//# sourceMappingURL=layout-layout-module.js.map