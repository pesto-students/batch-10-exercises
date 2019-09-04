import React, { Component } from 'react';

class StopWatch extends Component {
  state = {
    stopWatchStart: false,
    elapsedTime: 0
  };

  toggleTimer = () => {
    this.setState({ stopWatchStart: this.state.stopWatchStart === false });
  };

  startTimer = () => {
    setTimeout(() => {
      this.setState({ elapsedTime: this.state.elapsedTime + 1 });
    }, 1);
  };

  updateButtonText() {
    return this.state.stopWatchStart ? 'Stop' : 'Start';
  }
  componentDidUpdate() {
    if (this.state.stopWatchStart) {
      this.startTimer();
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.elapsedTime} milliseconds</p>
        <button onClick={this.toggleTimer}>
          {this.state.stopWatchStart ? 'Stop' : 'Start'}
        </button>
      </div>
    );
  }
}

export default StopWatch;
