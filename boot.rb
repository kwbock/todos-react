$LOAD_PATH.unshift File.expand_path(File.dirname(__FILE__) + '/lib')

ENV['RACK_ENV'] ||= 'development'

require 'rubygems'
require 'bundler/setup'

Bundler.setup(:default, ENV['RACK_ENV'])
Bundler.require(:default, ENV['RACK_ENV'])

require 'active_support/core_ext'

# Because I like denoting the format
Tilt.register Tilt::ERBTemplate, 'html.erb'
