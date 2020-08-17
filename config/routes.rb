Rails.application.routes.draw do

 
  resources :artworks
  get '/artists', to: 'artists#index'
  get '/artists/:id', to: 'artists#show'
  post '/artists/login', to: 'artists#login'


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
