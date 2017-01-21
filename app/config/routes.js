import React        from 'react';
import Home from '../components/Home';
import {ReactRouter,
        Router,
        Route,
        hashHistory,
        IndexRoute} from 'react-router';

let routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Home}>
        </Route>
    </Router>
)

export default routes;
