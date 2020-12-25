import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Home from './pages/Home';
import Profile from './pages/Profile'

function Routes (){
    return(
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Landing}/>
            <Route path="/app" component={Home}/>
            <Route path="/profile" component={Profile}/>
          </Switch>
        </BrowserRouter>
    );
}

export default Routes;