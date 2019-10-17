/** @jsx jsx */
import { jsx } from '@emotion/core';

import PropertyGridItem from './PropertyGridItem';

import withPropertyData from '../helpers/withPropertyData';
import {
  getFormattedCurrency,
  getGrossYield
} from '../helpers/utils';

import {
  propertiesListStyle,
} from '../styles/PropertiesGrid.css';

const PropertiesGrid = ({ properties }) => {
  return (
    <ol css={propertiesListStyle}>
      {properties.map(property => {
        return withPropertyData(PropertyGridItem, {
          key: property.id,
          propertyDetailUrl: `/properties/${property.id}`,
          formattedListPrice: getFormattedCurrency(property.financial.listPrice),
          formattedMonthlyRent: getFormattedCurrency(property.financial.monthlyRent),
          grossYield: getGrossYield(property.financial.monthlyRent, property.financial.listPrice),
          ...property
        });
      })}
    </ol>
  );
};

export default PropertiesGrid;
