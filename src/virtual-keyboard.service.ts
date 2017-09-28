import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class VirtualKeyboardService {
  public shift$: ReplaySubject<boolean> = new ReplaySubject(1);
  public capsLock$: ReplaySubject<boolean> = new ReplaySubject(1);
  public accentLock$: ReplaySubject<boolean> = new ReplaySubject(1);
  public caretPosition$: ReplaySubject<number> = new ReplaySubject(1);

  private capsLock = false;
  private shift = false;
  private accent = false;

  /**
   * Setter for Shift value, note that this also sets CapsLock value.
   *
   * @param {boolean} value
   */
  public setShift(value: boolean) {
    this.shift = value;
    this.shift$.next(this.shift);

	this.setCapsLock(this.shift);
	
  }

  /**
   * Setter for CapsLock value
   *
   * @param {boolean} value
   */
  public setCapsLock(value: boolean) {
    this.capsLock = value;
    this.capsLock$.next(value);
  }


  /**
   * Setter for Accent value
   *
   * @param {boolean} value
   */
  public setAccent(value: boolean) {
    this.accent = value;
    this.accentLock$.next(value);
  }

  /**
   * Toggle for Shift, note that this also toggles CapsLock
   */
  public toggleShift(): void {
    this.shift = !this.shift;
    this.shift$.next(this.shift);

    this.setCapsLock(this.shift);
  }

  /**
   * Toggle for CapsLock
   */
  public toggleCapsLock() {
    this.capsLock = !this.capsLock;
    this.capsLock$.next(this.capsLock);
  }

  /**
   * Toggle for Accent
   */
  public toggleAccentLock() {
    this.accent = !this.accent;
    this.accentLock$.next(this.accent);
  }

  /**
   * Setter for caret position value.
   *
   * @param {number}  position
   */
  public setCaretPosition(position: number) {
    this.caretPosition$.next(position);
  }

  /**
   * Method to reset Shift and CapsLock values to default ones.
   */
  public reset() {
    this.setShift(false);
  }
}
