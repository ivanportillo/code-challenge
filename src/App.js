import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import routes from './routes';
import reducer from './reducers';
import sagas from './sagas';

import './App.css';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(sagas);

const App = () =>
  <Provider store={store}>
    <Router>
      {routes()}
    </Router>
  </Provider>;

export default App;
