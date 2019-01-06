class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_one :profile, autosave: true, dependent: :destroy
  has_many :posts
  accepts_nested_attributes_for :profile, allow_destroy: true

  validate :username_provided

  has_many :follower_follows, foreign_key: :followee_id, class_name: "Follow"
  has_many :followers, through: :follower_follows, source: :follower

  has_many :followee_follows, foreign_key: :follower_id, class_name: "Follow"
  has_many :followees, through: :followee_follows, source: :followee
  private

  def username_provided
    return errors.add :base, 'username must be at least 4 characters' if self.profile.name.length < 3
    return errors.add :base, 'username must not be longer than 20 characters' if self.profile.name.length > 20 
  end
end
