import { handleActions } from 'redux-actions';

import { NAMES } from '../actions/searchQuery';

/**
 * {String}
 */

export default handleActions({
  [NAMES.UPDATE]: (state, { payload }) => payload,
  [NAMES.CLEAR]: () => ''
}, '');
