class UserWorkout < ApplicationRecord
  belongs_to :user
  belongs_to :workout

  validate :invalid_weight 
  validates :reps, presence: { message: "Enter a repetition" }
  validates :intensity, numericality: { greater_than_or_equal_to: 7, message: "Select an intensity."}
  validates :reps_performed, numericality: { minimum: 1, message: "Enter the amount of repetitions performed" }
  validate :invalid_timer
  # , numericality: { greater_than_or_equal_to: 1, message: "Start the timer, then stop it before submitting."}

  def invalid_timer
    if workout.isometric && timer < 1
      errors.add(:timer, "Start the timer, then stop it before submitting.")
    end
  end

  def invalid_weight
    if !bw? && weight.blank?
      errors.add(:weight, "Enter a weight")
    end
  end

end
