import { css } from '@emotion/core';

export const fontIconStyle = css`
  display: inline-block;
  font-family: Icon Font;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  speak: none;
  -webkit-font-smoothing: antialiased;
`;

export const srOnly = css`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(100%);
  white-space: nowrap;
`;
