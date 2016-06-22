import React from 'react';

import Barcode from '../Barcode';

export default
class LoginPage extends React.Component {

  constructor() {
    super();
    this.state = {
      openBar: false
    }
  }

  render () {
    return (
      <div>
        <Barcode />
      </div>
    );
  }
}
