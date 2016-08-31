import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from 'Dashboard';
import ReactOnRails from 'react-on-rails';

class App extends React.Component {
  render() {
    return <Dashboard userAvatar={this.props.userAvatar}/>;
  }
}

ReactOnRails.register({App});
