let mainContainer = document.querySelector('.container')
let menuContainer = document.querySelector('#menu-outer')
let currentUser = {};

fetch('http://localhost:3000/artists')
.then(res => res.json())
.then(artistArr => console.log(artistArr))

window.addEventListener('DOMContentLoaded', (evt) => {
    logInForm()
})

//Creates login form 
let logInForm = () => {
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
    mainContainer.append(newForm)

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
    //renderProfile(response)
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
                liDiv3.innerText = "Logout"

            navLi1.append(liDiv1)
            navLi2.append(liDiv2)
            navLi3.append(liDiv3)
        navUl.append(navLi1, navLi2, navLi3)

        menuContainer.append(navUl)

        navLi1.addEventListener('click', (evt) => {
            console.log('click profile')
        })
}

   let renderProfile = (artistObj) => {
       console.log(artistObj)
       let artistDiv = document.createElement('div')
       let artistDivP = document.createElement('p')
       artistDivP.innerText = `name: ${artistObj.name}, location: ${artistObj.location}`
       artistDiv.append(artistDivP)
       mainContainer.append(artistDiv)
   }

/* <div id="menu-outer">
<div class="menu">
  <ul>
    <li><div class="button" id="profile">Profile</div></li>
    <li><div class="button">Featured</div></li>
    <li><div class="button">Featured</div></li>
    <li><div class="button">Featured</div></li>
  </ul>
</div>
</div> */


