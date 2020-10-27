import React from 'react';
import { shallow } from 'enzyme';

import Order from './Order.component';
import { storeFactory } from './../../test.utils';


const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    const props = {
        orderData: {
            items: [
                { name: 'prod1' }
            ],
            placedOn: '25/10/2020',
            amountPaid: 599
        }
    }
    const wrapper = shallow(<Order store = {store} {...props} />);
    return wrapper;
}


describe('<Order />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    })

    it('should component rendered without errors', () => {
        expect(wrapper.length).toBe(1);
    })

    it('should have product image', () => {
        expect(wrapper.find('.order__items').length).toBe(1);
    })

    it('should have product description', () => {
        expect(wrapper.find('.order__desc').length).toBe(1);
    })

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

})