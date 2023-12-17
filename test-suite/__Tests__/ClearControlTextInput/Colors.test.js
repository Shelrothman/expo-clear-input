import React from 'react';
import renderer, { act } from 'react-test-renderer';

import { ClearControlTextInput } from 'expo-clear-input-test';

/**
 * @fileoverview this tests the paramaters of
 * backgroundColor, textColor, iconColor, and placeholderTextColor
 */

const defautltProps = {
    textInputProps: {
        onChangeText: () => { },
        placeholder: 'some search word',
        placeholderTextColor: undefined,
    },
    backgroundColor: undefined,
    textColor: undefined,
    iconColor: undefined,
    showButtonMode: 'always'
};

/** default colors per definition */
const DEFAULT_TEXT = '#fff';
const DEFAULT_BACKGROUND = '#252326';
const DEFAULT_PLACEHOLDER = '#ccc8c8';
const DEFAULT_ICON = '#ccc8c8';
/** custom colors */
const PINK = '#ff00ff';
const GREEN = '#00ff00';
const BLUE = '#0000ff';



describe('Colors: backgroundColor, textColor, iconColor, placeholderTextColor', () => {
    /** 
     * componentNode in this scope is the <View> wrapper of the module 
     * componentNode.toJSON().children[0] = the text input
     * componentNode.toJSON().children[1] = the pressable
    */
    let componentNode;
    /** undefined/default */
    describe('undefined/default values', () => {
        beforeEach(() => {
            act(() => componentNode = renderer.create(<ClearControlTextInput {...defautltProps} />));
        });
        // text input color
        it('color of the TextInputs text should be the default', () => {
            expect(componentNode.toJSON().children[ 0 ].props.style[ 1 ].color).toBe(DEFAULT_TEXT);
        })
        // background color for view
        it('color of the Views background should be the default', () => {
            expect(componentNode.toJSON().props.style[ 1 ].backgroundColor).toBe(DEFAULT_BACKGROUND);
        })
        // pickup: figure out a way to test the actual prop of "placeHolderTextColor"
        //icon  
        it('color of the Icon should be the default', () => {
            console.log(componentNode.toJSON().children[ 1 ].children[ 0 ].props.style[ 0 ].color)
            expect(componentNode.toJSON().children[ 1 ].children[ 0 ].props.style[ 0 ].color).toBe(DEFAULT_ICON);
        })
    })
    /** undefined/default */
    describe('invalid color value for each', () => {
        beforeEach(() => {
            defautltProps.textColor = 'not ###a color';
            defautltProps.backgroundColor = 'not a49083240 color';
            // defautltProps.textInputProps.placeholderTextColor = '#n##ot a color';
            defautltProps.iconColor = '#&&*(&(*$#$';
            act(() => componentNode = renderer.create(<ClearControlTextInput {...defautltProps} />));
        });
        // text input color
        it('color of the TextInputs text should be the default', () => {
            expect(componentNode.toJSON().children[ 0 ].props.style[ 1 ].color).toBe(DEFAULT_TEXT);
        })
        // background color for view
        it('color of the Views background should be the default', () => {
            expect(componentNode.toJSON().props.style[ 1 ].backgroundColor).toBe(DEFAULT_BACKGROUND);
        })
        //icon  
        it('color of the Icon should be the default', () => {
            expect(componentNode.toJSON().children[ 1 ].children[ 0 ].props.style[ 0 ].color).toBe(DEFAULT_ICON);
        })
        // pickup: figure out a way to test the actual prop of "placeHolderTextColor"
    })
    /** valid color for each */
    describe('custom color value for each', () => {
        beforeEach(() => {
            defautltProps.textColor = PINK;
            defautltProps.backgroundColor = GREEN;
            defautltProps.iconColor = BLUE;
            act(() => componentNode = renderer.create(<ClearControlTextInput {...defautltProps} />));
        });
        // text input color
        it('color of the TextInputs text should be the default', () => {
            expect(componentNode.toJSON().children[ 0 ].props.style[ 1 ].color).toBe(PINK);
        })
        // background color for view
        it('color of the Views background should be the default', () => {
            expect(componentNode.toJSON().props.style[ 1 ].backgroundColor).toBe(GREEN);
        })
        //icon  
        it('color of the Icon should be the default', () => {
            expect(componentNode.toJSON().children[ 1 ].children[ 0 ].props.style[ 0 ].color).toBe(BLUE);
        })
        // pickup: figure out a way to test the actual prop of "placeHolderTextColor"
    })




    /** non-hex values provided */

})