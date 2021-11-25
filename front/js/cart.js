// ------------ Récupère l'id du canapé sélectionné -------- //

let productArray = JSON.parse(localStorage.getItem("productArray"));
let cartItems = document.getElementById("cart__items");
let totalPrice = document.getElementById("totalPrice");
let total = 0;

// ************************** //

// ------- Fonction "card" qui injecte le code html dans la balise <section> avec l'id cart__items ------------- //

card(productArray);
function card(results) {
    let canapHtml = "";
    if (results) {
      results.forEach((item) => {
          canapHtml += `
          <article class="cart__item" data-id="${item._id}">
              <div class="cart__item__img">
                  <img src="${item.image}" alt="Photographie d'un canapé">
              </div>
  
              <div class="cart__item__content">
                  
                  <div class="cart__item__content__titlePrice">
                      <h2>${item.name}</h2>
                      <p>${item.price/100}</p>
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
      
      // ------------ Prix Total de la commande ----------------------- //
      
      results.forEach(item => {
          total += item.quantity * item.price;
      });
  
      totalPrice.textContent = total/100;
    };
    
    // ************************** //
    
};

// ************************** //

// ------------ supprimer un objet -------------------- //

let deleteItems = document.querySelectorAll(".deleteItem");

for (let index = 0; index < deleteItems.length; index++)
deleteItems[index].addEventListener("click", (event) => {
  productArray.splice(index, 1);
  localStorage.setItem("productArray", JSON.stringify(productArray));
  location.reload();
});

// ************************** //

// ------------------------ Partie formulaire (RegExp, récupération données inputs etc...) ------------------------- //

const order = document.getElementById("order"); //  Selection btn du formulaire

order.addEventListener("click", (e) => {
  e.preventDefault();
  
  // Récupération des valeurs du formulaire
  let contact = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    address: document.getElementById("address").value,
    city: document.getElementById("city").value,
    email: document.getElementById("email").value,
  };

  // ************************** //

  // -------- Gestion validation formulaire ------------- //
  // Contrôle firstName, lastName, address et city

  const RegExp1 = (value) => {
    return /^[A-Za-z]{3,15}$/.test(value);
  };
  
  
  const RegExp3 = (value) => {
    return /^(([a-zA-ZÀ-ÿ0-9]+[\s-]{1}[a-zA-ZÀ-ÿ0-9]+)){1,50}$/.test(value);
  };
  
  const RegExp4 = (value) => {
    return /^(([a-zA-ZÀ-ÿ0-9]+[\s-]{3,10}[a-zA-ZÀ-ÿ0-9]+)){1,50}$/.test(value);
  };

  // ************************** //

  // Contrôle du email
  const regExp2 = (value) => {
    // return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
  };
  // ************************** //

  function controle1(){
    // Contrôle de la validité du prénom
    const firstName = contact.firstName;
    if(RegExp1(firstName)){
      return true;
    }else{
      const firstNameErrorMsg = document.getElementById("firstNameErrorMsg");
      alert("Chiffre et symbole ne sont pas autorisé \n Ne pas dépasser 20 caractères, minimum 3 caractères");
      firstNameErrorMsg.innerHTML = "Veuillez remplir le champ prénom correctement";
      return false;
    }
  };
  
  // ************************** //
  
  // ------------- Contrôle de la validité du prénom ---------------- //
  function controle3(){
    const lastName = contact.lastName;
    if(RegExp1(lastName)){
      return true;
    }else{
      const lastNameErrorMsg = document.getElementById("lastNameErrorMsg");
      alert("Chiffre et symbole ne sont pas autorisé \n Ne pas dépasser 20 caractères, minimum 3 caractères");
      lastNameErrorMsg.innerHTML = "Veuillez remplir le champ nom correctement";
      return false;
    }
  };

  // ************************** //

  // ------------- Contrôle de la validité de l'adresse ---------------- //
  function controle5(){
    const address = contact.address;
    if(RegExp4(address)){
      return true;
    }else{
      const addressErrorMsg = document.getElementById("addressErrorMsg");
      alert("Chiffre et symbole ne sont pas autorisé \n Ne pas dépasser 20 caractères, minimum 3 caractères");
      addressErrorMsg.innerHTML = "Veuillez remplir le champ adresse correctement";
      return false;
    }
  };

  // ************************** //
  
  // ------------- Contrôle de la validité de la ville ---------------- //
  function controle4(){
    const city = contact.city;
    if(RegExp3(city)){
      return true;
    }else{
      let cityErrorMsg = document.getElementById("cityErrorMsg");
      alert("Chiffre et symbole ne sont pas autorisé \n Ne pas dépasser 20 caractères, minimum 3 caractères");
      cityErrorMsg.innerHTML = "Veuillez remplir le champ ville correctement";
      return false;
    }
  };

  // ************************** //

  
  // ------------- Contrôle de la validité de l'email ---------------- //
  function controle2(){
    const email = contact.email;
    if(regExp2(email)){
      return true;
    }else{
      const emailErrorMsg = document.getElementById("emailErrorMsg");
      alert("Chiffre et symbole ne sont pas autorisé \n Ne pas dépasser 20 caractères, minimum 3 caractères");
      emailErrorMsg.innerHTML = "Veuillez remplir le champ email correctement";
      return false;
    }
  };

  // ************************** //

  // ------------------- condition de controle du remplissage du formulaire -------------- // 
  
  if(controle1() && controle2() && controle3() && controle4() && controle5()){
    // Mettre l'objet "formulaireValues" dans le localStorage
    // localStorage.setItem("contact", JSON.stringify(contact));
    // -------------- Boucle pour récupérer les id des produits du tableau de produits ----------- //
    
    let products = productArray.map(function(product) {
      return product._id;
    });
  
    localStorage.setItem("products", JSON.stringify(products));
    
    // ************************** //
  
    // ----------- Mettre les values du formulaire et mettre les produits seléctionnés dans un objet à envoyer vers le serveur ------------ //
  
    const aEnvoyer = {
      contact,
      productArray,
      products,
    };
  
    localStorage.setItem("aEnvoyer", JSON.stringify(aEnvoyer));
  
    // ************************** //
  
    // ------------------ Fetch : POST pour récupérer l'id de la commande ----------------- //
    
    fetch("http://localhost:3000/api/products/order"), {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(aEnvoyer),
    }
      .then(response => response.json())
      .then((id) => {
        localStorage.clear();
        document.location.href= `confirmation.html?id=${id.orderId}`;
        console.log("OK !!");
      })
      .catch(err => console.log(err))
  
    // ************************** //
    console.log("Formulaire rempli !");
    alert("Merci d'avoir rempli le formulaire");

  }else{
    alert("Veuillez bien rempli le formulaire");
  };

  // ************************** //

});