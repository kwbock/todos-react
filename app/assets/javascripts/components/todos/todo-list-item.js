/** @jsx React.DOM */
var React = require('react');

var TodoListItem = React.createClass({
  render: function() {
    return (
      <li className="list-group-item">{this.props.todo.description}</li>
    );
  }
});

module.exports = TodoListItem;
