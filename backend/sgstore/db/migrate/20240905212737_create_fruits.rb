class CreateFruits < ActiveRecord::Migration[7.2]
  def change
    create_table :fruits do |t|
      t.string :title
      t.text :description
      t.decimal :price
      t.string :image

      t.timestamps
    end
  end
end