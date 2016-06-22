import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import Divider from 'material-ui/Divider';

export default 
class AppMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      valueSingle: null
    };
  }

  handleChangeSingle (event, value) {
    this.setState({
      valueSingle: value,
    });
  };

  render() {
    return (
      <IconMenu
        title="BarCode"
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        onChange={this.handleChangeSingle.bind(this)}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        value={this.state.valueSingle}
      >
        <MenuItem value="profile" primaryText="My Profile" />
        <MenuItem value="passwords" primaryText="My Passwords" />
        <Divider />
        <MenuItem value="sign_out" primaryText="Sign out" />
      </IconMenu>
    );
  }
}