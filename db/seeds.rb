# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


artist = [
    {
    name: "Sleepyfoot?",
    age: 5,
    location: "Brooklyn, NY"
}, 
    {
    name: "Jorge Guillen",
    age: 5,
    location: "Brooklyn, NY"  
},
    {
    name: "Francis Picabia",
    age: 73,
    location: "France"
},
{
    name: "Gerhard Richter",
    age: 80,
    location: "Dresden, Germany"
},
{
    name: "Jordan Casteel",
    age: 31,
    location: "Denver, CO"
},
{
    name: "Kara Walker",
    age: 50,
    location: "California"
},
{
    name: "Wassily Kandinsky",
    age: 76,
    location: "Moscow, Russia"
},
{
    name: "Kerry James Marshall",
    age: 64,
    location: "Chicago, IL" 
},
{
    name: "David Alfaro Siqueiros",
    age: 64,
    location: "Mexico City, Mexico"
}
]

collector = [
    {
        name: "David Geffen",
        location: "Hollywood",
        phone_number: "213-552-1966"
    },
    {
        name: "Pamela J. Joyner",
        location: "San Francisco, CA",
        phone_number: "216-053-1221"
    },
    {
        name: "Oprah Winfrey",
        location: "Montecito, CA",
        phone_number: "Private"
    },
    {
        name: "Francois Pinault",
        location: "Les Champ-Geraux, France",
        phone_number: "Private"
    },
    {
        name: "Damien Hirst",
        location: "Bristol, UK",
        phone_number: "Private"
    }
]

artworks = [
    {
        name: "Udnie",
        price: 600000,
        medium: "Oil on Canvas",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/82/Francis_Picabia%2C_1913%2C_Udnie_%28Young_American_Girl%2C_The_Dance%29%2C_oil_on_canvas%2C_290_x_300_cm%2C_Mus%C3%A9e_National_d%E2%80%99Art_Moderne%2C_Centre_Georges_Pompidou%2C_Paris..jpg/1198px-Francis_Picabia%2C_1913%2C_Udnie_%28Young_American_Girl%2C_The_Dance%29%2C_oil_on_canvas%2C_290_x_300_cm%2C_Mus%C3%A9e_National_d%E2%80%99Art_Moderne%2C_Centre_Georges_Pompidou%2C_Paris..jpg",
        availability: true,
        dimension: "8 ft x 6 ft",
        artist_id: 3,
    },
    {
        name: "Sleepyfoot's Process",
        price: 100000,
        medium: "Oil and Sand on Wood Panel",
        image: "https://www.galleryand.studio/wp-content/uploads/2020/03/Manon-Casimir-Sainton.jpg",
        availability: true,
        dimension: "30 in x 30 in",
        artist_id: 1,
    },
    {
        name: "St.John",
        price: 4000000,
        medium: "Oil on Canvas",
        image: "https://www.tate.org.uk/art/images/work/T/T05/T05207_9.jpg",
        availability: false,
        dimension: "6 ft x 8 ft", 
        artist_id: 4         
    },
    {
        name: "Revolution",
        price: 500000,
        medium: "Oil Mural",
        image: "https://uploads4.wikiart.org/images/david-alfaro-siqueiros/the-revolution-mural.jpg",
        availability: false,
        dimension: "6 ft x 8 ft",
           artist_id: 9
    },
    {
        name: "Miles and Jojo",
        price: 300000,
        medium: "Oil on Canvas",
        image: "https://wp.stanforddaily.com/wp-content/uploads/2019/10/MilesandJojo54x72inoiloncanvas2015.jpg",
        availability: false,
        dimension: "54 in x 72 in", 
           artist_id: 5
    },
    {
        name: "Burn",
        price: 400000,
        medium: "Paper and Adhesive on Wall",
        image: "https://i.pinimg.com/originals/8d/62/e0/8d62e0a5ed2398bfb3ae62a41033cec8.jpg",
        availability: false,
        dimension: "92 in x 48 in",
           artist_id:6
    },
    {
        name: "Around the Circle",
        price: 130000,
        medium: "Oil and Enamel on Canvas",
        image: "https://image.posterlounge.com/img/products/650000/640689/640689_poster_l.jpg",
        availability: true,
        dimension: "3 ft x 4 ft",  
           artist_id: 7 
    }, 
    {
        name: "Untitled-Studio",
        price: 1300000,
        medium: "Acrylic on PVC Panels",
        image: "https://d7hftxdivxxvm.cloudfront.net/?resize_to=fit&width=1141&height=787.5&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F5Px-MP9YSmxfGCNmOkzt3w%2Flarge.jpg",
        availability: true,
        dimension: "83 ft x 119 ft",
        artist_id: 8
    },
    {
        name: "Last drink",
        price: 230000,
        medium: "Oil on Canvas",
        image: "https://www.bkmotel.org/exhibitions/2020/jg/install/12.jpg",
        availability: true,
        dimension: "14 in x 11 in",
        artist_id:2
    }
]



   
     
   
   


Artist.create(artist)
Collector.create(collector)
Artwork.create(artworks)