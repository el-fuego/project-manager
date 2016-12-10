import assignFields from './_assignFields';

const FIELDS_NAMES = ['id', 'name', 'isUnread', 'sortIndex', 'email'];

export default class Employee {
  constructor(data) {
    assignFields(this, data, FIELDS_NAMES);
  }
}
