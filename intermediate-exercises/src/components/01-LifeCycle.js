import React from 'react';

/*
  Tasks for this exercise are in comments inside the component class code.
  In this exercise lifecycle methods will be used to provide convenient debug
  messages in developer's console.
  There are more lifecycle methods available.
  Those three presented are commonly used.
 */

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Pesto', renderC: true };
  }

  componentDidMount() {
    console.log(`I'm Mounted`);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`Updated!`);
  }

  componentWillUnmount() {
    console.log(`Good night, ${this.state.name}`);
  }

  render() {
    return (
      <div>
        <p>Good morning, {this.state.name}!</p>
        <button onClick={this.componentDidUpdate}>ComponentDidUpdate</button>
      </div>
    );
  }
}

export default LifeCycle;
