import React, { Component, Fragment } from 'react';
import Post from './components/Post';
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      posts: [], 
    };
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.pageID = 1 
    this.RequestOptions = {
      method: 'GET',
      headers: new Headers({'pesto-password': 'darth vader'}),
  };


  }

  handleNextClick(){

    const url = 'http://localhost:3001/posts/'+ this.pageID;
    fetch(url , this.RequestOptions)
          .then(response => response.json())
          .then(data => {
            // const  posts  =  this.state.posts;
            // posts[ this.pageID ] = data; 
            this.setState({posts : data.data})
            ++this.pageID
          });
    }
    handlePrevClick(){
    --this.pageID;
    const url = 'http://localhost:3001/posts/'+ this.pageID;
    fetch(url , this.RequestOptions)
          .then(response => response.json())
          .then(data => {
            // const  posts  =  this.state.posts;
            // posts[ this.pageID ] = data; 
            this.setState({posts : data.data})
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
