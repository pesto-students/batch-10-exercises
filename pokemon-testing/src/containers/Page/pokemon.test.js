import React from 'react';
import { shallow } from 'enzyme';

import { Page } from '.';
import Search from '../../components/Search';

describe('<Page />', () => {
  it('renders a <Search /> components', () => {
    const wrapper = shallow(<Page />);
    expect(wrapper.find(Search)).to.have.lengthOf(1);
  });
});
