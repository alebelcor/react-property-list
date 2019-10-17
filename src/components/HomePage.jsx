/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Fragment, useEffect } from 'react';
import { Link } from '@reach/router';

import {
  propertiesLinkStyle,
  resumeLinkStyle,
} from '../styles/HomePage.css';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Homepage';
  }, []);

  return (
    <Fragment>
      <h1>Welcome</h1>

      <p>
        My name is Alejandro Beltrán Coronado (<a rel="noopener noreferrer" target="_blank" href="https://alebelcor.github.io/resume.json/" css={resumeLinkStyle}>my resume</a>) and this is my take on the coding exercise as specified in <code>spec.md</code> file.
        <br />
        I'm happy to answer any questions you may have about it, and I hope you find everything to your satisfaction. Alrighty then.
      </p>

      <p>
        <strong>Note</strong>: The links on the header and footer are fake-ish (i.e. they open a new tab). Except the logo which will take you to the Properties page.
        <br />
        To visit this Welcome page go back on your browser history or go to the root URL.
      </p>

      <Link to={`${process.env.PUBLIC_URL}/properties`} css={propertiesLinkStyle}>
        Continue to Properties page
      </Link>
    </Fragment>
  );
}

export default HomePage;
