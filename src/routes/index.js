import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Guest from '../pages/guest';
import Feed from '../pages/feed';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Guest} />
      <Route path="/feed" component={Feed} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
