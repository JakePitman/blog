Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'post/:id', to: 'posts#show', as: 'post'
  get 'posts', to: 'posts#index', as: 'posts'
  get 'posts/new', to: 'posts#new'
  post 'posts', to: 'posts#create'
  root to: 'pages#home'
end
