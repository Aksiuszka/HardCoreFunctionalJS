const add =(a,b) =>a+b;
const toUpper = str => str.toUpperCase();
const exclaim = str => str + '!!!'
const first = str => str[0];
const compose = (f,g) => x => f(g(x))
const krzyk = compose(toUpper, exclaim);
console.log(krzyk('płacz'));

const _ = R;
const {formatMoney} = accounting;

// Example Data
const CARS = [
    {name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true},
    {name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false},
    {name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false},
    {name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false},
    {name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true},
    {name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: false}
  ];

// Exercise 1:
// ============
// use _.compose() to rewrite the function below. Hint: _.prop() is curried.

const isLastInStock = cars =>_.compose(_.prop('in_stock'), _.last)


QUnit.test("Ex1: isLastInStock", assert => {
  assert.deepEqual(isLastInStock(CARS), false);
})

// Exercise 2:
// ============
// use _.compose(), _.prop() and _.head() to retrieve the name of the first car


const nameOfFirstCar = _.compose(_.prop('name'), _.head)

QUnit.test("Ex2: nameOfFirstCar", assert => {
  assert.equal(nameOfFirstCar(CARS), "Ferrari FF");
})