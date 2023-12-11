// import { TextInputProps } from 'react-native';

/**
 * @interface ClearControlTextInputProps
 */
export interface ClearControlTextInputProps {
    // export interface ClearControlTextInputProps extends TextInputProps {


    /**
     * textInputProps
     * allowed overrideable props for the text input
     */
    // textInputProps?: TextInputProps;



    /**
         * style - dark or light background
         * @default 'dark'
         */
    style?: 'dark' | 'light';


    /**
     * placement
     * The vertical placement of the clear button, always on the right side
     * @default 'top'
     */
    verticalPlacement?: 'top' | 'middle' | 'bottom';

    /** 
     * mode
     * The mode of the clear button.
     * @default 'while-editing'
     */
    mode?: 'always' | 'while-editing' | 'unless-editing';

    // MultiLine    


    /** 
     * icon - icon to use for the clear button
     * @default <Octicons name="x-circle-fill" size={16} color="#ccc8c8" />
     */
    icon: JSX.Element;

    /** 
     * iconSize - size of the icon
     * @default 16
     */
    iconSize: number;

}

