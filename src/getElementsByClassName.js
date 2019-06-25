// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {  
  let elements = [];
  function finder(node) {
    if (node.classList && node.classList.contains(className)) {
      elements.push(node);    
    } 
    if (node.childNodes) {
      for (let i = 0; i < node.childNodes.length; i++) {
        finder(node.childNodes[i]);
      }
    }
  }
  finder(document.body);
  return elements;
};
