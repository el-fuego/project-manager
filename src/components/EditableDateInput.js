import React from 'react';
import DateTime from 'react-datetime';
import { omit } from 'lodash';
import styles from 'react-datetime/css/react-datetime.css';

import EditableInput from './EditableInput';
import { DATE_FORMAT } from '../models/_helpers';

export default class EditableDateInput extends EditableInput {

  get input() {
    const props = omit(this.props, ['onSave']);
    return (
      <DateTime
        dateFormat={DATE_FORMAT}
        timeFormat={false}
        closeOnSelect
        {...props} />
    );
  }
}
