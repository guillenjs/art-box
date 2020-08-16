
fetch('http://localhost:3000/artists')
.then(res => res.json())
.then(artistArr => console.log(artistArr))