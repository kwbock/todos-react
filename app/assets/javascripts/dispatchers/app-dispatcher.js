var merge = require('react/lib/merge');
var Dispatcher = require('flux').Dispatcher;

var AppDispatcher = merge(AppDispatcher.prototype, {
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
