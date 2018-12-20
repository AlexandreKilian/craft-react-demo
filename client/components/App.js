import React from 'react';
import { Switch, Route } from 'react-router';

import HomePage from './pages/HomePage';
import Post from './pages/Post';

class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/:slug" exact component={Post} />
                </Switch>
            </div>
        );
    }
}

App.propTypes = {};

export default App;
