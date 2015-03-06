var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var assign = require('object-assign')
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _todos = [];

function _addTodo(todo) {
  _todos.push({description: todo});
}

function _removeTodo(index) {
  _todos.splice(index, 1);
}

var TodoStore = assign(EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getTodos: function() {
    return _todos;
  },

  dispatcherIndex: AppDispatcher.register(function(payload) {
    console.log(payload);
    var action = payload.action;
    switch(action.actionType) {
      case AppConstants.ADD_TODO:
        _addTodo(payload.action.todo);
        console.log(_todos);
        break;
      case AppConstants.REMOVE_TODO:
        _removeTodo(payload.action.id);
        break;
    }

    TodoStore.emitChange();

    return true;
  })
});

module.exports = TodoStore;
