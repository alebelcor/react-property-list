import ky from 'ky';

const DATA_SOURCE = 'https://dev1-sample.azurewebsites.net/properties.json';

export default async () => {
  const response = await ky.get(DATA_SOURCE).json();
  return response.properties.filter(property => property.status !== 'OffMarket');
}
