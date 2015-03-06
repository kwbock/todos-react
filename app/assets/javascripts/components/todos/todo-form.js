/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../../actions/app-actions');

var TodoForm = React.createClass({
  getInitialState: function() {
    return {value: this.props.value || ''};
  },

  handleClick: function(event) {
    var self = this;
    AppActions.addTodo({description: this.refs.description.getDOMNode().value})
      .done(function(data, status, xhr) {
        self.refs.description.getDOMNode().value = '';
      });
  },

  render: function() {
    return (
      <div className="row">
        <form>
          <div className="form-group">
            <input ref='description' type="text" className="form-control" id="todo" placeholder="Todo..." />
          </div>

          <button type="button" className="btn btn-default pull-right" onClick={this.handleClick} value={this.state.value}>Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = TodoForm;
