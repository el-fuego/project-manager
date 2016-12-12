import React from 'react';
import DateTime from 'react-datetime';
import { omit } from 'lodash';
import 'react-datetime/css/react-datetime.css';

import EditableInput from './EditableInput/EditableInput';
import { DATE_FORMAT } from '../models/_helpers';

export default class EditableDateInput extends EditableInput {

  get input() {
    const props = omit(this.props, ['onSave', 'onCancel', 'canSave']);
    return (
      <DateTime
        dateFormat={DATE_FORMAT}
        timeFormat={false}
        closeOnSelect
        {...props} />
    );
  }
}
