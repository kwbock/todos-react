var AppConstants = require('../constants/app-constants');
var AppDispatcher = require('../dispatchers/app-dispatcher');
var $ = require('jquery');

var AppActions = {
  addTodo: function(todo) {
    return  $.ajax('/todos', {
              type: 'POST',
              data: todo
            }).done(function(data, status, xhr) {
              AppDispatcher.handleViewAction({
                actionType: AppConstants.ADD_TODO,
                todo: JSON.parse(data).todo
              });
            });
  },

  removeTodo: function(id) {
    return  $.ajax('/todos/' + id, {
              type: 'DELETE'
            }).done(function(data, status, xhr) {
              AppDispatcher.handleViewAction({
                actionType: AppConstants.REMOVE_TODO,
                id: id
              });
            });
  },

  getTodos: function() {
    return  $.getJSON('/todos').done(function(data, status, xhr) {
              AppDispatcher.handleViewAction({
                actionType: AppConstants.GET_TODOS,
                todos: JSON.parse(data).map(function(todo) {
                  return todo.todo;
                });
              });
            });
  }
};

module.exports = AppActions;
