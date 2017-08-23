import React from 'react';
import {
    Button,
    Input,
    Page,
    Text,
    Spinner,
    ErrorMessage
} from '../../common';
import { text } from '../../config';

import { appStyles } from '../../config/style';
import styles from './styles';

export const LoginPresentation = ({ signingIn, error }) => (
    <Page style={appStyles.container}>
        { signingIn && <Spinner /> }
        <Text.Header centered>{text.app.title}</Text.Header>
        <View style={styles.form}>
            <Input placeholder={text.fields.email}
                   keyboardType={'email-address'}
                   onChangeText={this.onEmailChange} />
            <Input placeholder={text.fields.password}
                   keyaboardType={'password'}
                   secureTextEntry
                   onChangeText={this.onPasswordChange} />
        </View>
        { error && <ErrorMessage style={styles.error}><Text.Default>{error}</Text.Default></ErrorMessage> }
        <Button text={text.auth.login} centered onPress={this.onLoginPressed} />
        <Button text={text.other.help} centered
                onPress={this.showHelpPopup}
                style={styles.helpButton}/>
    </Page>
);