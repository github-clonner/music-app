import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';

import reducers from './reducers';

let store;
const middlewares = [];

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

export { store };