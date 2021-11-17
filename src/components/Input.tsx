import { FC, SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import { MyInput } from './UI/input/MyInput';
import '../styles/input.scss';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { setValue } from '../store/action-creators/todo';

export const Input: FC = (): JSX.Element => {
  const { value } = useTypedSelector(({ todo }) => todo);
  const dispatch = useDispatch();

  const changeHandler = (e: SyntheticEvent<HTMLInputElement, Event>): void => {
    dispatch(setValue(e.currentTarget.value));
  };

  return (
    <div className="input">
      <MyInput
        type="text"
        placeholder="New To Do"
        value={value}
        onChange={changeHandler}
      />
      <div className="input-img" />
    </div>
  );
};
