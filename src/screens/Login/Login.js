import React from 'react';
import { View } from 'react-native';
import {
    Button,
    Input,
    Page,
    Text,
    Spinner
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

    componentWillReceiveProps(newProps) {
        if (!!newProps.error) {
            this.setState({ signingIn: false, error: newProps.error });
        }

        if (!!newProps.currentUser) {
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
            };

            this.setState({ signingIn: true });
            this.props.dispatch(login(this.credentials));
        }
    };

    onEmailChange = email => {
        this.credentials.email = email;
    };

    onPasswordChange = password => {
        this.credentials.password = password;
    };

    render() {
        const { signingIn, error } = this.state;

        return (
            <Page style={appStyles.container}>
                { signingIn && <Spinner centered/> }
                <Text.Header centered>{'Music App'}</Text.Header>
                <View style={styles.form}>
                    <Input placeholder={'Email'} onChangeText={this.onEmailChange} />
                    <Input placeholder={'Password'} onChangeText={this.onPasswordChange} />
                </View>
                { error && <Text.Default centered>{error}</Text.Default> }
                <Button text={'Login'} centered onPress={this.onLoginPressed} />
            </Page>
        );
    }
}

export const LoginScreen = connect(state => ({
    currentUser: state.user.currentUser,
    error: state.user.error
}))(Login);