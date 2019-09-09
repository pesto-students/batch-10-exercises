import React from 'react';

import Posts from './Posts';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Posts />', () => {
    
    it('should contain posts', () => {
        const wrapper = mount(<Posts posts={[]}/>);
    // expect(wrapper.state().page).toEqual(1);
    expect(wrapper.props().posts.length).toEqual(0);
  });
});
