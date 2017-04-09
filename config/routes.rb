Rails.application.routes.draw do

  scope :api do
    resources :employer_profiles do
      resources :jobs
    end

    resources :users
    resources :seeker_profiles

    resources :skills do
      resources :seeker_profiles
      resources :jobs do
        resources :employer_profiles
      end
    end

  end

  post 'login' => 'sessions#create'
end
