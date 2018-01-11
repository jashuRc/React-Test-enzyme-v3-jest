//CheckboxWithLabel.test.js

import React from 'react';
import {shallow} from 'enzyme';
import CheckboxWithLabel from '../CheckboxWithLabel';

test('CheckboxWithLabel changes the text after click', () => {
    // Render a checkbox with label in the document
    const checkbox = shallow(
        <CheckboxWithLabel labelOn="On" labelOff="Off" isChecked={true} />
    );
    let checkbox_2 = checkbox.find({ type: 'checkbox' });
    expect(checkbox_2.props().isChecked).toEqual(true);

    checkbox.find('input').simulate('change');

    expect(checkbox.text()).toEqual('On');
});