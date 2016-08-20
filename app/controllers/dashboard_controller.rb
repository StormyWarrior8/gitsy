class DashboardController < ApplicationController
  def index
    client = Octokit::Client.new(:access_token => current_user.token)

    @user = client.user
    # raise :test

    @starred_repos_url = @user.url + '/starred'
  end
end
