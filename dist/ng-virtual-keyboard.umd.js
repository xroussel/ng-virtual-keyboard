(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/material"), require("@angular/common"), require("@angular/flex-layout"), require("@angular/forms"), require("rxjs/ReplaySubject"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/material", "@angular/common", "@angular/flex-layout", "@angular/forms", "rxjs/ReplaySubject"], factory);
	else if(typeof exports === 'object')
		exports["ng-virtual-keyboard"] = factory(require("@angular/core"), require("@angular/material"), require("@angular/common"), require("@angular/flex-layout"), require("@angular/forms"), require("rxjs/ReplaySubject"));
	else
		root["ng-virtual-keyboard"] = factory(root["@angular/core"], root["@angular/material"], root["@angular/common"], root["@angular/flex-layout"], root["@angular/forms"], root["rxjs/ReplaySubject"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_21__, __WEBPACK_EXTERNAL_MODULE_22__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ShContextService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShContextServiceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__injector_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sh_context_menu_models__ = __webpack_require__(15);



var ShContextService = (function () {
    function ShContextService() {
    }
    ShContextService.prototype.setOptions = function (opts) {
        this.options = Object.assign({}, __WEBPACK_IMPORTED_MODULE_2__sh_context_menu_models__["a" /* ShContextDefaultOptions */], opts);
        return this.options;
    };
    ShContextService.prototype.getOptions = function () {
        return this.options;
    };
    return ShContextService;
}());

ShContextService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
ShContextService.ctorParameters = function () { return []; };
var ShContextServiceModule = (function () {
    function ShContextServiceModule() {
    }
    return ShContextServiceModule;
}());

ShContextServiceModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                providers: [ShContextService, __WEBPACK_IMPORTED_MODULE_1__injector_service__["a" /* InjectionService */]]
            },] },
];
/** @nocollapse */
ShContextServiceModule.ctorParameters = function () { return []; };
//# sourceMappingURL=sh-context-service.js.map

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShContextMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sh_context_service__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);


var ShContextMenuComponent = (function () {
    function ShContextMenuComponent(ctxService) {
        this.ctxService = ctxService;
        this.onClose = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
    }
    ShContextMenuComponent.prototype.ngOnInit = function () {
        this.options = this.ctxService.getOptions();
    };
    ShContextMenuComponent.prototype.ngAfterContentInit = function () {
        if (this.options.rtl)
            this.setRtlLocation();
    };
    ShContextMenuComponent.prototype.close = function () {
        this.onClose.emit();
    };
    ShContextMenuComponent.prototype.onClick = function (item) {
        if (this.isItemDisabled(item))
            return;
        if (item.onClick) {
            item.onClick({
                menuItem: item,
                dataContext: this.dataContext
            });
            this.close();
        }
    };
    ShContextMenuComponent.prototype.isItemDisabled = function (item) {
        if (!item.disabled)
            return false;
        return item.disabled(this.dataContext);
    };
    ShContextMenuComponent.prototype.isItemVisible = function (item) {
        if (!item.visible)
            return true;
        return item.visible(this.dataContext);
    };
    ShContextMenuComponent.prototype.setRtlLocation = function () {
        var elmRect = this.childRef.nativeElement.getClientRects()[0];
        this.position.left = this.position.left - elmRect.width;
    };
    return ShContextMenuComponent;
}());

ShContextMenuComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"], args: [{
                selector: 'sh-context-menu',
                template: "\n    <div #childRef class=\"sh-context--container\"\n      [class.dark]=\"options.theme == 'dark'\"\n      [style.left]=\"position.left + 'px'\"\n      [style.top]=\"position.top + 'px'\"\n      [style.direction]=\"(options.rtl ? 'rtl' : 'ltr' )\">\n      <ul>\n          <li *ngFor=\"let item of items\"\n            [ngClass]=\"{'sh-menu-item': !item.divider, 'sh-context-divider': item.divider, 'sh-menu-disabled': isItemDisabled(item), 'sh-menu-hidden': !isItemVisible(item)}\"\n            (click)=\"onClick(item)\">\n              <div *ngIf=\"!item.divider && !item.subMenu\" [sh-html]=\"item.label\">\n              </div> \n              <div *ngIf=\"item.subMenu\"\n                [sh-context-sub-menu]=\"item.subMenuItems\"\n                [sh-data-context]=\"dataContext\"\n                (closeSubMenu)=\"close()\"\n                [sh-html]=\"item.label\">\n               <div [ngClass]=\"{'right-arrow': !options.rtl, 'left-arrow': options.rtl}\"></div>\n              </div>\n          </li>\n      </ul>\n    </div>\n",
                styles: ["\n  .sh-context--container{\n    font-family: sans-serif;\n    position: fixed;\n    background: #ececec;\n    min-width: 150px;\n    border: 1px solid rgba(0,0,0,0.2);\n    border-radius: 3px;\n    box-shadow: 0 0 10px 2px rgba(0,0,0,0.1);\n    z-index: 100;\n    color: black;\n\n    \n  }\n  .dark{\n      background:#383737 !important;\n      color:white !important;\n    }\n  .sh-context--container ul{\n    list-style: none;\n    padding: 5px 0;\n    margin: 0;\n  }\n\n  .sh-context--container ul li{\n      padding: 5px 10px 5px 15px;\n      transition: all 0.15s;\n  }\n\n  .sh-context--container ul li.sh-context-divider{\n      height: 1px;\n      margin: 1px 1px 8px 1px;\n      overflow: hidden;\n      border-bottom: 1px solid #d0d0d0;\n      line-height: 10px;\n    }\n\n  .sh-context--container ul li.sh-menu-item:hover{\n      cursor: pointer;\n      background: #4b8bec;\n      color: white;\n  }\n \n   .sh-context--container.dark ul li.sh-menu-item:hover{\n      cursor: pointer;\n      background: #4b8bec;\n      color: white;\n  }\n  .sh-context--container ul li.sh-menu-disabled{\n      color: #d0d0d0;\n   }\n\n   .sh-context--container ul li.sh-menu-item.sh-menu-hidden{\n      display: none;\n   }\n\n  .sh-context--container ul li.sh-menu-disabled:hover{\n      cursor: not-allowed;\n      color: #d0d0d0;\n      background: #ececec;\n  }\n\n  .right-arrow{\n    float: right;\n    margin-left: 10px;\n    margin-top: 3px;\n    border-top: 6px solid transparent;\n    border-bottom: 6px solid transparent;\n    border-left: 8px solid black;\n  }\n\n  .left-arrow{\n    float: left;\n    margin-right: 10px;\n    margin-top: 3px;\n    border-top: 6px solid transparent;\n    border-bottom: 6px solid transparent;\n    border-right: 8px solid black;\n  }\n"]
            },] },
];
/** @nocollapse */
ShContextMenuComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__sh_context_service__["b" /* ShContextService */], },
]; };
ShContextMenuComponent.propDecorators = {
    'position': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    'items': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    'dataContext': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    'onClose': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] },],
    'childRef': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"], args: ['childRef',] },],
};
//# sourceMappingURL=sh-context-menu.component.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.alphanumericKeyboardSwiss = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Backspace:2'],
    ['q', 'w', 'e', 'r', 't', 'z', 'u', 'i', 'o', 'p', 'CapsLock:2'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'Spacer', 'Enter:2'],
    ['y', 'x', 'c', 'v', 'b', 'n', 'm', 'Spacer:3', 'Accent:2'],
    ['SpaceBar:12']
];
exports.alphanumericKeyboardSwissAccent = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Backspace:2'],
    ['à', 'æ', 'ä', 'â', 'é', 'è', 'ë', 'ê', 'Spacer:2', 'CapsLock:2'],
    ['ì', 'ï', 'î', 'ù', 'ü', 'û', 'ö', 'ò', 'ô', 'Spacer:1', 'Enter:2'],
    ['Spacer:10', 'Accent:2'],
];
exports.alphanumericKeyboard = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Backspace:2'],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'CapsLock:2'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'Spacer', 'Shift:2'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'Spacer:5'],
];
exports.alphanumericNordicKeyboard = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Spacer', 'Backspace:2'],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'å', 'CapsLock:2'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ö', 'ä', 'Shift:2'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'Spacer:6'],
];
exports.extendedKeyboard = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Backspace:2'],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'CapsLock:2'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'Spacer', 'Shift:2'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '-', '_', '+'],
    ['Spacer', '@', 'SpaceBar:7', '#', 'Spacer:2'],
];
exports.extendedNordicKeyboard = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', 'Backspace:2'],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'å', 'CapsLock:2'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ö', 'ä', 'Shift:2'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '-', '_', 'Spacer:2'],
    ['Spacer', '@', 'SpaceBar:7', '#', 'Spacer:3'],
];
exports.numericKeyboard = [
    ['1', '2', '3', 'Backspace:2'],
    ['4', '5', '6', 'Spacer:2'],
    ['7', '8', '9', 'Spacer:2'],
    ['Spacer', '0', 'Spacer:3'],
];
exports.phoneKeyboard = [
    ['1', '2', '3', 'Backspace:2'],
    ['4', '5', '6', 'Spacer:2'],
    ['7', '8', '9', 'Spacer:2'],
    ['-', '0', '+', 'Spacer:2'],
];
exports.specialKeys = [
    'Enter',
    'Backspace',
    'Escape',
    'CapsLock',
    'SpaceBar',
    'Spacer',
    'Shift',
    'Accent'
];
exports.specialKeyIcons = {
    Enter: 'keyboard_return',
    Backspace: 'backspace',
    Escape: 'close',
    SpaceBar: 'space_bar',
    Shift: 'keyboard_capslock'
};
exports.specialKeyTexts = {
    CapsLock: 'Caps',
    Accent: 'àé'
};
exports.notDisabledSpecialKeys = [
    'Enter',
    'Backspace',
    'Escape',
];
/**
 * Helper function to determine if given key is 'Spacer' or not.
 *
 * @param {string}  key
 * @returns {boolean}
 */
function isSpacer(key) {
    if (key.length > 1) {
        return /^Spacer(:(\d+(\.\d+)?))?$/g.test(key);
    }
    return false;
}
exports.isSpacer = isSpacer;
/**
 * Helper function to determine if given key is special or not.
 *
 * @param {string}  key
 * @returns {boolean}
 */
function isSpecial(key) {
    if (key.length > 1) {
        return !!exports.specialKeys.filter(function (specialKey) {
            var pattern = new RegExp("^(" + specialKey + ")(:(\\d+(\\.\\d+)?))?$", 'g');
            return pattern.test(key);
        }).length;
    }
    return false;
}
exports.isSpecial = isSpecial;
/**
 * Function to change specified layout to CapsLock layout.
 *
 * @param {KeyboardLayout}  layout
 * @param {boolean}         caps
 * @returns {KeyboardLayout}
 */
function keyboardCapsLockLayout(layout, caps) {
    return layout.map(function (row) {
        return row.map(function (key) {
            return isSpecial(key) ? key : (caps ? key.toUpperCase() : key.toLowerCase());
        });
    });
}
exports.keyboardCapsLockLayout = keyboardCapsLockLayout;
/**
 * Function to change specified layout to Accent layout.
 *
 * @param {KeyboardLayout}  layout
 * @param {boolean}         accent
 * @returns {KeyboardLayout}
 */
function keyboardAccentLayout(layout, accent) {
    return accent ?
        exports.alphanumericKeyboardSwissAccent : layout;
}
exports.keyboardAccentLayout = keyboardAccentLayout;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var material_1 = __webpack_require__(4);
var virtual_keyboard_component_1 = __webpack_require__(8);
var layouts_1 = __webpack_require__(3);
var NgVirtualKeyboardDirective = /** @class */ (function () {
    /**
     * Constructor of the class.
     *
     * @param {ElementRef}  element
     * @param {MdDialog}    dialog
     */
    function NgVirtualKeyboardDirective(element, dialog) {
        this.element = element;
        this.dialog = dialog;
        this.opened = false;
        this.focus = true;
    }
    NgVirtualKeyboardDirective.prototype.onWindowBlur = function () {
        this.focus = false;
    };
    NgVirtualKeyboardDirective.prototype.onWindowFocus = function () {
        var _this = this;
        setTimeout(function () {
            _this.focus = true;
        }, 0);
    };
    NgVirtualKeyboardDirective.prototype.onFocus = function () {
        this.openKeyboard();
    };
    NgVirtualKeyboardDirective.prototype.onClick = function () {
        this.openKeyboard();
    };
    /**
     * Method to open virtual keyboard
     */
    NgVirtualKeyboardDirective.prototype.openKeyboard = function () {
        var _this = this;
        if (!this.opened && this.focus) {
            this.opened = true;
            this.dialogRef = this.dialog.open(virtual_keyboard_component_1.VirtualKeyboardComponent);
            this.virtualKeyboardComponent = this.dialogRef.componentInstance;
            this.dialogRef.componentInstance.inputElement = this.element;
            this.dialogRef.componentInstance.layout = this.getLayout();
            this.dialogRef.componentInstance.placeholder = this.getPlaceHolder();
            this.dialogRef.componentInstance.type = this.getType();
            this.dialogRef.componentInstance.noRightClick = this.getRightClickDisabled();
            this.dialogRef
                .afterClosed()
                .subscribe(function () {
                setTimeout(function () {
                    _this.opened = false;
                }, 0);
            });
        }
    };
    NgVirtualKeyboardDirective.prototype.closeKeyBoard = function () {
        if (this.opened) {
            this.dialogRef.close();
        }
    };
    /**
     * Getter for used keyboard layout.
     *
     * @returns {KeyboardLayout}
     */
    NgVirtualKeyboardDirective.prototype.getLayout = function () {
        var layout;
        switch (this.layout) {
            case 'alphanumericSwiss':
                layout = layouts_1.alphanumericKeyboardSwiss;
                break;
            case 'alphanumericSwissAccent':
                layout = layouts_1.alphanumericKeyboardSwissAccent;
                break;
            case 'alphanumeric':
                layout = layouts_1.alphanumericKeyboard;
                break;
            case 'alphanumericNordic':
                layout = layouts_1.alphanumericNordicKeyboard;
                break;
            case 'extended':
                layout = layouts_1.extendedKeyboard;
                break;
            case 'extendedNordic':
                layout = layouts_1.extendedNordicKeyboard;
                break;
            case 'numeric':
                layout = layouts_1.numericKeyboard;
                break;
            case 'phone':
                layout = layouts_1.phoneKeyboard;
                break;
            default:
                layout = this.layout;
                break;
        }
        return layout;
    };
    /**
     * Getter for used placeholder for virtual keyboard input field.
     *
     * @returns {string}
     */
    NgVirtualKeyboardDirective.prototype.getPlaceHolder = function () {
        return this.placeholder ? this.placeholder : this.element.nativeElement.placeholder;
    };
    /**
     * Getter for used type for virtual keyboard input field.
     *
     * @returns {string}
     */
    NgVirtualKeyboardDirective.prototype.getType = function () {
        return this.type ? this.type : this.element.nativeElement.type;
    };
    /**
     * Getter for disabled right click
     *
     * @returns {boolean}
     */
    NgVirtualKeyboardDirective.prototype.getRightClickDisabled = function () {
        return this.rcDisabled;
    };
    __decorate([
        core_1.Input('ng-virtual-keyboard-layout'),
        __metadata("design:type", Object)
    ], NgVirtualKeyboardDirective.prototype, "layout", void 0);
    __decorate([
        core_1.Input('ng-virtual-keyboard-placeholder'),
        __metadata("design:type", String)
    ], NgVirtualKeyboardDirective.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input('ng-virtual-keyboard-type'),
        __metadata("design:type", String)
    ], NgVirtualKeyboardDirective.prototype, "type", void 0);
    __decorate([
        core_1.Input('right-click-disabled'),
        __metadata("design:type", Boolean)
    ], NgVirtualKeyboardDirective.prototype, "rcDisabled", void 0);
    __decorate([
        core_1.HostListener('window:blur'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NgVirtualKeyboardDirective.prototype, "onWindowBlur", null);
    __decorate([
        core_1.HostListener('window:focus'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NgVirtualKeyboardDirective.prototype, "onWindowFocus", null);
    __decorate([
        core_1.HostListener('focus'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NgVirtualKeyboardDirective.prototype, "onFocus", null);
    __decorate([
        core_1.HostListener('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NgVirtualKeyboardDirective.prototype, "onClick", null);
    NgVirtualKeyboardDirective = __decorate([
        core_1.Directive({
            selector: '[ng-virtual-keyboard]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            material_1.MdDialog])
    ], NgVirtualKeyboardDirective);
    return NgVirtualKeyboardDirective;
}());
exports.NgVirtualKeyboardDirective = NgVirtualKeyboardDirective;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InjectionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);

/**
 * Injection service is a helper to append components
 * dynamically to a known location in the DOM, most
 * noteably for dialogs/tooltips appending to body.
 *
 * @export
 * @class InjectionService
 */
var InjectionService = (function () {
    function InjectionService(applicationRef, componentFactoryResolver, injector) {
        this.applicationRef = applicationRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
    }
    /**
     * Gets the root view container to inject the component to.
     *
     * @returns {ComponentRef<any>}
     *
     * @memberOf InjectionService
     */
    InjectionService.prototype.getRootViewContainer = function () {
        if (this._container)
            return this._container;
        var rootComponents = this.applicationRef['_rootComponents'];
        if (rootComponents.length)
            return rootComponents[0];
        throw new Error('View Container not found! ngUpgrade needs to manually set this via setRootViewContainer.');
    };
    /**
     * Overrides the default root view container. This is useful for
     * things like ngUpgrade that doesn't have a ApplicationRef root.
     *
     * @param {any} container
     *
     * @memberOf InjectionService
     */
    InjectionService.prototype.setRootViewContainer = function (container) {
        this._container = container;
    };
    /**
     * Gets the html element for a component ref.
     *
     * @param {ComponentRef<any>} componentRef
     * @returns {HTMLElement}
     *
     * @memberOf InjectionService
     */
    InjectionService.prototype.getComponentRootNode = function (componentRef) {
        return componentRef.hostView.rootNodes[0];
    };
    /**
     * Gets the root component container html element.
     *
     * @returns {HTMLElement}
     *
     * @memberOf InjectionService
     */
    InjectionService.prototype.getRootViewContainerNode = function () {
        return this.getComponentRootNode(this.getRootViewContainer());
    };
    /**
     * Projects the inputs onto the component
     *
     * @param {ComponentRef<any>} component
     * @param {*} options
     * @returns {ComponentRef<any>}
     *
     * @memberOf InjectionService
     */
    InjectionService.prototype.projectComponentInputs = function (component, options) {
        if (options) {
            var props = Object.getOwnPropertyNames(options);
            for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {
                var prop = props_1[_i];
                component.instance[prop] = options[prop];
            }
        }
        return component;
    };
    /**
     * Appends a component to a adjacent location
     *
     * @template T
     * @param {Type<T>} componentClass
     * @param {*} [options={}]
     * @param {Element} [location=this.getRootViewContainerNode()]
     * @returns {ComponentRef<any>}
     *
     * @memberOf InjectionService
     */
    InjectionService.prototype.appendComponent = function (componentClass, options, location) {
        if (options === void 0) { options = {}; }
        if (location === void 0) { location = this.getRootViewContainerNode(); }
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);
        var componentRef = componentFactory.create(this.injector);
        var appRef = this.applicationRef;
        var componentRootNode = this.getComponentRootNode(componentRef);
        // project the options passed to the component instance
        this.projectComponentInputs(componentRef, options);
        appRef.attachView(componentRef.hostView);
        componentRef.onDestroy(function () {
            appRef.detachView(componentRef.hostView);
        });
        location.appendChild(componentRootNode);
        return componentRef;
    };
    return InjectionService;
}());

InjectionService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
InjectionService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], },
]; };
//# sourceMappingURL=injector.service.js.map

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShContextOverlayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);



var ShContextOverlayComponent = (function () {
    function ShContextOverlayComponent() {
        this.onClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    return ShContextOverlayComponent;
}());

ShContextOverlayComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'sh-context-overlay',
                template: "<div class=\"sh-context-overlay\" (mousedown)=\"onClick.emit()\"></div>",
                styles: ["\n    .sh-context-overlay{\n      position: fixed;\n      top:0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      z-index: 99;\n      background-color: transparent;\n   }\n  "]
            },] },
];
/** @nocollapse */
ShContextOverlayComponent.ctorParameters = function () { return []; };
ShContextOverlayComponent.propDecorators = {
    'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=sh-context-overlay.component.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var material_1 = __webpack_require__(4);
var layouts_1 = __webpack_require__(3);
var virtual_keyboard_service_1 = __webpack_require__(9);
var VirtualKeyboardComponent = /** @class */ (function () {
    /**
     * Constructor of the class.
     *
     * @param {MdDialogRef<VirtualKeyboardComponent>} dialogRef
     * @param {VirtualKeyboardService}                virtualKeyboardService
     */
    function VirtualKeyboardComponent(dialogRef, virtualKeyboardService) {
        this.dialogRef = dialogRef;
        this.virtualKeyboardService = virtualKeyboardService;
        this.confirm = new core_1.EventEmitter();
        this.shift = false;
        this.password = false;
    }
    VirtualKeyboardComponent_1 = VirtualKeyboardComponent;
    /**
     * Helper method to set cursor in input to correct place.
     *
     * @param {HTMLInputElement|HTMLTextAreaElement}  input
     * @param {number}                                start
     * @param {number}                                end
     */
    VirtualKeyboardComponent.setSelectionRange = function (input, start, end) {
        if (input.setSelectionRange) {
            input.focus();
            input.setSelectionRange(start, end);
        }
        else if (input.createTextRange) {
            var range = input.createTextRange();
            range.collapse(true);
            range.moveEnd('character', end);
            range.moveStart('character', start);
            range.select();
        }
    };
    /**
     * On init life cycle hook, this will do following:
     *  1) Set focus to virtual keyboard input field
     *  2) Subscribe to following
     *    2.1) Shift key, this is needed in keyboard event dispatches
     *    2.2) CapsLock key, this will change keyboard layout
     *    2.3) Caret position in virtual keyboard input
     *  3) Reset of possible previously tracked caret position
     */
    VirtualKeyboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuItems = [];
        this.layoutStart = this.layout;
        setTimeout(function () {
            _this.keyboardInput.nativeElement.focus();
        }, 0);
        this.virtualKeyboardService.shift$.subscribe(function (shift) {
            _this.shift = shift;
        });
        this.virtualKeyboardService.capsLock$.subscribe(function (capsLock) {
            _this.layout = layouts_1.keyboardCapsLockLayout(_this.layout, capsLock);
        });
        this.virtualKeyboardService.accentLock$.subscribe(function (accent) {
            _this.layout = layouts_1.keyboardAccentLayout(_this.layoutStart, accent);
        });
        this.virtualKeyboardService.caretPosition$.subscribe(function (caretPosition) {
            _this.caretPosition = caretPosition;
            setTimeout(function () {
                VirtualKeyboardComponent_1.setSelectionRange(_this.keyboardInput.nativeElement, caretPosition, caretPosition);
            }, 0);
        });
        if (this.inputElement.nativeElement.value.length) {
            this.virtualKeyboardService.setCaretPosition(this.inputElement.nativeElement.value.length);
        }
        this.maxLength = this.inputElement.nativeElement.maxLength > 0 ? this.inputElement.nativeElement.maxLength : '';
        this.checkDisabled();
    };
    /**
     * On destroy life cycle hook, in this we want to reset virtual keyboard service states on following:
     *  - Shift
     *  - CapsLock
     */
    VirtualKeyboardComponent.prototype.ngOnDestroy = function () {
        this.virtualKeyboardService.reset();
    };
    VirtualKeyboardComponent.prototype.onBefore = function ($event) {
        console.log("clicked");
        if (this.noRightClick) {
            console.log("no right");
            $event.event.preventDefault();
        }
        else {
            $event.open();
        }
    };
    /**
     * Method to close virtual keyboard dialog
     */
    VirtualKeyboardComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    VirtualKeyboardComponent.prototype.confirmDispatch = function () {
        this.confirm.emit();
        this.dialogRef.close();
    };
    /**
     * Method to update caret position. This is called on click event in virtual keyboard input element.
     */
    VirtualKeyboardComponent.prototype.updateCaretPosition = function () {
        this.virtualKeyboardService.setCaretPosition(this.keyboardInput.nativeElement.selectionStart);
    };
    /**
     * Method to handle actual "key" press from virtual keyboard.
     *  1) Key is "Special", process special key event
     *  2) Key is "Normal"
     *    - Append this key value to input
     *    - Dispatch DOM events to input element
     *    - Toggle Shift key if it's pressed
     *
     * @param {KeyPressInterface} event
     */
    VirtualKeyboardComponent.prototype.keyPress = function (event) {
        if (event.special) {
            this.handleSpecialKey(event);
            this.dispatchEvents(event);
        }
        else {
            this.handleNormalKey(event.keyValue);
            this.dispatchEvents(event);
            // Toggle shift if it's activated
            if (this.shift) {
                this.virtualKeyboardService.toggleShift();
            }
        }
        this.checkDisabled();
    };
    /**
     * Method to check is virtual keyboard input is disabled.
     */
    VirtualKeyboardComponent.prototype.checkDisabled = function () {
        var maxLength = this.inputElement.nativeElement.maxLength;
        var valueLength = this.inputElement.nativeElement.value.length;
        this.disabled = maxLength > 0 && valueLength >= maxLength;
    };
    /**
     * Method to handle "normal" key press event, this will add specified character to input value.
     *
     * @param {string}  keyValue
     */
    VirtualKeyboardComponent.prototype.handleNormalKey = function (keyValue) {
        var value = '';
        // We have caret position, so attach character to specified position
        if (!isNaN(this.caretPosition)) {
            value = [
                this.inputElement.nativeElement.value.slice(0, this.caretPosition),
                keyValue,
                this.inputElement.nativeElement.value.slice(this.caretPosition)
            ].join('');
            // Update caret position
            this.virtualKeyboardService.setCaretPosition(this.caretPosition + 1);
        }
        else {
            value = "" + this.inputElement.nativeElement.value + keyValue;
        }
        // And finally set new value to input
        this.inputElement.nativeElement.value = value;
    };
    /**
     * Method to handle "Special" key press events.
     *  1) Enter
     *  2) Escape, close virtual keyboard
     *  3) Backspace, remove last character from input value
     *  4) CapsLock, toggle current layout state
     *  6) Shift, toggle current layout state
     *  5) SpaceBar
     */
    VirtualKeyboardComponent.prototype.handleSpecialKey = function (event) {
        switch (event.keyValue) {
            case 'Enter':
                this.confirmDispatch();
                this.close();
                break;
            case 'Escape':
                this.close();
                break;
            case 'Backspace':
                var currentValue = this.inputElement.nativeElement.value;
                // We have a caret position, so we need to remove char from that position
                if (!isNaN(this.caretPosition)) {
                    // And current position must > 0
                    if (this.caretPosition > 0) {
                        var start = currentValue.slice(0, this.caretPosition - 1);
                        var end = currentValue.slice(this.caretPosition);
                        this.inputElement.nativeElement.value = "" + start + end;
                        // Update caret position
                        this.virtualKeyboardService.setCaretPosition(this.caretPosition - 1);
                    }
                }
                else {
                    this.inputElement.nativeElement.value = currentValue.substring(0, currentValue.length - 1);
                }
                // Set focus to keyboard input
                this.keyboardInput.nativeElement.focus();
                break;
            case 'CapsLock':
                this.virtualKeyboardService.toggleCapsLock();
                break;
            case 'Accent':
                this.virtualKeyboardService.toggleAccentLock();
                break;
            case 'Shift':
                this.virtualKeyboardService.toggleShift();
                break;
            case 'SpaceBar':
                this.handleNormalKey(' ');
                break;
        }
    };
    /**
     * Method to dispatch necessary keyboard events to current input element.
     *
     * @see https://w3c.github.io/uievents/tools/key-event-viewer.html
     *
     * @param {KeyPressInterface} event
     */
    VirtualKeyboardComponent.prototype.dispatchEvents = function (event) {
        var eventInit = {
            bubbles: true,
            cancelable: true,
            shiftKey: this.shift,
            key: event.keyValue,
            code: "Key" + event.keyValue.toUpperCase() + "}",
            location: 0
        };
        // Simulate all needed events on base element
        this.inputElement.nativeElement.dispatchEvent(new KeyboardEvent('keydown', eventInit));
        this.inputElement.nativeElement.dispatchEvent(new KeyboardEvent('keypress', eventInit));
        this.inputElement.nativeElement.dispatchEvent(new Event('input', { bubbles: true }));
        this.inputElement.nativeElement.dispatchEvent(new KeyboardEvent('keyup', eventInit));
        // And set focus to input
        this.keyboardInput.nativeElement.focus();
    };
    VirtualKeyboardComponent.prototype.keyUp = function ($event) {
        var keyPressInterface = {
            key: "" + $event.keyCode,
            keyValue: $event.key,
            special: !this.isNormalLetter($event.keyCode)
        };
        this.keyPress(keyPressInterface);
        $event.preventDefault();
    };
    VirtualKeyboardComponent.prototype.isNormalLetter = function (keycode) {
        return (keycode > 47 && keycode < 58) || // number keys
            keycode == 32 || // spacebar key (if you want to allow carriage returns)
            (keycode > 64 && keycode < 123) || // letter keys
            (keycode > 95 && keycode < 112) || // numpad keys
            (keycode > 185 && keycode < 193) || // ;=,-./` (in order)
            (keycode > 218 && keycode < 234) ||
            keycode == 252 || keycode == 163 ||
            (keycode > 32 && keycode < 64);
    };
    __decorate([
        core_1.ViewChild('keyboardInput'),
        __metadata("design:type", core_1.ElementRef)
    ], VirtualKeyboardComponent.prototype, "keyboardInput", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], VirtualKeyboardComponent.prototype, "confirm", void 0);
    VirtualKeyboardComponent = VirtualKeyboardComponent_1 = __decorate([
        core_1.Component({
            selector: 'virtual-keyboard',
            template: "\n    <div class=\"container test\" (onBeforeMenuOpen)=\"onBefore($event)\" [sh-context]=\"menuItems\">\n      <div fxLayout=\"column\">\n        <md-input-container>\n          <button class=\"close\" color=\"primary\" md-mini-fab\n            (mouseup)=\"confirmDispatch()\"\n            tabindex=\"-1\"\n          >\n            <md-icon>check</md-icon>\n          </button>\n    \n          <input type=\"{{ type }}\"\n            mdInput\n            #keyboardInput\n            (click)=\"updateCaretPosition()\"\n            [(ngModel)]=\"inputElement.nativeElement.value\" placeholder=\"{{ placeholder }}\"\n            [maxLength]=\"maxLength\"\n            autofocus\n\t\t\ttabindex=\"1\"\n\t\t\t(keypress)=\"keyUp($event)\"\n          />\n        </md-input-container>\n    \n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\"\n          *ngFor=\"let row of layout; let rowIndex = index\"\n          [attr.data-index]=\"rowIndex\"\n        >\n          <virtual-keyboard-key\n            *ngFor=\"let key of row; let keyIndex = index\"\n            [key]=\"key\"\n            [disabled]=\"disabled\"\n            [attr.data-index]=\"keyIndex\"\n            (keyPress)=\"keyPress($event)\"\n          ></virtual-keyboard-key>\n        </div>\n\t  </div>\n    </div>\n  ",
            styles: ["\n    .close {\n      position: relative;\n      float: right;\n      top: -16px;\n      right: 0;\n      margin-bottom: -40px;\n    }\n  \n    .mat-input-container {\n      margin: -16px 0;\n      font-size: 32px;\n    }\n  \n    .mat-input-element:disabled {\n      color: currentColor;\n    }\n\n    :host /deep/ .mat-input-placeholder {\n      top: 10px !important;\n      font-size: 24px !important;\n\t}\n\t/* fallback */\n\t@font-face {\n\t  font-family: 'Material Icons';\n\t  font-style: normal;\n\t  font-weight: 400;\n\t  src: url(./assets/fonts/font.woff2) format('woff2');\n\t}\n\t\n\t.material-icons {\n\t  font-family: 'Material Icons';\n\t  font-weight: normal;\n\t  font-style: normal;\n\t  font-size: 24px;\n\t  line-height: 1;\n\t  letter-spacing: normal;\n\t  text-transform: none;\n\t  display: inline-block;\n\t  white-space: nowrap;\n\t  word-wrap: normal;\n\t  direction: ltr;\n\t  -webkit-font-feature-settings: 'liga';\n\t  -webkit-font-smoothing: antialiased;\n\t}\n  "]
        }),
        __metadata("design:paramtypes", [material_1.MdDialogRef,
            virtual_keyboard_service_1.VirtualKeyboardService])
    ], VirtualKeyboardComponent);
    return VirtualKeyboardComponent;
    var VirtualKeyboardComponent_1;
}());
exports.VirtualKeyboardComponent = VirtualKeyboardComponent;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ReplaySubject_1 = __webpack_require__(22);
var VirtualKeyboardService = /** @class */ (function () {
    function VirtualKeyboardService() {
        this.shift$ = new ReplaySubject_1.ReplaySubject(1);
        this.capsLock$ = new ReplaySubject_1.ReplaySubject(1);
        this.accentLock$ = new ReplaySubject_1.ReplaySubject(1);
        this.caretPosition$ = new ReplaySubject_1.ReplaySubject(1);
        this.capsLock = false;
        this.shift = false;
        this.accent = false;
    }
    /**
     * Setter for Shift value, note that this also sets CapsLock value.
     *
     * @param {boolean} value
     */
    VirtualKeyboardService.prototype.setShift = function (value) {
        this.shift = value;
        this.shift$.next(this.shift);
        this.setCapsLock(this.shift);
    };
    /**
     * Setter for CapsLock value
     *
     * @param {boolean} value
     */
    VirtualKeyboardService.prototype.setCapsLock = function (value) {
        this.capsLock = value;
        this.capsLock$.next(value);
    };
    /**
     * Setter for Accent value
     *
     * @param {boolean} value
     */
    VirtualKeyboardService.prototype.setAccent = function (value) {
        this.accent = value;
        this.accentLock$.next(value);
    };
    /**
     * Toggle for Shift, note that this also toggles CapsLock
     */
    VirtualKeyboardService.prototype.toggleShift = function () {
        this.shift = !this.shift;
        this.shift$.next(this.shift);
        this.setCapsLock(this.shift);
    };
    /**
     * Toggle for CapsLock
     */
    VirtualKeyboardService.prototype.toggleCapsLock = function () {
        this.capsLock = !this.capsLock;
        this.capsLock$.next(this.capsLock);
    };
    /**
     * Toggle for Accent
     */
    VirtualKeyboardService.prototype.toggleAccentLock = function () {
        this.accent = !this.accent;
        this.accentLock$.next(this.accent);
    };
    /**
     * Setter for caret position value.
     *
     * @param {number}  position
     */
    VirtualKeyboardService.prototype.setCaretPosition = function (position) {
        this.caretPosition$.next(position);
    };
    /**
     * Method to reset Shift and CapsLock values to default ones.
     */
    VirtualKeyboardService.prototype.reset = function () {
        this.setShift(false);
    };
    VirtualKeyboardService = __decorate([
        core_1.Injectable()
    ], VirtualKeyboardService);
    return VirtualKeyboardService;
}());
exports.VirtualKeyboardService = VirtualKeyboardService;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(10);
var forms_1 = __webpack_require__(21);
var material_1 = __webpack_require__(4);
var flex_layout_1 = __webpack_require__(20);
var ng2_right_click_menu_1 = __webpack_require__(12);
var virtual_keyboard_directive_1 = __webpack_require__(5);
var virtual_keyboard_component_1 = __webpack_require__(8);
var virtual_keyboard_key_component_1 = __webpack_require__(19);
var virtual_keyboard_service_1 = __webpack_require__(9);
var NgVirtualKeyboardModule = /** @class */ (function () {
    function NgVirtualKeyboardModule() {
    }
    NgVirtualKeyboardModule = __decorate([
        core_1.NgModule({
            declarations: [
                virtual_keyboard_directive_1.NgVirtualKeyboardDirective,
                virtual_keyboard_component_1.VirtualKeyboardComponent,
                virtual_keyboard_key_component_1.VirtualKeyboardKeyComponent,
            ],
            providers: [
                virtual_keyboard_service_1.VirtualKeyboardService,
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                flex_layout_1.FlexLayoutModule,
                material_1.MdButtonModule,
                material_1.MdDialogModule,
                material_1.MdIconModule,
                material_1.MdInputModule,
                ng2_right_click_menu_1.ShContextMenuModule
            ],
            entryComponents: [
                virtual_keyboard_component_1.VirtualKeyboardComponent,
            ],
            exports: [
                virtual_keyboard_directive_1.NgVirtualKeyboardDirective
            ]
        })
    ], NgVirtualKeyboardModule);
    return NgVirtualKeyboardModule;
}());
exports.NgVirtualKeyboardModule = NgVirtualKeyboardModule;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_sh_context_menu_module__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ShContextMenuModule", function() { return __WEBPACK_IMPORTED_MODULE_0__src_sh_context_menu_module__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HtmlDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);



var HtmlDirective = (function () {
    function HtmlDirective(elmRef) {
        this.elmRef = elmRef;
    }
    HtmlDirective.prototype.ngAfterContentInit = function () {
        this.elmRef.nativeElement.insertAdjacentHTML('afterbegin', this.content);
    };
    return HtmlDirective;
}());

HtmlDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[sh-html]'
            },] },
];
/** @nocollapse */
HtmlDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
HtmlDirective.propDecorators = {
    'content': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['sh-html',] },],
};
//# sourceMappingURL=html.directive.js.map

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShContextMenuDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sh_context_service__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sh_context_overlay_component__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sh_context_menu_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__injector_service__ = __webpack_require__(6);





var ShContextMenuDirective = (function () {
    function ShContextMenuDirective(viewRef, resolver, ctxService, injectionService) {
        this.viewRef = viewRef;
        this.resolver = resolver;
        this.ctxService = ctxService;
        this.injectionService = injectionService;
        this.onBeforeMenuOpen = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
    }
    ShContextMenuDirective.prototype.onClick = function (event) {
        var _this = this;
        this.options = this.ctxService.setOptions(this.options);
        this.closeMenu();
        if (this.onBeforeMenuOpen.observers.length > 0) {
            this.onBeforeMenuOpen.emit({
                event: event,
                items: this.menuItems,
                open: function (modifiedItems) {
                    if (modifiedItems === void 0) { modifiedItems = _this.menuItems; }
                    return _this.createMenu(event, modifiedItems);
                }
            });
        }
        else {
            this.createMenu(event);
        }
        return false;
    };
    ShContextMenuDirective.prototype.createMenu = function (event, items) {
        if (items === void 0) { items = this.menuItems; }
        this.ctxComponent = this.createContextComponent();
        this.overlayComponent = this.createOverlayComponent();
        this.registerBindings(items);
        this.registerEvents();
        this.setLocation(event);
    };
    ShContextMenuDirective.prototype.registerEvents = function () {
        var _this = this;
        this.ctxComponent.instance.onClose.subscribe(function () {
            _this.closeMenu();
        });
        this.overlayComponent.instance.onClick.subscribe(function () {
            _this.closeMenu();
        });
    };
    ShContextMenuDirective.prototype.registerBindings = function (menuItems) {
        this.ctxComponent.instance.items = menuItems;
        this.ctxComponent.instance.dataContext = this.dataContext;
    };
    ShContextMenuDirective.prototype.createContextComponent = function () {
        var shContextMenuFactory = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_3__sh_context_menu_component__["a" /* ShContextMenuComponent */]);
        return this.viewRef.createComponent(shContextMenuFactory);
    };
    ShContextMenuDirective.prototype.createOverlayComponent = function () {
        var shContextOverlayRef = this.injectionService.appendComponent(__WEBPACK_IMPORTED_MODULE_2__sh_context_overlay_component__["a" /* ShContextOverlayComponent */]);
        return shContextOverlayRef;
    };
    ShContextMenuDirective.prototype.setLocation = function (event) {
        var clientX = event.clientX, clientY = event.clientY;
        this.ctxComponent.instance.position = {
            top: clientY,
            left: clientX
        };
    };
    ShContextMenuDirective.prototype.closeMenu = function () {
        this.viewRef.clear();
        if (this.overlayComponent)
            this.overlayComponent.destroy();
    };
    return ShContextMenuDirective;
}());

ShContextMenuDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                selector: '[sh-context]'
            },] },
];
/** @nocollapse */
ShContextMenuDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ComponentFactoryResolver"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__sh_context_service__["b" /* ShContextService */], },
    { type: __WEBPACK_IMPORTED_MODULE_4__injector_service__["a" /* InjectionService */], },
]; };
ShContextMenuDirective.propDecorators = {
    'menuItems': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['sh-context',] },],
    'dataContext': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['sh-data-context',] },],
    'options': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"], args: ['sh-options',] },],
    'onBeforeMenuOpen': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"], args: ['onBeforeMenuOpen',] },],
    'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"], args: ['contextmenu', ['$event'],] },],
};
//# sourceMappingURL=sh-context-menu.directive.js.map

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShContextDefaultOptions; });
var ShContextDefaultOptions = {
    rtl: false,
    theme: 'light'
};
//# sourceMappingURL=sh-context-menu.models.js.map

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShContextMenuModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__html_directive__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sh_context_overlay_component__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sh_context_menu_directive__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sh_context_menu_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sh_context_sub_menu_directive__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sh_context_service__ = __webpack_require__(1);








var ShContextMenuModule = (function () {
    function ShContextMenuModule() {
    }
    return ShContextMenuModule;
}());

ShContextMenuModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_4__sh_context_menu_directive__["a" /* ShContextMenuDirective */],
                    __WEBPACK_IMPORTED_MODULE_5__sh_context_menu_component__["a" /* ShContextMenuComponent */],
                    __WEBPACK_IMPORTED_MODULE_6__sh_context_sub_menu_directive__["a" /* ShContextSubMenuDirective */],
                    __WEBPACK_IMPORTED_MODULE_3__sh_context_overlay_component__["a" /* ShContextOverlayComponent */],
                    __WEBPACK_IMPORTED_MODULE_2__html_directive__["a" /* HtmlDirective */]
                ],
                exports: [__WEBPACK_IMPORTED_MODULE_4__sh_context_menu_directive__["a" /* ShContextMenuDirective */]],
                imports: [
                    __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                    __WEBPACK_IMPORTED_MODULE_7__sh_context_service__["a" /* ShContextServiceModule */]
                ],
                entryComponents: [
                    __WEBPACK_IMPORTED_MODULE_5__sh_context_menu_component__["a" /* ShContextMenuComponent */],
                    __WEBPACK_IMPORTED_MODULE_3__sh_context_overlay_component__["a" /* ShContextOverlayComponent */]
                ]
            },] },
];
/** @nocollapse */
ShContextMenuModule.ctorParameters = function () { return []; };
//# sourceMappingURL=sh-context-menu.module.js.map

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShContextSubMenuDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sh_context_menu_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sh_context_service__ = __webpack_require__(1);



var ShContextSubMenuDirective = (function () {
    function ShContextSubMenuDirective(viewRef, elmRef, resolver, ctxService) {
        this.viewRef = viewRef;
        this.elmRef = elmRef;
        this.resolver = resolver;
        this.ctxService = ctxService;
        this.closeSubMenu = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ShContextSubMenuDirective.prototype.ngOnInit = function () {
        this.options = this.ctxService.getOptions();
    };
    ShContextSubMenuDirective.prototype.onMouseOver = function (event) {
        this.closeCurrent();
        this.ctxComponent = this.createContextComponent();
        this.registerBindings();
        this.registerEvents();
        this.setLocation();
        return false;
    };
    ShContextSubMenuDirective.prototype.registerEvents = function () {
        var _this = this;
        this.ctxComponent.instance.onClose.subscribe(function () {
            _this.closeSubMenu.emit();
        });
    };
    ShContextSubMenuDirective.prototype.registerBindings = function () {
        this.ctxComponent.instance.items = this.menuItems;
        this.ctxComponent.instance.dataContext = this.dataContext;
    };
    ShContextSubMenuDirective.prototype.createContextComponent = function () {
        var shContextMenuFactory = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__sh_context_menu_component__["a" /* ShContextMenuComponent */]);
        var shContextComponentRef = this.viewRef.createComponent(shContextMenuFactory);
        return shContextComponentRef;
    };
    ShContextSubMenuDirective.prototype.setLocation = function () {
        var _a = this.elmRef.nativeElement.getClientRects()[0], top = _a.top, left = _a.left, width = _a.width;
        var position = {
            top: top,
            left: this.options.rtl ? left : left + width
        };
        this.ctxComponent.instance.position = position;
    };
    ShContextSubMenuDirective.prototype.closeMenu = function () {
        this.closeSubMenu.emit();
    };
    ShContextSubMenuDirective.prototype.closeCurrent = function () {
        this.viewRef.clear();
    };
    return ShContextSubMenuDirective;
}());

ShContextSubMenuDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[sh-context-sub-menu]'
            },] },
];
/** @nocollapse */
ShContextSubMenuDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
    { type: __WEBPACK_IMPORTED_MODULE_2__sh_context_service__["b" /* ShContextService */], },
]; };
ShContextSubMenuDirective.propDecorators = {
    'menuItems': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['sh-context-sub-menu',] },],
    'dataContext': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['sh-data-context',] },],
    'closeSubMenu': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'onMouseOver': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['mouseover', ['$event'],] },],
};
//# sourceMappingURL=sh-context-sub-menu.directive.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var virtual_keyboard_directive_1 = __webpack_require__(5);
exports.NgVirtualKeyboardDirective = virtual_keyboard_directive_1.NgVirtualKeyboardDirective;
var virtual_keyboard_module_1 = __webpack_require__(11);
exports.NgVirtualKeyboardModule = virtual_keyboard_module_1.NgVirtualKeyboardModule;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var layouts_1 = __webpack_require__(3);
var VirtualKeyboardKeyComponent = /** @class */ (function () {
    /**
     * Constructor of the class.
     */
    function VirtualKeyboardKeyComponent() {
        this.keyPress = new core_1.EventEmitter();
        this.special = false;
        this.spacer = false;
    }
    /**
     * On init life cycle hook, within this we'll initialize following properties:
     *  - special
     *  - keyValue
     *  - flexValue
     */
    VirtualKeyboardKeyComponent.prototype.ngOnInit = function () {
        var multiplier = 1;
        var fix = 0;
        if (this.key.length > 1) {
            this.spacer = layouts_1.isSpacer(this.key);
            this.special = layouts_1.isSpecial(this.key);
            var matches = /^(\w+)(:(\d+(\.\d+)?))?$/g.exec(this.key);
            this.keyValue = matches[1];
            if (matches[3]) {
                multiplier = parseFloat(matches[3]);
                fix = (multiplier - 1) * 4;
            }
        }
        else {
            this.keyValue = this.key;
        }
        if (this.special) {
            if (layouts_1.specialKeyIcons.hasOwnProperty(this.keyValue)) {
                this.icon = layouts_1.specialKeyIcons[this.keyValue];
            }
            else if (layouts_1.specialKeyTexts.hasOwnProperty(this.keyValue)) {
                this.text = layouts_1.specialKeyTexts[this.keyValue];
            }
        }
        this.flexValue = multiplier * 64 + fix + "px";
    };
    /**
     * Method to check if key is disabled or not.
     *
     * @returns {boolean}
     */
    VirtualKeyboardKeyComponent.prototype.isDisabled = function () {
        if (this.spacer) {
            return true;
        }
        else if (this.disabled && layouts_1.notDisabledSpecialKeys.indexOf(this.keyValue) !== -1) {
            return false;
        }
        else {
            return this.disabled;
        }
    };
    /**
     * Method to handle actual "key" press from virtual keyboard.
     *  1) Key is "Special", process special key event
     *  2) Key is "Normal", append this key value to input
     */
    VirtualKeyboardKeyComponent.prototype.onKeyPress = function () {
        this.keyPress.emit({ special: this.special, keyValue: this.keyValue, key: this.key });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], VirtualKeyboardKeyComponent.prototype, "key", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], VirtualKeyboardKeyComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], VirtualKeyboardKeyComponent.prototype, "keyPress", void 0);
    VirtualKeyboardKeyComponent = __decorate([
        core_1.Component({
            selector: 'virtual-keyboard-key',
            template: "\n    <button\n      md-raised-button\n      color=\"primary\"\n      fxFlex=\"{{ flexValue }}\"\n      [class.spacer]=\"spacer\"\n      [disabled]=\"isDisabled()\"\n\t  (click)=\"onKeyPress()\"\n\t  \n    >\n      <span *ngIf=\"!special\">{{ keyValue }}</span>\n    \n      <span *ngIf=\"special\">\n        <md-icon *ngIf=\"icon\">{{ icon }}</md-icon>\n    \n        {{ text }}\n      </span>\n    </button>\n  ",
            styles: ["\n    .mat-button,\n    .mat-icon-button,\n    .mat-raised-button {\n      min-width: 64px;\n      min-height: 64px;\n      padding: 0;\n      margin: 2px;\n      font-size: 32px;\n      line-height: 32px;\n    }\n    \n    .mat-button.spacer,\n    .mat-icon-button.spacer,\n    .mat-raised-button.spacer {\n      background-color: transparent;\n\t}\n\t\n\t/* fallback */\n\t@font-face {\n\t  font-family: 'Material Icons';\n\t  font-style: normal;\n\t  font-weight: 400;\n\t  src: url(./assets/fonts/font.woff2) format('woff2');\n\t}\n\t\n\t.material-icons {\n\t  font-family: 'Material Icons';\n\t  font-weight: normal;\n\t  font-style: normal;\n\t  font-size: 24px;\n\t  line-height: 1;\n\t  letter-spacing: normal;\n\t  text-transform: none;\n\t  display: inline-block;\n\t  white-space: nowrap;\n\t  word-wrap: normal;\n\t  direction: ltr;\n\t  -webkit-font-feature-settings: 'liga';\n\t  -webkit-font-smoothing: antialiased;\n\t}\n  "]
        })
        //	  //src: url(https://fonts.gstatic.com/s/materialicons/v30/2fcrYFNaTjcS6g4U3t-Y5UEw0lE80llgEseQY3FEmqw.woff2) format('woff2');
        ,
        __metadata("design:paramtypes", [])
    ], VirtualKeyboardKeyComponent);
    return VirtualKeyboardKeyComponent;
}());
exports.VirtualKeyboardKeyComponent = VirtualKeyboardKeyComponent;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_21__;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_22__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=ng-virtual-keyboard.umd.js.map