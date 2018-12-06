class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_one :profile, autosave: true, dependent: :destroy
  has_many :posts
  accepts_nested_attributes_for :profile, allow_destroy: true

  validate :username_provided

  private

  def username_provided
    return errors.add :base, 'username must be at least 4 characters' if self.profile.name.length < 3
    return errors.add :base, 'username must not be longer than 20 characters' if self.profile.name.length > 20 
  end
end
