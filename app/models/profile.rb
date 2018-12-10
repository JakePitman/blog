class Profile < ApplicationRecord
  belongs_to :user
  has_many :topics
  has_many :posts, through: :topics
end
