import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Project from './pages/project';
import p404 from './pages/404';


const Routes = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/project/:id' component={Project} />
            <Route path='/*' component={p404} />
        </Switch>
       
    </BrowserRouter>

);

export default Routes;