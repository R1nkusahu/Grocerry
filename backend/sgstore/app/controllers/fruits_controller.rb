# class FruitsController < ApplicationController
#   include Rails.application.routes.url_helpers
#   def create
#     fruit = Fruit.new(fruit_params)
#     if fruit.save
#       render json: fruit, status: :created
#     else
#       render json: fruit.errors, status: :unprocessable_entity
#     end
#   end

#   # private

#   # def fruit_params
#   #   params.require(:fruit).permit(:title, :description, :price, :image)
#   # end
#    def index
#     fruits = Fruit.all.map do |fruit|
#       if fruit.image.attached?
#         fruit.attributes.merge(image_url: url_for(fruit.image))
#       else
#         fruit.attributes
#       end
#     end
#     render json: fruits
#   end
#   # def create
#   #   fruit = Fruit.new(fruit_params)
#   #   if fruit.save
#   #     render json: fruit, status: :created
#   #   else
#   #     render json: fruit.errors, status: :unprocessable_entity
#   #   end
#   # end
#   def show
#     fruit = Fruit.find(params[:id])
#     render json: fruit
#   end
#   def destroy
#     fruit = Fruit.find(params[:id])
#     fruit.destroy
#     head :no_content
#   rescue ActiveRecord::RecordNotFound
#     render json: { error: 'Fruit not found' }, status: :not_found
#   end
#   def update
#     fruit = Fruit.find(params[:id])
#     if fruit.update(fruit_params)
#       render json: fruit
#     else
#       render json: { errors: fruit.errors.full_messages }, status: :unprocessable_entity
#     end
#   end
#   # def search
#   #   logger.debug "Search Query: #{params[:query]}"
#   #   query = params[:query].downcase
#   #   @fruits = Fruit.where('LOWER(title) LIKE ?', "%#{query}%")
#   #   logger.debug "Fruits Found: #{@fruits.length}"
    
#   #   # Check the object before map
#   #   @fruits.map do |fruit|
#   #     logger.debug "Processing Fruit: #{fruit.id}, #{fruit.title}"
#   #     {
#   #       id: fruit.id,
#   #       title: fruit.title,
#   #       price: fruit.price,
#   #       image_url: url_for(fruit.image)
#   #     }
#   #   end
#   #   render json: @fruits
#   # end
  
#   # def search
#   #   query = params[:query].downcase
#   #   @fruits = Fruit.where('LOWER(title) LIKE ?', "%#{query}%")
#   #   render json: @fruits
#   # end
#   def search
#     if params[:query].present?
#       # Use SQL wildcard search to find fruits with matching title
#       query = params[:query].downcase
#       fruits = Fruit.where('LOWER(title) LIKE ?', "%#{query}%")
#       render json: fruits # Return the results as JSON
#     else
#       render json: { error: 'No query provided' }, status: :bad_request
#     end
#   end
#   private

#   def fruit_params
#     params.require(:fruit).permit(:title, :description, :price, :image)
#   end
# end

class FruitsController < ApplicationController
  include Rails.application.routes.url_helpers
  
  # Create a new fruit
  def create
    fruit = Fruit.new(fruit_params)
    if fruit.save
      render json: fruit, status: :created
    else
      render json: fruit.errors, status: :unprocessable_entity
    end
  end

  # Get all fruits
  def index
    fruits = Fruit.all.map do |fruit|
      if fruit.image.attached?
        fruit.attributes.merge(image_url: url_for(fruit.image))
      else
        fruit.attributes
      end
    end
    render json: fruits
  end

  # Get a single fruit by ID
  def show
    fruit = Fruit.find(params[:id])
    if fruit.image.attached?
      render json: fruit.attributes.merge(image_url: url_for(fruit.image))
    else
      render json: fruit
    end
  end

  # Delete a fruit by ID
  def destroy
    fruit = Fruit.find(params[:id])
    fruit.destroy
    head :no_content
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Fruit not found' }, status: :not_found
  end

  # Update a fruit by ID
  def update
    fruit = Fruit.find(params[:id])
    if fruit.update(fruit_params)
      render json: fruit
    else
      render json: { errors: fruit.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # Search for fruits by title
  def search
    if params[:query].present?
      query = params[:query].downcase
      fruits = Fruit.where('LOWER(title) LIKE ?', "%#{query}%")
      
      # Map results with image_url if attached
      fruits_with_images = fruits.map do |fruit|
        if fruit.image.attached?
          fruit.attributes.merge(image_url: url_for(fruit.image))
        else
          fruit.attributes
        end
      end
      
      render json: fruits_with_images
    else
      render json: { error: 'No query provided' }, status: :bad_request
    end
  end

  private

  # Strong parameters for fruit
  def fruit_params
    params.require(:fruit).permit(:title, :description, :price, :image)
  end
end
