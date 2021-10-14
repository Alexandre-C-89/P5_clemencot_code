// ------------ Récupère l'id du canapé sélectionné -------- //
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const canapId = urlParams.get("id");
let urlAPI = "http://localhost:3000/api/products/"+ canapId;
// ************************** //

// -------------- Création de variables pour intégrer l'img, le prix, titre, description etc...-----------//
let itemImg = document.querySelector(".item__img");
let img = document.createElement("img");
let balisePrice = document.getElementById("price");
let title = document.getElementById("title")
let description = document.getElementById("description")
let colors = document.getElementById("colors");
let baliseColors = document.createElement("option");
// ************************** //

// ---------------- Création de la méthode Fetch ------------ //
fetch(urlAPI)
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(dataCanap) { // le .then récupère les données que j'ai appellé "dataCanap"
  
    // intégration des différents éléments dans le Html
    img.src = dataCanap.imageUrl;
    itemImg.appendChild(img);
    balisePrice.innerHTML = `${dataCanap.price/100}`;
    title.innerHTML =`${dataCanap.name}`
    description.innerHTML =`${dataCanap.description}`
    
    baliseColors.value = function QtyColors(selectColors) {
      let colors = 0;
      for(let i = 0; i < selectColors.option.lenght; i++) {
        if (selectColors.option[i].selected) {
          colors++;
        }
      }
      return colors;
    }; 
    ;
    baliseColors.innerHTML = `${dataCanap.colors}`
    colors.appendChild(baliseColors);

    console.log(colors);
    

  })
  .catch(function(err) {
    console.log("Erreur !");
  })
// ************************** //