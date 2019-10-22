/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from '@reach/router';

import {
  propertyListItemStyle,
  propertyMainStyle,
  propertyImage,
  propertyMainInfoStyle,
  propertyPrice,
  propertyYearBuilt,
  propertyLinkStyle,
  propertyStatsStyle,
  propertyStatsItemStyle,
  propertyStatsHeading,
  propertyStatsValue,
  propertyAddressStyle,
} from '../styles/PropertyGridItem.css';

import { srOnly } from '../styles/utils.css';

const PropertyGridItem = ({
  mainImageUrl,
  detailUrl,
  formattedListPrice,
  formattedMonthlyRent,
  grossYield,
  yearBuilt,
  address: {
    streetAndNumber,
    city,
    state,
    zip,
    zipPlus4,
  },
}) => {
  return (
    <li css={propertyListItemStyle}>
      <div css={propertyMainStyle}>
        <img css={propertyImage} src={mainImageUrl} alt={`Investment property – ${streetAndNumber}, ${city}, ${state} ${zip}${zipPlus4 ? `-${zipPlus4}` : ``}`} />

        <div css={propertyMainInfoStyle}>
          <div css={propertyPrice}>{formattedListPrice}</div>
          <div css={propertyYearBuilt}>Built in {yearBuilt}</div>
        </div>

        <Link to={detailUrl} css={propertyLinkStyle}>
          <span css={srOnly}>Go to property details: {`${streetAndNumber}, ${city}, ${state} ${zip}${zipPlus4 && `-${zipPlus4}`}`}</span>
        </Link>
      </div>

      <div css={propertyStatsStyle}>
        <div css={propertyStatsItemStyle}>
          <div css={propertyStatsHeading}>
            Current Rent
          </div>

          <span css={propertyStatsValue}>
            {formattedMonthlyRent}
          </span>
        </div>

        <div css={propertyStatsItemStyle}>
          <div css={propertyStatsHeading}>
            Gross Yield
          </div>

          <span css={propertyStatsValue}>
            {grossYield}%
          </span>
        </div>
      </div>

      <address css={propertyAddressStyle}>
        {streetAndNumber}<br />
        {city}, {state} {zip}{zipPlus4 && `-${zipPlus4}`}
      </address>
    </li>
  );
};

export default PropertyGridItem;
