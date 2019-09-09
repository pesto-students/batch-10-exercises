import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Post from './components/Post';
import './App.css';

class App extends Component {
  state = {
    posts: [],
    pageID : 0, 
  };
  constructor(){
    this.handleNextClick = this.handleNextClick.bind(this);
  }
  handleNextClick(){
  const { pageID } = this.state;
  const url = 'http://localhost:3001/posts/:'+ pageID;
  fetch(url)
        .then(response => response.json())
        .then(data => {
          const  posts  =  this.state.posts;
          posts[ pageID ] = data; 
          this.setState({posts : posts})
        });
  }
  handlePrevClick(){
  const { pageID } = this.state;
  const url = 'http://localhost:3001/posts/:'+ pageID;
  fetch(url)
        .then(response => response.json())
        .then(data => {
          const  posts  =  this.state.posts;
          posts[ pageID ] = data; 
          this.setState({posts : posts})
        });
  }



  render() {
    return (
      <div>
        <h2>Posts</h2>
        <hr />
        <br />
        <button onClick={this.handlePrevClick}>
          Previous
        </button>
        <button onClick={this.handleNextClick}>
          Next
        </button>
        <div>
          {this.state.posts.map((post) => {
            return (
              <Fragment key={post.id}>
                <Post post={post} />
                <hr />
              </Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
