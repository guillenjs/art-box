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
    let newFormButton = document.createElement('button')
    newFormButton.innerText = "submit"
    newForm.append(newInput, newFormButton)
    mainContainer.append(newForm)


}