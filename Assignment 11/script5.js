// 5. Write a js program to check whether a number is prime, 
 // Armstrong or perfect number using functions.

// let num= 3;
//  function isPrime(num) {
//     if( num <=2)
//       return 'This is not prime Number'

//     for (let i = 2; i < num; i++ ){
//         if (num % i == 0) {
//             return 'This is not prime Number'
//         }
//         else{
//           return 'this is a prime number'
//         }
//     } 
//  }
// console.log(isPrime(num));

// armstrong
// 153= 1*1*1 + 5*5*5 + 3*3*3
//  let number = prompt("please enter the number");

// let number=153;
//  let temp = number;
//  let noofdigit=number.toString().length;
//  let sum =0;
//  while(temp>0){
//   let digit = temp%10;
//   sum=sum+ digit**noofdigit;
//   temp=parseInt(temp/10);
//  }
//  if(sum == number){
//   console.log(`${number} is an armstrong number`);
//  }else{
//   console.log(`${number} is not an armstrong number`);
//  }

// perfect Number
// perfect mean complete divide
let num =12;
let sum=0;
for(let i=1;i<=num/2;i++){
  if(num%1==0){
    sum=sum+i;
  }
}
 if(sum==num){
  console.log(`${num} is perfect number`);
 }else{
  console.log(`${num} is not perfect number`);
 }