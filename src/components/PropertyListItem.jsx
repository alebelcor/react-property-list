/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from '@reach/router';

import {
  propertyTableRowStyle,
  propertyTableCellStyle,
  propertyAddressStyle,
  propertyCityStateZipStyle,
  propertyGoToDetailsCellStyle,
  propertyImageStyle,
  propertyGoToDetailsActionStyle,
} from '../styles/PropertyListItem.css';

import { srOnly } from '../styles/utils.css';

const PropertyListItem = ({
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
    <tr css={propertyTableRowStyle}>
      <td css={propertyTableCellStyle}>
        <Link to={detailUrl}>
          <img css={propertyImageStyle} src={mainImageUrl} alt="" />
          <span css={srOnly}>Go to property details: {`${streetAndNumber}, ${city}, ${state} ${zip}${zipPlus4 ? `-${zipPlus4}` : ``}`}</span>
        </Link>
      </td>

      <td css={propertyTableCellStyle}>
        <Link to={detailUrl} css={propertyAddressStyle}>
          {streetAndNumber}

          <span css={propertyCityStateZipStyle}>
            {city}, {state} {zip}{zipPlus4 && `-${zipPlus4}`}
          </span>
        </Link>
      </td>

      <td css={propertyTableCellStyle}>
        {formattedListPrice}
      </td>

      <td css={propertyTableCellStyle}>
        {formattedMonthlyRent}
      </td>

      <td css={propertyTableCellStyle}>
        {grossYield}%
      </td>

      <td css={propertyTableCellStyle}>
        {yearBuilt}
      </td>

      <td css={propertyGoToDetailsCellStyle}>
        <Link to={detailUrl} css={propertyGoToDetailsActionStyle}>
          See&nbsp;details
        </Link>
      </td>
    </tr>
  );
};

export default PropertyListItem;
