/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../../actions/app-actions');

var TodoListItem = React.createClass({
  removeTodo: function(event) {
    AppActions.removeTodo(this.props.todo.id)
  },

  render: function() {
    return (
      <li className="list-group-item">
        {this.props.todo.description}
        <span className="glyphicon glyphicon-ok-circle pull-right"></span>
        <span className="glyphicon glyphicon-remove-circle pull-right" onClick={this.removeTodo}></span>
      </li>
    );
  }
});

module.exports = TodoListItem;
