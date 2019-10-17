import { css } from '@emotion/core';

export const propertyTableRowStyle = css`
  &:hover {
    background-color: #f7f7f7;
  }
`;

export const propertyTableCellStyle = css`
  border-top: 1px solid #dbdbdb;
  padding: 15px 0 15px 20px;
  word-break: keep-all;
`;

export const propertyAddressStyle = css`
  color: #7b72d6;
  white-space: nowrap;

  &:hover,
  &:focus {
    color: #aaa6ff;
    text-decoration: underline;
  }
`;

export const propertyCityStateZipStyle = css`
  display: block;
  font-size: 13px;
  color: #a3a2a2;
`;

export const propertyImageStyle = css`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const propertyGoToDetailsCellStyle = css`
  ${propertyTableCellStyle};

  text-align: center;
`;

export const propertyGoToDetailsActionStyle = css`
  display: inline-block;
  border: 1px solid #6259c3;
  padding: 10px 20px;
  color: #fff;
  font-weight: 600;
  background-color: #6259c3;
  border-radius: 4px;
  word-break: keep-all;
  text-transform: capitalize;

  &:hover {
    border-color: #7e77ce;
    background-color: #7e77ce;
  }

  &:focus {
    border-color: #302a73;
    background-color: #473eab;
  }
`;
