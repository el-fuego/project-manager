import { pick, mapValues, assign, forEach } from 'lodash';

/**
 * Replacement of standard treo plugin, what has bug
 */


/**
 * Methods for patch.
 */

const DB_METHODS = [
  'drop',
  'close'
];

const STORE_METHODS = [
  'put',
  'get',
  'del',
  'count',
  'clear',
  'batch',
  'all'
];

const INDEX_METHODS = [
  'get',
  'count'
];

/**
 * Wrap theo method with Promise
 *
 * @param {Function} method
 */

export function wrapMethod(method) {
  return (...args) =>
    new Promise(
      (resolve, reject) =>
        method(...args, (error, result) => {
          error ? reject(error) : resolve(result); // eslint-disable-line
        })
    );
}


/**
 * Patch `methods` from `object` with `wrapMethod`.
 *
 * @param {Object} object Object to patch
 * @param {[String]} methodsNames
 */

function patch(object, methodsNames) {
  const methodsToMap = pick(object, methodsNames);
  const wrappedMethods = mapValues(methodsToMap, method => wrapMethod(method.bind(object)));
  assign(object, wrappedMethods);
}

export default function wrapWithPromise(db) {
  patch(db, DB_METHODS);

  forEach(db.stores, (store) => {
    patch(store, STORE_METHODS);

    forEach(store.indexes, index =>
      patch(index, INDEX_METHODS)
    );
  });
}
