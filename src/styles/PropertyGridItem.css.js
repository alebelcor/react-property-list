import { css } from '@emotion/core';

export const propertyListItemStyle = css`
  margin: 0 20px 25px;
  border: 1px solid #dbdbdb;
  width: 265px;
  border-radius: 4px;

  @media only screen and (min-width: 1200px) {
    margin-right: 10px;
    margin-left: 10px;
  }
`;

export const propertyMainStyle = css`
  position: relative;
  height: 179px;
  overflow-x: hidden;
`;

export const propertyImage = css`
  width: auto;
  height: 178px;
`;


export const propertyMainInfoStyle = css`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 3px 10px;
  width: 100%;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const propertyPrice = css`
  margin: 4px 0;
  font-size: 26px;
  font-weight: 300;
  line-height: 1;
`;

export const propertyYearBuilt = css`
  font-size: 13px;
`;

export const propertyLinkStyle = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
`;
export const propertyStatsStyle = css`
  display: flex;
  padding: 5px 10px;
`;

export const propertyStatsItemStyle = css`
  flex-basis: 50%;
  padding-bottom: 5px;

  &:not(:first-of-type) {
    padding-left: 10px;
    border-left: 1px solid #dbdbdb;
  }
`;

export const propertyStatsHeading = css`
  font-size: 14px;
  font-weight: 600;
  color: #767676;
`;

export const propertyStatsValue = css`
  font-size: 20px;
  font-weight: 300;
`;

export const propertyAddressStyle = css`
  border-top: 1px solid #dbdbdb;
  padding: 5px 10px;
  font-size: 14px;
  font-style: normal;
  text-align: center;
  color: #767676;
`;
