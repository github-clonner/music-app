import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { autoRehydrate, persistStore } from 'redux-persist';
import { composeWithDevTools } from 'remote-redux-devtools';

import reducers from './reducers';
import appSaga from './actions/sagas';

let store;

const sagaMiddleware = createSagaMiddleware();
const middlewares = [ sagaMiddleware ];

if (global.__DEV__) {
    store = createStore(
        reducers,
        undefined,
        composeWithDevTools(
            applyMiddleware(...middlewares),
            autoRehydrate({ log: true })
        )
    );

    if (module.hot) {
        module.hot.accept(() => { store.replaceReducer(require('./reducers').default); });
    }
} else {
    store = createStore(
        reducers,
        undefined,
        compose(
            applyMiddleware(...middlewares),
            autoRehydrate()
        )
    );
}

const restoreReduxStore = (restoringStore, onRestore) => {
    persistStore(restoringStore, {
        storage: require('react-native').AsyncStorage,
        blacklist: 'nav'
    }, () => {
        sagaMiddleware.run(appSaga);
        onRestore(...arguments);
    });
};

export { store, restoreReduxStore };