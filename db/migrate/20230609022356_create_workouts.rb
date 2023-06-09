class CreateWorkouts < ActiveRecord::Migration[7.0]
  def change
    create_table :workouts do |t|
      t.string :name
      t.string :kind
      t.string :muscle
      t.string :difficulty
      t.string :image
      t.boolean :isometric

      t.timestamps
    end
  end
end
