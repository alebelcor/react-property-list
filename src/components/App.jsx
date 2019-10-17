import React, { Fragment } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const App = ({ children }) => {
  return (
    <Fragment>
      <Header />

      <Main>
        {children}
      </Main>

      <Footer />
    </Fragment>
  );
}

export default App;
