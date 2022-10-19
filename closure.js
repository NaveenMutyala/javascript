// lexical scope

// global scope
let x = 10;

const parentFunction=()=>{
    // local scope
    let myVal=20;
    console.log(x);
    console.log(myVal); 
    const childFunction=()=>{
        console.log(x+=5);
        console.log(myVal+=1);
    }
    return childFunction;
}
const result = parentFunction();
console.log(result);
// closure is a function having access to parent scoope even after the parent funcitons has closed
result();
// furthur calls increment the values
result();
result();

console.log(x);
// console.log(myVal);//reference error


// IIFE immediately invoked function expression
const privateCounter = (()=>{
    let count =0;
    console.log(`initial value: ${count}`);
    return ()=>{count+=1;console.log(count);}
})();

privateCounter();
privateCounter();
privateCounter(); 



const credit =((num)=>{
    let credits=num;
    console.log(`intial credits value:${credits}`);
    return ()=>{
        credits-=1;
        if(credits>0) console.log(`Playing game,${credits} credits(s) remainging`);
        if(credits<=0) console.log("not enough credits");
    }
})(3);

credit();
credit();
credit();
credit();
// we are accessings credits private variable

/*10
closure.js:10 20
closure.js:18 ()=>{
        console.log(x+=5);
        console.log(myVal+=1);
    }
closure.js:12 15
closure.js:13 21
closure.js:12 20
closure.js:13 22
closure.js:12 25
closure.js:13 23
closure.js:25 25
closure.js:32 initial value: 0
closure.js:33 1
closure.js:33 2
closure.js:33 3
closure.js:44 intial credits value:3
closure.js:47 Playing game,2 credits(s) remainging
closure.js:47 Playing game,1 credits(s) remainging
closure.js:48 not enough credits
closure.js:48 not enough credits*/
