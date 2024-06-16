

// Step 3. Developing javascript objects
const inventory = [
   { id: 1, name: 'Shoes', quantity: 50, price: 120 },
   { id: 2, name: 'Pants', quantity: 30, price: 35 },
   { id: 3, name: 'Hats', quantity: 45, price: 20 },
   { id: 4, name: 'Coats', quantity: 30, price: 80 },
   { id: 5, name: 'Jackets', quantity: 5, price: 50 },
];
// Foreach function works
function printItemNames() {
   inventory.forEach( item => console.log(item.name))
}

// Filter function works
function lowQuantity() {
   let lowQuantity = inventory.filter( item => item.quantity < 15)

   console.log(lowQuantity);
}
// Map function works
function itemNamesToUppercase() {
    let Uppercase = inventory.map( item=> item.name.toUpperCase())
    console.log(Uppercase)
}
// Reduce Function
function totalInventoryValue() {
   inventory.reduce(( total, currentValue) => total + currentValue, 0)
   console.log(InventoryValue)
}

// Testing functions
printItemNames();
lowQuantity();
itemNamesToUppercase();
totalInventoryValue();


