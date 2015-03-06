require 'spec_helper'

describe 'App' do
  it "should respond to GET" do
    get '/'
    expect(last_response).to be_ok
    expect(last_response.body).to match(/Sinatra Template/)
  end
end
