class Repo < ApplicationRecord
  belongs_to :user

  def self.get_correlation(user, id)
    user.repos.each do |r|
      if id.to_s == r.repo_id
        return r.star_level
      end
    end

    return 1
  end

  def self.get_client_repos(user, user_token)
    client = Octokit::Client.new(client_id: ENV['GITHUB_KEY'], client_secret: ENV['GITHUB_SECRET'], :access_token => user_token, auto_paginate: true)

    repos = []

    if user.repos.count > 0
      client.starred.each do |r|
        repo = {"id" => r.id, "repo_name" => r.full_name, "desc" => r.description, "lang" => r.language, "html_url" => r.html_url, "clone_url" => r.clone_url, "stars" => r.stargazers_count, "forks" => r.forks_count, "watchers" => r.watchers, "star_level" => Repo.get_correlation(user, r.id)}
        repos << repo
      end
    else
      client.starred.each do |r|
        repo = {"id" => r.id, "repo_name" => r.full_name, "desc" => r.description, "lang" => r.language, "html_url" => r.html_url, "clone_url" => r.clone_url, "stars" => r.stargazers_count, "forks" => r.forks_count, "watchers" => r.watchers, "star_level" => 1}
        repos << repo
      end
    end

    return repos
  end
end
