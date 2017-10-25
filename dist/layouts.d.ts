export declare type KeyboardLayout = Array<Array<string>>;
export declare const alphanumericKeyboardSwiss: KeyboardLayout;
export declare const alphanumericKeyboardSwissAccent: KeyboardLayout;
export declare const alphanumericKeyboard: KeyboardLayout;
export declare const alphanumericNordicKeyboard: KeyboardLayout;
export declare const extendedKeyboard: KeyboardLayout;
export declare const extendedNordicKeyboard: KeyboardLayout;
export declare const numericKeyboard: KeyboardLayout;
export declare const phoneKeyboard: KeyboardLayout;
export declare const specialKeys: Array<string>;
export declare const specialKeyIcons: {
    Enter: string;
    Backspace: string;
    Escape: string;
    SpaceBar: string;
    Shift: string;
};
export declare const specialKeyTexts: {
    CapsLock: string;
    Accent: string;
};
export declare const notDisabledSpecialKeys: string[];
/**
 * Helper function to determine if given key is 'Spacer' or not.
 *
 * @param {string}  key
 * @returns {boolean}
 */
export declare function isSpacer(key: string): boolean;
/**
 * Helper function to determine if given key is special or not.
 *
 * @param {string}  key
 * @returns {boolean}
 */
export declare function isSpecial(key: string): boolean;
/**
 * Function to change specified layout to CapsLock layout.
 *
 * @param {KeyboardLayout}  layout
 * @param {boolean}         caps
 * @returns {KeyboardLayout}
 */
export declare function keyboardCapsLockLayout(layout: KeyboardLayout, caps: boolean): KeyboardLayout;
/**
 * Function to change specified layout to Accent layout.
 *
 * @param {KeyboardLayout}  layout
 * @param {boolean}         accent
 * @returns {KeyboardLayout}
 */
export declare function keyboardAccentLayout(layout: KeyboardLayout, accent: boolean): KeyboardLayout;
