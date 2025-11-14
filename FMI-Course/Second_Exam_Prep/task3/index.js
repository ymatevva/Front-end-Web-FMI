function analyzeProducts(productsList) {
    if (productsList.length === 0) {
        return "unknown";
    }

    let mostExpensive = productsList[0];
    let totalPrice = 0;
    let inStockCount = 0;
    let categoryStats = {};
    let minPrice = productsList[0].price;
    let maxPrice = productsList[0].price;

    for (let product of productsList) {
        if (product.price > mostExpensive.price){
          mostExpensive = product;  
        } 

        totalPrice += product.price;

        if (product.inStock) {
            inStockCount++;
        }

        categoryStats[product.category] = (categoryStats[product.category] || 0) + 1;

        if (product.price < minPrice) { 
            minPrice = product.price;
        }

        if (product.price > maxPrice) {
            maxPrice = product.price;
        }
    } 

    return {
        mostExpensive,
        averagePrice: Math.round((totalPrice / productsList.length) * 100) / 100,
        inStockCount,
        categoryStats,
        priceRange: { min: minPrice, max: maxPrice }
    };
}

const products = [
  { name: "Apple", price: 2.5, category: "fruit", inStock: true },
  { name: "Banana", price: 1.2, category: "fruit", inStock: false },
  { name: "Carrot", price: 0.8, category: "vegetable", inStock: true },
  { name: "Broccoli", price: 1.5, category: "vegetable", inStock: true },
  { name: "Steak", price: 12, category: "meat", inStock: false }
];

console.log(analyzeProducts(products));