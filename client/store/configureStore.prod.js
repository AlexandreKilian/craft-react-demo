import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import merge from 'deepmerge';
import rootReducer from '../reducers';
import { initialStates } from '../reducers';

import history from '../routing/history';


export default function configureStore(hydratedState) {
    const state = merge(initialStates, hydratedState);
    return createStore(
        rootReducer,
        state,
        compose(
            applyMiddleware(
                thunk,
                routerMiddleware(history)
            )
        )
    );
}
