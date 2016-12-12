import { createAction } from 'redux-actions';

import API from '../sources/projectEmployees';

const NAMESPACE = 'PROJECT_EMPLOYEES';
export const NAMES = {
  LIST: `${NAMESPACE}.LIST`,
  CREATE: `${NAMESPACE}.CREATE`,
  UPDATE: `${NAMESPACE}.UPDATE`,
  REMOVE: `${NAMESPACE}.REMOVE`
};

export const listProjectEmployees = createAction(NAMES.LIST, API.list.bind(API));
export const createProjectEmployee = createAction(NAMES.CREATE, API.create.bind(API));
export const updateProjectEmployee = createAction(NAMES.UPDATE, API.update.bind(API));
export const removeProjectEmployee = createAction(NAMES.REMOVE, API.remove.bind(API));
