import React from 'react';
import { shallow, mount } from 'enzyme';

import Pokemon from 'component/Pokemon';


describe('Pokemon shallow rendering', () => {
  it('Pokemon Contains ClassName', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('pokemons__item')).to.have.lengthOf(1);
  });
});