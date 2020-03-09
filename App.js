import React, { Component } from "react";
import "./style.css";
import toDoItems from "./toDoItems";
import ToDoList from "./components/ToDoList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: toDoItems
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  }

  render() {
    const todoElement = this.state.todos.map(item => (
      <ToDoList key={item.id} item={item} handleChange={this.handleChange} />
    ));

    return <div className="app">{todoElement}</div>;
  }
}

export default App;
