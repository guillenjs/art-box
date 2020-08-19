let mainContainer = document.querySelector('.container')
let menuContainer = document.querySelector('#menu-outer')
let currentUser = {};
let featuredButton = document.querySelector('div.button')

fetch('http://localhost:3000/artists')
.then(res => res.json())
.then(artistArr => console.log(artistArr))

window.addEventListener('DOMContentLoaded', (evt) => {
    logInForm()
})

//Creates login form 
let logInForm = () => {
    let formDiv = document.createElement('div')
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
        console.log("i am inside")
    let username = evt.target.username.value
    
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
            console.log(hi);
            //renderProfile(currentUser)
        })

        navLi2.addEventListener('click', (evt) => {
            console.log(evt);
            mainContainer.innerHTML = ""
            fetch('http://localhost:3000/artists')
            .then(res => res.json())
            .then((artistArray) => {
             // console.log(artistArray) 
             renderFeaturedProfile(artistArray[0])
        })
    })

        navLi4.addEventListener('click',  (params) => {
            menuContainer.innerHTML = ""
            mainContainer.innerHTML = ""
            logInForm()
        })
}

let renderFeaturedProfile = (artistObj) => {
    //console.log(artistObj)
    mainContainer.innerHTML = ""

   //console.log(artistObj.artworks[0].image)

    let artistDiv = document.createElement('div')
    let artistImg = document.createElement('img')
          //Once there are more images write iteration
     artistImg.src = artistObj.artworks[0].image
     let artistDivP = document.createElement('p')
     artistDivP.innerText = `name: ${artistObj.name} || location: ${artistObj.location}`

    artistDiv.append(artistDivP, artistImg)
    mainContainer.append(artistDiv)
    
}

//Renders profile of current user logged in
   let renderProfile = (artistObj) => {
       currentUser = artistObj
        mainContainer.innerHTML = ""

       //console.log(artistObj.artworks[0].image)
 
       let artistDiv = document.createElement('div')
       let artistImg = document.createElement('img')
             //Once there are more images write iteration
            artistImg.src = artistObj.artworks[0].image
        let artistDivP = document.createElement('p')
             artistDivP.innerText = `name: ${artistObj.name} || location: ${artistObj.location}`

       artistDiv.append(artistDivP, artistImg)
       mainContainer.append(artistDiv)

       uploadForm()
   }
        
//Render form to upload artwork
 let uploadForm = () => {
    let formDiv = document.createElement('div')
        let formBr1 = document.createElement('br')
        let formBr2 = document.createElement('br')
        let formBr3 = document.createElement('br')
        let formBr4 = document.createElement('br')
        let formBr5 = document.createElement('br')

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
        formButton.type = 'submit'

        formTag.append(formInputName, formBr1, 
            formInputPrice, formBr2, formInputMedium, 
            formBr3, formInputImage,formBr4,
            formInputDim, formBr5, formButton )

        formDiv.append(formTag)

        mainContainer.append(formDiv)

        formDiv.addEventListener('submit', (evt) => {
            evt.preventDefault()
            console.log(evt.target[0].value)
            console.log(evt.target[1].value)
            console.log(evt.target[2].value)
            console.log(evt.target[3].value)
            console.log(evt.target[4].value)

            fetch("http://localhost:3000/artworks", {
                method: "POST",
                headers: {
                  "content-type" : "application/json",  
                },
                body: JSON.stringify({
                    name: evt.target[0].value,
                    price: evt.target[1].value,
                    medium: evt.target[2].value,
                    image: evt.target[3].value,
                    availability: true,
                    dimension: evt.target[4].value,
                    artist_id: currentUser.id,
                    collector_id: 1,

                })
            })
        })
 }  




