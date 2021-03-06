let mainContainer = document.querySelector('.container')
let menuContainer = document.querySelector('#menu-outer')
let currentUser = {};
// let featuredButton = document.querySelector('div.button')
// let discoveredArtDiv = document.querySelector('.art-container')
let typeOfuser = ""

// fetch('http://localhost:3000/artists')
// .then(res => res.json())
// .then(artistArr => console.log(artistArr))

window.addEventListener('DOMContentLoaded', (evt) => {
    artistOrCollector()
    // logInForm()
})

//Form that will ask if artist or collector, store into a variable
let artistOrCollector = () => {
    let formDiv = document.createElement('div')
        formDiv.className = "box" 
        formDiv.id= 'form'

    let artistButton = document.createElement('div')
        artistButton.className = 'btn'
        artistButton.innerText = "Artist"

    let collectorButton = document.createElement('div')
        collectorButton.className = 'btn'
        collectorButton.innerText = "Collector"


    artistButton.addEventListener('click', (evt) => {
        typeOfuser = evt.target.innerText
        logInForm()
    })

    collectorButton.addEventListener('click', (evt) => {
        typeOfuser = evt.target.innerText
        logInForm()
    })
    
    formDiv.append(artistButton, collectorButton)
    mainContainer.append(formDiv)

}

//Creates login form 
let logInForm = () => {
    console.log(typeOfuser)
    // mainContainer = ""
    let formDiv = document.createElement('div')
        formDiv.className = "box"
        formDiv.id= 'form'

    let newForm = document.createElement('form')

    let newInput = document.createElement('input')
        newInput.type = 'text'
        newInput.id = 'username'
        newInput.placeholder = 'Username'
        
    let newFormButton = document.createElement('button')
        newFormButton.type = 'submit'
         newFormButton.className = 'login-btn'

        newFormButton.innerText = "submit"

    newForm.append(newInput, newFormButton)
    formDiv.append(newForm)


    mainContainer.append(formDiv)

    newForm.addEventListener("submit", loginFormInput)
}

//newForm evt passed in as argument to run search function of user
let loginFormInput = (evt) => {
    evt.preventDefault()
      
    let username = evt.target.username.value
    
    if (typeOfuser === "Artist"){
        fetch("http://localhost:3000/artists/login", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                userLogin: username
            })
        })
            .then(res => res.json())
            .then(response => renderProfile(response))
        navBar()
    }
    else {
        fetch("http://localhost:3000/collectors/login", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                userLogin: username
            })
        })
            .then(res => res.json())
            .then(response => renderCollector(response))
        navBar()
    }
}

//function to render navigation bar
let navBar = () => {
    mainContainer.innerHTML = ""

    let navDiv = document.createElement('div')
        navDiv.className = 'menu'
    
    let navUl = document.createElement('ul')

        let navLi1 = document.createElement('li')
            let liDiv1 = document.createElement('div')
                liDiv1.className = 'button'
                liDiv1.innerText = "Profile"

        let navLi2 = document.createElement('li')
            let liDiv2 = document.createElement('div')
                liDiv2.className = 'button'
                liDiv2.innerText = "Featured"

        let navLi3 = document.createElement('li')
            let liDiv3 = document.createElement('div')
                    liDiv3.className = 'button'
                    liDiv3.innerText = "Discover"        

        let navLi4 = document.createElement('li')
            let liDiv4 = document.createElement('div')
                liDiv4.className = 'button'
                liDiv4.innerText = "Logout"

            navLi1.append(liDiv1)
            navLi2.append(liDiv2)
            navLi3.append(liDiv3)
            navLi4.append(liDiv4)
        navUl.append(navLi1, navLi2, navLi3, navLi4)

        menuContainer.append(navUl)

        navLi1.addEventListener('click', (evt) => {
           // console.log("hi");
           if (typeOfuser != "Collector" ){
            return renderProfile(currentUser)
           }
           else{
            return renderCollector(currentUser)
           }
        })

        navLi2.addEventListener('click', (evt) => {
            //console.log(evt);
            mainContainer.innerHTML = ""
            fetch('http://localhost:3000/artists')
            .then(res => res.json())
            .then((artistArray) => {
             // console.log(artistObj)
             //artistArray.forEach((artistObj) => {
                renderFeaturedProfile(artistArray[0])  
            // })
        })
    })

    navLi3.addEventListener('click', (evt) => {
        console.log(evt);
        mainContainer.innerHTML = ""
        fetch('http://localhost:3000/artists')
        .then(res => res.json())
        .then((artistArray) => {
         // console.log(artistArray) 
        renderDiscovered(artistArray)
    })
})

        navLi4.addEventListener('click',  (params) => {
            menuContainer.innerHTML = ""
            mainContainer.innerHTML = ""
            artistOrCollector()
        })
}
let renderDiscovered = (artistArray) => {
    let artDisDiv = document.createElement('div')
        artDisDiv.className = "grid-container"
        
        artistArray.forEach((artistObj) => {
        let innerDisDiv2 = document.createElement('div')
        innerDisDiv2.className = "grid-item"
        
        innerDisDivLi = document.createElement('li')
        innerDisDivLi.innerText = artistObj.name

        let likeButton = document.createElement('button')
        likeButton.innerText = "Favorite ❤️"
        likeButton.className = "buttonstyle"

        let br = document.createElement('br')
        
        innerDisDiv2.append(innerDisDivLi, br, likeButton)
        artDisDiv.append(innerDisDiv2)

        innerDisDivLi.addEventListener("click", (evt) => {
            renderFeaturedProfile(artistObj)
        })

        likeButton.addEventListener("click", (evt) => {
            console.log("likeButton")
           addLike(artistObj, currentUser)

        })
    })
        
       
       // debugger
        //innerDisDiv2.src = artistArray.artworks[0].image
    mainContainer.append(artDisDiv)

}

// let discoverToFeatured = (artistObj) => {
//     mainContainer.innerHTML = ""
//     let artistDiv = document.createElement('div')
//     let artistImg = document.createElement('img')
    
//      let artistDivP = document.createElement('p')
//     //  artistDivP.innerHTML = `<h2> ${artistObj.name}</h2><br>
//     //  <h1> ${artistObj.location}</h1>`
    

//     artistDiv.append(artistDivP, artistImg)
//     mainContainer.append(artistDiv) 
// }

let addLike = (artwork, collector) => {
    
    fetch('http://localhost:3000/favorites', {
        method: "POST",
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            artwork_id: artwork.id,
            collector_id: collector.id,
        })
    })
        .then(res => res.json())
        .then(newLike => {

            currentUser.favorites.push(newLike)
            renderCollector(currentUser)
 ////////////Fix when put on DOM////////////////////////////////           
        })
  
}



let renderFeaturedProfile = (artistObj) => {
    //console.log(artistObj)
    mainContainer.innerHTML = ""

   //console.log(artistObj.artworks[0].image)

    let artistDiv = document.createElement('div')
    let artistImg = document.createElement('img')
        artistImg.className = "picture"
          //Once there are more images write iteration
   artistImg.src = artistObj.artworks[0].image
     let artistDivP = document.createElement('p')
        artistDivP.className = "featured"
     artistDivP.innerHTML = `<h3> ${artistObj.name}</h3> <h4> ${artistObj.location}</h4><br><button class="btn2"><a href = "mailto: bestartist@example.com">Contact</a></button>`

    artistDiv.append(artistDivP, artistImg)
    mainContainer.append(artistDiv)
    
}

//Renders profile of current user logged in
   let renderProfile = (artistObj) => {
       currentUser = artistObj
        mainContainer.innerHTML = ""

       //console.log(artistObj.artworks[0].image)
 
       let artistDiv = document.createElement('div')
       let imgDiv = document.createElement('div')
       imgDiv.className = "grid-container"
    
    //    let artistImg = document.createElement('img')
             //Once there are more images write iteration
             //console.log(currentUser.artworks)

             currentUser.artworks.forEach((artwork) => {
              
                        let imgDiv2 = document.createElement('div')
                        imgDiv2.className = "grid-item"

                 let newImg = document.createElement('img')
                     newImg.src = artwork.image
                     newImg.id = artwork.id

                     imgDiv2.append(newImg)
                    imgDiv.append(imgDiv2)

                     artistDiv.append(imgDiv)
                     console.log(newImg)

                     newImg.addEventListener('click', (evt) => {
                         console.log(evt.target.id)
                        //  deleteImage(evt.target.id, newImg)
                        renderImageInfo(newImg, artwork)

                     })
             })

            // artistImg.src = artistObj.artworks[0].image
        let artistDivP = document.createElement('p')
             artistDivP.innerHTML = `<h4>${artistObj.name} || ${artistObj.location}</h4>`

        let uploadFormButton = document.createElement('button')
            uploadFormButton.innerText = "Upload Artwork"
            uploadFormButton.className = "buttonstyle"

            uploadFormButton.addEventListener('click', (evt) => {
                mainContainer.innerHTML = ""
                menuContainer.innerHTML = ""
                uploadForm()
            })
 
            artistDiv.append(artistDivP, uploadFormButton)
            mainContainer.append(artistDiv)
    
       
   }

let renderCollector = (user) => {
    currentUser = user
    mainContainer.innerHTML = ""

    let collectorDiv1 = document.createElement('div')
        collectorDiv1.className = "grid-container"

        let collectorDiv2 = document.createElement('div')
        collectorDiv2.className = "grid-item"
            collectorDiv2.innerHTML = `<h3>${user.name}</h3><br>${user.location}<br>${user.phone_number}`
                
        let collectorDiv3 = document.createElement('div')
        collectorDiv3.className = "grid-item"
            let newdiv1 = document.createElement('div')
            newdiv1.className = "grid-container"
            

            currentUser.favorites.forEach((favorite) => {
                
                let newdiv2 = document.createElement('div')
                    newdiv2.className = "grid-Item" 
                    let newImg = document.createElement('img')
                        newImg.src = favorite.artwork.image
                        newdiv2.append(newImg)

                        newdiv1.append(newdiv2)
            })

    collectorDiv3.append(newdiv1)
    collectorDiv1.append(collectorDiv2, collectorDiv3)
    mainContainer.append(collectorDiv1)
}
        
//Render form to upload artwork
 let uploadForm = () => {
    let formDiv = document.createElement('div')
        formDiv.className = 'box'
        formDiv.id = 'form'

    let formBr = document.createElement('br')

    let formTag = document.createElement('form')
    let formInputName = document.createElement('input')
        formInputName.placeholder = 'name'
    
    let formInputPrice = document.createElement('input')
            formInputPrice.placeholder = 'price'

    let formInputMedium = document.createElement('input')
            formInputMedium.placeholder = 'medium'

    let formInputImage = document.createElement('input')
            formInputImage.placeholder = 'image'

    let formInputDim = document.createElement('input')
            formInputDim.placeholder = 'dimension'

    let formButton = document.createElement('button')
        formButton.innerText = "Upload"
        formButton.className = "buttonstyle"
        formButton.type = 'submit'

    let formButton2 = document.createElement('button')
        formButton2.innerText = "Cancel"
        formButton2.className = "buttonstyle2"

        formTag.append(formInputName,
            formInputPrice, formInputMedium, formInputImage,
            formInputDim, formBr, formButton, formButton2)

        formDiv.append(formTag)
         mainContainer.append(formDiv)

        formButton2.addEventListener('click', (evt) => {
           navBar()
           renderProfile(currentUser)
        })

        //Fetch to post new artwork submission into Database
        formDiv.addEventListener('submit', (evt) => {
            evt.preventDefault()

            fetch("http://localhost:3000/artworks", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',  
                },
                body: JSON.stringify({
                    name: evt.target[0].value,
                    price: evt.target[1].value,
                    medium: evt.target[2].value,
                    image: evt.target[3].value,
                    availability: true,
                    dimension: evt.target[4].value,
                    artist_id: currentUser.id,
                })
            })
            .then(response => response.json())
            .then(newPost => {
                console.log(newPost.image)
                navBar()
                currentUser.artworks.push(newPost)
                renderProfile(currentUser)   
            })
        })
 } 
 
 //render singular image that shows info when clicked 
 let renderImageInfo = (objNode, artObj ) => {
        console.log(objNode)
        console.log(artObj)

    mainContainer.innerHTML = ""

    let infoContainer = document.createElement('div')
        infoContainer.className = "grid-container"
     

        let infoInner1 = document.createElement('div')
        infoInner1.className = "grid-item "
        infoInner1.append(objNode)
        
        let infoInner2 = document.createElement('div')
        infoInner2.className = "grid-item "
        infoInner2.innerHTML =  `<div class = "a">
            <b>Title:</b> ${artObj.name} <br>
            <b>Price:</b> $${artObj.price} <br>
            <b>Medium:</b> ${artObj.medium}<br>
            <b>Dimension:</b> ${artObj.dimension}
        </div>`
       
        let updateButton = document.createElement('button')
            updateButton.innerText = "Update"
            infoInner2.append(updateButton)

        let deleteButton = document.createElement('button')
            deleteButton.innerText = "Delete"
            infoInner2.append(deleteButton)

            deleteButton.addEventListener('click', (evt) => {
                deleteImage(artObj.id, objNode)
                console.log(artObj.id, objNode)
            })

            updateButton.addEventListener('click', (evt) => {
                // updateArt()
                let br1 = document.createElement('br')
                let br2 = document.createElement('br')
                let br3 = document.createElement('br')

                let infoInner3 = document.createElement('div')
                    infoInner3.className = "grid-item "
                   
                let formContainer = document.createElement('div')
                        formContainer.className = "box2"
                        formContainer.id = "form2"
                let formTag = document.createElement('form')

                let formInputName = document.createElement('input')
                            formInputName.value = artObj.name
                        
                let formInputPrice = document.createElement('input')
                     formInputPrice.value = artObj.price

                let formInputMedium = document.createElement('input')
                    formInputMedium.value = artObj.medium
                
                let formButton = document.createElement('button')
                    formButton.type = "submit"
                    formButton.value = "Submit"
                        formButton.innerText = "Update"
                        

                let cancelButton = document.createElement('button')
                    cancelButton.innerText = "Cancel"
                    

                    formTag.addEventListener("submit", (evt) => {
                        evt.preventDefault()
                        let name = evt.target[0].value
                        let price = evt.target[1].value
                        let medium = evt.target[2].value
                        updateArt(artObj, name, price, medium)
                    })

                    cancelButton.addEventListener('click', (evt) => {
                        evt.preventDefault()
                        console.log('cancel')
                        // infoContainer.append(infoInner1, infoInner2)
                        //  mainContainer.append(infoContainer)
                    })  
                        
                        formTag.append(formInputName,br1, formInputPrice, br2, formInputMedium, br3, formButton, cancelButton)
                        formContainer.append(formTag)
                        infoInner3.append(formContainer)
                        infoContainer.append(infoInner1, infoInner2, infoInner3)
                        mainContainer.append(infoContainer)
                })
    
        infoContainer.append(infoInner1, infoInner2)
        mainContainer.append(infoContainer)
 }

//deletes an image but currently not functioning
 let deleteImage = (objId, imgTag) => {
    //Pass obj id from image event listener
     // With id do fetch request to delete
    fetch(`http://localhost:3000/artworks/${objId}`, {
        method:"DELETE"
    })
    .then(res => res.json())
    .then(empytObj => {console.log(empytObj)
        // currentUser.artworks.objId.remove()
        
       let deletedArray = currentUser.artworks.filter((art) => {
            return art.id !== empytObj.id
        })
        currentUser.artworks = deletedArray
        renderProfile(currentUser)
        imgTag.remove()
        //figure out how to update delete to the dome cause currently it is not
    })
 }

//Fetch to update artworks that currently within the database and dom
 let updateArt = (artObj, name, price, medium) => {

    fetch(`http://localhost:3000/artworks/${artObj.id}`, {
        method: "PATCH",
        headers:{
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify({
            name: name,
            price: price,
            medium: medium,
        })
    })
    .then(res => res.json())
    .then(updated => {
        console.log(updated.name)
        let newImg = document.createElement('img')
                     newImg.src = updated.image
                     newImg.id = updated.id
        artObj.name = name
        artObj.price = price
        artObj.medium = medium

        renderImageInfo(newImg, artObj)
    })
    
 }




