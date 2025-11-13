// api anrop för alla produkter

export async function allProducts() {
  try {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const products = await res.json();
    return products;

    // const { title, image, price } = allProds[0];

    // allProds.forEach((product) => {
    //     console.log(product.title + product.image + product.price);
    // });

  } catch (error) {
    console.log("Error could not get products");
    return null;
  }
}
