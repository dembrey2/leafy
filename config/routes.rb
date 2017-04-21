Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  scope :api do

    resources :users do
      resources :jobs
    end

    resources :skills
    resources :locations

    resources :password_resets, only: [:create, :update]

  end

  post 'login' => 'sessions#create'

  get '/:s1(/:s2)(/:s3)' => 'application#static'
end
