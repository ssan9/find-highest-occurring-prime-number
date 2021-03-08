let arguments = process.argv; 

// const findHighestOccurringPrime = string => {
//   return new Promise((resolve, reject) => {

function findHighestOccurringPrime(string) {
  return new Promise((resolve, reject) => {
    // console.log('Promise callback');
    let str = string.split(' ');

    if (str) {
      resolve(str);
    }

    if (+str[0] < 0 || +str[1] < 0) {
      reject('Please provide a positive integer as negative integers cannot be prime');
    }
    if (+str[1] <= +str[0]) {
      reject('Input range incorrect');
    } 
    return str;
  })
    // .then(str => str)
    .then(str => {
      let primeList = [];
      // console.log(primeList, str);
      for (let i = +str[0]; i <= +str[1]; i++) { 
        // console.log(str);
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
      return primeList;
    })
    // .then(primeList => primeList)
    .then(primeList => {
      // console.log('primeLi', primeList);
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
      return obj;
    })
    // .then(obj => obj)
    .then(obj => {
      const highestOccurringDigit = Object.keys(obj).reduce((current, next) => obj[next] < obj[current] ? +current : +next);
      return highestOccurringDigit;
    })



   
//     function doStuff(n /* `n` is expected to be a positive number */) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(n * 10)
//     }, Math.floor(Math.random() * 1000))
//   })
//   .then(function(result) {
//     if (result > 100) {
//       return result + " is greater than 100";
//     } else {
//       return result + " is not greater than 100";
//     }
//   })
// }

// doStuff(9)
// .then(function(data) {
//   console.log("data is: " + data) // `data` is not `undefined`
// });


// console.log(findHighestOccurringPrime(" 18"));
    // })
        // console.log(str);

    // let primeList = [];
    // console.log(primeList, str);
    // for (let i = +str[0]; i <= +str[1]; i++) { 
    //   console.log(str);
    //   let count = 0;
    //   for (let j = 2; j < i; j++) {
    //     if (i % j === 0) {
    //       count++;
    //       break;
    //     }
    //   }
    //   if (count === 0 && i > 1) {
    //     primeList.push(i);
    //   }
    // }

    // if (!primeList || !primeList.length) {
    //   return 'No prime numbers found';
    // }
    // if (+str[0] >= 0 && +str[1] < 11) {
    //   return Math.max(...primeList);
    // } 
    // .then(primeList => console.log(primeList))

} 

findHighestOccurringPrime("1 18")
      .then(result => {
        console.log(result);
      });
    
  // findHighestOccurringPrime
  // .then(str => str);

// function findHighestOccurringPrime(string) {
  
//   new Promise( (resolve, reject) => {
//     let dataReceivedSuccessfully = false; 
//     if (dataReceivedSuccessfully) 
//       resolve('Data Available!'); 
//     if (!dataReceivedSuccessfully) 
//       reject('Data Corrupted!'); 
//   })
//   .then( (message) => {
//    console.log(message); 
//    }).catch( (message) => {
//       console.log(message);
//   })
// }

  //   let primeList = [];

  //   for (let i = +str[0]; i <= +str[1]; i++) { 
  //     let count = 0;
  //     for (let j = 2; j < i; j++) {
  //       if (i % j === 0 ) {
  //         count++;
  //         break;
  //       }
  //     }
  //     if (count === 0 && i > 1) {
  //       primeList.push(i);
  //     }
  //   }

  //   if (!primeList || !primeList.length) {
  //     return 'No prime numbers found';
  //   }
  //   if (+str[0] >= 0 && +str[1] < 11) {
  //     return Math.max(...primeList);
  //   }
  //   return str;
  // })
  // .then(primeList => {
  //   let digitOccurrences = primeList.join('').split('').sort();
  //   let count = 1;
  //   let obj = {};

  //   for (let i = 0; i < digitOccurrences.length; i++) {
  //     if (digitOccurrences[i] === digitOccurrences[i + 1]) {
  //       count++;
  //       obj[digitOccurrences[i]] = count;
  //     } else {
  //       count = 1;
  //     }
  //   }

  //   const highestOccurringDigit = Object.keys(obj).reduce((current, next) => obj[next] < obj[current] ? +current : +next);
  //   return highestOccurringDigit;
  // });
// }

// const findHighestOccurringPrime = new Promise((resolve, reject) => {
//   console.log('Promise callback');
//   function findPrime(string) {
//     let str = string.split(' ');

//     if (+str[0] < 0 || +str[1] < 0) {
//       return 'Please provide a positive integer as negative integers cannot be prime';
//     }
//     if (+str[1] <= +str[0]) {
//       return'Input range incorrect';
//     }  
//   }; 
// });

// const promise = new Promise(function(resolve, reject) {
//   console.log("Promise callback");
// //   resolve();
// }).then(function(result) {
//   console.log("Promise callback (.then)");
// });

// findHighestOccurringPrime
//   .then(str => {
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

//     if (!primeList || !primeList.length) {
//       return 'No prime numbers found';
//     }
//     if (+str[0] >= 0 && +str[1] < 11) {
//       return Math.max(...primeList);
//     }
//     return str;
//   })
//   .then(primeList => {
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

//     const highestOccurringDigit = Object.keys(obj).reduce((current, next) => obj[next] < obj[current] ? +current : +next);
//     return highestOccurringDigit;
//   });
  

// The following code will help to read command line arguments   
// let primeNumber = findHighestOccurringPrime(arguments[2]);
// console.log('Result:', primeNumber);


// console.log("Promise (pending)", promise);
// const promise = findHighestOccurringPrime('1 18');
// console.log(promise);

// console.log(findHighestOccurringPrime("1 18"));

// function doStuff(n /* `n` is expected to be a positive number */) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(n * 10)
//     }, Math.floor(Math.random() * 1000))
//   })
//   .then(function(result) {
//     if (result > 100) {
//       return result + " is greater than 100";
//     } else {
//       return result + " is not greater than 100";
//     }
//   })
// }

// doStuff(9)
// .then(function(data) {
//   console.log("data is: " + data) // `data` is not `undefined`
// });


// console.log(doStuff(9));