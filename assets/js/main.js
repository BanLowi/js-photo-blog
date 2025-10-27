const rowEl = document.querySelector(".row");

// Chiamata AJAX
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

    // Per ogni oggetto card
    photos.forEach((photo) => {
        // Oggetto destrutturato
        const {id, title, date, url} = photo;
        console.log(id);
        
        // Genero le card con i contenuti degli oggetti
        const divEl = document.createElement("div");
        divEl.classList.add("col-4", "mb-3");
        divEl.innerHTML = `
                    <div class="card relative border-0 rounded-0 shadow">
                        <img src="./assets/img/pin.svg" alt="photo pin" class="absolute pin-center">

                        <div class="card-header mt-3 bg-transparent border-0">
                            <img src="${url}" alt="skate-park photo"
                                class="img-fluid mt-photo">
                        </div>
                        <div class="card-body">
                            <p id="date" class="mb-0 lh-1">${date}</p>
                            <p id="photo-name" class="fs-4 lh-1">${title.toUpperCase()}</p>
                        </div>
                    </div>
        `

        rowEl.append(divEl)
    })
})