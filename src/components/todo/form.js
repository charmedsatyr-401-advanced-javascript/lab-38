import React, { useContext } from 'react';

import { ToDoContext } from './todo-provider';

const Form = props => {
  const context = useContext(ToDoContext);

  return (
    <form onSubmit={context.updateItem}>
      <input
        onChange={context.handleInputChange}
        id={context.item.id}
        complete={context.item.complete.toString()}
        defaultValue={context.item.text}
      />
    </form>
  );
};

export default Form;
