import React from 'react';
import App from '../App';
import renderer, { act } from 'react-test-renderer';

const defautltAppProps = {
    textInputProps: {
        onChangeText: () => { },
        value: '',
        placeholder: 'some search word',
        multiline: false,
        secureTextEntry: false,
        keyboardType: 'default',
        returnKeyType: 'done',
    },
    showButtonMode: 'while-editing',
}

/**
 * a test for each mode state of button appearence and how the functioinality works
 */
describe('showButtonNode prop', () => {
    describe('showButtonMode = while-editing', () => {
        let appNode;
        beforeAll(() => defautltAppProps.showButtonMode = 'while-editing');
        beforeEach(() => {
            act(() => appNode = renderer.create(<App {...defautltAppProps} />));
        });
        it('pressable should NOT appear when the text input is not focused', () => {
            // the view around the input (appNode.toJSON().children[0]) will not have the Pressable as a child until the textInput is focused.
            act(() => {
                appNode.toJSON().children[ 0 ].children[ 0 ].props.onBlur();
            });
            expect(appNode.toJSON().children[ 0 ].children.length).toBe(1);
        });
        it('pressable should appear when the text input is focused', () => {
            // focus the text input
            act(() => {
                appNode.toJSON().children[ 0 ].children[ 0 ].props.onFocus();
            });
            expect(appNode.toJSON().children[ 0 ].children.length).toBe(2);
        });
    });
    describe('showButtonMode = always', () => {
        let appNode;
        beforeAll(() => defautltAppProps.showButtonMode = 'always');
        beforeEach(() => {
            act(() => appNode = renderer.create(<App {...defautltAppProps} />));
        });
        it('pressable should always appear whether input is focused or not', () => {
            act(() => {
                appNode.toJSON().children[ 0 ].children[ 0 ].props.onFocus();
            });
            expect(appNode.toJSON().children[ 0 ].children.length).toBe(2);
            act(() => {
                appNode.toJSON().children[ 0 ].children[ 0 ].props.onBlur();
            });
            // console.log(appNode.toJSON().children[ 0 ].children[ 0 ].props)
// TODO: PICKUP HERE AND understnad why this isnt working and stuff..
// I AVE DONE THE MANUAL TESTING AND IT IS GOOD SO YOU JUST NEED TO::: -FIX-this-test.

            expect(appNode.toJSON().children[ 0 ].children.length).toBe(2);
        });
    });
    // describe('showButtonMode = unless-editing', () => {
    //     let appNode;
    //     beforeAll(() => defautltAppProps.showButtonMode = 'unless-editing');
    //     beforeEach(() => {
    //         act(() => appNode = renderer.create(<App {...defautltAppProps} />));
    //     });
    //     it('pressable should appear when the text input is not focused', () => {
    //         act(() => {
    //             appNode.toJSON().children[ 0 ].children[ 0 ].props.onBlur();
    //         });
    //         expect(appNode.toJSON().children[ 0 ].children.length).toBe(2);
    //     });
    //     it('pressable should NOT appear when the text input is focused', () => {
    //         act(() => {
    //             appNode.toJSON().children[ 0 ].children[ 0 ].props.onFocus();
    //         });
    //         expect(appNode.toJSON().children[ 0 ].children.length).toBe(1);
    //     });
    // });
});

// TODO: PICKUP: continue making the rest of the tests for the other props and functionality
// TODO: tests for the state of the button depending on the verticalPosition prop