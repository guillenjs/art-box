let mainContainer = document.querySelector('.container')


fetch('http://localhost:3000/artists')
.then(res => res.json())
.then(artistArr => console.log(artistArr))

window.addEventListener('DOMContentLoaded', (evt) => {
    logInForm()
})

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
        .then(response => console.log(response))
    
}

