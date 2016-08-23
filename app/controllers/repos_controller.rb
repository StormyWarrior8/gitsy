class ReposController < ApplicationController
  def index
    render json: Repo.get_client_repos(current_user.token)
  end
end
