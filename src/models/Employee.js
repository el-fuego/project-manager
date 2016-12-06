import BaseModel from './BaseModel';

export default class Employee extends BaseModel {
  static FIELDS = ['id', 'name', 'isUnread', 'sortIndex', 'email'];
}
