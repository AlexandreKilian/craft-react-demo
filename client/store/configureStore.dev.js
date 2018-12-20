import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import { initialStates } from '../reducers';
import merge from 'deepmerge';
import history from '../routing/history';

const composeEnhancers = process.env.BROWSER ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;


export default function configureStore(hydratedState) {
    const state = merge(initialStates, hydratedState);
    const store = createStore(
        rootReducer,
        state,
        composeEnhancers(
            applyMiddleware(thunk, routerMiddleware(history)),
        )
    );
    return store;
}
