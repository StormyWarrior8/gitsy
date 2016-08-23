class Repo < ApplicationRecord
  belongs_to :user

  def self.get_client_repos(user_token)
    client = Octokit::Client.new(client_id: ENV['GITHUB_KEY'], client_secret: ENV['GITHUB_SECRET'], :access_token => user_token, auto_paginate: true)

    repos = []

    client.starred.each do |r|
      repo = {"id" => r.id, "repo_name" => r.full_name, "desc" => r.description, "lang" => r.language, "html_url" => r.html_url, "clone_url" => r.clone_url, "stars" => r.stargazers_count, "forks" => r.forks_count, "watchers" => r.watchers, "star_level" => 1}
      repos << repo
    end

    return repos
  end
end
