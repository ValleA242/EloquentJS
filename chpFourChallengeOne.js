/*==============================================
Write a range function that takes two arguments, 
start and end, and returns an array containing 
all the numbers from start up to (and including) 
end.

Next, write a sum function that takes an array 
of numbers and returns the sum of these numbers. 
Run the example program and see whether it does 
indeed return 55.

As a bonus assignment, modify your range function 
to take an optional third argument that indicates 
the “step” value used when building the array. If 
no step is given, the elements go up by increments
of one, corresponding to the old behavior. The 
function call range(1, 10, 2) should return 
[1, 3, 5, 7, 9]. Make sure it also works with 
negative step values so that range(5, 2, -1) 
produces [5, 4, 3, 2].
============================================== */


function range(start, end, step){ //Function with three parameters. Two for range and one for an increment
   let rangeArray = [] // sets empty array to be pushed into 
    for(let i = start; i <= end; i++){
     	if(i <= end){
          rangeArray.push(i) //creates values from the range of the two parameters provided to be pushed into rangeArray
      } 
   } 
      const incByStep = rangeArray.map(z => z * step); // creates new array called inByStep to increment each value in rangeArray by the step argument
      return incByStep //returns incremented array
      
} 

function sum(array) { // sum function for the second part of the challenge. Adds each element in the array together using the .reduce function
 	return array.reduce((x,y) => 
        x + y, 0        
  )
}

console.log(range(1,10, 2)) //returns [2, 4, 6, 8, 10, 12....]

console.log(sum(range(1,10))) //returns 55
