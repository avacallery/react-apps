import React, {Component} from 'react';
import Todos from './Todos' 

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'play Animal Crossing'}, 
      {id: 2, content: 'grocery shopping'}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos: todos
    })
  }
  // if todo.id is NOT equal to id, we do not want to filter out
  render() {
    return (
      <div className="App">
        <h1 className="center green-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/> 
        {/* We use curly braces in todos={} because we're 
        passing in something that is dynamic */}
      </div>
    );
  }
}

export default App;
