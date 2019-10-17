import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { Global } from '@emotion/core';

import Router from './components/Router';

import indexStyle from './styles/index.css';

render(
  <Fragment>
    <Global styles={indexStyle} />
    <Router />
  </Fragment>,

  document.getElementById('root')
);
