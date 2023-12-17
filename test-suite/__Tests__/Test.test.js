import React from 'react';
import renderer, { act } from 'react-test-renderer';

import { ClearControlTextInput } from 'expo-clear-input-test';

const defautltProps = {
    textInputProps: {
        onChangeText: () => { },
        value: '',
        placeholder: 'some search word',
        multiline: false,
        secureTextEntry: false,
        keyboardType: 'default',
        returnKeyType: 'done',
    },
    verticalPlacement: undefined,
    showButtonMode: 'always'
}

describe('verticalPlacement prop', () => {
    let componentNode;
    // beforeAll(() => defautltProps.showButtonMode = 'while-editing');
    beforeEach(() => {
        act(() => componentNode = renderer.create(<ClearControlTextInput {...defautltProps} />));
    });
    describe('undefined', () => {
        it('should render in the middle if verticalPlacement is undefined', () => {
            act(() => componentNode = renderer.create(<ClearControlTextInput {...defautltProps} />));
            // console.log(componentNode.toJSON().children[0])
            // console.log(componentNode.toJSON().children[0].props.style)
            // console.log(componentNode.toJSON().children[1].props.style)
            // so 1 is the presable.
            // 0 is the testinput
            // componentNode is the View wrapper.
            // console.log(componentNode.toJSON().props.style)
            expect(componentNode.toJSON().props.style[1].paddingVertical).toBe(5);
        })
    })

})