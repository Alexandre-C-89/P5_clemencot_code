// ------------ Récupère l'id du canapé sélectionné -------- //
let recupArray = JSON.parse(localStorage.getItem("ProductArray"));
console.log(recupArray);
// ************************** //

fetch("http://localhost:3000/api/products")
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(DataCanap) {
    card(DataCanap);
  })
  .catch(function(err) {
    console.log("Erreur !");
  });
// *********************** //

// ------- Fonction "card" qui injecte le code html dans la balise <section> avec l'id cart__items ------------- //
function card(result) { 
    let canapHtml = "";
    result.forEach((canap) => {
      canapHtml += `
      <article class="cart__item" data-id="${canap._id}">
      <div class="cart__item__img">
        <img src="${canap.imageUrl}" alt="Photographie d'un canapé">
      </div>
      <div class="cart__item__content">
        <div class="cart__item__content__titlePrice">
          <h2>${canap.name}</h2>
          <p>${canap.price}</p>
        </div>
        <div class="cart__item__content__settings">
          <div class="cart__item__content__settings__quantity">
            <p>Qté : </p>
            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
          </div>
          <div class="cart__item__content__settings__delete">
            <p class="deleteItem">Supprimer</p>
          </div>
        </div>
      </div>
    </article>
        `
    });
    items.innerHTML = canapHtml;
};
