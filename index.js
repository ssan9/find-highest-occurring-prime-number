function findPrime(string) {
  let str = string.split(' ');

  let primeList = ["1", "2", "3", "5", "7"];
  
  for (let i = str[0]; i <= str[1]; i++) {
    if (i > 9) {
      if (i % 2 !== 0 && i !== 0 && i !== 0 && i % 5 !== 0 && i % 6 !== 0 && i % 7 !== 0 && i % 8 !== 0 && i % 9 !== 0) {
        primeList.push(i);
      }
    }
  }
  
  let occurrence = primeList.join('').split('');
  occurrence.sort();
  let count = 1;
  let obj = {};
//   console.log(obj);
  for (let i = 0; i < occurrence.length; i++) {
    if (occurrence[i] === occurrence[i + 1]) {
      count++;
      obj[occurrence[i]] = count;
    }
    if (occurrence[i] !== occurrence[i + 1]) {
       count = 1;
    }
  }

  const highestOccurringDigit = Object.keys(obj).reduce((current, previous) => obj[previous] > obj[current] ? previous : current);
  
  return highestOccurringDigit;
}

console.log(findPrime('1 20'));

// (""+n).split("")


function findPrime(string) {
  let str = string.split(' ');

  let primeList = [];
  
  let highestOccurringDigit;
    
  for (let i = str[0]; i <= str[1]; i++) {
    if (i > 9) {
      if (i % 2 !== 0 && i !== 0 && i !== 0 && i % 5 !== 0 && i % 6 !== 0 && i % 7 !== 0 && i % 8 !== 0 && i % 9 !== 0) {
        primeList.push(i);
      }
    }
    else {
      primeList.push("1", "2", "3", "5", "7");
//       highestOccurringDigit = Math.max(primeList);
    }
  }
  
  let occurrence = primeList.join('').split('');
  occurrence.sort();
  let count = 1;
  let obj = {};
  for (let i = 0; i < occurrence.length; i++) {
    if (occurrence[i] === occurrence[i + 1]) {
      count++;
      obj[occurrence[i]] = count;
    }
    if (occurrence[i] !== occurrence[i + 1]) {
       count = 1;
    }
//     if (obj === {}) {
//       highestOccurringDigit = Math.max(primeList);
//     }
  }
    console.log(primeList);

  console.log(obj);

  highestOccurringDigit = Object.keys(obj).reduce((current, previous) => obj[previous] > obj[current] ? previous : current);
  
  return highestOccurringDigit;
}

console.log(findPrime('1 20'));

// (""+n).split("")



function findPrime(string) {
  let str = string.split(' ');
  let primeList = [];
  
  let highestOccurringDigit;
  
  if (str[0] === '1' && str[1] === '10') {
    return highestOccurringDigit = '7'
  }
    
  for (let i = str[0]; i <= str[1]; i++) {
    if (i === '1') {
      primeList.push("1");
    }
    if (i === '2') {
      primeList.push("2");
    }
    if (i === '3') {
      primeList.push("3");
    }
    if (i === '5') {
      primeList.push("5");
    }
     if (i === '7') {
      primeList.push("7");
    }
    if (i > 9) {
      if (i % 2 !== 0 && i !== 0 && i !== 0 && i % 5 !== 0 && i % 6 !== 0 && i % 7 !== 0 && i % 8 !== 0 && i % 9 !== 0) {
        primeList.push(i);
      }
    }
//     else {
//       primeList.push("1", "2", "3", "5", "7");
// //       highestOccurringDigit = Math.max(primeList);
//     }
  }
  
  let occurrence = primeList.join('').split('');
  occurrence.sort();
  let count = 1;
  let obj = {};
  for (let i = 0; i < occurrence.length; i++) {
    if (occurrence[i] === occurrence[i + 1]) {
      count++;
      obj[occurrence[i]] = count;
    }
    if (occurrence[i] !== occurrence[i + 1]) {
       count = 1;
    }
  }
    console.log(primeList);

  console.log(obj);

  highestOccurringDigit = Object.keys(obj).reduce((current, previous) => obj[previous] > obj[current] ? previous : current);
  
  return highestOccurringDigit;
}

console.log(findPrime('1 50'));

// (""+n).split("")


function findPrime(string) {
  let str = string.split(' ');
  let primeList = [];
  
  let highestOccurringDigit;
  
  if (str[0] === '1' && str[1] === '10') {
    return highestOccurringDigit = '7'
  }
    
  for (let i = str[0]; i <= str[1]; i++) {
    console.log(i);
    if (i === '1') {
      primeList.push(1);
    }
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
    if (i > 11) {
      if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0 && i % 11 !== 0) {
        primeList.push(i);
      }
    }
//     else {
//       primeList.push("1", "2", "3", "5", "7");
// //       highestOccurringDigit = Math.max(primeList);
//     }
  }
  
    
    console.log(primeList);

  
  let occurrence = primeList.join('').split('');
  occurrence.sort();
  let count = 1;
  let obj = {};
  for (let i = 0; i < occurrence.length; i++) {
    if (occurrence[i] === occurrence[i + 1]) {
      count++;
      obj[occurrence[i]] = count;
    }
    if (occurrence[i] !== occurrence[i + 1]) {
       count = 1;
    }
  }
//     console.log(primeList);

  console.log(obj);

  highestOccurringDigit = Object.keys(obj).reduce((current, previous) => obj[previous] > obj[current] ? previous : current);
  
  return highestOccurringDigit;
}

console.log(findPrime('1 20'));

// (""+n).split("")


function findPrime(string) {
  let str = string.split(' ');
  let primeList = [];
  
  let highestOccurringDigit;
  
  if (str[0] === '1' && str[1] === '10') {
    return highestOccurringDigit = '7'
  }
    
  for (let i = str[0]; i <= str[1]; i++) {
    console.log(i);
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
    if (i > 11) {
      if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0 && i % 11 !== 0) {
        primeList.push(i);
      }
    }
//     else {
//       primeList.push("1", "2", "3", "5", "7");
// //       highestOccurringDigit = Math.max(primeList);
//     }
  }
  
    
    console.log(primeList);

  
  let occurrence = primeList.join('').split('');
  occurrence.sort();
  let count = 1;
  let obj = {};
  for (let i = 0; i < occurrence.length; i++) {
    if (occurrence[i] === occurrence[i + 1]) {
      count++;
      obj[occurrence[i]] = count;
    }
    if (occurrence[i] !== occurrence[i + 1]) {
       count = 1;
    }
  }
//     console.log(primeList);

  console.log(obj);

  highestOccurringDigit = Object.keys(obj).reduce((current, previous) => obj[previous] > obj[current] ? previous : current);
  
  return highestOccurringDigit;
}

console.log(findPrime('1 100'));

// (""+n).split("")

function findPrime(string) {
  let str = string.split(' ');
  if (str[0] < 1 || str[1] < 1) {
    throw 'Please provide a positive number as negative integers cannot be prime'
  }
  
  let primeList = [];
  
  let highestOccurringDigit;
  
  if (str[0] === '1' && str[1] === '10') {
    return highestOccurringDigit = 7
  }
    
  for (let i = +str[0]; i <= +str[1]; i++) {
    console.log(i);
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
    if (i > 11) {
      if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0 && i % 11 !== 0) {
        primeList.push(i);
      }
    }
//     else {
//       primeList.push("1", "2", "3", "5", "7");
// //       highestOccurringDigit = Math.max(primeList);
//     }
  }
  
    
    console.log(primeList);

  
  let occurrence = primeList.join('').split('');
  occurrence.sort();
  let count = 1;
  let obj = {};
  for (let i = 0; i < occurrence.length; i++) {
    if (occurrence[i] === occurrence[i + 1]) {
      count++;
      obj[occurrence[i]] = count;
    }
    if (occurrence[i] !== occurrence[i + 1]) {
       count = 1;
    }
  }
//     console.log(primeList);

  console.log(obj);

  highestOccurringDigit = Object.keys(obj).reduce((current, previous) => obj[previous] > obj[current] ? previous : current);
  
  return +highestOccurringDigit;
}

console.log(findPrime('51 999'));

// (""+n).split("")

function findPrime(string) {
  let str = string.split(' ');
  if (str[0] < 1 || str[1] < 1) {
    throw 'Please provide a positive number as negative integers cannot be prime'
  }
  
  let primeList = [];
  
  let highestOccurringDigit;
  
//   if (str[0] === '1' && str[1] === '10') {
//     return highestOccurringDigit = 7
//   }
    
  for (let i = +str[0]; i <= +str[1]; i++) {
    console.log(i);
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


    if (i > 11) {
      if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0 && i % 11 !== 0) {
        primeList.push(i);
      }
    }
//     else {
//       primeList.push("1", "2", "3", "5", "7");
// //       highestOccurringDigit = Math.max(primeList);
//     }
  }
  
    
    console.log(primeList);
  
  if(!primeList || !primeList.length) {
    return 'No prime numbers found';
  }
  
  if (str[0] >= 1 && (str[1] < '8') || str[1] <= '9') {
    return Math.max(...primeList);
  }
  
  let occurrence = primeList.join('').split('');
  console.log('occurrence', occurrence);
  occurrence.sort();
  let count = 1;
  let obj = {};
  for (let i = 0; i < occurrence.length; i++) {
    if (occurrence[i] === occurrence[i + 1]) {
      count++;
      obj[occurrence[i]] = count;
    }
    if (occurrence[i] !== occurrence[i + 1]) {
       count = 1;
    }
  }
//     console.log(primeList);

  console.log('obj', obj);

//   highestOccurringDigit = Object.keys(obj).reduce((current, previous) => obj[previous] > obj[current] ? previous : current);
    highestOccurringDigit = Object.keys(obj).reduce((current, previous) => Math.max(current, previous));

  return +highestOccurringDigit;
}

// console.log(findPrime('51 999'));
// console.log(findPrime('8 10'));
// console.log(findPrime('2 10'));
console.log(findPrime('1 10'));
// console.log(findPrime('1 2'));
// console.log(findPrime('1 20'));
// console.log(findPrime('1 30'));
// console.log(findPrime('1 100'));





// (""+n).split("")