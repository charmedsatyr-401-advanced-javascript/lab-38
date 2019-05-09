import React, { useContext } from 'react';

import { ToDoContext } from './todo-provider';

import Item from './item';

const List = props => {
  const context = useContext(ToDoContext);
  return (
    <div>
      <ul>
        {context.todoList && context.todoList.map(item => <Item key={item.id} item={item} />)}
      </ul>
    </div>
  );
};

export default List;
