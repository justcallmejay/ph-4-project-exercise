class User < ApplicationRecord

    has_secure_password

    has_many :user_workouts, dependent: :destroy
    has_many :workouts, through: :user_workouts

    validates :name, presence: { message: "Enter a name" }
    validates :username, presence: { message: "Enter a username" }
    validates :username, uniqueness: { message: "Username has already been taken" }

    validates :password, presence: { message: "Enter a password"}, if: ->(user) { user.password.present? }
    validate :password_length_validation, on: :create

    validates :email, presence: { message: "Enter an email address" }
    
    validates :email, uniqueness: { message: "Email has already been taken" }
    validates :weight, presence: { message: "Enter a weight" }
    
    # validates :email, uniqueness: { message: "Email has already been taken" }, on: :update
    # validates :username, uniqueness: { message: "username has already been taken" }, on: :update
    def password_length_validation
      if password.present? && password.length < 6
        errors.add(:password, "Must be at least six characters long")
      end
    end


end
