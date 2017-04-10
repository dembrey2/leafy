Rails.application.routes.draw do

  scope :api do

    resources :users do
      resources :jobs
    end

    # resources :skills do
    #   resources :seeker_profiles
    #   resources :jobs do
    #     resources :employer_profiles
    #   end
    # end

  end

  post 'login' => 'sessions#create'
end
