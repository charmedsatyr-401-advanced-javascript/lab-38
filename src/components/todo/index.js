import React from 'react';
import If from 'react-ifs';

import ToDoProvider from './todo-provider';

import Count from './count';
import AddToDo from './add-todo';
import List from './list';

import './todo.scss';

const ToDo = props => (
  <If condition={props.loggedIn && props.capabilities.length > 0}>
    <ToDoProvider>
      {/* READ */}

      <If condition={props.capabilities.includes('read')}>
        <section className="todo">
          <Count />

          {/* CREATE */}
          <If condition={props.capabilities.includes('create')}>
            <AddToDo />
          </If>

          {/* UPDATE, DELETE inside */}
          <List capabilities={props.capabilities} />
        </section>
      </If>
    </ToDoProvider>
  </If>
);

export default ToDo;
