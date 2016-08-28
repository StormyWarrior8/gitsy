import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/Dashboard';

import { Router, Route, Link, browserHistory } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

let documentReady = () => {
  let reactNode = document.getElementById('react');

  if (reactNode) {
    ReactDOM.render(
      <Router history={browserHistory}>
        <Route component={App}>
          <Route path="/dashboard" component={Dashboard} />
        </Route>
      </Router>
    ,reactNode);
  }
};

$(documentReady);
