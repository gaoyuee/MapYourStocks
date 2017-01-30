Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "stocks#index"
  get 'stocks/all' => "stocks#all"

  # devise_for :users, controllers: {registrations: "users/registrations"}
                                    # sessions: 'users/sessions' }
  resources :users, only: [:show]
end
