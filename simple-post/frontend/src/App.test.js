import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })
import App from './App';


const RequestOptions = {
  method: 'GET',
  headers: new Headers({'pesto-password': 'darth vader'}),
}

const url = 'http://localhost:3001/posts/'; 
describe('App' ,()=>{
  it('should have div', () => {
    const wrap = shallow(
      <App/>
    )
    expect(wrap.find('div').length).toBe(2);
  });
  it('should send request to server', () => {

    fetch(url+'1' , RequestOptions)
          .then(response => response.json())
          .then(data => {
            expect(data).toBeDefined()
          });
  });

  it('should response should have 10 items ', () => {

    fetch(url+'1' , RequestOptions)
          .then(response => response.json())
          .then(data => {
            expect(data.length).toBe(10)
          });
  });

 
  
}) 
