// amazing.js 

const vowels = ['a','e','i','o','u']; 

let render = function () {
           console.log("Hello from amazing.render()!");
}

function testing() {                                
  console.log("testing() in amazing.js");  
  
}

export {vowels,render,testing};