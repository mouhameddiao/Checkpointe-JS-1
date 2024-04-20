const array = ['salut','momo','comment'];
console.log(array.reverse());

const x = "44";
const y = "67";

console.log(x + " mesure " + x.length + " chiffres");


var str = "bonjour tout le monde";

str = str.charAt(0).toUpperCase() + str.slice(1);

console.log(str);

console.log(Math.min(2, 3, 1));

console.log(Math.max(1, 3, 2));


let fruits = ["Apple", "Banana"];

console.log(fruits.length);
// 2

fruits.forEach(function (item, index, array) {
    console.log(item, index);
  });
  // Apple 0
  // Banana 1
  let last = fruits.pop(); // supprime Orange (à la fin)
// ["Apple", "Banana"];

function fact(nbr){
    var i, nbr, f = 1;
  
    for(i = 1; i <= nbr; i++)  
    {
      f = f * i;   // ou f *= i;
    }  
    return f;
  }
  
  console.log(fact(3));

  function nbrPremier(nbr) {
    for(var i = 2; i < nbr; i++)
      if(nbr%i === 0) return false;
    return nbr > 1;
  }
  
  console.log(nbrPremier(2));


  function fib(n) { /* momo*/ }

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757
  