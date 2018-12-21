import { combineReducers } from 'redux';
// import { reducer as form } from 'redux-form';

// Core
import auth from './auth';
import { loading, success } from 'instant-react-core/redux/reducers';

// Custom
// ...

export default combineReducers({
  // Core
  auth,
  loading,
  success,
  // form,

  // Custom
  // ...
});
