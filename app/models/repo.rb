class Repo < ApplicationRecord
  belongs_to :user

  def self.get_client_repos(user_token)
    client = Octokit::Client.new(client_id: ENV['GITHUB_KEY'], client_secret: ENV['GITHUB_SECRET'], :access_token => user_token, auto_paginate: true)

    repos = []

    client.starred.each do |r|
      repo = Array.new([r.id, r.full_name, r.description, r.language, r.html_url, r.clone_url, r.stargazers_count, r.forks_count, r.watchers])
      repos << repo
    end

    return repos
  end
end
