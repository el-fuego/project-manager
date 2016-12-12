import Adapter from './_Adapter';
import db, { STORE_NAMES } from './_db';

const store = db.store(STORE_NAMES.PROJECT_EMPLOYEES);

export default new Adapter(store);
