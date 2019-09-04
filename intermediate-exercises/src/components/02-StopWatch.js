import React, { Component } from "react";

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySeconds: 0,
      displayMilliseconds: 0,
      timerId: null
    };
  }
  tick() {
    let milliseconds = this.state.displayMilliseconds;
    let seconds = this.state.displaySeconds;
    milliseconds += 1;
    if (milliseconds >= 60) {
      seconds += 1;
      milliseconds = 0;
    }
    this.setState({
      displaySeconds: seconds,
      displayMilliseconds: milliseconds
    });
  }
  handleClear() {
    clearInterval(this.state.timerId);
    this.setState({ displaySeconds: 0, displayMilliseconds: 0, timerId: null });
  }
  handleStartStop() {
    if (this.state.timerId) {
      clearInterval(this.state.timerId);
      this.setState({ timerId: null });
    } else {
      const intervalId = setInterval(() => this.tick(), 100);
      this.setState({ timerId: intervalId });
    }
  }
  render() {
    const formattedTime = `${this.state.displaySeconds
      .toString()
      .padStart(2, "0")} : ${this.state.displayMilliseconds
      .toString()
      .padStart(2, "0")}`;
    return (
      <div>
        <h2>Stop Watch </h2>
        <div className="stopWatch">
          <time dateTime={formattedTime}>{formattedTime}</time>
          <br />
          <p>(sec : ms)</p>
        </div>
        <button
          className="stopWatchButton"
          onClick={() => this.handleStartStop()}
          type="button"
        >
          {this.state.timerId ? "Stop" : "Start"}
        </button>
        <button
          className="stopWatchButton"
          onClick={() => this.handleClear()}
          type="button"
        >
          Clear
        </button>
      </div>
    );
  }
}

export default StopWatch;
