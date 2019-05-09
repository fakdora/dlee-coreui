import React from 'react';
import PropTypes from 'prop-types';
import {
  ExtendedBox,
} from '../';

class AuthenticationCallback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleAuthentication = this.handleAuthentication.bind(this);
  }

  componentDidMount() {
    this.handleAuthentication();
  }

  handleAuthentication() {
    if (/access_token|id_token|error/.test(this.props.location.hash)) {
      this.props.auth.handleAuthentication();
    }
  }

  render() {
    return (
      <ExtendedBox>
        loading...
      </ExtendedBox>
    );
  }
}

AuthenticationCallback.propTypes = {
  location: PropTypes.object,
  auth: PropTypes.object,
};

export default AuthenticationCallback;

