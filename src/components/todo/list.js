import React from 'react';

import { ToDoContext } from './todo-provider';

import Item from './item';

const List = props => (
  <ToDoContext.Consumer>
    {context => (
      <div>
        <ul>
          {context.todoList && context.todoList.map(item => <Item key={item.id} item={item} />)}
        </ul>
      </div>
    )}
  </ToDoContext.Consumer>
);

export default List;
