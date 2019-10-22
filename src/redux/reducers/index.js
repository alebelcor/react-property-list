import requestProperties from './request-properties';
import receiveProperties from './receive-properties';

export default (state, action) => {
  switch (action.type) {
    case 'REQUEST_PROPERTIES':
      return Object.assign({}, state, requestProperties());

    case 'RECEIVE_PROPERTIES':
      return Object.assign({}, state, receiveProperties(action.payload));

    default:
      return state;
  }
}
