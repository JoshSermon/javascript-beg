// let, const (block-level scope) const age = 30; console.log(age); //

// Always use const unless you are gonig to reassign the value.//

//String, Numbers, Boolean, null, undefined

//const name ='Josh';
//const age = 30;
//const rating = 4.5;
//const isCool = true;
//const x = null;
//const y = undefined;
//let z;

//console.log(typeof rating);

//const name ='Josh';
//const age = 30;

// Concatenation
//console.log('My name is ' + name + ' and I am ' + age);
// Template String
//const hello = (`My name is ${name} and I am ${age}`);

//console.log(hello);




//const s = 'technology, computers, it, code';

//console.log(s.split(', '));


// Arrays - variables that hold multiple values

const fruits = ['apples', 'oranges', 'pears']

fruits[3] = 'grapes';

fruits.push('mangos');

fruits.unshift('strawberries');

fruits.pop();

console.log(Array.isArray(fruits));

console.log(fruits.indexOf('oranges'));

console.log(fruits);

const person = {
    firstName: 'Josh',
    lastName: 'Sermon',
    age: 30,
    hobbies: ['music, movies']
}