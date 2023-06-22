class UserWorkoutSerializer < ActiveModel::Serializer
  attributes :id, :reps, :weight, :reps_performed, :date, :intensity, :timer, :bw, :reps_completed

  has_one :workout
end
