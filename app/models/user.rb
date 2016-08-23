class User < ApplicationRecord
  has_many :repos

  def self.find_or_create_from_auth_hash(auth_hash)
    user = where(provider: auth_hash[:provider], uid: auth_hash[:uid]).first_or_create
    user.update(
        name: auth_hash[:info][:name],
        nickname: auth_hash[:info][:nickname],
        email: auth_hash[:info][:email],
        avatar: auth_hash[:extra][:raw_info][:avatar_url],
        token: auth_hash.credentials.token
    )
    user
  end
end
