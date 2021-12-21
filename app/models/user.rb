class User < ApplicationRecord
    has_secure_password

    has_many :cars_for_rent, class_name: 'Car', foreing_key :user_host_id
    has_many :rented_cars, class_name : 'Car', foreing_key :current_user_id
end
