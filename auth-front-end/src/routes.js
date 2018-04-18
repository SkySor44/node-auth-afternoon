import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import Students from './Students';


export default (
    <Switch>
        <Route exact path = '/' component = {Home}/>
        <Route path = '/students' component= {Students}/>
    </Switch>
)