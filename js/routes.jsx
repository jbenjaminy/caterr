import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Landing from './components/landing';
import Register from './components/register';
import Nav from './components/nav';

let App = (props) => {
    return (
        <div className='app'>
            <Nav />
            <div>
                {props.children}
            </div>
        </div>
    )
}

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Landing} />
            <Route path="/register" component={Register}/>
        </Route>
    </Router>
);

export default routes;