"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var layouts_1 = require("./layouts");
//	  //src: url(https://fonts.gstatic.com/s/materialicons/v30/2fcrYFNaTjcS6g4U3t-Y5UEw0lE80llgEseQY3FEmqw.woff2) format('woff2');
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
        this.isIE = /msie\s|trident\/|notedge\//i.test(window.navigator.userAgent);
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
        console.log(this.keyValue);
        console.log(this.special);
        if (this.special) {
            switch (this.keyValue) {
                case "Backspace":
                    if (this.isIE) {
                        this.text = "Del";
                    }
                    else {
                        this.icon = layouts_1.specialKeyIcons.Backspace;
                    }
                    break;
                case "Enter":
                    if (this.isIE) {
                        this.text = "Enter";
                    }
                    else {
                        this.icon = layouts_1.specialKeyIcons.Enter;
                    }
                    break;
                case "Escape":
                    if (this.isIE) {
                        this.text = "Escape";
                    }
                    else {
                        this.icon = layouts_1.specialKeyIcons.Escape;
                    }
                    break;
                case "Shift":
                    if (this.isIE) {
                        this.text = "Shift";
                    }
                    else {
                        this.icon = layouts_1.specialKeyIcons.Shift;
                    }
                    break;
                case "SpaceBar":
                    if (this.isIE) {
                        this.text = "Space";
                    }
                    else {
                        this.icon = layouts_1.specialKeyIcons.SpaceBar;
                    }
                    break;
                case "CapsLock":
                    this.text = layouts_1.specialKeyTexts.CapsLock;
                    break;
                case "Accent":
                    this.text = layouts_1.specialKeyTexts.Accent;
                    break;
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
    VirtualKeyboardKeyComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'virtual-keyboard-key',
                    template: "\n    <button\n      md-raised-button\n      color=\"primary\"\n      fxFlex=\"{{ flexValue }}\"\n      [class.spacer]=\"spacer\"\n      [disabled]=\"isDisabled()\"\n\t  (click)=\"onKeyPress()\"\n\t  \n    >\n      <span *ngIf=\"!special\">{{ keyValue }}</span>\n    \n      <span *ngIf=\"special\">\n        <md-icon  style=\"font-feature-settings: 'liga';\" *ngIf=\"icon\">{{ icon }}</md-icon>\n    \n        {{ text }}\n      </span>\n    </button>\n  ",
                    styles: ["\n    .mat-button,\n    .mat-icon-button,\n    .mat-raised-button {\n      min-width: 64px;\n      min-height: 64px;\n      padding: 0;\n      margin: 2px;\n      font-size: 32px;\n      line-height: 32px;\n    }\n    \n    .mat-button.spacer,\n    .mat-icon-button.spacer,\n    .mat-raised-button.spacer {\n      background-color: transparent;\n\t}\n\t\n\t/* fallback */\n\t@font-face {\n\t  font-family: 'Material Icons';\n\t  font-style: normal;\n\t  font-weight: 400;\n\t  src: url(./assets/fonts/font.woff2) format('woff2');\n\t}\n\t\n\t.material-icons {\n\t  font-family: 'Material Icons';\n\t  font-weight: normal;\n\t  font-style: normal;\n\t  font-size: 24px;\n\t  line-height: 1;\n\t  letter-spacing: normal;\n\t  text-transform: none;\n\t  display: inline-block;\n\t  white-space: nowrap;\n\t  word-wrap: normal;\n\t  direction: ltr;\n\t  -webkit-font-feature-settings: 'liga';\n\t  -webkit-font-smoothing: antialiased;\n\t}\n  "]
                },] },
    ];
    /** @nocollapse */
    VirtualKeyboardKeyComponent.ctorParameters = function () { return []; };
    VirtualKeyboardKeyComponent.propDecorators = {
        'key': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'keyPress': [{ type: core_1.Output },],
    };
    return VirtualKeyboardKeyComponent;
}());
exports.VirtualKeyboardKeyComponent = VirtualKeyboardKeyComponent;
//# sourceMappingURL=virtual-keyboard-key.component.js.map