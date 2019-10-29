/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useRouteMatch, Switch, Route, Link } from 'react-router-dom';
import queryString from 'query-string';

import requestProperties from '../redux/actions/request-properties';

import PropertyPage from './PropertyPage';
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

const PropertiesPage = () => {
  const dispatch = useDispatch();
  const properties = useSelector(state => state.properties);
  const isLoading = useSelector(state => state.isLoading);
  const { path } = useRouteMatch();

  const isListView = queryString.parse(useLocation().search).dv === 'list';

  useEffect(() => {
    document.title = 'Property listing page';

    if (properties.length === 0) {
      dispatch(requestProperties());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <h3>Loading...</h3>
    );
  }

  return (
    <Switch>
      <Route exact path={path}>
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
      </Route>

      <Route path={`${path}/:propertyId`}>
        <PropertyPage />
      </Route>
    </Switch>
  );
};

export default PropertiesPage;
