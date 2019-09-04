import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class MovieList extends Component {
  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <ul className="movies-list">
        <li>the godfather</li>
        <li>TREMOR</li>
      </ul>
    );
  }
}

export default MovieList;
