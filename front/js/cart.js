// ------------ Récupère l'id du canapé sélectionné -------- //
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const canapId = urlParams.get("id");
let urlAPI = "http://localhost:3000/api/products/"+ canapId;
console.log(queryString);
// ************************** //