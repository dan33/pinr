class CategoryController < ApplicationController

  def create
    @category = Category.new(params[:category])
    if
      @category.save
        redirect_to(categories_path)
    else
      render :index
  end

  def index
    @categories = Category.order(:name)
    @pins = Pin.all
    @users = User.all
  end
end