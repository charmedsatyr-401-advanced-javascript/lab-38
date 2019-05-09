import React from 'react';

import ToDoProvider from './todo-provider';

import Count from './count';
import AddToDo from './add-todo';
import List from './list';

import If from '../if';

import './todo.scss';

const ToDo = props => {
  return (
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
};

export default ToDo;
