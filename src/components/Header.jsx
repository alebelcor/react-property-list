/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Link } from '@reach/router';

import logo from '../images/logo.svg';

import {
  headerStyle,
  logoStyle,
  navbarsContainerStyle,
  navbarStyle,
  navbarRightStyle,
  navbarItemStyle,
  navbarLinkStyle,
  signUpLink,
} from '../styles/Header.css';

const Header = () => {
  return (
    <header css={headerStyle}>
      <h1 css={logoStyle}>
        <Link to={`${process.env.PUBLIC_URL}/properties`}>
          <img src={logo} alt="Roofstock logo" />
        </Link>
      </h1>

      <div css={navbarsContainerStyle}>
        <nav>
          <ul css={navbarStyle}>
            <li css={navbarItemStyle}>
              <a rel="noopener noreferrer" target="_blank" href="https://www.roofstock.com/investment-property-marketplace" css={navbarLinkStyle}>Buy</a>
            </li>
            <li css={navbarItemStyle}>
              <a rel="noopener noreferrer" target="_blank" href="https://www.roofstock.com/manage-properties" css={navbarLinkStyle}>Own</a>
            </li>
            <li css={navbarItemStyle}>
              <a rel="noopener noreferrer" target="_blank" href="https://www.roofstock.com/seller-services" css={navbarLinkStyle}>Sell</a>
            </li>
          </ul>
        </nav>

        <nav>
          <ul css={navbarRightStyle}>
            <li css={navbarItemStyle}>
              <a rel="noopener noreferrer" target="_blank" href="https://www.roofstock.com/login" css={navbarLinkStyle}>Log&nbsp;In</a>
            </li>
            <li css={navbarItemStyle}>
              <a rel="noopener noreferrer" target="_blank" href="https://www.roofstock.com/signup" css={signUpLink}>Sign&nbsp;Up</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
