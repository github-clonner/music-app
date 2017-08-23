import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { store, restoreReduxStore } from './redux/store';
import { LoadingScreen } from './screens';
import AppWithRouter from './router';

class MusicApp extends React.Component {
    state = {
        loading: true
    };

    componentWillMount() {
        restoreReduxStore(store, () => {
            this.setState({ loading: false });
        });
    }

    render() {
        if (this.state.loading) {
            return <LoadingScreen />
        } else {
            return (
                <Provider store={store}>
                    <AppWithRouter />
                </Provider>
            );
        }
    }
}

AppRegistry.registerComponent('MusicApp', () => MusicApp);