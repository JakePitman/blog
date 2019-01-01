class PagesController < ApplicationController
  skip_before_action :redirect_unless_signed_in, only: :about
  def home
  end

  def index
  end

  def about
  end
end
