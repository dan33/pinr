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
    @categories = Category.all
    @pins = @category.pins
    @users = User.all
  end
end