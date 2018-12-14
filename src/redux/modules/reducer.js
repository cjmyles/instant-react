import { combineReducers } from 'redux';
// import { reducer as form } from 'redux-form';

// Core
import auth from './auth';
import { loading, success } from '@hbagroup/instant-react/redux/reducers';

// Custom
import client from './client';

export default combineReducers({
  // Core
  auth,
  loading,
  success,
  // form,

  // Custom
  client,
});
