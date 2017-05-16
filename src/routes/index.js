import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../features/layout/components/Layout';
import ArticlesList from '../features/articles/containers/ArticlesList';

import * as PATHS from './paths';

const routes = () =>
  <Switch>
    <Layout>
      <Route exact path={PATHS.ARTICLES_PATH} component={ArticlesList} />
    </Layout>
  </Switch>;

export default routes;
