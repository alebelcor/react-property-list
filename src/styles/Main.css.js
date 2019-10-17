import { css } from '@emotion/core';

export const mainStyle = css`
  padding: 0 15px;

  @media only screen and (min-width: 768px) {
    margin: 0 auto;
    padding: 0;
    width: 750px;
  }

  @media only screen and (min-width: 992px) {
    width: 970px;
  }

  @media only screen and (min-width: 1200px) {
    width: 1170px;
  }

  @media only screen and (min-width: 1350px) {
    width: 1320px;
  }

  @media only screen and (min-width: 1440px) {
    width: 1410px;
  }
`;
