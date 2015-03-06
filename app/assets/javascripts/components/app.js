/** @jsx React.DOM */
var React = require('react');
var TodoForm = require('./todos/todo-form');
var TodoList = require('./todos/todo-list');

var App =
  React.createClass({
    render: function() {
      return (
        <div>
          <TodoForm />
          <TodoList />
        </div>
      );
    }
  });

module.exports = App;
