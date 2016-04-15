jest.unmock('../CheckboxWithLabel');

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import CheckboxWithLabel from '../CheckboxWithLabel';

describe('CheckboxWithLabel', () => {
    const shallowRenderer = ReactTestUtils.createRenderer();
    shallowRenderer.render( <CheckboxWithLabel labelOn="On" labelOff="Off"/> );
    let checkbox  = shallowRenderer.getRenderOutput();
    const component = shallowRenderer.getMountedInstance();

    it( 'defaults to unchecked and off label', () => {
        const expectedChildren = [
            <input type="checkbox" checked={false} onChange={component.onChange}/>,
            "Off"
        ];
        expect( checkbox.props.children ).toEqual( expectedChildren );
    });
    it( 'changes the label after click', () => {
        component.onChange();
        checkbox = shallowRenderer.getRenderOutput();
        expect( checkbox.props.children[1] ).toEqual('On');
    });
});
