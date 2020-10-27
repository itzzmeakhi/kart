import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header.component';
import { storeFactory } from './../../test.utils';


const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Header store = {store} />).dive();
    return wrapper;
}


describe('<Header />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    })

    it('should component rendered without errors', () => {
        expect(wrapper.length).toBe(1);
    })

    it('should navlink component rendered', () => {
        expect(wrapper.dive().find('NavLink').length).toBe(1);
    })

    it('should not have header options when no userloggedin', () => {
        expect(wrapper.find('.header__options').length).toBe(0);
    })

    it('should have valid props passed to the component', () => {
        const props = {
            user: {
                loggedInUser: {
                    name: 'user1'
                },
                error: null
            },
            cart: {
                noOfItemsInCart: 3
            }
        }
        wrapper = setup(props);
        expect(wrapper.props().loggedInUser).toEqual({name: 'user1'});
        expect(wrapper.props().noOfItemsInCart).toBe(3);
    })

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
})
