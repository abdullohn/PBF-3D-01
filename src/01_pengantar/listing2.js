// IF YOU TYPE...                                   // JAVASCRIPT DOES THE FOLLOWING (DUE TO HOISTING)
var letter;                                         var letter;
                                                    var vowels;

console.log(letter);                                console.log(letter);

function testing() {                                function testing() {   
  console.log(number);                                var number;
  var number = 2;                                     console.log(number);
  console.log(number);                                number = 2;
                                                      console.log(number);
}                                                   }

testing();                                          testing();

console.log(vowels);                                console.log(vowels);
var vowels = ['a','e','i','o','u'];                 vowels = ['a','e','i','o','u']
console.log(vowels);                                console.log(vowels);

random = 8;                                         random = 8;
console.log(random);                                console.log(random);