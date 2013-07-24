class PinsController < ApplicationController
  def index
    @pins = Pin.joins(:category).order('name')
    @categories = Category.all
  end

  def new
    @pin = Pin.new
  end

  def create
    pin = Pin.create(params[:pin])
    @auth.pins << pin

    render :json => pin.as_json(:include => :category)
  end

  def edit
    @pin = Pin.find(params[:id])
    render :new
  end

  def update
    @pin = Pin.find(params[:id])
    if @pin.update_attributes(params[:pin])
      redirect_to(pins_path)
    else
      render :new
    end
  end

  def destroy
  end
end