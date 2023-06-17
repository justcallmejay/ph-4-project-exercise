class UserWorkout < ApplicationRecord
  belongs_to :user
  belongs_to :workout

  validates :weight, presence: { message: "Enter a weight" }
  validates :reps, presence: { message: "Enter a repetition" }
  validates :intensity, numericality: { greater_than_or_equal_to: 7, message: "Select an intensity."}
  validates :percent_completed, numericality: { greater_than_or_equal_to: 0.01, message: "Enter the amount of repetitions performed" }


end
