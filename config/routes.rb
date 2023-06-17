Rails.application.routes.draw do
  resources :user_workouts, only: [:index, :create, :destroy]
  resources :workouts, only: [:index]
  resources :users, only: [:create, :update, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  post 'login', to: 'sessions#create'
  get '/authorized', to: 'users#show'
  get '/get_exercises', to: 'workouts#get_exercises'
  delete '/logout', to: 'sessions#destroy'

  get '/find_by_date', to: 'users#find_by_date'
  get '/get_user_counts', to:'workouts#get_user_counts'

  # Defines the root path route ("/")
  # root "articles#index"
end
