Rails.application.routes.draw do

 
<<<<<<< HEAD
  resources :favorites
=======
>>>>>>> b4b65f6efa651c36b1344169500b182addd00e80
  # resources :artworks
  get '/artists', to: 'artists#index'
  get '/collectors', to: 'collectors#index'
  get '/artists/:id', to: 'artists#show'
  post '/artists/login', to: 'artists#login'
  
  get '/artworks', to: 'artworks#index'
  get '/artworks/:id', to: 'artworks#show'
  post '/artworks', to: 'artworks#create'
  delete '/artworks/:id', to: 'artworks#delete'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
