import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import LandingPage from './components/landing';
import ChatroomPage from './components/register';
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