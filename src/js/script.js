const products = document.querySelectorAll("#product");

products.forEach(function (product) {
  product.addEventListener("mouseover", function (e) {
    console.log(e.target);
  });
});
