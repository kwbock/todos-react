require 'rspec/core/rake_task'
require 'sinatra/asset_pipeline/task'
require './app'


desc "Run Spec"
RSpec::Core::RakeTask.new

Sinatra::AssetPipeline::Task.define! App
