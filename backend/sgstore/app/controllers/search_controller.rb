# app/controllers/search_controller.rb
class SearchController < ApplicationController
  def index
    fruits = Fruit.where('title LIKE ?', "%#{params[:query]}%")
    dairies = Dairy.where('title LIKE ?', "%#{params[:query]}%")
    render json: (fruits + dairies).map { |item| item.as_json.merge(type: item.class.name.downcase) }
  end
  def results
    query = params[:query]
    @results = Fruit.where('LOWER(title) LIKE ?', "%#{query.downcase}%")
    render json: @results
  end
end
