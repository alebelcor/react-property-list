import fetchProperties from '../../services/fetch-properties';
import receiveProperties from './receive-properties';

export default () => {
  return async dispatch => {
    dispatch({type: 'REQUEST_PROPERTIES'});

    try {
      const rawProperties = await fetchProperties();
      const slimProperties = rawProperties.map(property => {
        return {
          id: property.id,
          mainImageUrl: property.mainImageUrl,
          listPrice: property.financial.listPrice,
          monthlyRent: property.financial.monthlyRent,
          yearBuilt: property.physical.yearBuilt,
          photos: property.resources.photos.map(photo => {
            return {
              id: photo.id,
              urlSmall: photo.urlSmall,
              urlMedium: photo.urlMedium,
              url: photo.url,
            };
          }),
          address: {
            streetAndNumber: property.address.address1,
            city: property.address.city,
            state: property.address.state,
            zip: property.address.zip,
            zipPlus4: property.address.zipPlus4,
          },
        };
      });

      dispatch(receiveProperties(slimProperties));
    } catch {
      // implement error scenario
    }
  };
}
