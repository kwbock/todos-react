$LOAD_PATH.unshift File.expand_path(File.dirname(__FILE__))

require 'boot'
require 'app/extensions'
require 'app/routes'

class App < Sinatra::Application
  configure do
    set :root, File.dirname(__FILE__)
    set :views, File.join(settings.root, 'app/views')
    set :public_folder, 'dist'
  end

  register Extensions::ApplicationHelper

  register Routes::TodoRoutes

  get "/" do
    # binding.pry
    erb :index
  end
end
