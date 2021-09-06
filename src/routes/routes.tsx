import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Favorite from '../views/Favorite/favorite.view';
import Home from '../views/Home/home.view';

const NotFoundRedirect = () => <Redirect to="/home" />;

function Routes() {
  return (
    <Switch>
      <Route component={Home} path="/home" />
      <Route component={Favorite} path="/favorite" />
      <Route component={NotFoundRedirect} />
    </Switch>
  );
}
export default Routes;
