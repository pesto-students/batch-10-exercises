/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-console */
// eslint-disable-next-line import/no-unresolved
import React from 'react';

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Pesto' };
  }

  componentDidMount() {
    console.log("I'm mounted!");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Updated!');
    console.log({ prevProps, prevState });
  }

  componentWillUnmount() {
    console.log('Good night, Pesto!');
  }

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div>
        <p>Good morning, {this.state.name}!</p>
        <button type="button" onClick={this.componentDidUpdate}>Update Component</button>
      </div>
    );
  }
}

export default LifeCycle;
