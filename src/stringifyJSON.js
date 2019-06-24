// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

//Array = final stringified object array 
//

var stringifyJSON = function(obj) {
  let arrayString = [];
  let objString = [];
  //check primitive type
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return '' + obj;
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (obj === undefined) {
    return undefined;
  } else if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    } else {
    for (let i = 0; i < obj.length; i++) {
      arrayString.push(stringifyJSON(obj[i]));
    }
    return '[' + arrayString + ']';
    }
  } else if (obj instanceof Object) {
    let objKeys = Object.keys(obj);
    for (let i = 0; i < objKeys.length; i++) {
      let key = '"' + objKeys[i] + '":';
      let values = obj[objKeys[i]];
      if (typeof values === 'number' || typeof values === 'string' || typeof values === 'boolean' || values === null) {
        objString.push(key + stringifyJSON(values));
      } else if (values instanceof Function || typeof values === undefined || typeof values === 'symbol') {
        objString.push('');
      } else if (values instanceof Object) {
        objString.push(key + stringifyJSON(values));
      }  
    }
    return '{' + objString + '}';
  }
};
