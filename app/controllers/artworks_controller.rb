class ArtworksController < ApplicationController

    def index
        artworks = Artwork.all 
        render json: artworks
    end

    def create
        Artwork.create(artparams)  
    end

    private

    def artparams
        params.permit(:name, :price, :medium, :image, :availability, :dimension, :artist_id, :collector_id)
    end

end
