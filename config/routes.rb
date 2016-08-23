Rails.application.routes.draw do

  get 'auth/:provider/callback', to: 'sessions#create'
  post 'logout' => 'sessions#destroy', :as => 'logout'

  get 'dashboard' => 'dashboard#index'

  resources :repos, only: ['index']

  root 'home#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
