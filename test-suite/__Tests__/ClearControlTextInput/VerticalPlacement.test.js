import React from 'react';
import renderer, { act } from 'react-test-renderer';

import { ClearControlTextInput } from 'expo-clear-input-test';

/**
 * @fileoverview tests the parameter verticalPlacement of the ClearControlTextInput component.
 */

const defautltProps = {
    textInputProps: {
        onChangeText: () => { },
        value: '',
        placeholder: 'some search word',
        multiline: true,
        secureTextEntry: false,
        keyboardType: 'default',
        returnKeyType: 'done',
    },
    verticalPlacement: undefined,
    showButtonMode: 'always'
}


describe('verticalPlacement prop', () => {
    /** 
     * componentNode in this scope is the <View> wrapper of the module 
     * componentNode.toJSON().children[0] = the text input
     * componentNode.toJSON().children[1] = the pressable
    */
    let componentNode;

    /** with multiline */
    describe('undefined', () => {
        beforeEach(() => {
            act(() => componentNode = renderer.create(<ClearControlTextInput {...defautltProps} />));
        });
        it('the button should render in the middle if verticalPlacement is undefined', () => {
            expect(componentNode.toJSON().props.style[ 1 ].paddingVertical).toBe(5);
        })
        it('the pressable should justify content to center if verticalPlacement is undefined', () => {
            expect(componentNode.toJSON().children[ 1 ].props.style[ 1 ].justifyContent).toBe('center');
        })
    })
    describe('middle', () => {
        beforeEach(() => {
            defautltProps.verticalPlacement = 'middle';
            act(() => componentNode = renderer.create(<ClearControlTextInput {...defautltProps} />));
        });
        it('the button should render in the middle if verticalPlacement is middle', () => {
            expect(componentNode.toJSON().props.style[ 1 ].paddingVertical).toBe(5);
        })
        it('the pressable should justify content to center if verticalPlacement is middle', () => {
            expect(componentNode.toJSON().children[ 1 ].props.style[ 1 ].justifyContent).toBe('center');
        })
    })
    describe('top', () => {
        beforeEach(() => {
            defautltProps.verticalPlacement = 'top';
            act(() => componentNode = renderer.create(<ClearControlTextInput {...defautltProps} />));
        });
        it('the button should render in the top if verticalPlacement is top', () => {
            expect(componentNode.toJSON().props.style[ 1 ].paddingVertical).toBe(10);
        })
        it('the pressable should justify content to flex-start if verticalPlacement is top', () => {
            expect(componentNode.toJSON().children[ 1 ].props.style[ 1 ].justifyContent).toBe('flex-start');
        })
    })
    describe('bottom', () => {
        beforeEach(() => {
            defautltProps.verticalPlacement = 'bottom';
            act(() => componentNode = renderer.create(<ClearControlTextInput {...defautltProps} />));
        });
        it('the button should render in the bottom if verticalPlacement is bottom', () => {
            expect(componentNode.toJSON().props.style[ 1 ].paddingVertical).toBe(10);
        })
        it('the pressable should justify content to flex-end if verticalPlacement is botom', () => {
            expect(componentNode.toJSON().children[ 1 ].props.style[ 1 ].justifyContent).toBe('flex-end');
        })
    })
    describe('!multiline should _always_ render at default', () => {
        beforeEach(() => defautltProps.textInputProps.multiline = false);
        it('even with top value in the param', () => {
            act(() => componentNode = renderer.create(
                <ClearControlTextInput {...defautltProps} verticalPlacement='top' />)
            );
            expect(componentNode.toJSON().props.style[ 1 ].paddingVertical).toBe(5);
            expect(componentNode.toJSON().children[ 1 ].props.style[ 1 ].justifyContent).toBe('center');
        })
        it('even with bottom value in the param', () => {
            act(() => componentNode = renderer.create(
                <ClearControlTextInput {...defautltProps} verticalPlacement='bottom' />)
            );
            expect(componentNode.toJSON().props.style[ 1 ].paddingVertical).toBe(5);
            expect(componentNode.toJSON().children[ 1 ].props.style[ 1 ].justifyContent).toBe('center');
        })
        it('even with middle value in the param', () => {
            act(() => componentNode = renderer.create(
                <ClearControlTextInput {...defautltProps} verticalPlacement='middle' />)
            );
            expect(componentNode.toJSON().props.style[ 1 ].paddingVertical).toBe(5);
            expect(componentNode.toJSON().children[ 1 ].props.style[ 1 ].justifyContent).toBe('center');
        })
        it('even with undefined value in the param', () => {
            act(() => componentNode = renderer.create(
                <ClearControlTextInput {...defautltProps} verticalPlacement={undefined} />)
            );
            expect(componentNode.toJSON().props.style[ 1 ].paddingVertical).toBe(5);
            expect(componentNode.toJSON().children[ 1 ].props.style[ 1 ].justifyContent).toBe('center');
        })
    })
})