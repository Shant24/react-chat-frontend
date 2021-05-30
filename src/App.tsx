import React from 'react';

import { Route, Switch } from 'react-router';

import { Home, Auth } from './components/pages';

const App = () => (
  <Switch>
    <Route path="/" component={Home} exact />

    <Route path="/m/:id" component={Home} exact />

    <Route path="/auth" component={Auth} />
  </Switch>
);

export default App;
