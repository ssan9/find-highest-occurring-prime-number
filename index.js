function findPrime(string) {
  let str = string.split(' ');

  try {
    if (+str[0] < 0 || +str[1] < 0) {
      throw 'Please provide a positive integer as negative integers cannot be prime';
    }
    if (+str[1] <= +str[0]) {
      throw 'Input range incorrect';
    }  
  }
  catch(e) {
    console.error(e);
  }
 
  let primeList = [];
    
  for (let i = +str[0]; i <= +str[1]; i++) {
    if (i === 2) {
      primeList.push(2);
    }
    if (i === 3) {
      primeList.push(3);
    }
    if (i === 5) {
      primeList.push(5);
    }
     if (i === 7) {
      primeList.push(7);
    }
    if (i === 11) {
      primeList.push(11);
    }
    if (i > 11 && i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0 && i % 11 !== 0) {
      primeList.push(i);
    }
  }

  if(!primeList || !primeList.length) {
    return 'No prime numbers found';
  }
  if (+str[0] >= 0 && +str[1] < 11) {
    return Math.max(...primeList);
  }
  
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

  const highestOccurringDigit = Object.keys(obj).reduce((current, next) => obj[next] < obj[current] ? current : next);
  return +highestOccurringDigit;
}




console.log('Highest occurring digit in 51-999 range:', findPrime('51 999'));
console.log('Highest occurring digit in 1-10 range:', findPrime('1 10'));
console.log('Highest occurring digit in 1-2 range:', findPrime('1 2'));
console.log('Highest occurring digit in 2-20 range:', findPrime('2 20'));
console.log('Highest occurring digit in 11-30 range:', findPrime('11 30'));
console.log('Highest occurring digit in 1-100 range:', findPrime('1 100'));
console.log('Highest occurring digit in 0-10 range:', findPrime('0 10'));
console.log('Highest occurring digit in 8 10 range:', findPrime('8 10'));

// Below, each time the function is called, it logs an error. 
findPrime('4 0');
findPrime('7 7');
findPrime('10 2');
findPrime('-5 -20');
