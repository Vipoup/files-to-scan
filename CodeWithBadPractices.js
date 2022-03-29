/**
 * 
 * 
 * @arthor
 */

Array();

Object();
Object();
Object();
Object();

console.log("array");

console.log("array(");

console.log("object");
console.log("super long text that exceeds 80 characters and needs to be trimmed down to under 80 coulmns for code smellihng purposes");

//Random Code found online
/**
* from https://www.freecodecamp.org/news/javascript-example/
*/
var args = Array.prototype.slice.call(arguments);

// or the es6 way:
var args = Array.from(arguments)

function getGrades() {
    var args = Array.prototype.slice.call(arguments, 1, 3);
    return args;
}

// Let's output this!
console.log(getGrades(90, 100, 75, 40, 89, 95));

function getIntoAnArgument() {
    var args = arguments.slice();
    args.forEach(function(arg) {
        console.log(arg);
    });
}

// ES5 syntax
var multiply = function(x, y) {
  return x * y;
};

// ES6 arrow function
var multiply = (x, y) => { return x * y; };

// Or even simpler
var multiply = (x, y) => x * y;    

// ES5 syntax
function Person() {
  // we assign `this` to `self` so we can use it later
  var self = this;
  self.age = 0;

  setInterval(function growUp() {
    // `self` refers to the expected object
    self.age++;
  }, 1000);
}

function serverRequest(query, callback){
  setTimeout(function(){
    var response = query + "full!";
    callback(response);
  },5000);
}

function getResults(results){
  console.log("Response from the server: " + results);
}

serverRequest("The glass is half ", getResults);

// Result in console after 5 second delay:
// Response from the server: The glass is half full!


