# 🧩 Задача 3: Анализ на продукти

## Условие:
Създайте функция `analyzeProducts(products)`, която анализира масив от продукти и връща статистика за тях.

### Входни данни:
Масив от обекти със структура:
```javascript
{
    name: "string",
    price: number,
    category: "string",
    inStock: boolean
}
```

### Изходни данни:
Функцията трябва да връща обект със следните property-та:

- mostExpensive — обектът на най-скъпия продукт. Ако има няколко продукта с еднаква най-висока цена, връща масив с тези обекти. Ако масивът е празен, връща "unknown".
- averagePrice — средната цена на всички продукти, закръглена до 2 знака
- inStockCount — брой продукти, които са налични (inStock === true)
- categoryStats — обект с броя продукти по категории, например:
```js
{ fruit: 3, vegetable: 2, meat: 1 }
```
- priceRange — обект със свойствата:
  - min — най-ниската цена
  - max — най-високата цена

### Тестови случаи:
```js
const products = [
  { name: "Apple", price: 2.5, category: "fruit", inStock: true },
  { name: "Banana", price: 1.2, category: "fruit", inStock: false },
  { name: "Carrot", price: 0.8, category: "vegetable", inStock: true },
  { name: "Broccoli", price: 1.5, category: "vegetable", inStock: true },
  { name: "Steak", price: 12, category: "meat", inStock: false }
];

console.log(analyzeProducts(products));
```

#### Очакван резултат
```js
{
  mostExpensive: { name: "Steak", price: 12, category: "meat", inStock: false },
  averagePrice: 3.6,
  inStockCount: 3,
  categoryStats: { fruit: 2, vegetable: 2, meat: 1 },
  priceRange: { min: 0.8, max: 12 }
}
```
