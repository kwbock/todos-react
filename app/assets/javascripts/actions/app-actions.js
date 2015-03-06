var AppConstants = require('../constants/app-constants');
var AppDispatcher = require('../dispatchers/app-dispatcher');

var AppActions = {
  addTodo: function(todo) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ADD_TODO,
      todo: todo
    });
  },

  removeTodo: function(id) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.REMOVE_TODO,
      id: id
    });
  }
};

module.exports = AppActions;
