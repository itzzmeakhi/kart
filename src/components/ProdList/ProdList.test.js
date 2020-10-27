import React from 'react';
import { shallow } from 'enzyme';

import ProdList from './ProdList.component';
import { storeFactory } from './../../test.utils';


const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<ProdList store = {store} />).dive();
    return wrapper;
}


describe('<ProdList />', () => {
    let wrapper;
    beforeEach(() => {
        const state = {
            products: {
                products : [
                    {
                        prodId: 'prod1',
                        prodName: 'abc',
                        prodImg: 'https://www.google.com',
                        prodPrice: 299
                    },
                    {
                        prodId: 'prod2',
                        prodName: 'abcd',
                        prodImg: 'https://www.google.com',
                        prodPrice: 2999
                    }
                ]
            }
        }
        wrapper = setup(state);
    })

    it('should component rendered without errors', () => {
        expect(wrapper.length).toBe(1);
    })

    it('should have valid props passed', () => {
        const products = [
            {
                prodId: 'prod1',
                prodName: 'abc',
                prodImg: 'https://www.google.com',
                prodPrice: 299
            },
            {
                prodId: 'prod2',
                prodName: 'abcd',
                prodImg: 'https://www.google.com',
                prodPrice: 2999
            }
        ]
        expect(wrapper.props().products).toEqual(products);
    })

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

})