// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var results = [];
  var innerRecursion = function(child) {
    if (child.classList !== undefined) {

      if (child.classList.contains(className)) {
        results.push(child);
      }

      if (child.hasChildNodes) {
        child.childNodes.forEach(function(child) {
          innerRecursion(child);
        });
      }
    }  
  };
  innerRecursion(document.body);
  return results;
};