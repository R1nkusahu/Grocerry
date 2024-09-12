class DairiesController < ApplicationController
  # def index
  #   fruits = Fruit.all
  #   render json: fruits
    
  # end
  def index
    dairies = Dairy.all.map do |dairy|
      if dairy.image.attached?
        dairy.attributes.merge(image_url: url_for(dairy.image))
      else
        dairy.attributes
      end
    end
    render json: dairies
  end
  def create
    dairy = Dairy.new(dairy_params)
    if dairy.save
      render json: dairy, status: :created
    else
      render json: dairy.errors, status: :unprocessable_entity
    end
  end
  def show
    dairy = Dairy.find(params[:id])
    render json: dairy 
  end
  def destroy
    dairy = Dairy.find(params[:id])
    dairy.destroy
    head :no_content
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'dairy  not found' }, status: :not_found
  end
  def update
    dairy  = Dairy.find(params[:id])
    if dairy.update(dairy_params)
      render json: dairy 
    else
      render json: { errors: dairy.errors.full_messages }, status: :unprocessable_entity
    end
  end
  
  private

  def dairy_params
    params.require(:dairy).permit(:title, :description, :price, :image)
  end
end