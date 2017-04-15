Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  scope :api do

    resources :users do
      resources :jobs
    end

    resources :skills
    resources :locations

    post 'notify' => 'messages#notify'

  end

  post 'login' => 'sessions#reply'
end
