import { createAction } from 'redux-actions';

import API from '../sources/projects';

const NAMESPACE = 'PROJECTS';
export const NAMES = {
  LIST: `${NAMESPACE}.LIST`,
  GET: `${NAMESPACE}.GET`,
  CREATE: `${NAMESPACE}.CREATE`,
  UPDATE: `${NAMESPACE}.UPDATE`,
  MOVE_AFTER: `${NAMESPACE}.MOVE_AFTER`
};

export const listProjects = createAction(NAMES.LIST, API.list.bind(API));
export const getProject = createAction(NAMES.GET, API.get.bind(API));
export const createProject = createAction(NAMES.CREATE, API.create.bind(API));
export const updateProject = createAction(NAMES.UPDATE, API.update.bind(API));
export const moveProjectAfter = createAction(NAMES.MOVE_AFTER, API.moveAfter.bind(API));
