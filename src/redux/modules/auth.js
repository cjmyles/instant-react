import { FirestoreRepository } from 'instant-firestore';
import { auth, db } from '@hbagroup/instant-react/utils/firebase';

const api = new FirestoreRepository(db, db.collection('users'));

const STATE_CHANGED = '[my-app-id]/auth/STATE_CHANGED';

const initialState = {
  isAuthenticating: true,
  isAuthenticated: false,
  user: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case STATE_CHANGED:
      return {
        isAuthenticating: false,
        isAuthenticated: !!action.user,
        user: action.user,
      };

    default:
      return state;
  }
}

/**
 * Auth state changed
 * @param {Object} data
 */
export const authStateChanged = authUser => async dispatch => {
  try {
    let user = {};
    if (authUser) {
      user = Object.assign(
        {},
        ...[
          'displayName',
          'email',
          'emailVerified',
          'isAnonymous',
          'phoneNumber',
          'photoURL',
        ].map(key => ({
          [key]: authUser[key],
        }))
      );
    }
    if (auth.currentUser) {
      const userData = await api.findById(auth.currentUser.uid, {
        // populate: 'client',
      });
      user = {
        ...user,
        ...userData,
      };
    }
    dispatch({
      type: STATE_CHANGED,
      user: user,
    });
  } catch (error) {
    console.error(error);
  }
};
