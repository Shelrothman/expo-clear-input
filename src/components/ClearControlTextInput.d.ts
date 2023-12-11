import { AccessibilityProps } from 'react-native';

/**
 * @interface ClearControlTextInputProps
 */
export interface ClearControlTextInputProps {
    // export interface ClearControlTextInputProps extends TextInputProps {


    /**
     * all cross-platform-compatible props 
     * from @type {import('react-native').TextInputProps} 
     * except for style, which are handled by this component
     */
    textInputProps?: AccessibilityProps & {
        // info: we dont need VIewProps here, because we are not rendering a View
        /**
         * Specifies whether fonts should scale to respect Text Size accessibility settings.
         * The default is `true`.
         */
        allowFontScaling?: boolean | undefined;

        /**
         * Can tell TextInput to automatically capitalize certain characters.
         *      characters: all characters,
         *      words: first letter of each word
         *      sentences: first letter of each sentence (default)
         *      none: don't auto capitalize anything
         *
         * @see https://reactnative.dev/docs/textinput#autocapitalize
         */
        autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;

        /**
         * Specifies autocomplete hints for the system, so it can provide autofill.
         * On Android, the system will always attempt to offer autofill by using heuristics to identify the type of content.
         * To disable autocomplete, set autoComplete to off.
         *
         * The following values work across platforms:
         *
         * - `additional-name`
         * - `address-line1`
         * - `address-line2`
         * - `cc-number`
         * - `country`
         * - `current-password`
         * - `email`
         * - `family-name`
         * - `given-name`
         * - `honorific-prefix`
         * - `honorific-suffix`
         * - `name`
         * - `new-password`
         * - `off`
         * - `one-time-code`
         * - `postal-code`
         * - `street-address`
         * - `tel`
         * - `username`
         *
         * The following values work on iOS only:
         *
         * - `nickname`
         * - `organization`
         * - `organization-title`
         * - `url`
         *
         * The following values work on Android only:
         *
         * - `birthdate-day`
         * - `birthdate-full`
         * - `birthdate-month`
         * - `birthdate-year`
         * - `cc-csc`
         * - `cc-exp`
         * - `cc-exp-day`
         * - `cc-exp-month`
         * - `cc-exp-year`
         * - `gender`
         * - `name-family`
         * - `name-given`
         * - `name-middle`
         * - `name-middle-initial`
         * - `name-prefix`
         * - `name-suffix`
         * - `password`
         * - `password-new`
         * - `postal-address`
         * - `postal-address-country`
         * - `postal-address-extended`
         * - `postal-address-extended-postal-code`
         * - `postal-address-locality`
         * - `postal-address-region`
         * - `sms-otp`
         * - `tel-country-code`
         * - `tel-national`
         * - `tel-device`
         * - `username-new`
         */
        autoComplete?: | 'additional-name' | 'address-line1' | 'address-line2' | 'birthdate-day' | 'birthdate-full' | 'birthdate-month' | 'birthdate-year' | 'cc-csc' | 'cc-exp' | 'cc-exp-day' | 'cc-exp-month' | 'cc-exp-year' | 'cc-number' | 'country' | 'current-password' | 'email' | 'family-name' | 'gender' | 'given-name' | 'honorific-prefix' | 'honorific-suffix' | 'name' | 'name-family' | 'name-given' | 'name-middle' | 'name-middle-initial' | 'name-prefix' | 'name-suffix' | 'new-password' | 'nickname' | 'one-time-code' | 'organization' | 'organization-title' | 'password' | 'password-new' | 'postal-address' | 'postal-address-country' | 'postal-address-extended' | 'postal-address-extended-postal-code' | 'postal-address-locality' | 'postal-address-region' | 'postal-code' | 'street-address' | 'sms-otp' | 'tel' | 'tel-country-code' | 'tel-national' | 'tel-device' | 'url' | 'username' | 'username-new' | 'off' | undefined;

        /**
         * If false, disables auto-correct.
         * The default value is true.
         */
        autoCorrect?: boolean | undefined;

        /**
         * If true, focuses the input on componentDidMount.
         * The default value is false.
         */
        autoFocus?: boolean | undefined;

        /**
         * If true, the text field will blur when submitted.
         * The default value is true.
         */
        blurOnSubmit?: boolean | undefined;

        /**
         * If true, caret is hidden. The default value is false.
         */
        caretHidden?: boolean | undefined;

        /**
         * If true, context menu is hidden. The default value is false.
         */
        contextMenuHidden?: boolean | undefined;

        /**
         * Provides an initial value that will change when the user starts typing.
         * Useful for simple use-cases where you don't want to deal with listening to events
         * and updating the value prop to keep the controlled state in sync.
         */
        defaultValue?: string | undefined;

        /**
         * If false, text is not editable. The default value is true.
         */
        editable?: boolean | undefined;

        /**
         * enum("default", 'numeric', 'email-address', "ascii-capable", 'numbers-and-punctuation', 'url', 'number-pad', 'phone-pad', 'name-phone-pad',
         * 'decimal-pad', 'twitter', 'web-search', 'visible-password')
         * Determines which keyboard to open, e.g.numeric.
         * The following values work across platforms: - default - numeric - email-address - phone-pad
         * The following values work on iOS: - ascii-capable - numbers-and-punctuation - url - number-pad - name-phone-pad - decimal-pad - twitter - web-search
         * The following values work on Android: - visible-password
         */
        keyboardType?: KeyboardTypeOptions | undefined;

        /**
         * Works like the inputmode attribute in HTML, it determines which keyboard to open, e.g. numeric and has precedence over keyboardType.
         */
        inputMode?: InputModeOptions | undefined;

        /**
         * Limits the maximum number of characters that can be entered.
         * Use this instead of implementing the logic in JS to avoid flicker.
         */
        maxLength?: number | undefined;

        /**
         * If true, the text input can be multiple lines. The default value is false.
         */
        multiline?: boolean | undefined;

        /**
         * Callback that is called when the text input is blurred
         */
        onBlur?:
        | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
        | undefined;

        /**
         * Callback that is called when the text input's text changes.
         */
        onChange?:
        | ((e: NativeSyntheticEvent<TextInputChangeEventData>) => void)
        | undefined;

        /**
         * Callback that is called when the text input's text changes.
         * Changed text is passed as an argument to the callback handler.
         */
        onChangeText?: ((text: string) => void) | undefined;

        /**
         * Callback that is called when the text input's content size changes.
         * This will be called with
         * `{ nativeEvent: { contentSize: { width, height } } }`.
         *
         * Only called for multiline text inputs.
         */
        onContentSizeChange?:
        | ((e: NativeSyntheticEvent<TextInputContentSizeChangeEventData>) => void)
        | undefined;

        /**
         * Callback that is called when text input ends.
         */
        onEndEditing?:
        | ((e: NativeSyntheticEvent<TextInputEndEditingEventData>) => void)
        | undefined;

        /**
         * Callback that is called when a touch is engaged.
         */
        onPressIn?: ((e: NativeSyntheticEvent<NativeTouchEvent>) => void) | undefined;

        /**
         * Callback that is called when a touch is released.
         */
        onPressOut?:
        | ((e: NativeSyntheticEvent<NativeTouchEvent>) => void)
        | undefined;

        /**
         * Callback that is called when the text input is focused
         */
        onFocus?:
        | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
        | undefined;

        /**
         * Callback that is called when the text input selection is changed.
         */
        onSelectionChange?:
        | ((e: NativeSyntheticEvent<TextInputSelectionChangeEventData>) => void)
        | undefined;

        /**
         * Callback that is called when the text input's submit button is pressed.
         */
        onSubmitEditing?:
        | ((e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void)
        | undefined;

        /**
         * Callback that is called on new text input with the argument
         *  `{ nativeEvent: { text, previousText, range: { start, end } } }`.
         *
         * This prop requires multiline={true} to be set.
         */
        onTextInput?:
        | ((e: NativeSyntheticEvent<TextInputTextInputEventData>) => void)
        | undefined;

        /**
         * Invoked on content scroll with
         *  `{ nativeEvent: { contentOffset: { x, y } } }`.
         *
         * May also contain other properties from ScrollEvent but on Android contentSize is not provided for performance reasons.
         */
        onScroll?:
        | ((e: NativeSyntheticEvent<TextInputScrollEventData>) => void)
        | undefined;

        /**
         * Callback that is called when a key is pressed.
         * This will be called with
         *  `{ nativeEvent: { key: keyValue } }`
         * where keyValue is 'Enter' or 'Backspace' for respective keys and the typed-in character otherwise including ' ' for space.
         *
         * Fires before onChange callbacks.
         * Note: on Android only the inputs from soft keyboard are handled, not the hardware keyboard inputs.
         */
        onKeyPress?:
        | ((e: NativeSyntheticEvent<TextInputKeyPressEventData>) => void)
        | undefined;

        /**
         * The string that will be rendered before text input has been entered
         */
        placeholder?: string | undefined;

        /**
         * The text color of the placeholder string
         */
        placeholderTextColor?: ColorValue | undefined;

        /**
         * enum('default', 'go', 'google', 'join', 'next', 'route', 'search', 'send', 'yahoo', 'done', 'emergency-call')
         * Determines how the return key should look.
         */
        returnKeyType?: ReturnKeyTypeOptions | undefined;

        /**
         * Determines what text should be shown to the return key on virtual keyboards.
         * Has precedence over the returnKeyType prop.
         */
        enterKeyHint?: EnterKeyHintTypeOptions | undefined;

        /**
         * If true, the text input obscures the text entered so that sensitive text like passwords stay secure.
         * The default value is false.
         */
        secureTextEntry?: boolean | undefined;

        /**
         * If true, all text will automatically be selected on focus
         */
        selectTextOnFocus?: boolean | undefined;

        /**
         * The start and end of the text input's selection. Set start and end to
         * the same value to position the cursor.
         */
        selection?: { start: number; end?: number | undefined } | undefined;

        /**
         * The highlight (and cursor on ios) color of the text input
         */
        selectionColor?: ColorValue | undefined;


        /**
         * Align the input text to the left, center, or right sides of the input field.
         */
        textAlign?: 'left' | 'center' | 'right' | undefined;

        /**
         * Used to locate this view in end-to-end tests
         */
        testID?: string | undefined;

        /**
         * Used to connect to an InputAccessoryView. Not part of react-natives documentation, but present in examples and
         * code.
         * See https://reactnative.dev/docs/inputaccessoryview for more information.
         */
        inputAccessoryViewID?: string | undefined;

        /**
         * The value to show for the text input. TextInput is a controlled component,
         * which means the native value will be forced to match this value prop if provided.
         * For most uses this works great, but in some cases this may cause flickering - one common cause is preventing edits by keeping value the same.
         * In addition to simply setting the same value, either set editable={false},
         * or set/update maxLength to prevent unwanted edits without flicker.
         */
        value?: string | undefined;

        /**
         * Specifies largest possible scale a font can reach when allowFontScaling is enabled. Possible values:
         * - null/undefined (default): inherit from the parent node or the global default (0)
         * - 0: no max, ignore parent/global default
         * - >= 1: sets the maxFontSizeMultiplier of this node to this value
         */
        maxFontSizeMultiplier?: number | null | undefined;
    };

    /**
     * textColor - color of the text in the input
     */
    textColor?: string;

    /**
     * backgroundColor - color of the input background
     */
    backgroundColor?: string;

    /**
     * theme - dark or light background
     * @default 'dark'
     */
    theme?: 'dark' | 'light';
    /**
     * placement
     * The vertical placement of the clear button, always on the right side
     * @default 'top'
     */
    verticalPlacement?: 'top' | 'middle' | 'bottom';
    /** 
     * showButtonMode
     * The mode of the clear button.
     * @default 'while-editing'
     */
    showButtonMode?: 'always' | 'while-editing' | 'unless-editing';
    /** 
     * icon - icon to use for the clear button
     * @default <Octicons name="x-circle-fill" size={16} color="#ccc8c8" />
     */
    icon: JSX.Element;
    /** 
     * iconSize - size of the icon
     * @default 16
     */
    // iconSize: number; ???: maybe dont want them to be able to do this .../

}

