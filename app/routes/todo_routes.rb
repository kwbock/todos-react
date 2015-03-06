require 'sinatra/extension'
require 'sinatra/json'

require 'app/models/todo'

module Routes
  module TodoRoutes
    extend Sinatra::Extension

    get '/todos' do
      json Todo.all.to_json
    end

    post '/todos' do
      todo = Todo.create(params)
      json todo.to_json
    end

    get '/todos/:id' do
      json Todo.find(params[:id]).to_json
    end

    put '/todos/:id' do
      todo = Todo.find(params[:id])
      json todo.update_attributes(params).to_json
    end

    delete '/todos/:id' do
      json Todo.find(params[:id]).destroy
    end

  end
end
