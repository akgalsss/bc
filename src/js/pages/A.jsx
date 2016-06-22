import React from 'react';

import AppStore from '../flux/AppStore';

import AppBar from 'material-ui/AppBar';
import LeftNav from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppMenu from '../AppMenu';
import SignIn from '../SignIn';
import SignInSocial from '../SignInSocial';
import Barcode from '../Barcode';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default
class LoginPage extends React.Component {

  constructor() {
    super();
    this.state = {
      openBar: false
    }
  }

  static getStores () {
    return [AppStore];
  }

  static calculateState () {
    return {
      app: AppStore.getState()
    };
  }

  handleToggle() {
    this.setState({openBar: !this.state.open});
  }

  handleClose() {
    this.setState({openBar: false});
  }

  render () {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <AppBar 
            title={<i>BarCode</i>}
            onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
            iconElementRight={
              <AppMenu />
            }/>

          <LeftNav
            docked={false}
            width={200}
            open={this.state.openBar}
            onRequestChange={open => this.setState({openBar: false})}
          >
            <AppBar title="BarCode" 
              title={<i>BarCode</i>}
              onLeftIconButtonTouchTap={this.handleClose.bind(this)} />
            <MenuItem onTouchTap={this.handleClose.bind(this)}>Home</MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>Sign In</MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>Sign Up</MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>Pricing</MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>Contacts</MenuItem>
          </LeftNav>

          <div className="col-lg-4 col-lg-offset-4 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3">
            <Barcode />
            { /*<SignIn />
            <SignInSocial /> */ }
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}
