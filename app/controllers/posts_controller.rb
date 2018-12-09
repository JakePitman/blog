class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update]

  def show
  end

  def index
    @posts = Post.all
  end

  def new
    @post = Post.new
    #@topic = params.require(:topic)
  end

  def create
    @post = Post.new(post_params)
    @post.profile = current_user.profile
    authorize @post

    respond_to do |format|
      if @post.save
        format.html { redirect_to @post, notice: 'Post saved successfully' }
      else
        format.html { render new }
      end
    end
  end

  def edit
  end

  def update
    respond_to do |format|
      if @post.update(post_params)
        format.html { redirect_to @post }
      else
        format.html { render edit }
      end
    end
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :subtitle, :content, :topic_id)
  end
end
