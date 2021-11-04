// ------------- variables utiles pour la suite du code --------------- //

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const idCommand = urlParams.get("id");
let urlAPI = "http://localhost:3000/api/products/"+ idCommand;
let orderId = document.getElementById("orderId");


console.log(queryString);
console.log(urlParams);
console.log(idCommand);
console.log(orderId);

// ********************* //

// ------------ J'insère l'id de la commande dans la balise avec l'id orderId ------------ //

orderId.innerHTML = idCommand;

// ********************* //