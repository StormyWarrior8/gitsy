class DashboardController < ApplicationController
  def index
    client = Octokit::Client.new(:access_token => current_user.token)

    @user = client.user
    # raise :test

    @starred_repos_list = Octokit.starred(@user.login, :per_page => 100)
    # puts "#{@starred_repos_list}"
  end
end
