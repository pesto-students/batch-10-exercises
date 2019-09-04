/* eslint-disable react/no-multi-comp */

import React from 'react';
// import PropTypes from 'prop-types';

// import getAddressFromCoords from './utils/getAddressFromCoords';

class App extends React.Component {
  render() {
    return (
      <GeoPosition />
    );
  }
}

class GeoPosition extends React.Component {
  constructor() {
    super();
    this.state = {
      coords: {
        latitude: null,
        longitude: null,
      },
      error: null,
    };
  }

  componentDidMount() {
    this.geoId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          coords: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
        });
      },
      (error) => {
        this.setState({ error });
      },
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.geoId);
  }

  render() {
    return (
      <div>
        <h1>Geolocation</h1>
        {this.state.error ? (
          <Error message={this.state.error.message} />
        ) : (
            <dl>
              <dt>Latitude</dt>
              <dd>{this.state.coords.latitude || <Loader name="latitude" />}</dd>
              <dt>Longitude</dt>
              <dd>{this.state.coords.longitude || <Loader name="longitude" />}</dd>
            </dl>
          )}
      </div>
    );
  }
}

function Error(props) {
  return (<div>Error : {props.message}</div>);
}

function Loader(props) {
  return (<p>Fetching User {props.name}</p>);
}

export default App;
