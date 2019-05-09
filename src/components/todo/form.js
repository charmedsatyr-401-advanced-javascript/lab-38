import React from 'react';

import { ToDoContext } from './todo-provider';

const Form = props => (
  <ToDoContext.Consumer>
    {context => (
      <form onSubmit={context.updateItem}>
        <input
          onChange={context.handleInputChange}
          id={context.item.id}
          complete={context.item.complete.toString()}
          defaultValue={context.item.text}
        />
      </form>
    )}
  </ToDoContext.Consumer>
);

export default Form;
