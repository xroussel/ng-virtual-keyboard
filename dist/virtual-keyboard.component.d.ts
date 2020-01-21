import { ElementRef, OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { IShContextMenuItem, BeforeMenuEvent } from 'ng2-right-click-menu';
import { KeyboardLayout } from './layouts';
import { VirtualKeyboardService } from './virtual-keyboard.service';
import { KeyPressInterface } from './key-press.interface';
export declare class VirtualKeyboardComponent implements OnInit, OnDestroy {
    dialogRef: MdDialogRef<VirtualKeyboardComponent>;
    virtualKeyboardService: VirtualKeyboardService;
    keyboardInput: ElementRef;
    confirm: EventEmitter<{}>;
    inputElement: ElementRef;
    layout: KeyboardLayout;
    layoutStart: KeyboardLayout;
    placeholder: string;
    disabled: boolean;
    maxLength: number | string;
    type: string;
    noRightClick: boolean;
    private caretPosition;
    private shift;
    private password;
    menuItems: IShContextMenuItem[];
    isIE: boolean;
    /**
     * Helper method to set cursor in input to correct place.
     *
     * @param {HTMLInputElement|HTMLTextAreaElement}  input
     * @param {number}                                start
     * @param {number}                                end
     */
    private static setSelectionRange(input, start, end);
    /**
     * Constructor of the class.
     *
     * @param {MdDialogRef<VirtualKeyboardComponent>} dialogRef
     * @param {VirtualKeyboardService}                virtualKeyboardService
     */
    constructor(dialogRef: MdDialogRef<VirtualKeyboardComponent>, virtualKeyboardService: VirtualKeyboardService);
    /**
     * On init life cycle hook, this will do following:
     *  1) Set focus to virtual keyboard input field
     *  2) Subscribe to following
     *    2.1) Shift key, this is needed in keyboard event dispatches
     *    2.2) CapsLock key, this will change keyboard layout
     *    2.3) Caret position in virtual keyboard input
     *  3) Reset of possible previously tracked caret position
     */
    ngOnInit(): void;
    /**
     * On destroy life cycle hook, in this we want to reset virtual keyboard service states on following:
     *  - Shift
     *  - CapsLock
     */
    ngOnDestroy(): void;
    onBefore($event: BeforeMenuEvent): void;
    /**
     * Method to close virtual keyboard dialog
     */
    close(): void;
    private confirmDispatch();
    /**
     * Method to update caret position. This is called on click event in virtual keyboard input element.
     */
    updateCaretPosition(): void;
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
    keyPress(event: KeyPressInterface): void;
    /**
     * Method to check is virtual keyboard input is disabled.
     */
    private checkDisabled();
    /**
     * Method to handle "normal" key press event, this will add specified character to input value.
     *
     * @param {string}  keyValue
     */
    private handleNormalKey(keyValue);
    /**
     * Method to handle "Special" key press events.
     *  1) Enter
     *  2) Escape, close virtual keyboard
     *  3) Backspace, remove last character from input value
     *  4) CapsLock, toggle current layout state
     *  6) Shift, toggle current layout state
     *  5) SpaceBar
     */
    private handleSpecialKey(event);
    /**
     * Method to dispatch necessary keyboard events to current input element.
     *
     * @see https://w3c.github.io/uievents/tools/key-event-viewer.html
     *
     * @param {KeyPressInterface} event
     */
    private dispatchEvents(event);
    private dispatchEvent(name, type, eventInit);
    keyUp($event: KeyboardEvent): void;
    isNormalLetter(keycode: number): boolean;
}
