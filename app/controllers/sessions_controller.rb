class SessionsController < Devise::SessionsController
  skip_before_action :redirect_unless_signed_in
end
