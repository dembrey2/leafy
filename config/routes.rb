Rails.application.routes.draw do

  scope :api do

    resources :users do
      resources :jobs
    end

  end

  post 'login' => 'sessions#create'
end
