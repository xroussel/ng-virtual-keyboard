import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { KeyPressInterface } from './key-press.interface';
import { isSpacer, isSpecial, notDisabledSpecialKeys, specialKeyIcons, specialKeyTexts } from './layouts';

@Component({
	selector: 'virtual-keyboard-key',
	template: `
    <button
      md-raised-button
      color="primary"
      fxFlex="{{ flexValue }}"
      [class.spacer]="spacer"
      [disabled]="isDisabled()"
	  (click)="onKeyPress()"
	  
    >
      <span *ngIf="!special">{{ keyValue }}</span>
    
      <span *ngIf="special">
        <md-icon  style="font-feature-settings: 'liga';" *ngIf="icon">{{ icon }}</md-icon>
    
        {{ text }}
      </span>
    </button>
  `,
	styles: [`
    .mat-button,
    .mat-icon-button,
    .mat-raised-button {
      min-width: 64px;
      min-height: 64px;
      padding: 0;
      margin: 2px;
      font-size: 32px;
      line-height: 32px;
    }
    
    .mat-button.spacer,
    .mat-icon-button.spacer,
    .mat-raised-button.spacer {
      background-color: transparent;
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
//	  //src: url(https://fonts.gstatic.com/s/materialicons/v30/2fcrYFNaTjcS6g4U3t-Y5UEw0lE80llgEseQY3FEmqw.woff2) format('woff2');
export class VirtualKeyboardKeyComponent implements OnInit {
	@Input() key: string;
	@Input() disabled: boolean;
	@Output() keyPress = new EventEmitter<KeyPressInterface>();

	public special = false;
	public spacer = false;
	public flexValue: string;
	public keyValue: string;
	public icon: string;
	public text: string;
	isIE: boolean;

	/**
	 * Constructor of the class.
	 */
	public constructor() { }

	/**
	 * On init life cycle hook, within this we'll initialize following properties:
	 *  - special
	 *  - keyValue
	 *  - flexValue
	 */
	public ngOnInit(): void {
		let multiplier = 1;
		let fix = 0;
		this.isIE = /msie\s|trident\/|notedge\//i.test(window.navigator.userAgent);

		if (this.key.length > 1) {
			this.spacer = isSpacer(this.key);
			this.special = isSpecial(this.key);

			const matches = /^(\w+)(:(\d+(\.\d+)?))?$/g.exec(this.key);

			this.keyValue = matches[1];

			if (matches[3]) {
				multiplier = parseFloat(matches[3]);
				fix = (multiplier - 1) * 4;
			}
		} else {
			this.keyValue = this.key;
		}

		console.log(this.keyValue);
		console.log(this.special);

		if (this.special) {



			switch (this.keyValue) {
				case "Backspace":
					if(this.isIE) {
						this.text = "Del";
					} else {
						this.icon = specialKeyIcons.Backspace;
					}
					break;
				case "Enter":
					if(this.isIE) {
						this.text = "Enter";
					} else {
						this.icon = specialKeyIcons.Enter;
					}
					break;
				case "Escape":
					if(this.isIE) {
						this.text = "Escape";
					} else {
						this.icon = specialKeyIcons.Escape;
					}
					break;
				case "Shift":
					if(this.isIE) {
						this.text = "Shift";
					} else {
						this.icon = specialKeyIcons.Shift;
					}
					break;
				case "SpaceBar":
					if(this.isIE) {
						this.text = "Space";
					} else {
						this.icon = specialKeyIcons.SpaceBar;
					}
					break;
				case "CapsLock":
					this.text = specialKeyTexts.CapsLock;
					break;
				case "Accent":
					this.text = specialKeyTexts.Accent;
					break;
			}
		}

		this.flexValue = `${multiplier * 64 + fix}px`;
	}

	/**
	 * Method to check if key is disabled or not.
	 *
	 * @returns {boolean}
	 */
	public isDisabled(): boolean {
		if (this.spacer) {
			return true;
		} else if (this.disabled && notDisabledSpecialKeys.indexOf(this.keyValue) !== -1) {
			return false;
		} else {
			return this.disabled;
		}
	}

	/**
	 * Method to handle actual "key" press from virtual keyboard.
	 *  1) Key is "Special", process special key event
	 *  2) Key is "Normal", append this key value to input
	 */
	public onKeyPress(): void {
		this.keyPress.emit({ special: this.special, keyValue: this.keyValue, key: this.key });
	}
}
