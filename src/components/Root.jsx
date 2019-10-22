import React from 'react';
import { Provider } from 'react-redux';
import { Global } from '@emotion/core';

import { loadState, saveState } from '../services/session-storage';
import configureStore from '../redux/configure-store';

import Router from './Router';

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
      <Router />
    </Provider>
  )
};

export default Root;
