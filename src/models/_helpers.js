import _ from 'lodash';
import validateJS from 'validate.js';
import moment from 'moment';

/**
 * Default date format
 */
export const DATE_FORMAT = 'DD.MM.YYYY';

validateJS.extend(validateJS.validators.datetime, {
  parse(value) {
    return +moment.utc(value, DATE_FORMAT);
  },
  format(value) {
    return moment.utc(value).format(DATE_FORMAT);
  }
});

/**
 * Default date validation schema
 */
export const DATE_VALIDATION_SCHEMA = {
  presence: true,
  datetime: {
    dateOnly: true
  }
};

/**
 * Assign specific fields to object
 * @param {Object} to Assign to this object
 * @param {Object} from Assign form this object
 * @param {Object} fieldNames Fields, what will be assigned from
 */
export function assignFields(to, from, fieldNames) {
  const fieldsData = _.pick(from, fieldNames);
  _.assign(to, fieldsData);
}


/**
 * Validate data by schema
 * @return {Object} Validation errors keyed by field names
 */
export function getValidationErrors(data, schema) {
  return validateJS(data, schema) || {};
}
