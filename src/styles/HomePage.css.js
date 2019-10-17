import { css } from '@emotion/core';

export const propertiesLinkStyle = css`
  display: inline-block;
  margin-bottom: 30px;
  border: 1px solid #6259c3;
  padding: 10px 20px;
  color: #fff;
  font-weight: 600;
  background-color: #6259c3;
  border-radius: 4px;
  word-break: keep-all;

  &:hover {
    border-color: #7e77ce;
    background-color: #7e77ce;
  }

  &:focus {
    border-color: #302a73;
    background-color: #473eab;
  }
`;

export const resumeLinkStyle = css`
  color: #6259c3;
  text-decoration: underline;
`;
