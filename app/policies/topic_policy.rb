class TopicPolicy < ApplicationPolicy

  def initialize(user, topic)
    @user = user
    @topic = topic
  end

  def update?
    @topic.profile.user == user
  end

  def destroy?
    @topic.profile.user == user
  end
end
