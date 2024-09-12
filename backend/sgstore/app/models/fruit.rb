class Fruit < ApplicationRecord
  has_one_attached :image
  before_save :check_title

  def check_title
    
  end
end
