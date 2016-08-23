class Repo < ApplicationRecord
  belongs_to :user

  def self.get_client_repos(user_token)
    client = Octokit::Client.new(client_id: ENV['GITHUB_KEY'], client_secret: ENV['GITHUB_SECRET'], :access_token => user_token, auto_paginate: true)
    return client.starred
  end
end
