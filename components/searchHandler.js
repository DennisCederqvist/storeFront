import { createProductCards } from "./uiComponent.js";
import { allProducts } from "../utils/apiservice.js";

let productCache = [];
let loaded = false;

function renderProducts(list) {
    const container = document.getElementById("productList");
    container.innerHTML = '';

    // if(!list || list.length === 0) {
    //     container.innerHTML = `<p style="grid-column: 1 / -1; text-align:center;">No products found.</p>`;
    //     return;
    // }

    // list.array.forEach(product => {
    //     const card = createProductCards(product);
    //     container.appendChild(card);
    // });

    const safe = Array.isArray(list) ? list : [];

    if (safe.length === 0) {
        container.innerHTML = `<p style="grid-column: 1 / -1; text-align:center;">No products found.</p>`;
        return;
    }

    safe.forEach(product => container.appendChild(createProductCards(product)));
}


function filterProducts(query) {
    const q = query.trim().toLowerCase();
    if (q === "") return productCache;

    return productCache.filter (p => {
        const t = (p.title || "").toLowerCase();
        const d = (p.description || "").toLowerCase();
        return t.includes(q) || d.includes(q);
    })
}

export async function initSearch() {
    const data = await allProducts();
    productCache = Array.isArray (data) ? data : [];
    loaded = true;

    renderProducts(productCache);

    const input = document.getElementById("searchField");
    const button = document.getElementById("searchBtn");

    if (!input || !button) {
        console.error("searhField or searchButton not found in DOM.");
        return;
    }

    const runSearch = () => {
        const filtered = filterProducts(input.value);
        renderProducts(filtered);
    };

    button.type = "button";
    button.addEventListener("click", runSearch);
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") runSearch();
    });
}