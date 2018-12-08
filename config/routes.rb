Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'post/:id', to: 'posts#show', as: 'post'
  get 'posts', to: 'posts#index', as: 'posts'
  get 'posts/new', to: 'posts#new', as: 'new_post'
  post 'posts', to: 'posts#create'
  get 'post/:id/edit', to: 'posts#edit', as: 'edit_post'
  patch 'post/:id', to: 'posts#update'

  get 'topic/:id', to: 'topics#show', as: 'topic'
  get 'topics', to: 'topics#index', as: 'topics'
  get 'topics/new', to: 'topics#new', as: 'new_topic'
  post 'topics', to: 'topics#create'
  get 'topic/:id/edit', to: 'topics#edit', as: 'edit_topic'
  patch 'topic/:id', to: 'topics#update'

  root to: 'pages#home'
end
