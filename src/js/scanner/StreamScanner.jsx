'use strict';
import React from 'react';
import { dispatch } from '../flux/Dispatcher';

export default
class StreamScanner extends React.Component {
  render () {
    return (
      <div>
        <button onClick={ dispatch.bind(this, {type: 'stream/on' }) }>On</button>
        <button onClick={ dispatch.bind(this, {type: 'stream/off'}) }>Off</button>
      </div>
    )
  }
}