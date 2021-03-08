let arguments = process.argv; 

function findPrime(string) {
  let str = string.split(' ');
  if (+str[0] < 0 || +str[1] < 0) {
    return 'Please provide a positive integer as negative integers cannot be prime';
  }
  if (+str[1] <= +str[0]) {
    return'Input range incorrect';
  }  
  return createPrimeList(str);
}
  
function createPrimeList(str) {
  console.log(str);
  let primeList = [];
  for (let i = +str[0]; i <= +str[1]; i++) { 
    let count = 0;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
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
  return findDigitOccurrences(primeList);
}

function findDigitOccurrences(primeList) {
  console.log('primeList', primeList);
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
  const highestOccurringDigit = Object.keys(obj).reduce((current, next) => obj[next] < obj[current] ? +current : +next);
  return highestOccurringDigit;
}

// The following code will help to read command line arguments   
let primeNumber = findPrime(arguments[2]);
console.log('Result:', primeNumber);


