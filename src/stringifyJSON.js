// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // check typeof for primitive
  // depending on typeof primitive 
    //use regular type coercion to turn to string
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return '' + obj;
  }  else if (typeof obj === 'string') {
    // if a string already wrap in quotes
    return `"${obj}"`;
  }
};
