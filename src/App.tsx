import React from 'react';

import { Redirect, Route, Switch } from 'react-router';

import PageLayout from './components/PageLayout';
import Home from './components/pages/Home';
import Auth from './components/pages/Auth';



const App = () => (
  <PageLayout>
    <Switch>
      {/* TODO: add home landing page */}
      <Route path="/" exact component={Home} />

      <Route path="/m" exact component={Home} />

      <Route path="/m/:id" component={Home} exact />

      <Route path="/auth" component={Auth} />

      <Redirect to="/" />
    </Switch>
  </PageLayout>
);

export default App;
