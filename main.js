import { allProducts } from "./utils/apiservice.js";
import { createProductCards } from "./components/uiComponent.js";
import { initSearch } from "./components/searchHandler.js";
import { closeProductModal } from "./components/modal.js";

function renderProducts(products) {
  const container = document.getElementById("productList");
  container.innerHTML = "";

  products.forEach((product) => {
    const card = createProductCards(product);
    container.appendChild(card);
  });
}

async function showProducts() {
  const products = await allProducts();
  console.log("Products:", products);

  renderProducts(products);

  initSearch(products, renderProducts);
}

window.addEventListener("DOMContentLoaded", () => {
  showProducts();
  closeProductModal(); 
});
