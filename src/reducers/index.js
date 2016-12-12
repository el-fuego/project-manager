import { combineReducers } from 'redux';

import searchQuery from './searchQuery';

import projectIds from './projects/ids';
import projectsById from './projects/modelsById';

import employeeIds from './employees/ids';
import employeesById from './employees/modelsById';

import projectEmployeeIds from './projectEmployees/ids';
import projectEmployeesById from './projectEmployees/modelsById';

export default combineReducers({
  searchQuery,

  projectIds,
  projectsById,

  employeeIds,
  employeesById,

  projectEmployeeIds,
  projectEmployeesById
});
