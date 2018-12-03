class PostPolicy < ApplicationPolicy
  attr_reader :user

  def initialize(user)
    @user = user
  end

  def update?
    user.admin?
  end
end
