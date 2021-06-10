import React from 'react';

import { Route, Switch } from 'react-router';

import { PageLayout } from './components';
import { Home, Auth } from './components/pages';

const App = () => (
  <PageLayout>
    <Switch>
      <Route path="/" component={Home} exact />

      <Route path="/m/:id" component={Home} exact />

      <Route path="/auth" component={Auth} />
    </Switch>
  </PageLayout>
);

export default App;
