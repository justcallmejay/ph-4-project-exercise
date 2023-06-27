class WorkoutsController < ApplicationController

    wrap_parameters format: []

    def index
        workout = Workout.all
        render json: workout, status: :ok
    end

    def get_exercises
        workout = Workout.where(muscle: params[:muscle])
        render json: workout, status: :ok
    end

    # def get_user_counts
    #     workout = Workout.find_by(id: params[:id]).users.uniq
    #     render json: workout.length, status: :ok
    # end

end
