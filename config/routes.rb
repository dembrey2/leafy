Rails.application.routes.draw do
  resources :jobs
  resources :employer_profiles
  resources :seeker_profiles
  resources :skillings
  resources :locations
  resources :skills
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
