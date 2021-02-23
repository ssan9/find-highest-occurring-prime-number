let arguments = process.argv; 

function findPrime(string, myCallback1, myCallback2, myCallback3) {
  let str = string.split(' ');
  
  if (+str[0] < 0 || +str[1] < 0) {
    return 'Please provide a positive integer as negative integers cannot be prime';
  }
  if (+str[1] <= +str[0]) {
    return'Input range incorrect';
  }  
  return myCallback1(str, myCallback2, myCallback3);
}
  
function createPrimeList(str, myCallback1, myCallback2) {
  let primeList = [];

  for (let i = +str[0]; i <= +str[1]; i++) { 
    let count = 0;
    for (let j = 2; j < i; j++) {
      if (i % j === 0 ) {
        count++;
        break;
      }
    }
    if (count === 0 && i > 1) {
      primeList.push(i);
    }
  }
  
  if (!primeList || !primeList.length) {
    return 'No prime numbers found';
  }
  if (+str[0] >= 0 && +str[1] < 11) {
    return Math.max(...primeList);
  } 

  return myCallback1(primeList, myCallback2);
}
   

function findDigitOccurrences(primeList, myCallback) {
  let digitOccurrences = primeList.join('').split('').sort();
  let count = 1;
  let obj = {};

  for (let i = 0; i < digitOccurrences.length; i++) {
    if (digitOccurrences[i] === digitOccurrences[i + 1]) {
      count++;
      obj[digitOccurrences[i]] = count;
    } else {
      count = 1;
    }
  }
  return myCallback(obj);
}

// here obj is a callback and we are passing it to another callback function 
const highestOccurringDigit = obj => Object.keys(obj).reduce((current, next) => obj[next] < obj[current] ? +current : +next);

 
console.log(findPrime("1 10", createPrimeList, findDigitOccurrences, highestOccurringDigit));



// The following code will help to read command line arguments   
// let primeNumber = findPrime(arguments[2], arguments[3]);
// let prime =   findPrime(createPrimeList, findDigitOccurrences, highestOccurringDigit);

// console.log('Result:', primeNumber + prime);

// Alternate method - It's mostly the same, the only difference is that the arrow function is incorporated in the
// regular function itself.

// function findPrime(string, myCallback1, myCallback2) {
//   let str = string.split(' ');
  
//   if (+str[0] < 0 || +str[1] < 0) {
//     return 'Please provide a positive integer as negative integers cannot be prime';
//   }
//   if (+str[1] <= +str[0]) {
//     return'Input range incorrect';
//   }  
//   return myCallback1(str, myCallback2);
// }
  
//   function createPrimeList(str, myCallback) {
//     let primeList = [];

//     for (let i = +str[0]; i <= +str[1]; i++) { 
//       let count = 0;
//       for (let j = 2; j < i; j++) {
//         if (i % j === 0 ) {
//           count++;
//           break;
//         }
//       }
//       if (count === 0 && i > 1) {
//         primeList.push(i);
//       }
//     }
    
//     if(!primeList || !primeList.length) {
//       return 'No prime numbers found';
//     }
//     if (+str[0] >= 0 && +str[1] < 11) {
//       return Math.max(...primeList);
//     } 
//     return myCallback(primeList);
//   }
   

//   function findDigitOccurrences(primeList) {
//     let digitOccurrences = primeList.join('').split('').sort();
//     let count = 1;
//     let obj = {};
  
//     for (let i = 0; i < digitOccurrences.length; i++) {
//       if (digitOccurrences[i] === digitOccurrences[i + 1]) {
//         count++;
//         obj[digitOccurrences[i]] = count;
//       } else {
//         count = 1;
//       }
//     }
//     const highestOccurringDigit = Object.keys(obj).reduce((current, next) => obj[next] < obj[current] ? current : next);
//     return +highestOccurringDigit;
//   }

 
// console.log(findPrime("1 18", createPrimeList, findDigitOccurrences));
