import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
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
            applyMiddleware(...middlewares)
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
            applyMiddleware(...middlewares)
        )
    );
}

sagaMiddleware.run(appSaga);

export { store };