import {routerReducer as router} from 'react-router-redux';
import {combineReducers} from 'redux';
import content from './content';
import { initialState as contentState } from './content';


const rootReducer = combineReducers({
    router,
    content
});

export const initialStates = {
    content: contentState
};

export default rootReducer;
