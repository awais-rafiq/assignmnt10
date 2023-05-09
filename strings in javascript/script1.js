
// var str = "mazhaer is happy"
// console.log(str.length)

// 2. Write a ts program to copy one string to another string.
// let str = "awais rafiq"
// let another= str;
// console.log(another);


// 3. Write a ts program to concatenate two strings.

// let str = "awais"
// let anoutherStr = "is a web developer"
// console.log(str +" "+ anoutherStr)

 
// let str = "Awais"
// let anoutherStr = "is a web developer"
// console.log(str  + anoutherStr);

// 4. Write a ts program to compare two strings.

// let str ="awais is cival enginear";
// let str2="awais is cival enginear";
// if(str==str2){
//     console.log(true);
// }else{
//     console.log(false);
// }



// 5. Write a js program to convert lowercase string to uppercase.


//  let str ="awais is cival enginear";
//  console.log(str.toUpperCase())



// 6. Write a ts program to convert uppercase string to lowercase.

// let str ="Awais is Cival Enginear";
// console.log(str.toLowerCase())


// 7. Write a ts program to toggle case of each character of a string.






// 8. Write a ts program to find total number of alphabets,
//  digits or special character in a string.


// let str = "awaisrafiq7200@gmail.com"
// let strArray = Array.from(str)
// let countCh = 0
// let countNo = 0
// let countSp = 0
// for(let i = 0; i<=strArray.length;i++){
// if(strArray[i]==)
// }




// 9. Write a js program to count total number of vowels and consonants in a string.
// let string="A quick brown fox jumps over a lazy dog"
// function findVowelsCons(str){
//     let vowels="aeiou"
//     let noOfVowels=0
//     let noOfCons=0
//     for(let i=0; i<str.length;i++){
//         let char= str[i].toLowerCase()
//         if(vowels.includes(char)){
//             noOfVowels++
//         } else if ( char>= "a" && char<= "z"){
//             noOfCons++
//         }
//     } return { vowels: noOfVowels, Consonants: noOfCons}
// }
// // console.log(findVowelsCons(string));

// let string="A quick brown fox jumps over a lazy dog";
// function findVowelsConsonats(str){
//     let vowels="aeiou";
//     let noOfVowels=0;
//     let noOfConsonats=0;
//     for(let i=0;i<str.length;i++){
//         let char= str[i].toLowercase()
//         if(vowels.includes(char)){
//             noOfVowels++;
//         }else(char>="a"&&char<="z")
//         noOfConsonats++;
//     }
//     return{ vowels: noOfVowels,noOfConsonats,Consonats}
// }
// console.log(findVowelsConsonats(string));




// 10. Write a js program to count total number of words in a string.
// let string="A quick brown fox jumps over a to lazy dog"
// let splitedStr= string.split(" ")
// console.log(splitedStr.length);

//  spacs can also be add in word so one extra space can 1 AudioWorkletNode
// let string="A quick brown fox jumps   over a to lazy dog"
// let splitedStr= string.split(" ")
// console.log(splitedStr.length);



// 11. Write a js program to find reverse of a string.
// let str="what is your name"
// function reverseStr(str){
//     let splitStr= str.split("")
//     let reversedStr= splitStr.reverse()
//   let joinStr= reversedStr.join("")
// return joinStr
// }
// console.log(reverseStr(str));
// let str="awais is web developer";
// function reversedStr(str) {
//  let splitStr=str.split("")
//  let reversedStr= splitStr.reverse()
//  let joinStr=reversedStr.join("")
//  return joinStr   
// }
// console.log(reversedStr(str));


// 12. Write a js program to check whether a string is palindrome or not.
// palindrome string: if it is readthe same from forward orbackword
// eg DOMQuad, madam
// method 1
// function isPalindrome(text){
//     return text== text.split('').reverse().join('');
// }
// console.log(isPalindrome('awais'));
// console.log(isPalindrome('level'));

// let str="awwa"
// function checkPalindrom(str){
//     let splittedStr= str.split("")
//     let reversedStr=[...splittedStr].reverse()
//     if( splittedStr.join("")==reversedStr.join("")){
//         console.log("This string is Palindrom");
//     } else console.log("This string is not Palindrom");
// }
// checkPalindrom(str)


// 13. Write a js program to reverse order of words in a given string
// let str="A quick brown fox jumps over a lazy dog"
// let splitedStr= str.split(" ")
// let reversedStr= [...splitedStr].reverse()
// console.log(reversedStr.join(" "));

// other method 
// function reverseStr(str){
//     let splitStr= str.split(" ")
//     let reversedStr= splitStr.reverse("")
//   let joinStr= reversedStr.join(" ")
// return joinStr
// }
// console.log(reverseStr(str));


// 14. Write a js program to find first occurrence of a character in a given string.

// let string= "Web Development"
// let occurenceOfE=string.indexOf("W")
// console.log(occurenceOfE); 



// 15. Write a js program to find last occurrence of a character in a given string.
// let string="A quick brown fox jumps over a lazy dog"
// console.log(string.lastIndexOf("g"));  