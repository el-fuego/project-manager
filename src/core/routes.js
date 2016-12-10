import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import ProjectList from '../containers/ProjectList';
import Layout from '../containers/Layout';

export const PATHS = {
  PROJECTS: '/projects',
  EMPLOYEES: '/employees'
};


export default (
  <Route path="/" component={Layout}>
    <IndexRedirect to={PATHS.PROJECTS} />
    <Route path={PATHS.PROJECTS} component={ProjectList} />
  </Route>
);
