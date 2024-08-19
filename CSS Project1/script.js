// let rnd=Math.ceil(50*Math.random())+150;
// console.log(rnd);

//remember while printing random numbers within a range multiply with the difference and add the min of the range
let guess=prompt("Enter a number:");
const rnd=Math.ceil(guess*Math.random());
let ans=prompt("Enter your guess");
while(true){
    if(ans=="quit") {
        console.log("quitted");
        break;
    }
    else if(ans==rnd) {
        console.log("CORRECT ANS!!");
        break;
    }
    else{ ans=prompt("Try again");}
}