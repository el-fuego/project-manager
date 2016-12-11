import { castArray, map, keyBy, without } from 'lodash';

/**
 * Add or update as new Model single or array data from response to scope
 * @param {Function} Model Class to wrap data
 * @param {Object} scope Reducer`s store part
 * @param {Object} action Redux action
 * @return {Object} new scope
 */
export function updateAsModelsByIds(Model, scope, action) {
  const modelsData = castArray(action.payload);
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
  return map(action.payload, 'id');
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
    action.payload.id
  ];
}


/**
 * Remove single id from response from scope
 * @param {Object} scope Reducer`s store part
 * @param {Object} action Redux action
 * @return {Object} new scope
 */
export function removeId(scope, action) {
  return without(scope, action.payload);
}
