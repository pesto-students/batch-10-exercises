import React, { Component } from 'react';

/*
* Exercise 2:
*
*  Create a `StopWatch` component that has a Start/Stop button and a Clear
*  button.
*
*  Pressing Start will start a timer and the lapsed time in
*  milliseconds should be displayed above the buttons.
*
*  Once started the Start button should change to Stop. Clicking Stop
*  will stop the timer but lapsed time will be preserved.
*
*  Clicking Start again will resume the timer from where it left off.
*
*  Clicking Clear will stop the timer if it's running and reset the lapsed time to 0.
*/

// eslint-disable-next-line react/prefer-stateless-function
class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
    };
    this.add = this.add.bind(this);
    this.timer = this.timer.bind(this);
  }

  add() {
    // let second = this.state.seconds;
    // second += 1;
    // this.setState((second) => {
    //   seconds: second,
    // });
    this.timer();
  }

  timer() {
    setTimeout(this.add, 1000);
  }

  render() {
    const { seconds } = this.state;
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div>
        <div>Stop Watch</div>
        <p>{seconds}</p>
        <button type="button" onClick={this.timer}>Start</button>
        <button type="button">Clear</button>
      </div>
    );
  }
}

export default StopWatch;
