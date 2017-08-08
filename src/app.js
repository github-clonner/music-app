import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import AppWithRouter from './router';

class MusicApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithRouter />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('MusicApp', () => MusicApp);