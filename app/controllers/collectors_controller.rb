class CollectorsController < ApplicationController

    def index
        @collector = Collector.all 
        render json: @collector
    end
end
