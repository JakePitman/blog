class ApplicationController < ActionController::Base
  include Pundit
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :redirect_unless_signed_in, except: [:about]

  def redirect_unless_signed_in 
    respond_to do |format|
      unless current_user
        format.html { redirect_to pages_about_path, notice: 'Please sign in or create an account to get started!' }
      end
    end
  end
  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [profile_attributes: [:name]])
    devise_parameter_sanitizer.permit(:account_update, keys: [profile_attributes: [:name]])
  end
end
