// Elementi DOM
const rowEl = document.querySelector(".row");
const overlayEl = document.getElementById("overlay");
const closeBtnEl = document.getElementById("closeBtn");
const overlayImgEl = document.getElementById("overlayImg");

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

    // Per ogni oggetto genero una card
    photos.forEach((photo) => {
        // Oggetto destrutturato
        const {id, title, date, url} = photo;
        console.log(id);
        
        // Genero le card con i contenuti degli oggetti
        const divEl = document.createElement("div");
        divEl.classList.add("col-3", "mb-3", "hover_effect", "mx-auto");
        divEl.innerHTML = `
                    <div class="card relative border-0 rounded-0 shadow">
                        <p class="d-none">${id}<p>
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
        
        // Al click compare l'overlay
        divEl.addEventListener("click", () => {
            overlayEl.classList.remove("d-none");

            if (id === 1) {
                overlayImgEl.src = url
            } else if (id === 2) {
                overlayImgEl.src = url
            } else if (id === 3) {
                overlayImgEl.src = url
            } else if (id === 4) {
                overlayImgEl.src = url
            } else if (id === 5) {
                overlayImgEl.src = url
            } else if (id === 6) {
                overlayImgEl.src = url
            }
            
            // Al click scomapre l'overlay
            closeBtnEl.addEventListener("click", () => {
                overlayEl.classList.add("d-none")
            })
        })
    })

})