import React, { Component, Fragment } from 'react';

import Post from './components/Post';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      url: 'http://localhost:3001/posts/',
      page: 1,
    };
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }
  componentDidMount() {
    this.getPosts();
  }

  getPosts() {
    const url = this.state.url + this.state.page;
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'pesto-password': 'darth vader',
      },
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            posts: result.data,
          });
        },
        (error) => {
          console.log(error);
        },
      );
  }

  handlePrevClick() {
    this.setState(( state ) => {
      return { page: state.page === 1 ? 1 : state.page - 1 };
    }, () => {
      this.getPosts();
    });
  }

  handleNextClick() {
    this.setState(state => ({ page: state.page === 10 ? 10 : state.page + 1 }), () => {
      this.getPosts();
    });
  }

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
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
