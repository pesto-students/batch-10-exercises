import React from 'react';
import { shallow } from 'enzyme';

import { Page } from './containers/Page';
import Search from './components/Search';

describe('<Page />', () => {
  it('renders one <Search /> components', () => {
    const wrapper = shallow(<Page />);
    expect(wrapper.find(Search)).to.have.lengthOf(1);
  });
});
