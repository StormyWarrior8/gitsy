class ReposController < ApplicationController
  def index
    render json: Repo.get_client_repos(current_user, current_user.token)
  end

  def create
    user = current_user
    found = false

    if user.repos.count > 0
      user.repos.each do |r|
        if r.repo_id == params[:repo_id]
          # check if star_level params is nil and skip update
          if params[:star_level] == nil
            # update tag
            r.update_attributes(tag: params[:tag])
          else
            # update star_level
            r.update_attributes(star_level: params[:star_level])
          end
          
          found = true
        end
      end
    else
      user.repos.create(repo_id: params[:repo_id], star_level: params[:star_level], tag: params[:tag])
      found = true
    end

    if found == false
      user.repos.create(repo_id: params[:repo_id], star_level: params[:star_level], tag: params[:tag])
    end
  end
end
