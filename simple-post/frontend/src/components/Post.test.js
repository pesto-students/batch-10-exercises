// import React from 'react';
// import ReactDOM from 'react-dom';
// import { shallow } from 'enzyme'
// import Enzyme from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'

// Enzyme.configure({ adapter: new Adapter() })


// import Post from './Post.js';
// console.log(Post);

// describe('Post' ,()=>{
//     it('should have div', () => {
//       const wrap = shallow(
//         <Post/>
//       )
//       expect(wrap.find('div').length).toBe(1);
//     });
//     it('should have h4 inside div', () => {
//         const wrap = shallow(
//           <Post/>
//         )
//         expect(wrap.find('div h4').length).toBe(1);
//       })
//     it('should have div inside div', () => {
//         const wrap = shallow(
//           <Post/>
//         )
//         expect(wrap.find('div div').length).toBe(1);
//     })    
//   })