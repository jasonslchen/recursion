// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

//Array = final stringified object array 
//

var stringifyJSON = function(obj) {
  let stringify = [];
  let values = Object.keys(obj);
  if (values.length === 0) {
    return '{' + stringify.join(', ') + '}';
  }
  stringify.push(String(values[0]) + ':' + String(obj[values[0]]));
  delete obj[(values[0])];
  return stringifyJSON(obj);
};

let x = {
  y : 5,
  jason : 4,
  bob : 'jason'
}

console.log(stringifyJSON(x));

