import React from 'react';
import { View, Keyboard, Alert } from 'react-native';
import PropTypes from 'prop-types';
import {
    Button,
    Input,
    Page,
    Text,
    Spinner,
    ErrorMessage
} from '../../common';
import { connect } from 'react-redux';
import { login } from '../../actions/user';
import { Routing } from '../../actions/app';
import { isValid } from '../../services';

import { appStyles } from '../../config/style';
import styles from './styles';

class Login extends React.Component {
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
        const { signingIn, error } = this.state;

        return (
            <Page style={appStyles.container}>
                { signingIn && <Spinner /> }
                <Text.Header centered>{'last.fm / Artists List'}</Text.Header>
                <View style={styles.form}>
                    <Input placeholder={'Email'}
                           keyboardType={'email-address'}
                           onChangeText={this.onEmailChange} />
                    <Input placeholder={'Password'}
                           keyaboardType={'password'}
                           secureTextEntry
                           onChangeText={this.onPasswordChange} />
                </View>
                { error && <ErrorMessage style={styles.error}><Text.Default>{error}</Text.Default></ErrorMessage> }
                <Button text={'Login'} centered onPress={this.onLoginPressed} />
                <Button text={'Help'} centered
                        onPress={this.showHelpPopup}
                        style={styles.helpButton}/>
            </Page>
        );
    }
}

Login.propTypes = {
    currentUser: PropTypes.object,
    error: PropTypes.string
};

export const LoginScreen = connect(state => ({
    currentUser: state.user.currentUser,
    error: state.user.error
}))(Login);