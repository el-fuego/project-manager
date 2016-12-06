import BaseModel from './BaseModel';

export default class Project extends BaseModel {
  static FIELDS = ['id', 'name', 'isUnread', 'sortIndex', 'startDate', 'endDate'];
}
