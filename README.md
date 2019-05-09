![cf](http://i.imgur.com/7v5ASc8.png) LAB
============================================================================    

## Lab 38: Hooks API

### Author: Joseph Wolfe

### Links and Resources
* [PR](https://github.com/charmedsatyr-401-advanced-javascript/lab-38/pull/1)
* [![Build Status](https://travis-ci.com/charmedsatyr-401-advanced-javascript/lab-38.svg?branch=submission)](https://travis-ci.com/charmedsatyr-401-advanced-javascript/lab-38)

* [Netlify](https://hungry-ptolemy-6142dd.netlify.com/)
* [![Netlify Status](https://api.netlify.com/api/v1/badges/d38728f7-ce80-47e7-99da-d5c9836e58b9/deploy-status)](https://app.netlify.com/sites/hungry-ptolemy-6142dd/deploys)


### Modules
```
.
├── assets
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── README.md
├── src
│   ├── app.js
│   ├── app.test.js
│   ├── components
│   │   ├── auth
│   │   │   ├── auth.js
│   │   │   ├── login.js
│   │   │   └── login-provider.js
│   │   └── todo
│   │       ├── add-todo.js
│   │       ├── count.js
│   │       ├── form.js
│   │       ├── index.js
│   │       ├── item.js
│   │       ├── list.js
│   │       ├── todo-provider.js
│   │       └── todo.scss
│   └── index.js
└── yarn.lock

7 directories, 21 files
```
### Summary
The application uses the React Context and React Hooks APIs to illustrate todo list and role-based access functionality. Context is accessed via `useContext` hooks throughout. The `<Login />` component has been converted to a function component and uses the `setState` hook. Future development will see use of the `useState` and `useReducer` hooks to manage the todo list, making even the `<ToDoProvider />` a function component.

The `LoginProvider` wraps the whole application, while the `ToDoProvider` wraps only the `ToDo` component.

In addition to the todo list display, A `Login` component provides a login form, while an a `Auth` module displays the user's roles for testing purposes.

`index.js` renders `<App />`.

`<App />` renders components `<Login />`, `<Auth />`, and `<ToDo />`.

`./src/components/todo/` contains all files related to `<Todo />`. Its `index.js` renders `<Count />`, `<AddToDo />`, and `<List />`.

`./src/components/auth/` contains all files related to `<Login />` and `<Auth />`. 

Both todo- and login-related components use `<If />` from the `react-ifs` package for some conditional logic.

The API server has the following user accounts (`username:password`) that you can use to login as a user with varying permissions:
* `user:USER` (read)
* `editor:EDITOR` (create, read, update)
* `admin:ADMIN` (create, read, update, delete)

#### Tests
* What assertions were made?
  * A placeholder test is in place.

* What assertions need to be / should be made?
  * Snapshot and functional tests could be made for each component.
  * Tests could ensure each component properly receives and handles its context.

#### UML
![UML](assets/uml.jpg)
