import { FC } from 'react';
import { MyButton } from './UI/button/MyButton';
import { MyCheckbox } from './UI/checkbox/MyCheckbox';
import '../styles/list/item.scss';

interface ListItemI {
  body: string;
  id: string;
}

export const ListItem: FC<ListItemI> = ({ body, id }): JSX.Element => {
  return (
    <li className="item">
      <span>{body}</span>
      <div className="item-btns">
        <MyCheckbox id={id} />
        <MyButton className="btn edit" />
        <MyButton className="btn remove" />
      </div>
    </li>
  );
};
