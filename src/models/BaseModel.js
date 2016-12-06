import _ from 'lodash';

export default class BaseModel {
  static FIELDS = [];
  constructor(data) {
    const entityData = _.pick(data, this.FIELDS);
    _.assign(this, entityData);
  }
}
