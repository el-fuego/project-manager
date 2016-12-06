import { createAction } from 'redux-actions';

const NAMESPACE = 'SEARCH_QUERY';
export const NAMES = {
  UPDATE: `${NAMESPACE}.UPDATE`,
  CLEAR: `${NAMESPACE}.CLEAR`
};

export const updateSearchQuery = createAction(NAMES.UPDATE);
export const clearSearchQuery = createAction(NAMES.CLEAR);
