'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  route: function (starterIndex, secondoryIndex) {
    return [this.starterMenu[starterIndex], this.categories[secondoryIndex]];
  },
};

const arr = [2, 3, 4];
const [x, y, z] = arr;

console.log(`arr`, arr);
console.log(x, y, z);

let [mainCourse, secondary] = restaurant.categories;
console.log(mainCourse, secondary);

[mainCourse, secondary] = [secondary, mainCourse];
console.log(mainCourse, secondary);
console.log(restaurant.route(2, 3));
