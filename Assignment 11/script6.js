   // Write a js program to find all prime numbers 
//    between given interval using functions

// let num= 2;3,4,5,6,7,7,8,89,9
// let primeNum= []
// function findPrimeNum (numbers){
//     for (let i = numbers; i < numbers; i++){
//         if( numbers =>2)

//     }


function findPrime(start,end){
    let primes=[];
    for(let i = start; i<=end;i++){
     let isPrime=true;
    // check if i is prime
    for(let j= 2; j<=Math.sqrt(i);j++){
        if(i%j===0){
            isPrime=false;
            break;
        }
    }

    if(isPrime && i>1){
        primes.push(i);
    }
}
    return Primes;
}
