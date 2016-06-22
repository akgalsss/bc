import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const ERROR_EMPTY = 'This field is required';
const SIGN_IN_TITLE = 'Sign In';
const EMAIL_TITLE = "Email";
const PASSWORD_TITLE = "Password";
const NO_ACCOUNT_TITLE = "Don't have an account?";
const FORGOT_PWD = "Forgot password?";
 
export default
class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      errors: {}
    }
  }

  handleSubmit(e, data) {
    e.preventDefault();
    this.setState({errors: this.validate()});
  }

  validate() {
    let errors = {};
    if (!this.refs.email.getValue()) {
      errors.email = ERROR_EMPTY;
    }
    if (!this.refs.password.getValue()) {
      errors.password = "This field is required";
    }
    return errors;
  }

  render () {
    return (
      <div>
        <h2>{SIGN_IN_TITLE}</h2>
        <Paper>
          <div style={{padding:15}}>
            <form ref="form" onSubmit={this.handleSubmit.bind(this)}>
              <div>
                <TextField ref="email" 
                  floatingLabelText={EMAIL_TITLE} 
                  errorText={this.state.errors.email || false} 
                  fullWidth={true}/>
              </div>
              <div>
                <TextField ref="password" 
                  type="password" 
                  floatingLabelText={PASSWORD_TITLE} 
                  errorText={this.state.errors.password || null} 
                  fullWidth={true} />
              </div>
              <div className="text-center">
                <RaisedButton type="submit" label={SIGN_IN_TITLE} primary={true} />
              </div>
              <br/>
              <p className="text-center"><a href="#forgot">{FORGOT_PWD}</a></p>
              <p className="text-center"><a href="#register">{NO_ACCOUNT_TITLE}</a></p>
            </form>
          </div>
        </Paper>
      </div>
    )
  }

}
