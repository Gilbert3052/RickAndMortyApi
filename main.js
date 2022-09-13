const containerPersonajes = document.querySelector(".personajes");
const contInput = document.querySelector(".inputSearch");
const url = "https://rickandmortyapi.com/api/character";
let prevPage = "";
let nextPage = "";

async function callApi(url){
    const data = await fetch(url);
    const {info:{next, prev}, results} = await data.json();

    prevPage = prev;
    nextPage = next;

    console.log(prevPage, nextPage);

    printPersonajes(results)
}


function printPersonajes(personajes){
    let html = "";

    personajes.forEach(({name, image, species}) => {
        html += `
            <div class="personaje">
                <h2 class"personaje_name">${name}</h2>
                <div class="personaje_img">
                    <img src="${image}" alt="${name}">
                </div>
                <p class="personaje_specie">${species}</p>
            </div>
        `
    });

    containerPersonajes.innerHTML = html;
}

callApi(url);

contInput.addEventListener("change", async (e) => {
    const search = e.target.value;
    const searchUrl = `${url}/${search}`

    const data = await fetch(searchUrl);
    const result = await data.json();

    console.log(result);

    let html = "";

    
    html += `
        <div class="personaje">
            <h2 class"personaje_name">${result.name}</h2>
            <div class="personaje_img">
                <img src="${result.image}" alt="${result.name}">
            </div>
            <p class="personaje_specie">${result.species}</p>
        </div>
    `

    containerPersonajes.innerHTML = html;
})

function getPrevious(){
    if(!prevPage){
        alert("No hay mas personajes");
    }else{
        callApi(prevPage);
    }
}

function getNext(){
    if(!nextPage){
        alert("No hay mas personajes");
    }else{
        callApi(nextPage);
    }
}

