const apiURL = "https://lanciweb.github.io/demo/api/pictures/";
fetch(apiURL)
.then(response => response.json())
.then(data => {
    let photos = []

    // Ciclo l'array di oggetti
    for (let i = 0; i < data.length; i++) {
        const obj = data[i];
        console.log(obj);
        photos.push(obj)
    }
    
})