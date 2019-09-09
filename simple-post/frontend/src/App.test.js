import React from 'react';

import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  const wrapper = shallow(<App />);

  it('should exist', () => {
    expect(wrapper.contains(<div></div>)).toEqual(true);
  });
  it('should contain page & posts', () => {
    expect(wrapper.state().page).toEqual(1);
    expect(wrapper.state().posts.length).toEqual(0);
  });
  describe('should contain getPost function', () => {
    const fn = wrapper.state().getPost;
    it('should exist', () => {
      expect(wrapper.state().getPost).toEqual(fn);
    });
    it('should not be called', () => {
      expect(fn).toHaveBeenCalledTimes(0);
    });
    
    
  });
});
