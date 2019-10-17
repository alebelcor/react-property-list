import { css } from '@emotion/core';

export const propertiesListStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 25px;
  margin: 0;
  list-style: none;

  @media only screen and (min-width: 768px) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
  }
`;
