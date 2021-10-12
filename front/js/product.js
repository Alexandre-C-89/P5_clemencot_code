const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const canapId = urlParams.get("id");
let urlAPI = "http://localhost:3000/api/products/"+ canapId;
let itemImg = document.getElementsByClassName("item__img");



console.log(itemImg);
console.log(queryString);
console.log(urlParams);
console.log(canapId);
console.log(urlAPI);




fetch(urlAPI)
    .then((response) => {
    response
      .json()
      .then((result) => {
        (result);
      })
      .catch((error) => {
        console.log(error);
      });
    });


itemImg.innerHtml = `
<img src="${result.imageUrl}" alt="Photographie d'un canapé">
`
// function displayCanap(canap){

//     itemImg.innerHtml = `
//     <img src="../images/logo.png" alt="Photographie d'un canapé">
//     ` 
// };

// function card(result) {
//     let canapHtml = "";
//     result.forEach((canap) => {
//       canapHtml += `
//         <a href="./product.html?id=${canap._id}">
//             <article>
//               <img src="${canap.imageUrl}" alt="${canap.altTxt}">
//               <h3 class="productName">${canap.name}</h3>
//               <p class="productDescription">${canap.description}</p>
//             </article>
//           </a>
//         `
//     });
//     items.innerHTML = canapHtml;
// };
