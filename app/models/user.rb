class User < ApplicationRecord

    has_secure_password

    has_many :user_workouts, dependent: :destroy

    validates :name, presence: { message: "Enter a name" }
    validates :username, presence: { message: "Enter a username" }
    validates :username, uniqueness: { message: "Username has already been taken" }, on: :account_setup

    validates :password, length: { minimum: 6, message: "Must be at least six characters long" }
    validates :email, presence: { message: "Enter an email address" }

    validates :email, uniqueness: { message: "Email has already been taken" }, on: :account_setup
    validates :weight, presence: { message: "Enter a weight" }

end
