import React from 'react';
import { shallow } from 'enzyme';

import SignIn from './SignIn.component';
import { storeFactory } from './../../test.utils';


const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<SignIn store = {store} />).dive();
    return wrapper;
}


describe('<SignIn />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    })

    it('should component rendered without errors', () => {
        expect(wrapper.length).toBe(1);
    })

    it('should have sign in form rendered', () => {
        expect(wrapper.find('form').length).toBe(1);
    })

    it('should have two input fields', () => {
        expect(wrapper.find('input').length).toBe(2);
    })

    it('should have one button', () => {
        expect(wrapper.find('button').length).toBe(1);
    })

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

})
