function findPrime(string) {
  let str = string.split(' ');
//   console.log(str);
  if (str[0] < 0 || str[1] < 0) {
//       console.log('hi', str[0]);

    throw 'Please provide a positive number as negative integers cannot be prime'
  }
  
  if (+str[1] <= +str[0]) {
    throw 'Parameter range incorrect';
  }
  
  let primeList = [];
  
  let highestOccurringDigit; 
    
  for (let i = +str[0]; i <= +str[1]; i++) {
//     console.log(i);
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
  
    
    console.log(primeList);
  
  if(!primeList || !primeList.length) {
    return 'No prime numbers found';
  }

  
  if (+str[0] >= 1 && +str[1] < 11) {
    return Math.max(...primeList);
  }
  
  let occurrence = primeList.join('').split('');
//   console.log('occurrence', occurrence);
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

//   highestOccurringDigit = Object.keys(obj).reduce((current, next) => {
//     console.log('cur', current, 'nex', next);
// //     return obj[next] > obj[current] ? next : current
//     if (obj[next] > obj[current]) {
//       console.log('next', obj[next]);
//       return next;
//     }
//     console.log('current', obj[current]);
//     return current;
//   });
  
   highestOccurringDigit = Object.keys(obj).reduce((current, next) => {
//     console.log('cur', current, 'nex', next);
//     return obj[next] > obj[current] ? next : current
    if (obj[next] < obj[current]) {
//       console.log('next', obj[next]);
      return current;
    }
//     console.log('current', obj[current]);
    return next;
  });
  
  
//     highestOccurringDigit = Object.keys(obj).reduce((current, previous) => Math.max(current, previous));

  return +highestOccurringDigit;
}

// console.log('51 999', findPrime('51 999'));
// console.log('8 10', findPrime('8 10'));
// console.log('2 10', findPrime('2 10'));
// console.log('1 10', findPrime('1 10'));
// console.log('1 2', findPrime('1 2'));
// console.log('1 20', findPrime('1 20'));
// console.log('1 30', findPrime('1 30'));
console.log('1 100', findPrime('1 100'));
// console.log('1 10', findPrime('1 10'));
// console.log('1 10', findPrime('1 10'));
// console.log('2 20', findPrime('2 20'));
// console.log('11 30', findPrime('11 30'));
// console.log('21 30', findPrime('21 30'));
// console.log('1 100', findPrime('1 100'));
// console.log('-5 -20', findPrime('-5 -20'));
// console.log('-1 999', findPrime('-1 999'));
// console.log('4 0', findPrime('4 0'));
// console.log('7 7', findPrime('7 7'));
// console.log('7 8', findPrime('7 8'));
// console.log('2 100', findPrime('2 100'));
// console.log('10 2', findPrime('10 2'));


// (""+n).split("")