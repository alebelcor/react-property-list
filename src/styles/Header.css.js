import { css } from '@emotion/core';

export const headerStyle = css`
  border-bottom: 1px solid #dbdbdb;
  padding: 0 15px;
  display: flex;
  align-items: center;
`;

export const logoStyle = css`
  margin: 0 35px 0 0;

  img {
    width: 150px;
    height: auto;
  }
`;

export const navbarsContainerStyle = css`
  display: flex;
  flex: 1 1 auto;
  justify-content: space-between;
`;

export const navbarStyle = css`
  display: none;
  margin: 0;
  padding: 0;

  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;

export const navbarRightStyle = css`
  ${navbarStyle};

  display: flex;

  > li:first-of-type {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    > li:first-of-type {
      display: flex;
    }
  }
`;

export const navbarItemStyle = css`
  margin-right: 30px;

  &:last-of-type {
    margin-right: 0;
  }
`;

export const navbarLinkStyle = css`
  display: block;
  border-top: 4px solid transparent;
  padding: 24px 0;

  &:hover,
  &:focus {
    border-top-color: #ff7b0f;
  }
`;

export const signUpLink = css`
  display: block;
  padding: 10px 20px;
  border: 1px solid #ff7b0f;
  color: #ff7b0f;
  border-radius: 4px;

  &:active {
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  }

  @media only screen and (min-width: 768px) {
    margin-top: 15px;
  }
`;
