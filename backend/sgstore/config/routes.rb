Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
  resources :fruits do
    collection do
      get 'search'
    end
  end
  resources :dairies
  post 'signup', to: 'sessions#signup'
  post 'login', to: 'sessions#login'
  delete 'logout', to: 'sessions#logout'
  get 'current_user', to: 'sessions#current_user'
 
# config/routes.rb


end