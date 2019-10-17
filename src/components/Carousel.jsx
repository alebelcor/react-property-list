/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useEffect, useRef } from 'react';
import Flickity from 'flickity';
import picturefill from 'picturefill';

import '../styles/flickity.css';

import {
  carouselStyle,
  carouselCaptionStyle,
  carouselCellStyle,
  carouselImageFallbackStyle,
} from '../styles/Carousel.css';

const Carousel = ({ photos, textAlternative, caption }) => {
  let carouselRef = useRef(null);

  useEffect(() => {
    if (photos.length > 0) {
      picturefill();

      const carouselElm = document.querySelector('[data-id="carousel"]');
      if (carouselElm) {
        carouselRef.current = new Flickity(carouselElm, {
          pageDots: false,
        });
      }
    }

    return () => {
      carouselRef.current && carouselRef.current.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (photos.length === 0) {
    return (
      <h2>No images available.</h2>
    );
  }

  return (
    <div css={carouselStyle}>
      <div css={carouselCaptionStyle}>
        {caption}
      </div>

      <div data-id="carousel">
        {
          photos.map((photo, index, photos) => {
            return (
              <picture key={photo.id} css={carouselCellStyle}>
                <source srcSet={photo.url} media="(min-width: 1280px)" />
                <source srcSet={photo.urlMedium} media="(min-width: 640px)" />
                <img srcSet={photo.urlSmall} alt={`Investment property – ${textAlternative} – ${index + 1} of ${photos.length}`} css={carouselImageFallbackStyle} />
              </picture>
            );
          })
        }
      </div>
    </div>
  );
};

export default Carousel;
