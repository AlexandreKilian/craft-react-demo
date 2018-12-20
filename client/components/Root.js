import React, { Component } from 'react';
import { Provider } from 'react-redux';
import history from '../routing/history';
import ReactOnRails from 'react-on-rails';
import { ConnectedRouter } from 'react-router-redux';
import App from './App';

class Root extends Component {
    render() {
        const appStore = ReactOnRails.getStore('appStore');
        return (
            <Provider store={appStore}>
                <ConnectedRouter history={history}>
                    <App history={history} />
                </ConnectedRouter>
            </Provider>
        );
    }
}

Root.propTypes = {
};

export default Root;
