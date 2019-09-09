import React, { Component } from 'react';

import Posts from './components/Posts';
import Button from './components/Button';
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
        <Button text='Previous' onClick={this.handlePrevClick} />
        <Button text='Next' onClick={this.handleNextClick} />
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
