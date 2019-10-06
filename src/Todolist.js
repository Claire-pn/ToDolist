import React, { Component } from 'react';
import './App.css';

class TodoList extends Component {
    constructor(props){
        super(props);
            this.state = {
                todos: []}
            this.removeItem = this.removeItem.bind(this)
           
      
    }
    save(e){
        e.preventDefault();
        var todos = [...this.state.todos];
        todos.push(this.newText.value);
        console.log(todos)
        this.setState({todos});
        // this.setState({todos: ''});
      }
    removeItem(e) {
        const todos = this.state.todos.filter((todo, todoIndex) => {
          return todoIndex !== e
        })
        this.setState({ todos })
      }
      
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form>
            <input placeholder="Task" id="td" ref={(ip) => {this.newText = ip}} />
            <button type="submit" onClick = {(e) => this.save(e)}> Add Task </button>          
          </form>
          <TodoList todos={this.state.todos} removeItem={this.removeItem} />
        </div>
        <h1>My Todo List</h1>
        <div id="bck">
            <ul>
                {this.state.todos.map(function(todo) {
                      return <li>onClick={(e) => { this.props.removeItem(e)}} key={todo}>{todo}</li>
                 })}
            </ul>
        </div>

              </div>
    )
  }
}  
export default TodoList;