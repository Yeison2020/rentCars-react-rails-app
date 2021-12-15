class FallbackController < ActionController::Base

    def index
        #I need to create a site here to render in case of not found page.
        render json: {error: 'Page not found'},status: :not_found 
    end
end
