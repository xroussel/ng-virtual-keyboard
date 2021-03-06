import { ElementRef } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { VirtualKeyboardComponent } from './virtual-keyboard.component';
import { KeyboardLayout } from './layouts';
export declare class NgVirtualKeyboardDirective {
    private element;
    private dialog;
    private opened;
    private focus;
    dialogRef: MdDialogRef<VirtualKeyboardComponent>;
    virtualKeyboardComponent: VirtualKeyboardComponent;
    layout: KeyboardLayout | string;
    placeholder: string;
    type: string;
    rcDisabled: boolean;
    onWindowBlur(): void;
    onWindowFocus(): void;
    onFocus(): void;
    onClick(): void;
    /**
     * Constructor of the class.
     *
     * @param {ElementRef}  element
     * @param {MdDialog}    dialog
     */
    constructor(element: ElementRef, dialog: MdDialog);
    /**
     * Method to open virtual keyboard
     */
    openKeyboard(): void;
    closeKeyBoard(): void;
    /**
     * Getter for used keyboard layout.
     *
     * @returns {KeyboardLayout}
     */
    getLayout(): KeyboardLayout;
    /**
     * Getter for used placeholder for virtual keyboard input field.
     *
     * @returns {string}
     */
    getPlaceHolder(): string;
    /**
     * Getter for used type for virtual keyboard input field.
     *
     * @returns {string}
     */
    getType(): string;
    /**
     * Getter for disabled right click
     *
     * @returns {boolean}
     */
    getRightClickDisabled(): boolean;
}
