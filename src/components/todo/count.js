import React from 'react';

import { ToDoContext } from './todo-provider';

const Count = props => (
  <ToDoContext.Consumer>
    {context => (
      <div>
        <h2>There are {context.todoList.length} items in the list</h2>
      </div>
    )}
  </ToDoContext.Consumer>
);

export default Count;
