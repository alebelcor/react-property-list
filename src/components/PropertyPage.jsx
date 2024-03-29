/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';

import Carousel from './Carousel';

import {
  propertyAddressStyle,
  propertyCityStateZipStyle,
} from '../styles/PropertyPage.css';

const PropertyPage = () => {
  const properties = useSelector(state => state.properties);
  const { propertyId } = useParams();

  useEffect(() => {
    document.title = 'Property detail page';
  }, []);

  const propertyIdNumber = parseInt(propertyId, 10);
  if (Number.isNaN(propertyIdNumber)) {
    return <Redirect to="/properties" />
  }

  const property = properties.find(property => property.id === propertyIdNumber);
  if (typeof property === 'undefined') {
    return <Redirect to="/properties" />
  }

  const {
    photos,
    yearBuilt,
    address: {
      streetAndNumber,
      city,
      state,
      zip,
      zipPlus4,
    },
  } = property;

  return (
    <Fragment>
      <h2>
        <address css={propertyAddressStyle}>
          {streetAndNumber}

          <span css={propertyCityStateZipStyle}>
            {city}, {state} {zip}{zipPlus4 && `-${zipPlus4}`}
          </span>
        </address>
      </h2>

      <Carousel
        photos={photos}
        textAlternative={`${streetAndNumber}, ${city}, ${state} ${zip}${zipPlus4 ? `-${zipPlus4}` : ``}`}
        caption={
          <span>
            {streetAndNumber}, {city}, {state} {zip}{zipPlus4 && `-${zipPlus4}`}
            {' '}
            <span aria-hidden="true">|</span> Built in {yearBuilt}
          </span>
        }
      />
    </Fragment>
  );
};

export default PropertyPage;
