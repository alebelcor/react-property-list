import { css } from '@emotion/core';

export const listingSubtitleContainerStyle = css`
  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  @media only screen and (min-width: 992px) {
    justify-content: space-between;
    padding: 0 45px;
  }

  @media only screen and (min-width: 1200px) {
    padding: 0 78px;
  }

  @media only screen and (min-width: 1350px) {
    padding: 0 52px;
  }

  @media only screen and (min-width: 1440px) {
    padding: 0 65px;
  }
`;

export const listingSubtitleStyle = css`
  margin: 30px 0;
  font-size: 16px;
  font-weight: 400;
`;

export const displayActions = css`
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
  }
`;

export const displayActionButton = css`
  border: 1px solid #d8d8d8;
  padding: 5px 10px;
  font-size: 25px;
  color: #d8d8d8;
  background-color: #fff;
  border-radius: 3px;
`;

export const displayActionButtonActive = css`
  background-color: #7b72d6;
  color: #fff;
`
