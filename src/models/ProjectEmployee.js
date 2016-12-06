import BaseModel from './BaseModel';

export default class ProjectEmployee extends BaseModel {
  static FIELDS = ['id', 'projectId', 'employeeId', 'startDate', 'endDate', 'role'];
}
