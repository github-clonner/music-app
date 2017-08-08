import React from 'react';
import { View } from 'react-native';
import {
   Page,
   Button,
   Text,
   Input
} from '../../common';
import { Routing } from '../../actions/app';
import { appStyles } from '../../config/style';
import styles from './styles';

class Login extends React.Component {
   login = () => {
      this.props.navigation.dispatch(Routing.goToArtistsList());
   };

   render() {
      return (
          <Page style={appStyles.container}>
             <Text.Header centered>{'Music App'}</Text.Header>
             <View style={styles.form}>
                <Input placeholder={'Email'}/>
                <Input placeholder={'Password'}/>
             </View>
             <Button text={'Login'} centered onPress={this.login}/>
          </Page>
      );
   }
}

export const LoginScreen = Login;