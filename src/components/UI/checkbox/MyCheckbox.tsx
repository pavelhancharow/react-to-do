import { FC, SyntheticEvent } from 'react';
import { MyInput } from '../input/MyInput';
import classes from './MyCheckbox.module.scss';

interface MyCheckboxI {
  id: number;
  checked: boolean;
  onChange?: (e: SyntheticEvent<HTMLInputElement, Event>) => void;
}

export const MyCheckbox: FC<MyCheckboxI> = ({
  id,
  onChange,
  checked,
}): JSX.Element => {
  return (
    <div className={classes.checkbox}>
      <MyInput
        type="checkbox"
        name="checkbox"
        checked={checked}
        id={`${id}`}
        className={classes.checkbox_input}
        onChange={onChange}
      />
      <label htmlFor={`${id}`} className={classes.checkbox_label} />
    </div>
  );
};
