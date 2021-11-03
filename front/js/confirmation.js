// ------------- variables utiles pour la suite du code --------------- //

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const canapId = urlParams.get("id");
let urlAPI = "http://localhost:3000/api/products/"+ canapId;
let orderId = document.getElementById("orderId");


console.log(orderId);

// ********************* //