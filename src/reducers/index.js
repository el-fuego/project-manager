import { combineReducers } from 'redux';

import searchQuery from './searchQuery';

import projectIds from './projects/ids';
import projectsById from './projects/modelsById';

import employeeIds from './employees/ids';
import employeesById from './employees/modelsById';

export default combineReducers({
  searchQuery,

  projectIds,
  projectsById,

  employeeIds,
  employeesById
});
