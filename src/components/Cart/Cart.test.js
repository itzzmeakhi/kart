import React from 'react';
import { shallow } from 'enzyme';

import Cart from './Cart.component';
import { storeFactory } from './../../test.utils';


const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Cart store = {store} />).dive();
    return wrapper;
}


describe('<Cart />', () => {
    let wrapper;
    beforeEach(() => {
        const state = {
            cart: {
                cartItems: []
            }
        }
        wrapper = setup(state);
    })

    it('should component rendered without errors', () => {
        expect(wrapper.length).toBe(1);
    })

    it('should have valid props passed', () => {
        expect(wrapper.props().totalPrice).toEqual(0);
    })

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

})