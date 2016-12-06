import React from 'react';
import { Route } from 'react-router';
import Layout from '../containers/Layout';

export const PATHS = {
  PROJECTS: 'projects',
  PROJECT_DETAILS: 'employees/:id',
  EMPLOYEES: 'employees',
  EMPLOYEE_DETAILS: 'employees/:id'
};

export default (
  <Route path="/" component={Layout} />
);
