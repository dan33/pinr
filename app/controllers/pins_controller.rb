class PinsController < ApplicationController

  def index
    @pins = Pin.all
  end

  def new
    @pin = Pin.new
  end

  def create
    @pin = Pin.new(params[:pin])
      if @pin.save
        redirect_to(root_path)
      else
        render :new
      end
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