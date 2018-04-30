// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components

import App from './components/App';
import ListPage from './components/ListPage';
import Home from './components/Home';

const AppRoutes = () => (
    <App>
        <Switch>
            <Route path="/" component={Home}/>
            <Route path="/ListPage" component={ListPage}/>
        </Switch>
    </App>
)
export default AppRoutes;