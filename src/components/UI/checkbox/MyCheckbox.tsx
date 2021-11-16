import { FC } from 'react';
import { MyInput } from '../input/MyInput';
import classes from './MyCheckbox.module.scss';

interface MyCheckboxI {
  id: string;
}

export const MyCheckbox: FC<MyCheckboxI> = ({ id }): JSX.Element => {
  return (
    <div className={classes.checkbox}>
      <MyInput
        type="checkbox"
        name="checkbox"
        id={id}
        className={classes.checkbox_input}
      />
      <label htmlFor={id} className={classes.checkbox_label} />
    </div>
  );
};
