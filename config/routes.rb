Rails.application.routes.draw do

  scope :api do

    resources :users do
      resources :jobs
    end

    resources :skills

  end

  post 'login' => 'sessions#create'
end
