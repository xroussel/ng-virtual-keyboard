import { Component, ElementRef, OnDestroy, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { IShContextMenuItem, BeforeMenuEvent } from 'ng2-right-click-menu';

import { keyboardCapsLockLayout, KeyboardLayout, keyboardAccentLayout } from './layouts';
import { VirtualKeyboardService } from './virtual-keyboard.service';
import { KeyPressInterface } from './key-press.interface';

@Component({
	selector: 'virtual-keyboard',
	template: `
    <div class="container test" (onBeforeMenuOpen)="onBefore($event)" [sh-context]="menuItems">
      <div fxLayout="column">
        <md-input-container>
          <button class="close" color="primary" md-mini-fab
            (mouseup)="confirmDispatch()"
            tabindex="-1"
          >
            <md-icon>check</md-icon>
          </button>
    
          <input type="{{ type }}"
            mdInput
            #keyboardInput
            (click)="updateCaretPosition()"
            [(ngModel)]="inputElement.nativeElement.value" placeholder="{{ placeholder }}"
            [maxLength]="maxLength"
            autofocus
			tabindex="1"
			(keypress)="keyUp($event)"
          />
        </md-input-container>
    
        <div fxLayout="row" fxLayoutAlign="center center"
          *ngFor="let row of layout; let rowIndex = index"
          [attr.data-index]="rowIndex"
        >
          <virtual-keyboard-key
            *ngFor="let key of row; let keyIndex = index"
            [key]="key"
            [disabled]="disabled"
            [attr.data-index]="keyIndex"
            (keyPress)="keyPress($event)"
          ></virtual-keyboard-key>
        </div>
	  </div>
    </div>
  `,
	styles: [`
    .close {
      position: relative;
      float: right;
      top: -16px;
      right: 0;
      margin-bottom: -40px;
    }
  
    .mat-input-container {
      margin: -16px 0;
      font-size: 32px;
    }
  
    .mat-input-element:disabled {
      color: currentColor;
    }

    :host /deep/ .mat-input-placeholder {
      top: 10px !important;
      font-size: 24px !important;
	}
	/* fallback */
	@font-face {
	  font-family: 'Material Icons';
	  font-style: normal;
	  font-weight: 400;
	  src: url(./assets/fonts/font.woff2) format('woff2');
	}
	
	.material-icons {
	  font-family: 'Material Icons';
	  font-weight: normal;
	  font-style: normal;
	  font-size: 24px;
	  line-height: 1;
	  letter-spacing: normal;
	  text-transform: none;
	  display: inline-block;
	  white-space: nowrap;
	  word-wrap: normal;
	  direction: ltr;
	  -webkit-font-feature-settings: 'liga';
	  -webkit-font-smoothing: antialiased;
	}
  `]
})

export class VirtualKeyboardComponent implements OnInit, OnDestroy {
	@ViewChild('keyboardInput') keyboardInput: ElementRef;
	@Output() confirm = new EventEmitter();

	public inputElement: ElementRef;
	public layout: KeyboardLayout;
	public layoutStart: KeyboardLayout;
	public placeholder: string;
	public disabled: boolean;
	public maxLength: number | string;
	public type: string;
	public noRightClick: boolean;

	private caretPosition: number;
	private shift = false;

	private password = false;
	menuItems:IShContextMenuItem[] ;

	/**
	 * Helper method to set cursor in input to correct place.
	 *
	 * @param {HTMLInputElement|HTMLTextAreaElement}  input
	 * @param {number}                                start
	 * @param {number}                                end
	 */
	private static setSelectionRange(
		input: any,
		start: number,
		end: number
	): void {
		if (input.setSelectionRange) {
			input.focus();
			input.setSelectionRange(start, end);

		} else if (input.createTextRange) {
			const range = input.createTextRange();

			range.collapse(true);
			range.moveEnd('character', end);
			range.moveStart('character', start);
			range.select();
		}
	}

	/**
	 * Constructor of the class.
	 *
	 * @param {MdDialogRef<VirtualKeyboardComponent>} dialogRef
	 * @param {VirtualKeyboardService}                virtualKeyboardService
	 */
	public constructor(
		public dialogRef: MdDialogRef<VirtualKeyboardComponent>,
		private virtualKeyboardService: VirtualKeyboardService
	) { }

	/**
	 * On init life cycle hook, this will do following:
	 *  1) Set focus to virtual keyboard input field
	 *  2) Subscribe to following
	 *    2.1) Shift key, this is needed in keyboard event dispatches
	 *    2.2) CapsLock key, this will change keyboard layout
	 *    2.3) Caret position in virtual keyboard input
	 *  3) Reset of possible previously tracked caret position
	 */
	public ngOnInit(): void {

		this.menuItems = [
		];
		this.layoutStart = this.layout;
		setTimeout(() => {
			this.keyboardInput.nativeElement.focus();
		}, 0);

		this.virtualKeyboardService.shift$.subscribe((shift: boolean) => {
			this.shift = shift;
		});

		this.virtualKeyboardService.capsLock$.subscribe((capsLock: boolean) => {
			this.layout = keyboardCapsLockLayout(this.layout, capsLock);
		});

		this.virtualKeyboardService.accentLock$.subscribe((accent: boolean) => {
			this.layout = keyboardAccentLayout(this.layoutStart, accent);
		});

		this.virtualKeyboardService.caretPosition$.subscribe((caretPosition: number) => {
			this.caretPosition = caretPosition;

			setTimeout(() => {
				VirtualKeyboardComponent.setSelectionRange(this.keyboardInput.nativeElement, caretPosition, caretPosition);
			}, 0);
		});

		if (this.inputElement.nativeElement.value.length) {
			this.virtualKeyboardService.setCaretPosition(this.inputElement.nativeElement.value.length);
		}

		this.maxLength = this.inputElement.nativeElement.maxLength > 0 ? this.inputElement.nativeElement.maxLength : '';

		this.checkDisabled();
	}

	/**
	 * On destroy life cycle hook, in this we want to reset virtual keyboard service states on following:
	 *  - Shift
	 *  - CapsLock
	 */
	public ngOnDestroy(): void {
		this.virtualKeyboardService.reset();
	}

	public onBefore($event: BeforeMenuEvent) {
		if (this.noRightClick) {
			$event.event.preventDefault();
		} else {
			$event.open();
		}
		
	}

	/**
	 * Method to close virtual keyboard dialog
	 */
	public close(): void {
		this.dialogRef.close();
	}

	private confirmDispatch() {
		this.confirm.emit();
		this.dialogRef.close();
	}

	/**
	 * Method to update caret position. This is called on click event in virtual keyboard input element.
	 */
	public updateCaretPosition(): void {
		this.virtualKeyboardService.setCaretPosition(this.keyboardInput.nativeElement.selectionStart);
	}

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
	public keyPress(event: KeyPressInterface): void {
		if (event.special) {
			this.handleSpecialKey(event);

			this.dispatchEvents(event);

		} else {
			this.handleNormalKey(event.keyValue);

			this.dispatchEvents(event);

			// Toggle shift if it's activated
			if (this.shift) {
				this.virtualKeyboardService.toggleShift();
			}
		}

		this.checkDisabled();
	}

	/**
	 * Method to check is virtual keyboard input is disabled.
	 */
	private checkDisabled(): void {
		const maxLength = this.inputElement.nativeElement.maxLength;
		const valueLength = this.inputElement.nativeElement.value.length;

		this.disabled = maxLength > 0 && valueLength >= maxLength;
	}

	/**
	 * Method to handle "normal" key press event, this will add specified character to input value.
	 *
	 * @param {string}  keyValue
	 */
	private handleNormalKey(keyValue: string): void {
		let value = '';

		// We have caret position, so attach character to specified position
		if (!isNaN(this.caretPosition)) {
			value = [
				this.inputElement.nativeElement.value.slice(0, this.caretPosition),
				keyValue,
				this.inputElement.nativeElement.value.slice(this.caretPosition)
			].join('');

			// Update caret position
			this.virtualKeyboardService.setCaretPosition(this.caretPosition + 1);
		} else {
			value = `${this.inputElement.nativeElement.value}${keyValue}`;
		}

		// And finally set new value to input
		this.inputElement.nativeElement.value = value;
	}

	/**
	 * Method to handle "Special" key press events.
	 *  1) Enter
	 *  2) Escape, close virtual keyboard
	 *  3) Backspace, remove last character from input value
	 *  4) CapsLock, toggle current layout state
	 *  6) Shift, toggle current layout state
	 *  5) SpaceBar
	 */
	private handleSpecialKey(event: KeyPressInterface): void {
		switch (event.keyValue) {
			case 'Enter':
				this.confirmDispatch()
				this.close();
				break;
			case 'Escape':
				this.close();
				break;
			case 'Backspace':
				const currentValue = this.inputElement.nativeElement.value;

				// We have a caret position, so we need to remove char from that position
				if (!isNaN(this.caretPosition)) {
					// And current position must > 0
					if (this.caretPosition > 0) {
						const start = currentValue.slice(0, this.caretPosition - 1);
						const end = currentValue.slice(this.caretPosition);

						this.inputElement.nativeElement.value = `${start}${end}`;

						// Update caret position
						this.virtualKeyboardService.setCaretPosition(this.caretPosition - 1);
					}
				} else {
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
	}

	/**
	 * Method to dispatch necessary keyboard events to current input element.
	 *
	 * @see https://w3c.github.io/uievents/tools/key-event-viewer.html
	 *
	 * @param {KeyPressInterface} event
	 */
	private dispatchEvents(event: KeyPressInterface) {
		const eventInit: KeyboardEventInit = {
			bubbles: true,
			cancelable: true,
			shiftKey: this.shift,
			key: event.keyValue,
			code: `Key${event.keyValue.toUpperCase()}}`,
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
	}

	private dispatchEvent(name: string, type: string, eventInit: KeyboardEventInit): void {
		let event = document.createEvent(name);
		event.initEvent(type, eventInit.bubbles, eventInit.cancelable);
		this.inputElement.nativeElement.dispatchEvent(event);
	}

	public keyUp($event: KeyboardEvent) {

		
		var keyPressInterface:KeyPressInterface = {
			key: ""+ $event.keyCode,
			keyValue: $event.key,
			special: !this.isNormalLetter($event.keyCode)
		};
		
		
		this.keyPress(keyPressInterface);
		$event.preventDefault();
	}

	public isNormalLetter(keycode: number):boolean {
		return (keycode > 47 && keycode < 58) || // number keys
			keycode == 32 || // spacebar key (if you want to allow carriage returns)
			(keycode > 64 && keycode < 123) || // letter keys
			(keycode > 95 && keycode < 112) || // numpad keys
			(keycode > 185 && keycode < 193) || // ;=,-./` (in order)
			(keycode > 218 && keycode < 234) ||
			keycode == 252 || keycode == 163 ||
			(keycode > 32 && keycode < 64);
	}
}
