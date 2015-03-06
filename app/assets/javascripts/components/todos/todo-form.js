/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../../actions/app-actions');

var TodoForm = React.createClass({
  getInitialState: function() {
    return {value: this.props.value || ''};
  },

  handleClick: function(event) {
    console.log('click');
    AppActions.addTodo({description: this.state.value});
  },

  _onChange: function(event) {
    this.setState({
      value: event.target.value
    });
  },

  render: function() {
    return (
      <div className="row">
        <form>
          <div className="form-group">
            <input type="text" className="form-control" id="todo" onChange={this._onChange} placeholder="Todo..." />
          </div>

          <button type="button" className="btn btn-default pull-right" onClick={this.handleClick}>Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = TodoForm;
