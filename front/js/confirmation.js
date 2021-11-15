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

function removeStorage() {
    localStorage.removeItem('Product');
    localStorage.removeItem('ProductArray');
};

removeStorage();

// ------------ J'insère l'id de la commande dans la balise avec l'id orderId ------------ //

orderId.innerHTML = idCommand;

orderId.insertAdjacentHTML('afterend', '<div id="two">Nous vous remercions pour votre commande !</div>');

console.log();

// ********************* //