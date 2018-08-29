import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Guest from '../pages/guest';
import Feed from '../pages/feed';
import Profile from '../pages/profile';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Guest} />
      <Route path="/feed" component={Feed} />
      <Route path="/profile" component={Profile} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
