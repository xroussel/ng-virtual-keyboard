"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var virtual_keyboard_component_1 = require("./virtual-keyboard.component");
var layouts_1 = require("./layouts");
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
    NgVirtualKeyboardDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[ng-virtual-keyboard]'
                },] },
    ];
    /** @nocollapse */
    NgVirtualKeyboardDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: material_1.MdDialog, },
    ]; };
    NgVirtualKeyboardDirective.propDecorators = {
        'layout': [{ type: core_1.Input, args: ['ng-virtual-keyboard-layout',] },],
        'placeholder': [{ type: core_1.Input, args: ['ng-virtual-keyboard-placeholder',] },],
        'type': [{ type: core_1.Input, args: ['ng-virtual-keyboard-type',] },],
        'onWindowBlur': [{ type: core_1.HostListener, args: ['window:blur',] },],
        'onWindowFocus': [{ type: core_1.HostListener, args: ['window:focus',] },],
        'onFocus': [{ type: core_1.HostListener, args: ['focus',] },],
        'onClick': [{ type: core_1.HostListener, args: ['click',] },],
    };
    return NgVirtualKeyboardDirective;
}());
exports.NgVirtualKeyboardDirective = NgVirtualKeyboardDirective;
//# sourceMappingURL=virtual-keyboard.directive.js.map