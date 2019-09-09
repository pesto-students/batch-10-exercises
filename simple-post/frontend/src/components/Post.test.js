import Post from 'Post';

describe('Post', () => {
    it('should have div', () => {
        const wrapper = shallow(<Post />);
        expect(wrapper.find('div')).to.have.lengthOf(1);
      });
  });