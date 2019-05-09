import React, { useContext } from 'react';
import If from 'react-ifs';

import { ToDoContext } from './todo-provider';
import { LoginContext } from '../auth/login-provider';
import Form from './form';

const UneditableItem = props => (
  <span onClick={() => alert(`You can't delete!`)}>{props.item.text}</span>
);

const Item = props => {
  const auth = useContext(LoginContext);
  const context = useContext(ToDoContext);
  return (
    <li className={`complete-${props.item.complete.toString()}`}>
      {/* DELETE */}
      <If
        condition={auth.capabilities.includes('delete')}
        else={<UneditableItem item={props.item} />}
      >
        <span onClick={() => context.toggleComplete(props.item.id)}>{props.item.text}</span>
      </If>

      {/* UPDATE */}
      <If condition={auth.capabilities.includes('update')}>
        <button onClick={() => context.toggleEdit(props.item.id)}>edit</button>
      </If>

      <If condition={context.editing === props.item.id}>
        <Form />
      </If>
    </li>
  );
};

export default Item;
