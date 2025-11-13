// api anrop för alla produkter

export async function allProducts(allProducts) {
    try {
        const apiProds = await fetch(`https://fakestoreapi.com/products`)
        const allProds = await apiProds.json()

        console.log(allProds)
    }
    
    catch (error) {
        console.log("Error could not get products")
        return null
    }
}