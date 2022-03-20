/* =======================
Write a recursive function 
that checks if a single parameter 
whole number (n) is even without 
using the modulo operator. Make it 
functionalwith negative integers
as well as positive integers. 
==========================*/

function isEven(n){
    if(n === 0) { //if n equals zero it is even
        return 'Is Even'; 
    } else if(n === 1 || n === -1) { // if n equals one or negative one it is odd 
        return 'Is Odd';
    } else if(Math.sign(n) === -1) { // Identify if parameter is negative 
        return isEven(n + 2) // If parameter is negative restart isEven adding 2 to n until. Will repeat until n = -1 || n = 0 meeting previous conditions
    } else {
       return isEven(n - 2); // If parameter is positive restart isEven subtracting 2 from n. Will repeat until n = 1 || n = 0 meeting previous conditions
    }
}

console.log(isEven(50)); // returns even
console.log(isEven(75)); // returns odd
console.log(isEven(-5)); // returns odd
