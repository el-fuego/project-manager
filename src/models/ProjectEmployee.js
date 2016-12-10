import assignFields from './_assignFields';

const FIELDS_NAMES = ['id', 'projectId', 'employeeId', 'startDate', 'endDate', 'role'];

export default class ProjectEmployee {
  constructor(data) {
    assignFields(this, data, FIELDS_NAMES);
  }
}
