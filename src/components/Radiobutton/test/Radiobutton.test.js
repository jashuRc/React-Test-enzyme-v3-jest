import React from 'react';
import {shallow} from 'enzyme';
import Radiobutton from '../Radiobutton';

test('Radiobutton changes the text after click', () => {

    const radiobutton = shallow(
        <Radiobutton labelOn="Checked" labelOff="NotChecked" />
    );

    expect(radiobutton.text()).toEqual("NotChecked");

    radiobutton.find('input').simulate('change');

    expect(radiobutton.text()).toEqual("Checked");
})