class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :name, :kind, :muscle, :difficulty, :image, :isometric
end
