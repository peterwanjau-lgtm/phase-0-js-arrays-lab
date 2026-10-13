const products = ["Laptop", "Phone", "Headphones", "Monitor"]

// Acessing individual products using their index

let firstProduct = products[0]; // "laptop
let secondProduct = products[1]; // "phone"
let thirdProduct = products[2]; // "headphones"
let fourthProduct = products[3]; // "monitor"

function logFirstProduct() {
  console.log(products[0]);
}

function addProduct(productName) {
  products.push(productName);
}
function updateProductName(position, newName) {
  products[position] = newName;
}
function removeLastProduct() {
  products.pop();
}













// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
