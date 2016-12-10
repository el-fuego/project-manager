import _ from 'lodash';

export default function assignFields(object, data, fieldNames) {
  const fieldsData = _.pick(data, fieldNames);
  _.assign(object, fieldsData);
}
