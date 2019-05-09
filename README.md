![cf](http://i.imgur.com/7v5ASc8.png) LAB
============================================================================    

## Lab 38: Hooks API

### Author: Joseph Wolfe

### Links and Resources
* [PR](https://github.com/charmedsatyr-401-advanced-javascript/lab-38/pull/1)
* [![Build Status](https://travis-ci.com/charmedsatyr-401-advanced-javascript/lab-38.svg?branch=submission)](https://travis-ci.com/charmedsatyr-401-advanced-javascript/lab-38)
* [Netlify]()

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
│   │   ├── if
│   │   │   └── index.js
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
The application use the React Context API to illustrated to do list and role-based login functionality. 

The `LoginContext` wraps the whole application, while the `ToDoContext` wraps only its component.

In addition to the to do list display, A `Login` component provides a login form, while an a `Auth` module displays the user's roles for testing purposes.

`index.js` renders `<App/>`.
`<App/>` renders components `<Login/>`, `<Auth/>`, and `<ToDo/>`. All three receive context from their class component context providers `<LoginProvider/>` or `<ToDoProvider/>`.

`./src/components/todo/` contains all files related to `<Todo/>`. Its `index.js` renders `<Count/>`, `<AddToDo/>`, and `<List/>`. The `<ToDo/>` component uses `<If/>` from `./src/components/if/index.js` for some conditional logic.

`./src/components/auth/` contains all files related to `<Login />` and `<Auth/>`. 

Both to do- and login-related components use `<If/>` from `./src/components/if/index.js` for some conditional logic.

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
