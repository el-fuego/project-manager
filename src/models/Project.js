import { assignFields, getValidationErrors, DATE_VALIDATION_SCHEMA } from './_helpers';

const VALIDATION_SCHEMA = {
  name: {
    presence: true
  },
  startDate: DATE_VALIDATION_SCHEMA,
  endDate: DATE_VALIDATION_SCHEMA
};

const FIELDS_NAMES = ['id', 'name', 'isUnread', 'sortIndex', 'startDate', 'endDate'];

export default class Project {
  /**
   * @constructor
   * @param {Object} data Model attributes as plain object
   */
  constructor(data) {
    assignFields(this, data, FIELDS_NAMES);
  }

  /**
   * Validate current model data
   * @return {Object} Validation errors keyed by field names
   */
  validate() {
    return getValidationErrors(this, VALIDATION_SCHEMA);
  }
}
