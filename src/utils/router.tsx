import { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Module1Page } from '../modules/module1';
import { Module2Page } from '../modules/module2';

const Router: FC = () => (
  <Switch>
    <Route exact path="/" component={Module1Page}>
      <Redirect to="/home/page1" />
    </Route>
    <Route exact path="/home" component={Module1Page}>
      <Redirect to="/home/page1" />
    </Route>

    <Route exact path="/home/page1" component={Module1Page} />
    <Route exact path="/home/page2" component={Module2Page} />
    <Route exact path="/home/page2/:id" component={Module2Page} />
  </Switch>
);

export default Router;
