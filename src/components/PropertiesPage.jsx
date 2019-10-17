/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Fragment, useEffect } from 'react';
import { Link } from '@reach/router';
import { useSessionStorage } from 'react-use';
import ky from 'ky';
import queryString from 'query-string';

import PropertiesGrid from './PropertiesGrid';
import PropertiesList from './PropertiesList';

import {
  listingSubtitleContainerStyle,
  listingSubtitleStyle,
  displayActions,
  displayActionButton,
  displayActionButtonActive,
} from '../styles/PropertiesPage.css';

import {
  fontIconStyle,
  srOnly,
} from '../styles/utils.css';

const DATA_SOURCE = 'https://dev1-sample.azurewebsites.net/properties.json';

const PropertiesPage = ({ location }) => {
  const [properties, setProperties] = useSessionStorage('coding-exercise-properties', []);

  const isListView = queryString.parse(location.search).dv === 'list';

  useEffect(() => {
    document.title = 'Property listing page';

    const fetch = async () => {
      const response = await ky.get(DATA_SOURCE).json();
      setProperties(response.properties.filter(property => property.status !== 'OffMarket'));
    };

    if (properties.length === 0) {
      fetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (properties.length === 0) {
    return (
      <h3>Loading...</h3>
    );
  }

  return (
    <Fragment>
      <div css={listingSubtitleContainerStyle}>
        <h3 css={listingSubtitleStyle}>
          Showing {properties.length} properties
        </h3>

        <div css={displayActions}>
          <Link to="/properties" css={css`
            ${displayActionButton};
            ${isListView ? `` : displayActionButtonActive};
          `}>
            <span aria-hidden="true" css={fontIconStyle}>&#xe800;</span>
            <span css={srOnly}>Click to activate the grid view</span>
          </Link>

          <Link to="/properties?dv=list" css={css`
            ${displayActionButton};
            ${isListView ? displayActionButtonActive : ``};
          `}>
            <span aria-hidden="true" css={fontIconStyle}>&#xe801;</span>
            <span css={srOnly}>Click to activate the list view</span>
          </Link>
        </div>
      </div>

      {isListView ?
        <PropertiesList properties={properties} /> :
        <PropertiesGrid properties={properties} />
      }
    </Fragment>
  );
};

export default PropertiesPage;
