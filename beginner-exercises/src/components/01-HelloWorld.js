import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class HelloWorld extends Component {
  render() {
    const text = 'hello world!';
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <h1>{text}</h1>
    );
  }
}

export default HelloWorld;
