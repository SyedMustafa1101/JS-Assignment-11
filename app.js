const products = [

  { id: 1, name: "Laptop", quantity: 1, price: 90000, rating: 4.5 },
  { id: 2, name: "Mouse", quantity: 2, price: 1200, rating: 4.2 },
  { id: 3, name: "Keyboard", quantity: 8, price: 4500, rating: 4.8 },
  { id: 4, name: "Monitor", quantity: 2, price: 35000, rating: 4.3 },
  { id: 5, name: "Headphones", quantity: 5, price: 3000, rating: 4.9 },
  { id: 6, name: "Webcam", quantity: 6, price: 6500, rating: 4.1 }

];

//Part 1
const lowTohigh = [...products].sort((a, b) => a.price - b.price);
console.log("Sort products by price (low to high):", lowTohigh);

const highTolow = [...products].sort((a, b) => b.price - a.price);
console.log("Sort products by price (high to low:)", highTolow);

const sortProd = [...products].sort((a, b) =>
  a.name.localeCompare(b.name)
);
console.log("Sort products by name (A to Z):", sortProd);

const sortProdByRHF = [...products].sort((a, b) => b.rating - a.rating);
console.log("Sort products by rating (highest first):", sortProdByRHF);

const sortProdByRLH = [...products].sort((a, b) => a.quantity - b.quantity);
console.log("Sort products by quantity (lowest to highest):", sortProdByRLH);

const threeExpProd = [...products]
  .sort((a, b) => b.price - a.price)
  .slice(0, 3);

console.log("Find the 3 most expensive products using sort() and slice():", threeExpProd);

const twoCheapProds = [...products]
  .sort((a, b) => a.price - b.price)
  .slice(0, 2);

console.log("Find the 2 cheapest products using sort() and slice():", twoCheapProds);

const prodBelow10 = products
  .filter(product => product.price < 10000)
  .sort((a, b) => a.price - b.price);

console.log("Filter products priced below Rs. 10,000, then sort by price (low to high):", prodBelow10);

const threehighR = [...products]
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 3);

console.log("Find the top 3 highest-rated products using sort() and slice():", threehighR);

const highRfirst = [...products].sort((a, b) => {
  if (b.rating !== a.rating) {
    return b.rating - a.rating;
  }

  return a.price - b.price;
});

console.log("Sort by rating (highest first). If ratings are equal, sort by price (low to high):", highRfirst);

//Part2

const totalOfProd = products.reduce((total, product) => {
  return total + product.price;
}, 0);

console.log("Calculate the total price of all products:", totalOfProd);

const totalQuantity = products.reduce((total, product) => {
  return total + product.quantity;
}, 0);

console.log("Calculate the total quantity of all products:", totalQuantity);

const totalPrice = products.reduce((total, product) => {
  return total + product.price;
}, 0);

const averagePrice = totalPrice / products.length;

console.log("Calculate the average price of all products:", averagePrice);

const mostExpProd = products.reduce((mostExpensive, product) => {
  return product.price > mostExpensive.price ? product : mostExpensive;
});

console.log("Find the most expensive product using reduce():", mostExpProd);

const cheapestProd = products.reduce((cheapest, product) => {
  return product.price < cheapest.price ? product : cheapest;
});

console.log("Find the cheapest product using reduce():", cheapestProd);

const highRProd = products.reduce((highestRated, product) => {
  return product.rating > highestRated.rating ? product : highestRated;
});

console.log("Find the highest-rated product using reduce():", highRProd);

const greaterThn5 = products.reduce((count, product) => {
  return product.price > 5000 ? count + 1 : count;
}, 0);

console.log("Count products with a price greater than Rs. 5,000:", greaterThn5);

const totalInvVal = products.reduce((total, product) => {
  return total + product.price * product.quantity;
}, 0);

console.log("Calculate the total inventory value using price * quantity:", totalInvVal);

const prodWithR = products.reduce((total, product) => {
  return product.rating > 4.3 ? total + product.quantity : total;
}, 0);

console.log("Calculate the total quantity of products with a rating above 4.3:", prodWithR);

const summaryObj = products.reduce(
  (summary, product) => {
    summary.totalProducts++;
    summary.totalQuantity += product.quantity;
    summary.totalInventoryValue += product.price * product.quantity;

    return summary;
  },
  {
    totalProducts: 0,
    totalQuantity: 0,
    totalInventoryValue: 0
  }
);

console.log("Use one reduce() to create a summary object:", summaryObj);