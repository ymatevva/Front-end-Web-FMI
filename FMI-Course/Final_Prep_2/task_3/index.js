
function analyzeProducts(products) {

    if (!products || products.length === 0) {
        return {
            mostExpensive: "unknown",
            averagePrice: 0,
            inStockCount: 0,
            categoryStats: {},
            priceRange: { min: 0, max: 0 }
        };
    }

    let mostExpensive = "";
    let averagePrice = 0;
    let inStockCount = 0;
    let categoryStats = {};
    let priceRange = {};
    let min = Infinity;
    let max = -Infinity;

    for (let product of products) {

        averagePrice += Number(product.price);

        if (product.inStock) {
            inStockCount++;
        }

        let currPrice = Number(product.price);

        if (currPrice < min) {
            min = currPrice;
        }

        if (currPrice > max) {
            max = currPrice;
            mostExpensive = product;
        }
        else if (currPrice === max) {
            mostExpensive = [mostExpensive];
            mostExpensive.push(product);
        }

        categoryStats[product.category] = (categoryStats[product.category] || 0) + 1;

    }

    averagePrice = averagePrice / products.length;
    averagePrice = Number(averagePrice.toFixed(2));
    min = min === -Infinity ? 0 : min;
    max = max === Infinity ? 0 : max;

    return {
        mostExpensive,
        averagePrice,
        inStockCount,
        categoryStats,
        priceRange: { min: min, max: max }
    };
}




// ### Входни данни:
// Масив от обекти със структура:
// ```javascript
// {
//     name: "string",
//     price: number,
//     category: "string",
//     inStock: boolean
// }
// ```

// ### Изходни данни:
// Функцията трябва да връща обект със следните property-та:

// - mostExpensive — обектът на най-скъпия продукт. Ако има няколко продукта с еднаква най-висока цена, връща масив с тези обекти. Ако масивът е празен, връща "unknown".
// - averagePrice — средната цена на всички продукти, закръглена до 2 знака
// - inStockCount — брой продукти, които са налични (inStock === true)
// - categoryStats — обект с броя продукти по категории, например:
// ```js
// { fruit: 3, vegetable: 2, meat: 1 }
// ```
// - priceRange — обект със свойствата:
//   - min — най-ниската цена
//   - max — най-високата цена



const products = [
    { name: "Apple", price: 2.5, category: "fruit", inStock: true },
    { name: "Banana", price: 1.2, category: "fruit", inStock: false },
    { name: "Carrot", price: 0.8, category: "vegetable", inStock: true },
    { name: "Broccoli", price: 1.5, category: "vegetable", inStock: true },
    { name: "Steak", price: 12, category: "meat", inStock: false }
];

console.log(analyzeProducts(products));