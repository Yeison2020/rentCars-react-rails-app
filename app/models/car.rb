class Car < ApplicationRecord

    belongs_to :owner, class_name: 'User',  foreing_key :host_id
    belongs_to :user_active, class_name: 'User',  foreing_key :current_user_id
    

end
