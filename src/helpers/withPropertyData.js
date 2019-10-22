import React from 'react';

import {
  getFormattedCurrency,
  getGrossYield,
} from '../helpers/utils';

export default (WrappedComponent, props) => {
  return (
    <WrappedComponent
      detailUrl={`${process.env.PUBLIC_URL}/properties/${props.id}`}
      formattedListPrice={getFormattedCurrency(props.listPrice)}
      formattedMonthlyRent={getFormattedCurrency(props.monthlyRent)}
      grossYield={getGrossYield(props.monthlyRent, props.listPrice)}
      {...props}
    />
  );
};
