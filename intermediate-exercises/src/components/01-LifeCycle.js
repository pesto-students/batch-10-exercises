import React from 'react';

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Pesto' };
  }

  // This code will be called when the component finishes mounting
  // (so it is visible for a user).
  componentDidMount() {
    console.log('I\'m mounted!');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Updated!');
    console.log({ prevProps, prevState });
  }

  componentWillUnmount() {
    console.log('Good night, Pesto!');
  }

  // Task 4: Create a button which triggers ComponentDidUpdate lifecycle method on click.
  render() {
    const { name } = this.state;
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div>
        <button type="button" onClick={() => this.setState({ name: 'some name' })}>Click</button>
        <p>
          Good morning,
          {name}
          !
        </p>
      </div>
    );
  }
}

export default LifeCycle;
