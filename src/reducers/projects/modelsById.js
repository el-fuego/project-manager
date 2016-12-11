import { handleActions } from 'redux-actions';
import { resolve } from 'redux-promised';
import { partial } from 'lodash';

import { NAMES } from '../../actions/projects';
import Project from '../../models/Project';
import { updateAsModelsByIds } from '../_helpers';

/**
 * All data are stored at single place to avoid few exemplares of models.
 * {
 *  id1: {Object},
 *  id2: {Object},
 *  ...
 * }
 */

const add = partial(updateAsModelsByIds, Project);
export default handleActions({
  [resolve(NAMES.LIST)]: add,
  [resolve(NAMES.GET)]: add,
  [resolve(NAMES.CREATE)]: add,
  [resolve(NAMES.UPDATE)]: add
}, {});
