import { FC } from 'react';
import { ListItem } from './ListItem';

export const List: FC = (): JSX.Element => {
  const todoList = [
    { body: 'Learn core ReactJS', id: 'checkbox1' },
    { body: 'Practice ReactJS', id: 'checkbox2' },
    { body: 'Learn Redux', id: 'checkbox3' },
  ];

  return (
    <ul className="list">
      {todoList.map(({ body, id }) => {
        return <ListItem key={id} body={body} id={id} />;
      })}
    </ul>
  );
};
