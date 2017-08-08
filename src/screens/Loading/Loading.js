import React from 'react';
import {
   Page,
   Spinner
} from '../../common';
import { Routing } from '../../actions/app';
import styles from './styles';

class Loading extends React.Component {
   componentDidMount() {
      this.sync();
   }

   sync = () => {
      this.props.navigation.dispatch(Routing.goToLogin());
   };

   render() {
      return (
          <Page style={styles.wrapper}>
             <Spinner centered color={'#000'} />
          </Page>
      );
   }
}

export const LoadingScreen = Loading;