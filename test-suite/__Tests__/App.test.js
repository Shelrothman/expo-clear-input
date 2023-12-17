import React from 'react';
import App from '../App.tsx';

import renderer from 'react-test-renderer';

describe('<App />', () => {
    it('has 1 child, sanity check.', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree.children.length).toBe(1);
    });
});