class UsersController < ApplicationController

    wrap_parameters format: []
    skip_before_action :authorized_user, only: [:create]

    def show
        render json: current_user, status: :ok
    end

    def create
        user = User.create(user_params)
        if user.valid?(:account_setup)
            render json: user, status: :created
        else
            render json: { errors: user.errors }, status: :unprocessable_entity
        end
    end

    def update
        user = User.find_by(id: params[:id])
        if user
            user.update(user_params)
            render json: user
        else
            render json: { error: "Not found"}, status: :not_found
        end
    end

    def destroy
        user = User.find_by(id: params[:id])
        if user
            user.destroy
            head :no_content
        else
            render json: { error: "Not found"}, status: :not_found
        end
    end

    def find_by_date
        user = User.find_by(id: params[:id]).user_workouts
        render json: user, status: :ok
    end

    private 

    def user_params
        params.permit(
            :id,
            :name,
            :username,
            :password,
            :email,
            :weight
        )
    end
end
