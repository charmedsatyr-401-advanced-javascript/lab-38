import React from 'react';

import { ToDoContext } from './todo-provider';

const AddToDo = props => (
  <ToDoContext.Consumer>
    {context => (
      <div>
        <form onSubmit={context.addItem}>
          <input placeholder="Add To Do List Item" onChange={context.handleInputChange} />
        </form>
      </div>
    )}
  </ToDoContext.Consumer>
);

export default AddToDo;
