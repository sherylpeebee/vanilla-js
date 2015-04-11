console.log('hey, what up');

//jquery, upon QUERYING ($) always returns an array of sthg, whether it's contents are 0, 1, or many.


//when the web page is ready (best practice), main js function in callback-- in this case '(init)' will become available to execute
$(document).ready(init);

function init(){
$('#clickMe').click(doStuff);
$('#mynums-button').click(createNumberBoxes);
}

function doStuff(){
  var generic = $('#generic').val();
  console.log('you just typed', generic);
  $('.delta').css('color', generic);
  $('h1').toggleClass('alert');
//no need for dot when calling toggleClass, addClass, etc, because jquery recognizes implicitly that it's a class
}

//.hasClass, .addClass, .removeClass, .toggleClass<--- read more

function createNumberBoxes(){
  var num = $('#nyNums').val() * 1;
  var numbers = [];
  for (var i=0; i < num; i++){
    numbers.push(i);
  }
}
console.log(numbers);
var odds = numbers.filter(function(n){
  return n%2;
});

console.log(odds);
