// -------------- variable créer pour récupérer la balise <section> --------- //

let items = document.getElementById("items");

// *********************** //

// ---------------- Méthode Fecth pour récupérer les données de l'API ----------- //

fetch("http://localhost:3000/api/products")
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(DataCanap) {
    card(DataCanap);
    console.log(DataCanap);
  })
  .catch(function(err) {
    console.log("Erreur !");
  });
// *********************** //

// ------- Fonction "card" qui injecte le code html dans la balise <section> avec l'id items ------------- //

function card(result) { 
    let canapHtml = "";
    result.forEach((canap) => {
      canapHtml += `
        <a href="./product.html?id=${canap._id}">
            <article>
              <img src="${canap.imageUrl}" alt="${canap.altTxt}">
              <h3 class="productName">${canap.name}</h3>
              <p class="productDescription">${canap.description}</p>
            </article>
          </a>
        `
    });
    items.innerHTML = canapHtml;
};

// *********************** //