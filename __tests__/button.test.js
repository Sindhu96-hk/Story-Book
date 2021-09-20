import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../src/components/Button';
import "./button.css";

 
Enzyme.configure({ adapter: new Adapter() });
 
let wrapper;
 
beforeEach(() => {
 wrapper = shallow(<Button/>);
});
 
describe('Button component', () => {
 it('renders correctly', () => {
 expect(wrapper.exists()).toBe(true);
 });
 
 it('should have only one button tag', () => {
 expect(wrapper.find('button')).toHaveLength(1);
 });
 
 it('should have btn class', () => {
 expect(wrapper.find('.btn')).toHaveLength(1);
 });
});