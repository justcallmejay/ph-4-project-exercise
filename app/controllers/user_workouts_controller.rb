class UserWorkoutsController < ApplicationController

    wrap_parameters format: []
    
    def index
        user_workout = UserWorkout.where(user_id: params[:user_id], date: params[:date])
        render json: user_workout, status: :ok
    end

    def create
        user_workout = UserWorkout.create(user_workout_params)
        if user_workout.valid?
            render json: user_workout, status: :created
        else
            render json: { errors: user_workout.errors }, status: :unprocessable_entity
        end
    end

    def destroy
        user_workout = UserWorkout.find_by(id: params[:id])
        if user_workout.present?
            user_workout.destroy
            render json: user_workout.id
        else
            render json: { errors: "Not found"}, status: :not_found
        end
    end


    private

    def user_workout_params
        params.permit(
            :user_id,
            :workout_id,
            :weight,
            :reps,
            :reps_performed,
            :date,
            :intensity,
            :timer,
            :bw,
            :reps_completed
        )
    end

end
