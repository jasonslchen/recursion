// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
//for booleans return true or false
//for numbers if they include number return the number 
var parseJSON = function(json) {
  if (json === 'null') {
    return null;
  } else if (json === 'true') {
    return true;
  } else if (json === 'false') {
    return false;
  } else if (isStringNum(json)) {
    //test to see if json is a number string that only contains numbers, accounts for negatives and decimals
    return Number(json);
  } else if (json[0] === '"' && json[json.length-1] === '"') {
    //test to see if json is pure string, if not position 1 and length -2 will not be quotes
    //if pure string return string without outer single quotes
    return json.slice(1, json.length-1);
  } else if (json[0] === '[' && json[json.length-1] === ']') {
    //is an array, tests for brackets
    //take array string, remove brackets, split by values and trim white spaces, then map onto final array
    if (json.length === 2) {
      return [];
    }
    return json.slice(1, json.length-1)
               .split(',')
               .map(function(string) {
                 return string.trim();
               })
               .map(function(val) {
                  return parseJSON(val);
               })
  } else if (json[0] === '{' && json[json.length-1] === '}') {
    //see if json is object, if object, group key value pairs together into arrays/or for loop count by 2's and make new object
    //take {"jason" : 5, "x" : 2}, slice, split (','). map(keyvalpair) pair.split to get an array of arrays then trim
    let obj = {};
    json.slice(1, json.length-1)
    .split(',')
    .map(function(pair) {
      return pair.split(':').map(function(whites) {
        return whites.trim();
      })
    })
    //returned array of array pairs [[1, 2], [3, 4]]
    .forEach(function(pairArray) {
      return obj[parseJSON(pairArray[0])] = parseJSON(pairArray[1]);
    })
    return obj;
  } 
  
}; 


let isStringNum = function(nums) {
  return nums.split('').every(function (num) {
    // return num.includes('1') || num.includes('2') || num.includes('3') || num.includes('4') || num.includes('5') || num.includes('6') || num.includes('7') || num.includes('8') || num.includes('9') || num.includes('0');
    return '-.1234567890'.includes(num);
  });
}


let x = '{"jason" : 5, "x" : 3}';
let y = '"hello"';
let z = '1234';
let a = '[1, 3, "jason"]';

console.log(parseJSON('[[[["hi"]]]]'));