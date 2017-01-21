import React        from 'react';
import Home from '../components/Home';
import {ReactRouter,
        Router,
        Route,
        browserHistory,
        IndexRoute} from 'react-router';

let routes = (
    <Router history={browserHistory}>
        <Route path='/' component={Home}>
        </Route>
    </Router>
)

export default routes;
