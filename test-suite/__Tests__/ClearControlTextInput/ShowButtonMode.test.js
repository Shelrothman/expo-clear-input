import React from 'react';
import renderer, { act } from 'react-test-renderer';

import { ClearControlTextInput } from 'expo-clear-input-test';

/**
 * @fileoverview tests the parameter showButtonMode of the ClearControlTextInput component and how it affects 
 * the appearence of the button.
 */

const defautltProps = {
    textInputProps: {
        onChangeText: () => { },
        value: '',
        placeholder: 'some search word',
        secureTextEntry: false,
        keyboardType: 'default',
        returnKeyType: 'done',
    },
    showButtonMode: undefined
};



describe('verticalPlacement prop', () => {
    /** 
     * componentNode in this scope is the <View> wrapper of the module 
     * componentNode.toJSON().children[0] = the text input
     * componentNode.toJSON().children[1] = the pressable
    */
    let componentNode;

    /** undefined (should behave identical to while-editing) */
    describe('undefined/default', () => {
        beforeEach(() => {
            act(() => componentNode = renderer.create(<ClearControlTextInput {...defautltProps} />));
        });
        it('the pressable should not appear when the text input is not focused', () => {
            act(() => componentNode.toJSON().children[ 0 ].props.onBlur());
            expect(componentNode.toJSON().children.length).toBe(1);
        })
        it('the pressable should appear when the text input is focused', () => {
            act(() => componentNode.toJSON().children[ 0 ].props.onFocus());
            expect(componentNode.toJSON().children.length).toBe(2);
        })
    })
    /** while-editing */
    describe('while-editing', () => {
        beforeEach(() => {
            act(() => componentNode = renderer.create(<ClearControlTextInput {...defautltProps} />));
        });
        it('the pressable should not appear when the text input is not focused', () => {
            act(() => componentNode.toJSON().children[ 0 ].props.onBlur());
            expect(componentNode.toJSON().children.length).toBe(1);
        })
        it('the pressable should appear when the text input is focused', () => {
            act(() => componentNode.toJSON().children[ 0 ].props.onFocus());
            expect(componentNode.toJSON().children.length).toBe(2);
        })
    })
    /** unless-editing */
    describe('unless-editing', () => {
        beforeAll(() => defautltProps.showButtonMode = 'unless-editing');
        beforeEach(() => {
            act(() => componentNode = renderer.create(<ClearControlTextInput {...defautltProps} />));
        });
        it('the pressable should appear when the text input is not focused', () => {
            act(() => componentNode.toJSON().children[ 0 ].props.onBlur());
            expect(componentNode.toJSON().children.length).toBe(2);
        })
        it('the pressable should not appear when the text input is focused', () => {
            act(() => componentNode.toJSON().children[ 0 ].props.onFocus());
            expect(componentNode.toJSON().children.length).toBe(1);
        })
    })
    /** always */
    describe('always', () => {
        beforeAll(() => defautltProps.showButtonMode = 'always');
        beforeEach(() => {
            act(() => componentNode = renderer.create(<ClearControlTextInput {...defautltProps} />));
        });
        it('the pressable should appear even when the text input is not focused', () => {
            act(() => componentNode.toJSON().children[ 0 ].props.onBlur());
            expect(componentNode.toJSON().children.length).toBe(2);
        })
        it('the pressable should appear when the text input is focused', () => {
            act(() => componentNode.toJSON().children[ 0 ].props.onFocus());
            expect(componentNode.toJSON().children.length).toBe(2);
        })
    })

})