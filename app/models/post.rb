class Post < ApplicationRecord
  belongs_to :topic
  has_one :profile, through: :topic
end
