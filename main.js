const containerPersonajes = document.querySelector(".personajes");
const url = "https://rickandmortyapi.com/api/character";

async function callApi(url){
    const data = await fetch(url);
    const {info, results} = await data.json();
    // const prevPage = info.prev;
    // const nextPage = info.next;
    console.log(results);


    let html = "";

    results.forEach(({name, image, species}) => {
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