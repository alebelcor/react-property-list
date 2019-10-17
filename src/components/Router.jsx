import React from 'react';
import { Router } from '@reach/router';

import App from './App';
import HomePage from './HomePage';
import PropertiesPage from './PropertiesPage';
import PropertyPage from './PropertyPage';

const AppRouter = () => {
  return (
    <Router basepath={`${process.env.PUBLIC_URL}/`}>
      <App path={`${process.env.PUBLIC_URL}/`}>
        <HomePage path={`${process.env.PUBLIC_URL}/`} />
        <PropertiesPage path="properties" default />
        <PropertyPage path="properties/:propertyId" />
      </App>
    </Router>
  );
};

export default AppRouter;
