import { castArray, map, keyBy, pluck } from 'lodash';

/**
 * Add as new Model single or array data from response to scope
 * @param {Function} Model Class to wrap data
 * @param {Object} scope Reducer`s store part
 * @param {Object} action Redux action
 * @return {Object} new scope
 */
export function addAsModelsByIds(Model, scope, action) {
  const modelsData = castArray(action.payload.response);
  if (!modelsData.length) {
    return scope;
  }

  const models = map(modelsData, data => new Model(data));
  return {
    ...scope,
    ...keyBy(models, 'id')
  };
}

/**
 * Set ids from response to scope
 * @param {Object} scope Reducer`s store part
 * @param {Object} action Redux action
 * @return {Object} new scope
 */
export function saveIds(scope, action) {
  return pluck(action.payload.response, 'id');
}

/**
 * Add single id from response to scope
 * @param {Object} scope Reducer`s store part
 * @param {Object} action Redux action
 * @return {Object} new scope
 */
export function addId(scope, action) {
  return [
    ...scope,
    action.payload.response.id
  ];
}