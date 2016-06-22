import React from 'react';
import Paper from 'material-ui/Paper';
import SocialButton from './SocialButton';

const SIGN_IN_WITH_TITLE = 'Sign In With';

export default
class SignInSocial extends React.Component {

  render () {
    return (
      <div>
        <h2>{SIGN_IN_WITH_TITLE}</h2>
        <Paper>
          <div className="text-center" style={{padding: 15}}>
            <SocialButton file="/assets/icons/facebook.png" />
            &nbsp; &nbsp; &nbsp;
            <SocialButton file="/assets/icons/twitter.png" />
            &nbsp; &nbsp; &nbsp;
            <SocialButton file="/assets/icons/google.png" />
          </div>
        </Paper>
      </div>
    )
  }

}
