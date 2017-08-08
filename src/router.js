import React from 'react';
import {
   StackNavigator,
   addNavigationHelpers
} from 'react-navigation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Screens from './screens';

export const Navigator = StackNavigator({
   Loading: { screen: Screens.LoadingScreen },
   Login: { screen: Screens.LoginScreen },
   Artists: { screen: Screens.ArtistsScreen }
});

const AppWithNavigationState = ({ dispatch, nav }) => <Navigator navigation={addNavigationHelpers({ dispatch, state: nav })}/>;

AppWithNavigationState.propTypes = {
   dispatch: PropTypes.func.isRequired,
   nav: PropTypes.object.isRequired
};

export default connect(state => ({ nav: state.nav }))(AppWithNavigationState);