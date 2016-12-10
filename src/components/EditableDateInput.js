import React from 'react';
import DateTime from 'react-datetime';
import styles from 'react-datetime/css/react-datetime.css';

import EditableInput from './EditableInput';

export default class EditableDateInput extends EditableInput {

  get input() {
    const { value, state, onChange } = this.props;
    return (
      <DateTime
        dateFormat="DD.MM.YYYY"
        timeFormat={false}
        closeOnSelect
        value={value}
        state={state}
        onChange={onChange} />
    );
  }
}
