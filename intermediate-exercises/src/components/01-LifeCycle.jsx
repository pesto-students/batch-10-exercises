import React from "react";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Pesto" };
  }

  componentDidMount() {
    console.log("componentDidMount()-> I am mounted; props:", this.props);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate() -> Updated!; prevProps,prevState", {
      prevProps,
      prevState
    });
  }

  render() {
    return (
      <React.Fragment>
        <p>Good morning, {this.state.name}!</p>
        <button onClick={() => this.setState({ name: "Pesto Tech" })}>
          Press this Button to add 'Tech'
        </button>
      </React.Fragment>
    );
  }

  componentWillUnmount() {
    console.log(`componentWillUnmount() -> Good night,${this.state.name}!`);
  }
}

export default LifeCycle;
