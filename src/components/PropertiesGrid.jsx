/** @jsx jsx */
import { jsx } from '@emotion/core';

import PropertyGridItem from './PropertyGridItem';

import withPropertyData from '../helpers/withPropertyData';

import {
  propertiesListStyle,
} from '../styles/PropertiesGrid.css';

const PropertiesGrid = ({ properties }) => {
  return (
    <ol css={propertiesListStyle}>
      {properties.map(property => {
        return withPropertyData(PropertyGridItem, {
          key: property.id,
          ...property,
        });
      })}
    </ol>
  );
};

export default PropertiesGrid;
