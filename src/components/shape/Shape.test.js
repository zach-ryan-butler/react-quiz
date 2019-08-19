import React from 'react';
import { shallow } from 'enzyme';
import Shape from './Shape';

describe('Shape component', () => {
  it('renders Shape', () => {
    const wrapper = shallow(<Shape
      text="Zach Butler" 
      color="red"
      backgroundColor="red" />);
    expect(wrapper).toMatchSnapshot();
  });
});
