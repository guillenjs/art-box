Rails.application.routes.draw do

 
  resources :artworks
  get '/artists', to: 'artists#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
