/* =================================================
    Write a function countBs that takes a string as 
    its only argument and returns a number that 
    indicates how many uppercase B characters there 
    are in a string. 
================================================= */ 

const countBs = (entString) => {
    let bCount = 0 // stores total Bs in string to call back to after counting 
    for(let i = 0; i < entString.length; i++){
        if(entString[i] === 'B'){ // loops through each character in a string 
            bCount = bCount + 1; // adds one to our total B count 
        }
        
    }
    return bCount // returns total value of B's 
}


console.log(countBs("A Bots Bot is a bots bots Best friend")); //prints 3 to the console
