import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../features/layout/components/Layout';
import ArticlesList from '../features/articles/containers/ArticlesList';
import ArticleView from '../features/articles/containers/ArticleView';

import * as PATHS from './paths';

const routes = () =>
  <Switch>
    <Layout>
      <Route exact path={PATHS.ARTICLES_PATH} component={ArticlesList} />
      <Route exact path={PATHS.ARTICLE_PATH} component={ArticleView} />
    </Layout>
  </Switch>;

export default routes;
