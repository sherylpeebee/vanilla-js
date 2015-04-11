var a = [];
var b = [3, 5, 7];
console.log(a, b);

//push adds to the back end of array
b.push(9);
b.push(11);
console.log(b);

//pop removes element at the end of the array
var c = b.pop();
console.log(b, c);

//see javascript array prototypes for list of appicable methods, e.g.
b.unshift(1);
b.unshift(-1);
console.log('after unshift', b);


//will return true
//every is used as something of a test function; i.e., if you know a condition you're looking for,
//tell function 'return' EVERY element in array that fulfills the condition; e.g. divisible by x, string of a certain length
//has certain id or class, etc.
var isOdd = b.every(function(curr, index, arr){
  console.log(curr, index, arr);

  return curr%2;
});
console.log('isOdd:', isOdd);

//will return false
b.push(30);
isOdd = b.every(function(curr, index, arr){
  return curr%2;
});
console.log('isOdd:', isOdd);

//filter method below vv
var animals = ['dog', 'cat', 'mouse', 'goat', 'bear'];
var evenLengthAnimals = animals.filter(function(curr, index, arr){
  // return !(curr.length%2); //vv OR!! vv
  return (curr.length + 1) % 2;
});
console.log('animals', animals, 'evenLengthAnimals', evenLengthAnimals);

//loop over animals
animals.forEach(function(curr, index, arr){
  console.log('look, i am looping', curr);
});

var indexOfMouse = animals.indexOf('mouse');
console.log('the index of the mouse is', indexOfMouse);

//how to use join (opposite of split) split turns string to array; join = array to string
var joinedAnimals = animals.join('and');
console.log('the joined animals', joinedAnimals);

//.lastIndexOf() searches backwards-- opposite of indexOf

//.map() takes array of x; turns into array of y-- used below
//takes three parameters, but only use as needed, must enter in order
//e.g., if 'index' is desired, must enter param's (curr, index, arr), or even (x, y, z); these are placeholders
//if only current is desired, (curr) may be entered alone
var primes = [1, 3, 5, 7, 11, 13, 17, 19];
var squaredPrimes = primes.map(function(curr, index, arr){
  return curr * curr;
});
console.log('primes', primes, 'squaredPrimes', squaredPrimes);

//.reduce() useful for summing elements in array
//AGAIN, "prev, curr, index, arr" are merely placeholders. name could be ANYTHING,
//but here given literal name of what they actually represent for sake of clarity
var summedPrimes = primes.reduce(function(prev, curr, index, arr){
  console.log('inside reduce');
  console.log(prev, curr, index, arr);

  //must use return!! otherwise will not run, or will return undefined.
  return prev + curr;
});
console.log('summedPrimes', summedPrimes);

//.reverse() reverses the array "in place", i.e., will not create a *new* array based on old. only modified original.
primes.reverse();
console.log('the reversed primes are', primes);


//.slice()  is for copying some portion of an array.
//may be used like this....
var primes1 = primes.slice();
var primes2 = primes.slice(-2);
console.log('p1', primes1, 'p2', primes2);
var primes3 = primes.slice(6);
console.log('p3', primes3);
//or may be used like this:
var primes4 = primes.slice(2, 5);
console.log('p4', primes4);

//.some() is like every, but rather than all elements needing to fulfill condition, returns ANY that do.
var someOdd = [3, 4, 5, 6].some(function(curr, index, arr){
  return curr%2;
});
console.log('someOdd', someOdd);

//.sort()... a little tricky. works well for letters, not as well for #'s, but there is a workaround
var sortedAnimals = animals.sort();
console.log('sortedAnimals', sortedAnimals);
//straightforward and wonky
var someNums = [3, 731, 220, 50, 18, 99, 63];
someNums.sort();
console.log('someNums', someNums);
//workaround --is somethin like "Bubble sort" number sorting algorithm
//compares first pair of elements (a, b), and compares, then reorders (swaps)
//depending on which is greater; loops thru all until greatest is at top, least is at bottom
var someNums = [3, 731, 220, 50, 18, 99, 63];
someNums.sort(function(a,b){
  if(a < b){
    return -1;
  } else if (a > b){
    return 1;
  }else{
    return 0;
    }
  });

console.log('someNums sorted', someNums);

//.splice() changes array content by removing or adding elements not necessarily
//at beginning or end of array
var moreNums = [4, 5, 6, 7];
moreNums.splice(1, 1);
console.log('spliced a 5 from moreNums', moreNums);
moreNums.splice(2, 0, 77);
console.log('spliced a 77 *into* moreNums', moreNums);
console.log([5, 6, 7].toString());


/*MUST MASTER:
- ARRAYS
- OBJECTS
- F'Ns
*/
