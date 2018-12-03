Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'post/:id', to: 'posts#show', as: 'post'
  get 'posts', to: 'posts#index', as: 'posts'
  get 'posts/new', to: 'posts#new', as: 'new_post'
  post 'posts', to: 'posts#create'
  get 'post/:id/edit', to: 'posts#edit', as: 'edit_post'
  patch 'post/:id', to: 'posts#update'
  root to: 'pages#home'
end
