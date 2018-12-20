import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import ReactOnRails from 'react-on-rails';
import { StaticRouter } from 'react-router';
import App from './App';

class Root extends Component {
    render() {
        const appStore = ReactOnRails.getStore('appStore');
        const { location } = this.props;
        const context = {};
        return (
            <Provider store={appStore}>
                <StaticRouter location={location} context={context}>
                    <App />
                </StaticRouter>
            </Provider>
        );
    }
}

Root.propTypes = {
    location: PropTypes.string.isRequired,
};

export default Root;
