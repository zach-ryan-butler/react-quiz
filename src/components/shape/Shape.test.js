import React from 'react';
import { shallow } from 'enzyme';
import Shape from './Shape';

describe('TextSelector component', () => {
  it('renders TextSelector', () => {
    const wrapper = shallow(<Shape
      text="Zach Butler" 
      color="red"
      backgroundColor="red" />);
    expect(wrapper).toMatchSnapshot();
  });
});
