import React from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import LoginPage from './pages/LoginPage';

export default
class App extends React.Component {

  render () {
    let startPoint = this.props.start;
    let endPoint = this.props.end;

    return (
      <LoginPage />
    )
  }
}
