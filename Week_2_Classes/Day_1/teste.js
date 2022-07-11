// using map, return a new array with the names of the cities capitalized

const cities = [
    'miami',
    'barcelona',
    'madrid',
    'amsterdam',
    'berlin',
    'sao paulo',
    'lisbon',
    'mexico city',
    'paris',
  ];

const arr = cities.map((str) => str.charAt(0).toUpperCase() + str.substring(1));
console.log(arr);
// ou 
const capitalCities = cities.map((city) => city[0].toUpperCase() + city.slice(1) + city.split(' '));
console.log(arr);

// Using reduce - Return the total value of the items in the store

const products = [
    { name: 'Keyboard', price: 30.0 },
    { name: 'Mouse', price: 64.99 },
    { name: 'Controller', price: 59.8 },
    { name: 'Speakers', price: 43.7 },
  ];

const sumProducts = products.reduce((acc, val) => {
    return acc + val.price
}, 0);
console.log(sumProducts);