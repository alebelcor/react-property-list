import React from 'react';
import { Provider } from 'react-redux';
import { Global } from '@emotion/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { loadState, saveState } from '../services/session-storage';
import configureStore from '../redux/configure-store';

import App from './App';
import HomePage from './HomePage';
import PropertiesPage from './PropertiesPage';

import indexStyle from '../styles/index.css';

const initialState = loadState();
const store = configureStore(initialState);

store.subscribe(() => {
  saveState(store.getState());
})

const Root = () => {
  return (
    <Provider store={store}>
      <Global styles={indexStyle} />

      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/properties">
              <PropertiesPage />
            </Route>
          </Switch>
        </App>
      </BrowserRouter>
    </Provider>
  )
};

export default Root;
