// ...........Array Declearation............
var number = [4, 5, 9, 100, 237, 65];
var names = ['Tina', 'Rina', 'Mina', 'Rita'];
console.log(number);
console.log(names);

// Quantity of Element
console.log(names.length);

//Index number from value
var index = number.indexOf(100);
console.log(index);

// Value from Index number
var value = names[2];
console.log(value);

//Replace value
number[2] = 77;
console.log(number);

//Add array element in last
number.push(40);
names.push('Rinki');
console.log(number);
console.log(names);

//Remove array element in last
number.pop();
console.log(number);

//Add array element in first
names.unshift('Rita');
console.log(names);

//Remove array element in first
number.shift();
console.log(number);

//Not assign a value
var positonIndex = number.indexOf(30);
console.log(positonIndex);
var indexValue = names[8];
console.log(indexValue);