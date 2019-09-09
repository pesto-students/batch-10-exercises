import React, { Component, Fragment } from 'react';

import Post from './components/Post';
import './App.css';

class App extends Component {
  state = {
    posts: [],
    url: "http://localhost:3001/posts/",
    page: 1,
  };

  getPosts() {
    const url = this.state.url + this.state.page;
    fetch(url, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        'pesto-password': 'darth vader'
      }
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      const response = JSON.stringify(myJson);
      console.log(response);
      this.setState({
        posts: myJson.data
      })
    });
  }

  componentDidMount() {
    const url = this.state.url + this.state.page;
    fetch(url, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        'pesto-password': 'darth vader'
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            posts: result.data
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
        }
      )
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
