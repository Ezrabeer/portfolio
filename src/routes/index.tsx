import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home } from '../views';

export const routes = (
  <Switch>
    <Redirect exact from='/' to='/home'/>
    <Route path='/home' component={Home} />
  </Switch>
);
