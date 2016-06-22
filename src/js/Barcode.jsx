'use strict';
import React from 'react';
import StreamScanner from './scanner/StreamScanner';
import ImageScanner from './scanner/ImageScanner';
import Preview from './scanner/Preview';

import StreamStore from './flux/StreamStore';
import BarcodeStore from './flux/BarcodeStore';

import {contain} from './flux/Container';
import {dispatch} from './flux/Dispatcher';

export default
class Barcode extends React.Component {
  constructor () {
    super();
    this.state = Barcode.calculateState();
  }

  static getStores () {
    return [StreamStore, BarcodeStore];
  }

  static calculateState () {
    return {
      stream: StreamStore.getState(),
      barcode: BarcodeStore.getState()
    };
  }

  render () {
    return (
      <div>
        { this.state.stream.streamMode && <StreamScanner /> }
        <ImageScanner />
        { this.state.barcode.srcUrl && this.state.barcode.type && <Preview srcUrl={ this.state.barcode.srcUrl } type={ this.state.barcode.type }/> }
      </div>
    );
  }

}


export default
contain(Barcode);
