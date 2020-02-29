import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { HomePage } from '../views';
import { RouteWithLayout } from '../components';
import { Main } from '../layouts';

export const routes = (
  <Switch>
    <Redirect exact from='/' to='/home'/>
    <RouteWithLayout path='/home' view={HomePage} layout={Main}/>
  </Switch>
);
