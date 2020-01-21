"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var layouts_1 = require("./layouts");
var virtual_keyboard_service_1 = require("./virtual-keyboard.service");
var VirtualKeyboardComponent = (function () {
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
        this.isIE = /msie\s|trident\/|notedge\//i.test(window.navigator.userAgent);
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
                VirtualKeyboardComponent.setSelectionRange(_this.keyboardInput.nativeElement, caretPosition, caretPosition);
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
        if (this.noRightClick) {
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
        console.log(event.keyValue);
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
                if (this.caretPosition > this.keyboardInput.nativeElement.value.length) {
                    this.virtualKeyboardService.setCaretPosition(this.keyboardInput.nativeElement.value.length);
                    this.caretPosition = this.keyboardInput.nativeElement.value.length;
                }
                console.log("backspace" + this.caretPosition);
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
            case 'Spacebar':
                this.handleNormalKey(' ');
                break;
            case 'Subtract':
                this.handleNormalKey('-');
                break;
            case 'Divide':
                this.handleNormalKey('/');
                break;
            case 'Multiply':
                this.handleNormalKey('*');
                break;
            case 'Add':
                this.handleNormalKey('+');
                break;
            case 'Del':
                this.handleNormalKey('.');
                break;
            case 'ö':
                this.handleNormalKey('ö');
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
        // let event2 = document.createEvent("KeyboardEvent");
        // event2.initEvent("keydown", true, true);
        // //event2.
        // // args: string type, boolean bubbles, boolean cancelable
        // this.inputElement.nativeElement.dispatchEvent(event);
        // Simulate all needed events on base element
        // this.inputElement.nativeElement.dispatchEvent(new KeyboardEvent('keydown', eventInit));
        // this.inputElement.nativeElement.dispatchEvent(new KeyboardEvent('keypress', eventInit));
        // this.inputElement.nativeElement.dispatchEvent(new Event('input', { bubbles: true }));
        // this.inputElement.nativeElement.dispatchEvent(new KeyboardEvent('keyup', eventInit));
        this.dispatchEvent("KeyboardEvent", 'keydown', eventInit);
        this.dispatchEvent("KeyboardEvent", 'keypress', eventInit);
        this.dispatchEvent("Event", 'input', { bubbles: true });
        this.dispatchEvent("KeyboardEvent", 'keyup', eventInit);
        // And set focus to input
        this.keyboardInput.nativeElement.focus();
    };
    VirtualKeyboardComponent.prototype.dispatchEvent = function (name, type, eventInit) {
        var event = document.createEvent(name);
        event.initEvent(type, eventInit.bubbles, eventInit.cancelable);
        this.inputElement.nativeElement.dispatchEvent(event);
    };
    VirtualKeyboardComponent.prototype.keyUp = function ($event) {
        /*
        Fix IE
        */
        var keyvalue = $event.key;
        if ($event.key == "Spacebar" || $event.key == "SpaceBar") {
            keyvalue = ' ';
        }
        if ($event.key == "Subtract") {
            keyvalue = '-';
        }
        if ($event.key == "Multiply") {
            keyvalue = '*';
        }
        if ($event.key == "Divide") {
            keyvalue = '/';
        }
        if ($event.key == "Add") {
            keyvalue = '+';
        }
        if ($event.key == "Del") {
            keyvalue = '.';
        }
        var keyPressInterface = {
            key: "" + $event.keyCode,
            keyValue: keyvalue,
            special: !this.isNormalLetter($event.keyCode)
        };
        this.keyPress(keyPressInterface);
        $event.preventDefault();
    };
    VirtualKeyboardComponent.prototype.isNormalLetter = function (keycode) {
        return (keycode > 47 && keycode < 58) ||
            keycode == 32 ||
            (keycode > 64 && keycode < 123) ||
            (keycode > 95 && keycode < 112) ||
            (keycode > 185 && keycode < 193) ||
            (keycode > 218 && keycode < 234) ||
            keycode == 252 || keycode == 163 ||
            (keycode > 32 && keycode < 64);
    };
    VirtualKeyboardComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'virtual-keyboard',
                    template: "\n    <div class=\"container test\" (onBeforeMenuOpen)=\"onBefore($event)\" [sh-context]=\"menuItems\">\n      <div fxLayout=\"column\">\n        <md-input-container>\n          <button class=\"close\" color=\"primary\" md-mini-fab\n            (mouseup)=\"confirmDispatch()\"\n\t    tabindex=\"-1\"\n          >\n\t\t\t<md-icon *ngIf=\"!isIE\">check</md-icon>\n\t\t\t<span *ngIf=\"isIE\"></span>\n          </button>\n    \n          <input type=\"{{ type }}\"\n            mdInput\n            #keyboardInput\n            (click)=\"updateCaretPosition()\"\n            [(ngModel)]=\"inputElement.nativeElement.value\" placeholder=\"{{ placeholder }}\"\n            [maxLength]=\"maxLength\"\n            autofocus\n\t\t\ttabindex=\"1\"\n\t\t\t(keypress)=\"keyUp($event)\"\n\t\t\tstyle=\"width: calc(100% - 90px);background-position-x: 100%;\"\n\t\t/>\n        </md-input-container>\n    \n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\"\n          *ngFor=\"let row of layout; let rowIndex = index\"\n          [attr.data-index]=\"rowIndex\"\n        >\n          <virtual-keyboard-key\n            *ngFor=\"let key of row; let keyIndex = index\"\n            [key]=\"key\"\n            [disabled]=\"disabled\"\n            [attr.data-index]=\"keyIndex\"\n            (keyPress)=\"keyPress($event)\"\n          ></virtual-keyboard-key>\n        </div>\n\t  </div>\n    </div>\n  ",
                    styles: ["\n    .close {\n      position: relative;\n      float: right;\n      top: -16px;\n      right: 0;\n      margin-bottom: -40px;\n    }\n  \n    .mat-input-container {\n      margin: -16px 0;\n      font-size: 32px;\n    }\n  \n    .mat-input-element:disabled {\n      color: currentColor;\n    }\n\n    :host /deep/ .mat-input-placeholder {\n      top: 10px !important;\n      font-size: 24px !important;\n\t}\n\t/* fallback */\n\t@font-face {\n\t  font-family: 'Material Icons';\n\t  font-style: normal;\n\t  font-weight: 400;\n\t  src: url(./assets/fonts/font.woff2) format('woff2');\n\t}\n\t\n\t.material-icons {\n\t  font-family: 'Material Icons';\n\t  font-weight: normal;\n\t  font-style: normal;\n\t  font-size: 24px;\n\t  line-height: 1;\n\t  letter-spacing: normal;\n\t  text-transform: none;\n\t  display: inline-block;\n\t  white-space: nowrap;\n\t  word-wrap: normal;\n\t  direction: ltr;\n\t  -webkit-font-feature-settings: 'liga';\n\t  -webkit-font-smoothing: antialiased;\n\t}\n  "]
                },] },
    ];
    /** @nocollapse */
    VirtualKeyboardComponent.ctorParameters = function () { return [
        { type: material_1.MdDialogRef, },
        { type: virtual_keyboard_service_1.VirtualKeyboardService, },
    ]; };
    VirtualKeyboardComponent.propDecorators = {
        'keyboardInput': [{ type: core_1.ViewChild, args: ['keyboardInput',] },],
        'confirm': [{ type: core_1.Output },],
    };
    return VirtualKeyboardComponent;
}());
exports.VirtualKeyboardComponent = VirtualKeyboardComponent;
//# sourceMappingURL=virtual-keyboard.component.js.map