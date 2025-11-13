export function openProductModal(product) {

    const modal = document.getElementById('productModal');

    document.getElementById('modalTitle').textContent = product.title;
    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalPrice').textContent = "€" + product.price;
    document.getElementById('modalDescription').textContent = product.description;

    modal.classList.remove('hidden');
}

export function closeProductModal() {
    const modal = document.getElementById('productModal');
    const closeBtn = document.getElementById('closeModal');

    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    modal.addEventListener('click', (e) => {
        if (e.target.id === "productModal") {
            modal.classList.add('hidden');
        }
    });
}