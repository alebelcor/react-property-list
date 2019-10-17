export const getFormattedCurrency = amount => {
  return amount.toLocaleString(undefined, {
    style: 'currency',
    currency: 'USD'
  });
};

export const getGrossYield = (monthlyRent, listPrice) => {
  return ((monthlyRent * 12) / listPrice).toFixed(2);
};
