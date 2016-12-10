import EntityAdapter from './_EntityAdapter';
import db, { STORE_NAMES } from './_db';

const store = db.store(STORE_NAMES.PROJECTS);

export default new EntityAdapter(store);
