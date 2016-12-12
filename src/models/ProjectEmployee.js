import { assignFields, getValidationErrors, DATE_VALIDATION_SCHEMA } from './_helpers';

const VALIDATION_SCHEMA = {
  projectId: {
    presence: {
      message: 'is required'
    },
    numericality: true
  },
  employeeId: {
    presence: {
      message: 'is required'
    },
    numericality: true
  },
  role: {
    presence: true
  },
  startDate: DATE_VALIDATION_SCHEMA,
  endDate: DATE_VALIDATION_SCHEMA
};

const FIELDS_NAMES = ['id', 'projectId', 'employeeId', 'startDate', 'endDate', 'role'];

export default class ProjectEmployee {
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
