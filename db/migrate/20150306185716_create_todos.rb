class CreateTodos < ActiveRecord::Migration
  def up
    create_table :todos do |t|
      t.integer :id
      t.text :description
      t.timestamps null: false
    end
  end
end
