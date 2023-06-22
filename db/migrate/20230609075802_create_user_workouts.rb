class CreateUserWorkouts < ActiveRecord::Migration[7.0]
  def change
    create_table :user_workouts do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :workout, null: false, foreign_key: true
      t.integer :reps
      t.integer :weight
      t.boolean :bw
      t.integer :reps_performed
      t.float :reps_completed
      t.float :intensity
      t.integer :timer
      t.datetime :date

      t.timestamps
    end
  end
end
