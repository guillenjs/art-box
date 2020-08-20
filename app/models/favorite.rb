class Favorite < ApplicationRecord
  belongs_to :artwork
  belongs_to :collector
end
