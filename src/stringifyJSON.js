// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // check typeof for primitive
  // depending on typeof primitive 
    //use regular type coercion to turn to string
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return '' + obj;
  } else if (typeof obj === 'string') {
    // if a string already wrap in quotes
    return `"${obj}"`;
  } else if (typeof obj === 'undefined' || typeof obj === 'function') {
    return undefined;
  } else if (Array.isArray(obj)) {
  // check to see if obj is an array
    //if empty array
    if (obj.length === 0) {
    // return stringifyed []
      return '[]';
    } else {
      // call stringify on elements
    // if not empty, iterate through array
      return '[' + obj.map(stringifyJSON) + ']';
    }
  } else {
    if (Object.keys(obj).length === 0) {
      return '{}';
    } else {

      var results = [];

      for (var key in obj) {
        if (typeof obj[key] === 'function' || typeof obj[key] === 'undefined') {
          continue;
        } else {
          results.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));        
        }
      }
  
      return '{' + results.join(',') + '}';
    }
  }
};
