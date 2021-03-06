class UsersController < ApplicationController
  before_action :authenticate_user!
  load_and_authorize_resource

  def index
    @users = User.all.order('email ASC')
  end

end
