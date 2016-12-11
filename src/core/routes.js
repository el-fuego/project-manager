import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import ProjectList from '../containers/lists/ProjectList';
import EmployeeList from '../containers/lists/EmployeeList';
import ProjectDetails from '../containers/details/ProjectDetails';
import EmployeeDetails from '../containers/details/EmployeeDetails';
import Layout from '../containers/Layout';

export const PATHS = {
  PROJECTS: '/projects',
  EMPLOYEES: '/employees'
};


export default (
  <Route path="/" component={Layout}>
    <IndexRedirect to={PATHS.PROJECTS} />
    <Route path={PATHS.PROJECTS} component={ProjectList}>
      <Route path=":id" component={ProjectDetails} />
    </Route>
    <Route path={PATHS.EMPLOYEES} component={EmployeeList}>
      <Route path=":id" component={EmployeeDetails} />
    </Route>
  </Route>
);
