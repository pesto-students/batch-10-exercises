import React, { Component } from 'react';

class FavoriteMovie extends Component {

  constructor(props) {
    super(props);
    this.state = { movie: '' };
    this.onMovieChange = this.onMovieChange.bind(this);

  }

  onMovieChange(event) {
    this.setState({ movie: event.target.value });
  }

  render() {
    let displayMessage = '';
    if(this.state.movie.length === 0){
      displayMessage = <p>Hey there. Enter your favorite movie.</p>
    }else{
      displayMessage = <p>My favorite movie is  <span style={{ color: 'blue' }}>{this.state.movie}</span></p>
    }

    return (
      <div>
        {displayMessage}
        <input type="text" name="name" onChange={this.onMovieChange} value={this.state.movie}/>
      </div>
    );
  }
}


export default FavoriteMovie;
