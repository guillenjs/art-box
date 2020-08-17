class Artist < ApplicationRecord
    has_many :artworks
    has_many :collectors, through: :artworks
end
