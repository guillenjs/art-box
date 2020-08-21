class ArtworksController < ApplicationController

    def index
        artworks = Artwork.all 
        render json: artworks
    end

    def show
        artwork = Artwork.find(params[:id])
        render json: artwork
    end

    def update
       
        artwork = Artwork.find(params[:id])
        artwork.update(updateparams)

        render json: artwork
        
    end

    def create
        newArt = Artwork.create(artparams) 
        render json: newArt
    end

    def delete
        artwork = Artwork.find(params[:id])
        artwork.destroy
        render json: artwork
      end

    private

    def artparams
        params.permit(:name, :price, :medium, :image, :availability, :dimension, :artist_id, :collector_id)
    end

    def updateparams
        params.permit(:name, :price, :medium)
    end

end
