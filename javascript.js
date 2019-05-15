const URL_TO_FETCH = "http://airbnb.douglasmaia.com/api/properties";
fetch(URL_TO_FETCH)
    .then(response => response.json())
    .then(result => {

        result.forEach(i => {
        let item =    ` 
        <li class="card">
            
                <img src="${i.photo}" class="imagem">
                <p class="type">${i.property_type}</p>
                <p class="title">${i.name}</p>
                <p class="price">${i.price}</p>
                <p class="Local">${i.city}</p>
                <button>Ver mais</button>   
        </li>`
        console.log(item);
        document.querySelector('.lista-cards').innerHTML += item;
        });
    
      
        // const dados = JSON.stringify(result);
        //  document.getElementById('demo').innerHTML = dados;
    })
    .catch()