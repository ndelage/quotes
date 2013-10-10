Quotes::Application.routes.draw do
  get "login" => "sessions#new"
  post "login" => "sessions#create"

  resources :users do
    resources :quotes
  end
end
