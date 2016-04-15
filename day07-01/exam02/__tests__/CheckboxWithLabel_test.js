jest.unmock('../CheckboxWithLabel');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import CheckboxWithLabel from '../CheckboxWithLabel';

describe('CheckboxWithLabel', () => {
    var checkbox = TestUtils.renderIntoDocument(
        <CheckboxWithLabel labelOn="On" labelOff="Off"/>
    );

    var checkboxNode = ReactDOM.findDOMNode(checkbox);

    it( 'default to Off label', () => {
        expect( checkboxNode.textContent ).toEqual('Off');
    });
    it( 'default to unchecked', () => {
        let checkboxElement = TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input');
        expect(checkboxElement.checked).toBe(false);
    });
    it( 'change the label after click', () => {
        TestUtils.Simulate.change(
            TestUtils.findRenderedDOMComponentWithTag( checkbox, 'input' )
        );
        expect( checkboxNode.textContent ).toEqual('On');
    });
});
