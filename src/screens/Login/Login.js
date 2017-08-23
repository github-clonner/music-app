import React from 'react';
import { View, Keyboard, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { login } from '../../redux/actions/user';
import { Routing } from '../../redux/actions/app';
import { isValid } from '../../services';

import { LoginPresentation } from './LoginPresentation';

class LoginContainer extends React.Component {
    state = {
        error: null,
        signingIn: false
    };

    credentials = {
        email: '',
        password: ''
    };

    componentDidMount() {
        if (!!this.props.currentUser) {
            this.props.dispatch(Routing.goToArtistsList());
        }
    }

    componentWillReceiveProps(newProps) {
        if (!!newProps.error) {
            this.setState({ signingIn: false, error: newProps.error });
        }

        if (!!newProps.currentUser) {
            Keyboard.dismiss();
            this.props.dispatch(Routing.goToArtistsList());
        }
    }

    onLoginPressed = () => {
        if (!this.state.signingIn) {
            if (!isValid.email(this.credentials.email)) {
                this.setState({ error: 'Invalid email' });
                return;
            }

            if (!isValid.password(this.credentials.password)) {
                this.setState({ error: 'Invalid password' });
                return;
            }

            this.setState({ signingIn: true });
            this.props.dispatch(login({
                email: this.credentials.email.trim(),
                password: this.credentials.password
            }));
        }
    };

    onEmailChange = email => {
        this.credentials.email = email.toLowerCase();
    };

    onPasswordChange = password => {
        this.credentials.password = password;
    };

    showHelpPopup = () => {
        Alert.alert(
            'Login',
            'I should not say, but...\n\n'+
            'Email: ozzy@blacksabbath.com\n'+
            'Password: Paranoid',
            [ { text: 'Oh, thanks!', type: 'cancel' } ],
            { cancelable: true }
        );
    };

    render() {
        return (
            <LoginPresentation signingIn={this.state.signingIn}
                               error={this.state.error} />
        );
    }
}

LoginContainer.propTypes = {
    currentUser: PropTypes.object,
    error: PropTypes.string
};

LoginContainer.defaultProps = {
    currentUser: null,
    error: null
};

export const LoginScreen = connect(state => ({
    currentUser: state.user.currentUser,
    error: state.user.error
}))(LoginContainer);