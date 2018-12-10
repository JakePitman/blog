class PostPolicy < ApplicationPolicy

  def initialize(user, post)
    @user = user
    @post = post
  end

  def create?
    user.profile.topics.include?(@post.topic)
  end

  def update?
    user.profile.topics.include?(@post.topic)
  end
end
