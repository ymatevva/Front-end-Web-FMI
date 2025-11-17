

// ### Върнатият обект трябва да има следните методи:
// - **`add(productName, quantity)`** — добавя продукт. Ако продуктът вече съществува, увеличава количеството му. Ако `productName` не е string или `quantity` не е положително число, не прави нищо. Връща общото количество на този продукт.
// - **`remove(productName, quantity)`** — намалява количеството на продукт. Ако количеството стане 0 или по-малко, продуктът се премахва. Ако продуктът не съществува или `quantity` е невалидно, връща `"Product not found or invalid quantity"`.
// - **`list()`** — връща копие на текущия инвентар (масив от обекти).
// - **`getTotalQuantity()`** — връща общия брой на всички артикули в инвентара.
// - **`find(productName)`** — връща обекта на продукта по име (case-insensitive). Ако не е намерен, връща `null`.


function createInventory() {

    let inventory = [];

    const add = (productName, quantity) => {
       if(typeof(productName) !== "string" || quantity <= 0) {
        return;
       }

       if(inventory.find(productName) !== 0) {
        inventory[productName] += quantity;
       }else{
       inventory.push({productName: productName, quantity: totalQ});
       }
       return totalQ;
    }

    const remove = (productName, quantity) => {
        if(!inventory[productName] || quantity <= 0) {
            return "Product not found or invalid quantity";
        }

        let diff = inventory[productName] - quantity;
        if(diff <= 0) {
            inventory.remove(productName);
        } else {
            inventory[productName] -= quantity;
        }
        
    }
    
    const list = () => {
       return [inventory];
    }

    const getTotalQuantity = () => {
          let totalQ = 0;
          for(let inv of inventory) {
              totalQ += inv.quantity;
          }
          return totalQ;
    }

    const find = (productName) => {
        
        for(let inv of inventory) {
            if(inv.productName.toLowerCase() === productName.toLowerCase()) {
                return inv;
            }
        }
        return null;
    }

    return {
        add,
        remove,
        list,
        getTotalQuantity,
        find
    }
}

const inventory = createInventory();

console.log(inventory.add("Apple", 10));      // 10
console.log(inventory.add("Banana", 20));     // 20
console.log(inventory.add("Apple", 5));       // 15
console.log(inventory.list());                // [{ name: "Apple", quantity: 15 }, { name: "Banana", quantity: 20 }]

console.log(inventory.find("banana"));        // { name: "Banana", quantity: 20 }
console.log(inventory.remove("Apple", 7));
console.log(inventory.list());                // [{ name: "Apple", quantity: 8 }, { name: "Banana", quantity: 20 }]

console.log(inventory.getTotalQuantity());    // 28
console.log(inventory.remove("Orange", 5));   // "Product not found or invalid quantity"
console.log(inventory.add("Banana", -5));     // не добавя нищо, количеството остава 20
