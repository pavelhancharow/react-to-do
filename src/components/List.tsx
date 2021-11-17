import { FC, useEffect } from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';
import { RingLoader } from 'react-spinners';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchTodos, setTodos } from '../store/action-creators/todo';
import { ListItem } from './ListItem';
import { MyTitle } from './UI/title/MyTitle';

export const List: FC = (): JSX.Element => {
  const { todos, loading, error } = useTypedSelector(({ todo }) => todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (loading)
    return (
      <div className="loader">
        <RingLoader size={150} color="#00a7ba" />
      </div>
    );
  if (error) return <MyTitle>{error}</MyTitle>;
  if (!todos.length) return <MyTitle>You don&apos;t have any tasks</MyTitle>;

  const onDragEnd = (result: DropResult): void => {
    const { source, destination } = result;

    if (!destination) return;

    const items = [...todos];
    const [newOrder] = items.splice(source.index, 1);
    items.splice(destination.index, 0, newOrder);

    dispatch(setTodos(items));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="todo">
        {(provide) => (
          <ul
            className="list"
            {...provide.droppableProps}
            ref={provide.innerRef}
          >
            {todos
              .filter(({ show }) => show)
              .map((item, idx) => {
                return (
                  <Draggable
                    key={item.id}
                    draggableId={`${item.id}`}
                    index={idx}
                  >
                    {(provided) => <ListItem provided={provided} item={item} />}
                  </Draggable>
                );
              })}
            {provide.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};
