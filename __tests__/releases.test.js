import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Releases from '../src/components/Releases';

 
Enzyme.configure({ adapter: new Adapter() });
 
    let wrapper;
 
        beforeEach(() => {
        wrapper = shallow(<Releases  />);
        });
        
        describe('Releases component', () => {
        it('renders correctly', () => {
        expect(wrapper.exists()).toBe(true);
        });
        
        it('should have only one h3 tag', () => {
        expect(wrapper.find('h3')).toHaveLength(1);
        });
        
        });