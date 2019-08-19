import React from 'react';
import { shallow } from 'enzyme';
import ColorSelector from './ColorSelector';

describe('TextSelector component', () => {
  it('renders TextSelector', () => {
    const wrapper = shallow(<ColorSelector
      addColor={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
