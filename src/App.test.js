import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import { storeFactory } from './test.utils';
import Header from './components/Header/Header.component';

const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<App store = {store} />).dive().dive();
    return wrapper;
}

describe('<App />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    })

    it('should component rendered without errors', () => {
        expect(wrapper.length).toBe(1);
    })

    it('should header component rendered', () => {
        expect(wrapper.contains(<Header />)).toBe(true);
    })

    it('should contain 3 routes', () => {
        expect(wrapper.find('Route').length).toBe(3);
    })

});