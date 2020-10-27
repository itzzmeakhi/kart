import React from 'react';
import { shallow } from 'enzyme';

import CartItem from './CartItem.component';
import { storeFactory } from './../../test.utils';


const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    const props = {
        prodId: 'abc',
        prodName: 'prod1',
        prodImg: 'https://www.google.com',
        prodPrice: 299,
        prodQuan: 1
    }
    const wrapper = shallow(<CartItem store = {store} {...props} />).dive();
    return wrapper;
}


describe('<CartItem />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    })

    it('should component rendered without errors', () => {
        expect(wrapper.length).toBe(1);
    })

    it('should have cart image', () => {
        expect(wrapper.find('.cart__img').length).toBe(1);
    })

    it('should have cart description', () => {
        expect(wrapper.find('.cart__desc').length).toBe(1);
    })

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

})