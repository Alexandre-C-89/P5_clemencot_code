let items = document.getElementById("items");

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
  })


// .then((response) => {
//     response
//       .json()
//       .then((result) => {
//         card(result);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   })
//   .catch((error) => {
//     console.log(error);
// });


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
