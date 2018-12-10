class Topic < ApplicationRecord
  belongs_to :profile
  has_many :posts, dependent: :delete_all
end
