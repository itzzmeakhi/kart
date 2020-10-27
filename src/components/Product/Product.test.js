import React from 'react';
import { shallow } from 'enzyme';

import Product from './Product.component';
import { storeFactory } from './../../test.utils';


const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    const props = {
        prodId: 'abc',
        prodName: 'prod1',
        prodImg: 'https://www.google.com',
        prodPrice: 299
    }
    const wrapper = shallow(<Product store = {store} {...props} />).dive();
    return wrapper;
}


describe('<Product />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    })

    it('should component rendered without errors', () => {
        expect(wrapper.length).toBe(1);
    })

    it('should have product image', () => {
        expect(wrapper.dive().find('.product__img').length).toBe(1);
    })

    it('should have product description', () => {
        expect(wrapper.dive().find('.product__desc').length).toBe(1);
    })

    it('should have valid props passed', () => {
        expect(wrapper.props().prodId).toEqual('abc');
        expect(wrapper.props().prodName).toEqual('prod1');
        expect(wrapper.props().prodImg).toEqual('https://www.google.com');
        expect(wrapper.props().prodPrice).toEqual(299);
    })    
    
    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

})