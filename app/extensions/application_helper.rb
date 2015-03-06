require 'sinatra/extension'

module Extensions
  module ApplicationHelper
    extend Sinatra::Extension

    module Helpers
      def stylesheet_link_tag(path)
        %{<link href="#{asset_path(path)}" rel="stylesheet" type="text/css" media="screen">}.html_safe
      end

      def javascript_tag(path)
        %{<script src="#{asset_path(path)}"></script>}.html_safe
      end

      def asset_path(path)
        path
      end
    end

    helpers Helpers
  end
end
