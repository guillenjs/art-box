class ArtistsController < ApplicationController

    def index
        @artist = Artist.all 
        render json: @artist
    end

    def random
        artist = Artist.all.sample
        render json: artist
    end


    def show
        artist = Artist.find(params[:id])
        render json: artist
    end

    def login
        artist = Artist.find_by(name: params[:userLogin])
        if artist 
            render json: artist
        end 
    end

end
