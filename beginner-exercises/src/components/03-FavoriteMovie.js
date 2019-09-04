import React, { Component } from 'react';

class FavoriteMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: 'Hey there. Enter your favorite movie.' };
    this.onMovieChange = this.onMovieChange.bind(this);
  }

  /* eslint-disable no-unused-vars, react/no-unused-state */
  onMovieChange(event) {
    const input = event.target;
    this.setState({
      movie: input.value.length > 0 ? input.value : 'Hey there. Enter your favorite movie.',
    });
  }

  render() {
    const { movie } = this.state;
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div>
        <p>
          My favorite movie is
          <span style={{ color: 'blue' }}>{movie}</span>
        </p>
        <form>
          <label htmlFor="movie">
            <input type="text" id="user-movie" name="movie" onChange={this.onMovieChange} />
            movie:
          </label>
        </form>
      </div>
    );
  }
}
export default FavoriteMovie;
