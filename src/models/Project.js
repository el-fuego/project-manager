import assignFields from './_assignFields';

const FIELDS_NAMES = ['id', 'name', 'isUnread', 'sortIndex', 'startDate', 'endDate'];

export default class Project {
  constructor(data) {
    assignFields(this, data, FIELDS_NAMES);
  }
}
