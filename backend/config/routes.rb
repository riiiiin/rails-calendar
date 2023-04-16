Rails.application.routes.draw do
  get 'mypage', to: 'users#me'
  post 'signup', to: 'users#create'
  post 'login', to: 'sessions#create'
  post 'logout', to: 'sessions#destroy'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :test, only: %i[index]
  resources :users, only: %i[create]
  root 'test#index'
end
