import { ReplaySubject } from 'rxjs/ReplaySubject';
export declare class VirtualKeyboardService {
    shift$: ReplaySubject<boolean>;
    capsLock$: ReplaySubject<boolean>;
    accentLock$: ReplaySubject<boolean>;
    caretPosition$: ReplaySubject<number>;
    private capsLock;
    private shift;
    private accent;
    /**
     * Setter for Shift value, note that this also sets CapsLock value.
     *
     * @param {boolean} value
     */
    setShift(value: boolean): void;
    /**
     * Setter for CapsLock value
     *
     * @param {boolean} value
     */
    setCapsLock(value: boolean): void;
    /**
     * Setter for Accent value
     *
     * @param {boolean} value
     */
    setAccent(value: boolean): void;
    /**
     * Toggle for Shift, note that this also toggles CapsLock
     */
    toggleShift(): void;
    /**
     * Toggle for CapsLock
     */
    toggleCapsLock(): void;
    /**
     * Toggle for Accent
     */
    toggleAccentLock(): void;
    /**
     * Setter for caret position value.
     *
     * @param {number}  position
     */
    setCaretPosition(position: number): void;
    /**
     * Method to reset Shift and CapsLock values to default ones.
     */
    reset(): void;
}
