/*
  Exercise:

  Make `withMouse` a "higher-order component" that sends the mouse position
  to the component as props (hint: use `event.clientX` and `event.clientY`).

*/
import React from 'react';
import PropTypes from 'prop-types';

function withMouse(Component) {
  return class HOC extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        x: 0,
        y: 0,
      };
      this.onMChange = this.onMChange.bind(this);
    }
    componentDidMount() {
      this.onChange
    }
    onMChange(e) {
      console.log(e);
      this.setState({
        x: e.clientX,
        y: e.clientY,
      });
    }
    render() {
      // eslint-disable-next-line react/jsx-filename-extension
      return (
        <div onMouseMove={this.onMChange}>
          <Component mouse={this.state}/>
        </div>
      );
    }
  };
}

class App extends React.Component {
  render() {
    const { mouse } = this.props;
    return (
      <div className="container">
        {mouse ? (
          <h1>
            The mouse position is ({mouse.x}, {mouse.y})
          </h1>
        ) : (
          <h1>We don&#39;t know the mouse position yet :(</h1>
        )}
      </div>
    );
  }
}

App.propTypes = {
  mouse: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
};

const AppWithMouse = withMouse(App);

export default AppWithMouse;
