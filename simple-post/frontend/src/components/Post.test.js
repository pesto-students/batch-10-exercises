import React from 'react';
import { shallow } from 'enzyme'


import Post from './Post';

describe('Post', () => {
    it('should have div', () => {
        const wrapper = shallow(<Post/>);
        expect(wrapper.find('div').length).toBe(1);
      });
     
  });