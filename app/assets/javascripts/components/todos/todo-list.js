/** @jsx React.DOM */
var React = require('react');

var TodoList = React.createClass({
  render: function() {
    return (
      <div className="row">
        <ul className="list-group">
          <li className="list-group-item">Hi</li>
        </ul>
      </div>
    );
  }
});

module.exports = TodoList;
