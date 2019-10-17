import { css } from '@emotion/core';

export const marketFooterStyle = css`
  border-bottom: 1px solid #dbdbdb;
  padding: 10px 25px;
  background-color: #f4f4f4;
`;

export const marketFooterHeadingStyle = css`
  font-size: 14px;
  font-weight: 600;
`;

export const marketFooterListStyle = css`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const marketFooterListItemStyle = css`
  margin: 0 0 15px 0;

  &:not(:last-child)::after {
    margin: 0 10px;
    display: inline-block;
    width: 1px;
    height: 14px;
    background-color: #dbdbdb;
    content: "";
  }
`;

export const marketFooterLinkStyle = css`
  font-size: 14px;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const mainFooterStyle = css`
  padding: 30px 15px;
  font-size: 14px;
  line-height: 1.5;

  @media only screen and (min-width: 768px) {
    padding: 30px 25px;
  }
`;

export const mainFooterNavStyle = css`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const mainFooterMenuContainerStyle = css`
  &:not(:first-of-type) {
    margin-top: 20px;

    @media only screen and (min-width: 768px) {
      margin-top: 0;
    }
  }
`;

export const mainFooterListStyle = css`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const mainFooterListItemStyle = css`
  margin-top: 5px;
  color: #767676;
`;

export const mainFooterHeadingStyle = css`
  ${mainFooterListItemStyle};

  font-weight: 600;
`;
