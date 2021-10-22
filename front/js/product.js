// ------------ Récupère l'id du canapé sélectionné -------- //
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const canapId = urlParams.get("id");
let urlAPI = "http://localhost:3000/api/products/"+ canapId;
// console.log(window.location);


// ************************** //

// -------------- Création de variables pour intégrer l'img, le prix, titre, description etc...-----------//
let itemImg = document.querySelector(".item__img");
let img = document.createElement("img");
let balisePrice = document.getElementById("price");
let title = document.getElementById("title")
let description = document.getElementById("description")
let select = document.getElementById("colors"); // Récupère la balise avec l'Id "colors"
let baliseOtpion = document.getElementById("option");
let Qty = document.getElementById("quantity");
let addToCart = document.getElementById("addToCart");
let ProductArray = [];

// console.log(colors);

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
    
    // ----------- Intégration des couleurs dans la balise select avec une boucle forEach -------------- //
    const createOption = option => {
      let baliseOption = document.createElement('option');
      baliseOption.textContent = option;
      return baliseOption;
    };
    
    dataCanap.colors.forEach(option => {
      select.appendChild(createOption(option));
    });

    // ************************** //
    // ------------------ récupère la selection de l'utilisateur pour la quantité etc... ------------- //
    
    // ---------------- fonction qui repère les changements de l'input quantité ---------------- // 
    
    Qty.addEventListener('change', quantityChanged);
    let getQty = 1  ;
    
    function quantityChanged(event) {
      let input = event.target
      if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
      }
      getQty = input.value;
      console.log(getQty);
      return getQty;
    };

    // ************************** //
    // ---------------- fonction qui repère les changements du select couleur ---------------- //
    
    select.addEventListener('change', ColorChanged);
    let getColor = "";
    
    function ColorChanged(event) {
        let input = event.target
        if (input.value === null) {
            input.value = "";
        }
        getColor = input.value;
        console.log(typeof getColor);
        return getColor;
    };


    // ************************** //
    // ------------- Récupération de la quantité et utilisation .AddEventListener sur le bouton --------------- //
    addToCart.addEventListener("click", goCart);
    function goCart(){
      document.location.href="cart.html";

      let Product = {
        "_id": dataCanap._id,
        "nom": dataCanap.name,
        "quantity": parseInt(getQty),
        "color": getColor,
        "image": dataCanap.imageUrl,
        "prix": dataCanap.price,
        "description": dataCanap.description,
      };
      
      
      // -------------- Si il y a déjà des produits dans le localeStorage ou non ----------- //
      // if(ProductArray) {
      //   ProductArray.push(Product);
      //   localStorage.setItem("ProductArray", JSON.stringify(ProductArray));
        
      // } else {
      //   ProductArray = [];
      // };


      ProductArray.push(Product);
      localStorage.setItem("ProductArray", JSON.stringify(ProductArray));
      console.log("Produit enregistrer dans le localeStorage !");
      console.log(ProductArray);
    };
    // ************************** //
  })
  .catch(function() {
    console.log("Erreur !");
  })
// ************************** //
console.log(ProductArray);