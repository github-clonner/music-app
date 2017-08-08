import React from 'react';
import {
   Page,
   Button,
   Text
} from '../../common';
import { Routing } from '../../actions/app';

class Login extends React.Component {
   login = () => {
      this.props.navigation.dispatch(Routing.goToArtistsList());
   };

   render() {
      return (
          <Page>
             <Text.Default>{'Login Screen'}</Text.Default>
             <Button text={'Login'} onPress={this.login}/>
          </Page>
      );
   }
}

export const LoginScreen = Login;