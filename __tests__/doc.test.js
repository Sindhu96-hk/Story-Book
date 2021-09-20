import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Doc from '../src/components/Doc';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });
it('renders correctly', () => {
    const doc = renderer
      .create(<p>Facebook</p>)
      .toJSON();
    expect(doc).toMatchSnapshot();
  });
 
    let wrapper;
 
        beforeEach(() => {
        wrapper = shallow(<Doc />);
        });
        
        describe('Releases component', () => {
        it('renders correctly', () => {
        expect(wrapper.exists()).toBe(true);
        });
        
        it('should have only one h3 tag', () => {
        expect(wrapper.find('p')).toHaveLength(1);
        });
        
        });