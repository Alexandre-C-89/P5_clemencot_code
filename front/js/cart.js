// ------------ Récupère l'id du canapé sélectionné -------- //
let recupArray = JSON.parse(localStorage.getItem("ProductArray"));
let cartItems = document.getElementById("cart__items");

// ************************** //

// fetch("http://localhost:3000/api/products")
//   .then(function(res) {
//     if (res.ok) {
//       return res.json();
//     }
//   })
//   .then(function(DataCanap) {
//     card(DataCanap);
// })
// .catch(function(err) {
//     console.log("Erreur !");
// });

card(recupArray);

    
// ------- Fonction "card" qui injecte le code html dans la balise <section> avec l'id cart__items ------------- //
function card(results) {
    let canapHtml = "";
    results.forEach((item) => {
        canapHtml += `
        <article class="cart__item" data-id="${item._id}">
        <div class="cart__item__img">
        <img src="${item.image}" alt="Photographie d'un canapé">
        </div>
        <div class="cart__item__content">
        <div class="cart__item__content__titlePrice">
            <h2>${item.nom}</h2>
            <p>${item.prix/100}</p>
        </div>
        <div class="cart__item__content__settings">
            <div class="cart__item__content__settings__quantity">
            <p>Qté : </p>
            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${item.quantity}">
            </div>
            <div class="cart__item__content__settings__delete">
            <p class="deleteItem">Supprimer</p>
            </div>
        </div>
        </div>
    </article>
        `
    });
    cartItems.innerHTML = canapHtml;
};