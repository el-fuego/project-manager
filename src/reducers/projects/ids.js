import { handleActions } from 'redux-actions';
import { resolve } from 'redux-promised';

import { NAMES } from '../../actions/projects';
import { saveIds, addId } from '../_helpers';

/**
 * [id1, id2, ...]
 */

export default handleActions({
  [resolve(NAMES.LIST)]: saveIds,
  [resolve(NAMES.CREATE)]: addId
}, []);
