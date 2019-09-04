import React, { Component } from 'react';

class MovieList extends Component {
  render() {
    return (
      <ul className='movies-list'>
        <li>The Godfather</li>
        <li>The Godfather: Part II</li>
        <li>The Godfather: Part III</li>
      </ul>
    );
  }
  // Think about it: Why is that `className` attribute not called just `class`?
  // Hint: Some words in JavaScript/JSX are reserved...
}

export default MovieList;
