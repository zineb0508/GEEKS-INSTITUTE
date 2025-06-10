const products = require(`./products`);
function  findProductsName(productName) {
    return products.find(product => product.name.toLowerCase() === productName.toLowerCase())
};
console.log(findProductsName("shampoo"));
console.log(findProductsName("T-shirt"));
console.log(findProductsName("laptop"));
