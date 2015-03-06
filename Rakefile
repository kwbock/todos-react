require 'rspec/core/rake_task'
require "sinatra/activerecord/rake"
require './app'



desc "Run Spec"
RSpec::Core::RakeTask.new

namespace :db do
  task :load_config do
    require "./app"
  end
end

