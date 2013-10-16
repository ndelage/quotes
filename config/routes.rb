Quotes::Application.routes.draw do
  get "login" => "sessions#new"
  post "login" => "sessions#create"
  post "search" => "search#create"

  get "upvote/:id" => "upvotes#upvote", as: "upvote"

  resources :users do
    resources :quotes
  end

  resources :quotes, only: [:new, :create]

  mount JasmineRails::Engine => "/specs" if defined?(JasmineRails)
end
