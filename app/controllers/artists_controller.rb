class ArtistsController < ApplicationController

    def index
        @artists = Artist.all 
        render json: @artists
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
