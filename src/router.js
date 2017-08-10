import React from 'react';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Screens from './screens';

const navBarHidden = navigation => ({
    header: null
});

export const Navigator = StackNavigator({
    Loading: { screen: Screens.LoadingScreen, navigationOptions: navBarHidden },
    Login: { screen: Screens.LoginScreen, navigationOptions: navBarHidden },
    Artists: { screen: Screens.ArtistsScreen, navigationOptions: navBarHidden }
});

const AppWithNavigationState = ({ dispatch, nav }) => <Navigator
    navigation={addNavigationHelpers({ dispatch, state: nav })}/>;

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired
};

export default connect(state => ({ nav: state.nav }))(AppWithNavigationState);