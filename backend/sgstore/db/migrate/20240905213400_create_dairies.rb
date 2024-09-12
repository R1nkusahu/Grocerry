class CreateDairies < ActiveRecord::Migration[7.2]
  def change
    create_table :dairies do |t|
      t.string :title
      t.text :description
      t.decimal :price
      t.string :image

      t.timestamps
    end
  end
end
