import { css } from '@emotion/core';

export const carouselStyle = css`
  position: relative;
  margin-bottom: 30px;
`;

export const carouselCaptionStyle = css`
  position: absolute;
  bottom: 0;
  display: block;
  padding: 15px 12px;
  width: 100%;
  font-size: 14px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

export const carouselCellStyle = css`
  margin-right: 10px;
  width: 100%;
  height: 213px;
  text-align: center;

  @media only screen and (min-width: 640px) {
    height: 427px;
  }

  @media only screen and (min-width: 1280px) {
    height: 853px;
  }
`;

export const carouselImageFallbackStyle = css`
  display: block;
  margin: 0 auto;
  height: 100%;
  object-fit: contain;
`;
