import { openProductModal } from "./modal.js";

export function createProductCards(product) {
  const { title, image, price } = product;

  const card = document.createElement("div");
  card.classList.add("product-card");

  card.innerHTML = `
    <h3>${title}</h3>
    <img src="${image}">
    <p>€${price}</p>
  `;

  card.addEventListener("click", () => {
    openProductModal(product);
  });

  return card;
}
