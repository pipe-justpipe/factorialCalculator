//Factorial Calculator:Write a function that calculates the factorial of a given number. 
//DO NOT USE PROMPT, I WANT ONLY 1 CONSOLE.LOG, YOUR FUNCTION MUST BE REUSEABLE, AND MUST RETURN A VALUE
function calaulateFactorial(number){
    let factorial =1;
    for (let i = 2; i <= number; i++){
        factorial *=i;
    }
    return factorial;
}console.log(calaulateFactorial(5))