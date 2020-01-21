import { Directive, ElementRef, HostListener, Input, EventEmitter, Output } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { VirtualKeyboardComponent } from './virtual-keyboard.component';
import {
  alphanumericKeyboard,
  alphanumericKeyboardSwiss,
  alphanumericKeyboardSwissAccent,
  alphanumericNordicKeyboard,
  extendedKeyboard,
  extendedNordicKeyboard,
  KeyboardLayout,
  numericKeyboard,
  phoneKeyboard
} from './layouts';

@Directive({
  selector: '[ng-virtual-keyboard]'
})

export class NgVirtualKeyboardDirective {
  private opened = false;
  private focus = true;
  public dialogRef:MdDialogRef<VirtualKeyboardComponent>;
  public virtualKeyboardComponent:VirtualKeyboardComponent ;

  @Input('ng-virtual-keyboard-layout') layout: KeyboardLayout|string;
  @Input('ng-virtual-keyboard-placeholder') placeholder: string;
  @Input('ng-virtual-keyboard-type') type: string;
  @Input('right-click-disabled') rcDisabled: boolean;

  @HostListener('window:blur')
  onWindowBlur() {
    this.focus = false;
  }

  @HostListener('window:focus')
  onWindowFocus() {
    setTimeout(() => {
      this.focus = true;
    }, 0);
  }

  @HostListener('focus')
  onFocus() {
    this.openKeyboard();
  }

  @HostListener('click')
  onClick() {
    this.openKeyboard();
  }

  /**
   * Constructor of the class.
   *
   * @param {ElementRef}  element
   * @param {MdDialog}    dialog
   */
  public constructor(
    private element: ElementRef,
    private dialog: MdDialog,
  ) { }

  /**
   * Method to open virtual keyboard
   */
  public openKeyboard() {
    if (!this.opened && this.focus) {
      this.opened = true;

      this.dialogRef = this.dialog.open(VirtualKeyboardComponent);
      this.virtualKeyboardComponent = this.dialogRef.componentInstance ;
      this.dialogRef.componentInstance.inputElement = this.element;
      this.dialogRef.componentInstance.layout = this.getLayout();
	  this.dialogRef.componentInstance.placeholder = this.getPlaceHolder();
	  this.dialogRef.componentInstance.type = this.getType();
    this.dialogRef.componentInstance.noRightClick = this.getRightClickDisabled();
    this.virtualKeyboardComponent.virtualKeyboardService.setCaretPosition(this.virtualKeyboardComponent.keyboardInput.nativeElement.selectionStart) ;

      this.dialogRef
        .afterClosed()
        .subscribe(() => {
          setTimeout(() => {
            this.opened = false;
          }, 0);
        });
    }
  }

  public closeKeyBoard() {
    if(this.opened) {
      this.dialogRef.close()
    }
  }

  /**
   * Getter for used keyboard layout.
   *
   * @returns {KeyboardLayout}
   */
  public getLayout(): KeyboardLayout {
    let layout;

    switch (this.layout) {
	  case 'alphanumericSwiss':
		layout = alphanumericKeyboardSwiss;
		break;
	  case 'alphanumericSwissAccent':
		layout = alphanumericKeyboardSwissAccent;
		break;
      case 'alphanumeric':
        layout = alphanumericKeyboard;
        break;
      case 'alphanumericNordic':
        layout = alphanumericNordicKeyboard;
        break;
      case 'extended':
        layout = extendedKeyboard;
        break;
      case 'extendedNordic':
        layout = extendedNordicKeyboard;
        break;
      case 'numeric':
        layout = numericKeyboard;
        break;
      case 'phone':
        layout = phoneKeyboard;
        break;
      default:
        layout = this.layout;
        break;
    }

    return layout;
  }

  /**
   * Getter for used placeholder for virtual keyboard input field.
   *
   * @returns {string}
   */
  public getPlaceHolder(): string {
    return this.placeholder ? this.placeholder : this.element.nativeElement.placeholder;
  }

  /**
   * Getter for used type for virtual keyboard input field.
   *
   * @returns {string}
   */
  public getType(): string {
    return this.type ? this.type : this.element.nativeElement.type;
  }

  /**
   * Getter for disabled right click
   *
   * @returns {boolean}
   */
  public getRightClickDisabled(): boolean {
    return this.rcDisabled;
  }
}
