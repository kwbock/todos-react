var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign')

var AppDispatcher = assign(new Dispatcher(), {
  handleViewAction: function(action) {
    this.dispatch({
      actionType: 'VIEW_ACTION',
      action: action
    });
  },

  handleServerAction: function(action) {
    this.dispatch({
      actionType: 'SERVER_ACTION',
      action: action
    });
  }
});

module.exports = AppDispatcher;
