//this is an object tutorial

var dog = {};
dog.name = 'fido';
dog.age = 3;

var cat = {name:'fluffy', age:5};
console.log(dog, cat);
cat.toys = ['fluff', 'scratch', 'mouse'];
console.log(cat);
//to add to an object, use push. just like any other array!
cat.toys.push('small box');
console.log(cat);
//to pull elements out from within, use splice --see array tutorial!! same thing!
cat.toys.splice(1, 1);
console.log(cat);

//Object Constructor makes 'real' object, as opposed to above, which are more like temps, or 'prototypes'
//Constructor is "like a factory that constructs things" (real objects)
//works by calling a function that you pass elements into to complete the object
//elements passed in  are value for the keys provided as parameters (makes key:value pairs)
//vv this was built from scratch vv
function Cat(name, age){
  this.name = name;
  this.age = age;
}
var fluffy = new Cat('miss sassypants', 3);

console.log('fluffy', fluffy);
