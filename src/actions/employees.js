import { createAction } from 'redux-actions';

import API from '../sources/employees';

const NAMESPACE = 'EMPLOYEES';
export const NAMES = {
  LIST: `${NAMESPACE}.LIST`,
  GET: `${NAMESPACE}.GET`,
  CREATE: `${NAMESPACE}.CREATE`,
  UPDATE: `${NAMESPACE}.UPDATE`,
  REMOVE: `${NAMESPACE}.REMOVE`,
  MOVE_AFTER: `${NAMESPACE}.MOVE_AFTER`
};

export const listEmployees = createAction(NAMES.LIST, API.list.bind(API));
export const getEmployee = createAction(NAMES.GET, API.get.bind(API));
export const createEmployee = createAction(NAMES.CREATE, API.create.bind(API));
export const updateEmployee = createAction(NAMES.UPDATE, API.update.bind(API));
export const removeEmployee = createAction(NAMES.REMOVE, API.remove.bind(API));
export const moveEmployeeAfter = createAction(NAMES.MOVE_AFTER, API.moveAfter.bind(API));
