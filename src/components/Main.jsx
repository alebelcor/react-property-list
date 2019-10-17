/** @jsx jsx */
import { jsx } from '@emotion/core'

import {
  mainStyle,
} from '../styles/Main.css';

const Main = ({ children }) => {
  return (
    <main css={mainStyle}>
      {children}
    </main>
  )
};

export default Main;
