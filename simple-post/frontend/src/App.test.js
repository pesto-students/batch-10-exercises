import React from 'react';

import App from './App';
import Button from './components/Button';
import Posts from './components/Posts';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  const wrapper = shallow(<App />);

  it('should contain page & posts', () => {
    expect(wrapper.state().page).toEqual(1);
    expect(wrapper.state().posts.length).toEqual(0);
  });
  describe('getPost function', () => {
    const fn = wrapper.state().getPost;
    it('should exist', () => {
      expect(wrapper.state().getPost).toEqual(fn);
    });
  });
  // describe('buttons component', () => {
  //   const fn = jest.fn();
  //   const btnWrapper = shallow(<Button text='io' onClick={fn} />);
    
    // it('it exists', () => {
    //   // const mountedComp = mount(<App />);
      
    //   expect(wrapper.find(btnWrapper)).toEqual(true);
    // })
    // expect(wrapper.contains(<Button />)).toEqual(true);
  // })
});
