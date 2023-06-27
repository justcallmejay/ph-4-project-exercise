class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :name, :kind, :muscle, :difficulty, :image, :isometric

  has_many :users do
    object.users.uniq
  end

end
