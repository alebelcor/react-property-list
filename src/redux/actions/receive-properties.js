export default (properties) => {
  return {
    type: 'RECEIVE_PROPERTIES',
    payload: properties,
  };
}
