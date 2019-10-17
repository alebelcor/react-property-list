import { css } from '@emotion/core';

import { fontIconStyle } from './utils.css';

export const propertiesTableStyle = css`
  margin-bottom: 20px;
  border-top: 1px solid #dbdbdb;
  width: 100%;
  color: #767676;
  background-color: #fff;
`;

export const propertiesListTableHeadingStyle = css`
  padding: 15px 0 15px 20px;
  font-weight: 400;
  text-align: left;
  word-break: keep-all;

  &:first-of-type {
    padding-right: 20px;
  }
`;

export const propertyTableRow = css`
  &:hover {
    background-color: #f7f7f7;
  }
`;

export const informationIconStyle = css`
  ${fontIconStyle};

  border: 1px solid #a2a2a2;
  width: 18px;
  height: 18px;
  font-size: 15px;
  line-height: 15px;
  color: #a2a2a2;
  border-radius: 50%;
`;
