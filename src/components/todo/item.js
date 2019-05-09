import React from 'react';

import { ToDoContext } from './todo-provider';
import { LoginContext } from '../auth/login-provider';
import If from '../if';
import Form from './form';

const UneditableItem = props => (
  <span onClick={() => alert(`You can't delete!`)}>{props.item.text}</span>
);

const Item = props => (
  <>
    <LoginContext.Consumer>
      {auth => (
        <ToDoContext.Consumer>
          {context => (
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
          )}
        </ToDoContext.Consumer>
      )}
    </LoginContext.Consumer>
  </>
);

export default Item;
