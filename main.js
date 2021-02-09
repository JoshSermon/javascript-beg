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

//const fruits = ['apples', 'oranges', 'pears']

//fruits[3] = 'grapes';

//fruits.push('mangos');

//fruits.unshift('strawberries');

//fruits.pop();

//console.log(Array.isArray(fruits));

//console.log(fruits.indexOf('oranges'));

//console.log(fruits);



//const person = {
//    firstName: 'Josh',
//    lastName: 'Sermon',
//    age: 30,
//   hobbies: ['music, movies', 'sports'],
//   address: {
//        street: '50 main st',
//        city: 'Boston',
//        state: 'MA'
//    }
//}

//person.email = 'josh@gmail.com';

//console.log(person);

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
//console.log(todos[1].text);


// For () For loop is used where we already know about the number of times loop needs to be excuted.
for (let i = 0; i < 10; i++) {
    console.log(`For Loop Number: ${i}`);
}

// While - While loop is used in situations where we do not know how many times loop needs to be excuted beforehand.
let i = 0;
while (i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}



//forEach, map, filter
todos.forEach(function (todo) {
    console.log(todo.text);
});


//map
const todoText = todos.map(function (todo) {
    return todo.text;
});

console.log(todoText);


//filter
const todoCompleted = todos.filter(function (todo) {
    return todo.isCompleted === true;
}).map(function (todo) {
    return.todo.text;
})

console.log(todoCompleted);

//Conditional

const x = 10;

if (x === 10) {
    console.log('x is 10');
} else if (x > 10) {
    console.log('x is greater than 10')
} else {
    console.log('x is less than 10');
}

// or II and &&

const x = 6;
const y = 11;

if (X > 5 && Y > 10) {
    console.log('x is more than 5 or y is more than 10')
}

// case switch

const x = 10;

const color = x > 10 ? 'red' : 'blue';

console.log(color);

switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color os NOT red or blue');
        break;

}


const addNumbs(num1 = 1, num2 = 1) {
    return num1 + num2;
}

console.log(addNums(5, 5));

console.log * add Number[else]

console.log(addNums(5, 25))