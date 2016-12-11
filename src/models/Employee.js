import { assignFields, getValidationErrors } from './_helpers';

const VALIDATION_SCHEMA = {
  name: {
    presence: true
  },
  email: {
    presence: true,
    email: true
  }
};

const FIELDS_NAMES = ['id', 'name', 'isUnread', 'sortIndex', 'email'];

export default class Employee {
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
