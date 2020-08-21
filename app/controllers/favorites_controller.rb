class FavoritesController < ApplicationController

    def index
        favorites = Favorite.all 
        render json: favorites
    end

    def show 
        favorite = Favorite.find(params[:id])
        render json: favorite
    end

    def create
        favorite = Favorite.create(favParams)
       render json: favorite
    end

    private
    def favParams
        params.permit(:artwork_id, :collector_id)
    end

end
