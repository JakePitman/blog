Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'post/:id', to: 'posts#show', as: 'post_show'
  get 'posts', to: 'posts#index', as: 'posts'
  root to: 'pages#home'
end
