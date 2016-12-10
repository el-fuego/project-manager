import treo from 'treo';
import wrapWithPromise from './_wrapWithPromise.plugin';

const DB_NAME = 'project-manager';

export const STORE_NAMES = {
  PROJECTS: 'projects',
  EMPLOYEES: 'employees',
  PROJECT_EMPLOYEES: 'project-employees'
};

const schema = treo.schema()
  .version(1)
  .addStore(STORE_NAMES.PROJECTS, { key: 'id' })
  .addIndex('byName', 'name')

  .addStore(STORE_NAMES.EMPLOYEES, { key: 'id' })
  .addIndex('byName', 'name')

  .addStore(STORE_NAMES.PROJECT_EMPLOYEES, { key: 'id' });

export default treo(DB_NAME, schema).use(wrapWithPromise);
