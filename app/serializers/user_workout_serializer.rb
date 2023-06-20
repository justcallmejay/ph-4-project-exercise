class UserWorkoutSerializer < ActiveModel::Serializer
  attributes :id, :reps, :weight, :percent_completed, :date, :intensity, :timer

  has_one :workout
end
