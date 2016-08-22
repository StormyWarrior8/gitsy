class DashboardController < ApplicationController
  def index
    # Call the Octokit Ruby Client with opts
    client = Octokit::Client.new(client_id: ENV['GITHUB_KEY'], client_secret: ENV['GITHUB_SECRET'], :access_token => current_user.token, auto_paginate: true)

    # Assign the client result to the user variable
    user = client

    # Assign the user starred repos into the @starred_repos_list variable
    @starred_repos_list = user.starred
  end
end
