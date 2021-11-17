import { FC, ReactNode, SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { setCurrentTodo, setModal } from '../../../store/action-creators/todo';
import cl from './MyModal.module.scss';

interface MyModalI {
  children: ReactNode;
}

export const MyModal: FC<MyModalI> = ({ children }): JSX.Element => {
  const { modal, currentTodo } = useTypedSelector(({ todo }) => todo);
  const dispatch = useDispatch();
  const rootClasses = [cl.myModal];

  if (modal) rootClasses.push(cl.active);

  const closeHandler = (): void => {
    dispatch(setModal(false));
    dispatch(setCurrentTodo({ ...currentTodo, body: '', id: null }));
  };

  return (
    <div
      className={rootClasses.join(' ')}
      onClick={closeHandler}
      role="presentation"
    >
      <div
        className={cl.myModalContent}
        onClick={(e: SyntheticEvent) => e.stopPropagation()}
        role="presentation"
      >
        {children}
      </div>
    </div>
  );
};
