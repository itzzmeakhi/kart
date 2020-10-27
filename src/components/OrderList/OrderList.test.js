import React from 'react';
import { shallow } from 'enzyme';

import OrderList from './OrderList.component';
import { storeFactory } from './../../test.utils';


const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<OrderList store = {store} />).dive();
    return wrapper;
}


describe('<OrderList />', () => {
    let wrapper;
    beforeEach(() => {
        const state = {
            user: {
                loggedInUser: {
                    userOrders: []
                }
            }
        }
        wrapper = setup(state);
    })

    it('should component rendered without errors', () => {
        expect(wrapper.length).toBe(1);
    })

    it('should have valid props passed', () => {
        expect(wrapper.props().userOrders).toEqual([]);
    })

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

})