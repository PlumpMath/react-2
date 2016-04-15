jest.unmock('../CheckboxWithLabel');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import CheckboxWithLabel from '../CheckboxWithLabel';

describe('CheckboxWithLabel', () => {
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render( <CheckboxWithLabel labelOn="On" labelOff="Off"/> );
    const checkbox  = shallowRenderer.getRenderOutput();
    console.log( typeof checkbox );
    console.log("---------------");
    console.log( checkbox );
    console.log("---------------");

    // var checkbox = TestUtils.renderIntoDocument(
    //     <CheckboxWithLabel labelOn="On" labelOff="Off"/>
    // );
    // var checkboxNode = ReactDOM.findDOMNode(checkbox);
    it( 'default to Off label', () => {
        // expect( checkbox.textContent ).toEqual('Off');
        expect( checkbox.props.children[1] ).toEqual('Off');
    });

    it( 'defaults to unchecked and off label', () => {
        const inputField = checkbox.props.children[0];
        const textNode = checkbox.props.children[1];
        expect( inputField.props.checked ).toBe( false );
    });
});
