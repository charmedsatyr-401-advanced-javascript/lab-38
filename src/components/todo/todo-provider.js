import React, { Component } from 'react';
import uuid from 'uuid/v4';

export const ToDoContext = React.createContext();

class ToDoProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addItem: this.addItem.bind(this),
      editing: false,
      handleInputChange: this.handleInputChange.bind(this),
      item: {},
      saveItem: this.saveItem.bind(this),
      toggleComplete: this.toggleComplete.bind(this),
      toggleEdit: this.toggleEdit.bind(this),
      todoList: [],
      updateItem: this.updateItem.bind(this),
    };
  }

  addItem = e => {
    e.preventDefault();
    e.target.reset();
    this.setState({ todoList: [...this.state.todoList, this.state.item] });
  };

  handleInputChange = e => {
    let item = {
      text: e.target.value,
      complete: !!e.target.complete,
      id: e.target.id || uuid(),
    };
    this.setState({ item });
  };

  saveItem = updatedItem => {
    this.setState({
      todoList: this.state.todoList.map(item => (item.id === updatedItem.id ? updatedItem : item)),
      editing: false,
    });
  };

  toggleComplete = id => {
    let item = this.state.todoList.filter(i => i.id === id)[0] || {};
    if (item.id) {
      item.complete = !item.complete;
      this.saveItem(item);
    }
  };

  toggleEdit = id => {
    let editing = this.state.editing === id ? false : id;
    this.setState({ editing });
  };

  updateItem = e => {
    e.preventDefault();
    this.saveItem(this.state.item);
  };

  render() {
    return <ToDoContext.Provider value={this.state}>{this.props.children}</ToDoContext.Provider>;
  }
}

export default ToDoProvider;
