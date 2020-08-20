class CollectorsController < ApplicationController

    def index
        @collector = Collector.all 
        render json: @collector
    end

    def login
     
        collector = Collector.find_by(name: params[:userLogin])
    
        if collector 
            render json: collector
        end 
    end

end
