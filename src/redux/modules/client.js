import { FirestoreRepository } from 'instant-firestore';
import { db } from 'instant-react-core/utils/firebase';

const api = new FirestoreRepository(db, db.collection('clients'));

const FETCH = 'clients/FETCH_REQUEST';
const FETCH_SUCCESS = 'clients/FETCH_SUCCESS';
const FETCH_FAILURE = 'clients/FETCH_FAILURE';
const RESET = 'clients/RESET';

const initialState = null;

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_SUCCESS:
      return action.data;

    case RESET:
      return initialState;

    default:
      return state;
  }
}

/**
 * Fetch
 */
export const fetch = id => ({
  types: [FETCH, FETCH_SUCCESS, FETCH_FAILURE],
  promise: () => api.findById(id),
});

/**
 * Reset
 */
export const reset = () => ({ type: RESET });
