import { assignFields } from './_helpers';

const FIELDS_NAMES = ['id', 'projectId', 'employeeId', 'startDate', 'endDate', 'role'];

export default class ProjectEmployee {
  /**
   * @constructor
   * @param {Object} data Model attributes as plain object
   */
  constructor(data) {
    assignFields(this, data, FIELDS_NAMES);
  }
}
