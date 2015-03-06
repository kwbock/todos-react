var AppConstants = require('../constants/app-constants');
var AppDispatcher = require('../dispatchers/app-dispatcher');

var AppActions = {
  addTodo: function(todo) {
    AppDispatcher.handleViewAction({
      actionType: 'VIEW_ACTION',
      todo: todo
    });
  },

  removeTodo: function(id) {

  }
};

module.exports = AppActions;
