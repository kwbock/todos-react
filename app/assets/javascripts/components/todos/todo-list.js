/** @jsx React.DOM */
var React = require('react');
var TodoListItem = require('./todo-list-item');
var TodoStore = require('../../stores/todo-store');

var TodoList = React.createClass({
  getInitialState: function() {
    return {todos: TodoStore.getTodos()};
  },

  componentWillMount: function() {
    TodoStore.addChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(TodoStore.getTodos());
  },

  render: function() {
    var todos = this.state.todos.map(function(todo, i) {
      return (
        <TodoListItem todo={todo} />
      );
    });

    return (
      <div className="row">
        <ul className="list-group">
          {todos}
        </ul>
      </div>
    );
  }
});

module.exports = TodoList;
