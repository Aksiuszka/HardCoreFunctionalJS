const add = (a, b )=> a+b;
const curry = f => a => b => f(a,b);
const curriedAdd = curry(add);
const increment = curriedAdd(1);
const resultat = increment(5);
console.log(resultat);
// modulo
const modulo = curry((x,y)=>y%x);
const odd = modulo(2);
// const result = odd(2);
// console.log(result);
//next
const filter = curry((f, x) =>x.filter(f));
const getOdds = filter(odd);
results = getOdds([1,2,3,4,5,6,7,8,9]);
console.log(results);
// rambda - kodzik z codepena
// Setup
//==============
const _ = R;
const split = _.curry((delimiter, string) => string.split(delimiter))


// Exercise 1
//==============

const words = split(' ');

QUnit.test("Ex1: split", assert => {
  assert.deepEqual(words("Jingle bells Batman smells"), ['Jingle', 'bells', 'Batman', 'smells'])
})
// Exercise 1a
//==============
//use map to make a new words fn that not only works on 1 string, but on an array of strings.

const sentences = _.map(words, xs);

QUnit.test("Ex1a: map/split", assert => {
  assert.deepEqual(sentences(["Jingle bells Batman smells", "Robin laid an egg"]), [['Jingle', 'bells', 'Batman', 'smells'], ['Robin', 'laid', 'an', 'egg']]);
})
// Exercise 2
//==============
const filterQs = _.filter(_.test(/q/ig));
  
  QUnit.test("Ex2: filter", assert => {
    assert.deepEqual(filterQs(['quick', 'camels', 'quarry', 'over', 'quails']), ['quick', 'quarry', 'quails']);
  })
  