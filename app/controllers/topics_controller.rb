class TopicsController < ApplicationController
  before_action :set_topic, only: [:show, :edit, :update, :destroy]

  def show
  end

  def index
    @topics = Topic.all
  end

  def new
    @topic = Topic.new
  end

  def create
    @topic = Topic.new(topic_params)
    @topic.profile = current_user.profile

    respond_to do |format|
      if @topic.save
        format.html { redirect_to @topic, notice: 'Topic saved successfully' }
      else
        format.html { render new }
      end
    end
  end

  def edit
  end

  def update
    authorize(@topic)
    respond_to do |format|
      if @topic.update(topic_params)
        format.html { redirect_to @topic }
      else
        format.html { render edit }
      end
    end
  end

  def destroy
    authorize(@topic)
    @topic.destroy
    redirect_to profile_path(current_user.profile)
  end

  private

  def set_topic
    @topic = Topic.find(params[:id])
  end

  def topic_params
    params.require(:topic).permit(:title, :description)
  end
end
