function findDuplicateNumbers(arr) {
    let duplicates;
    for(let i = 0; i < arr.length; i++) {
      for(let j = i + 1; j < arr.length; j++) {
        if(arr[i] === arr[j]) {
          duplicates = arr[i];
        }
      }
    }
    return duplicates;
  }  
  let numbers = [1,3,4,2,2];
  let duplicates = findDuplicateNumbers(numbers);
  console.log(duplicates);







function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }

let myArr2 = [10, 35, 50, 20];
let max2 = findMax(myArr2);
console.log(max2);







function multiplyBytwo(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i] * 2);
    }
    return result;
  }

let myArr3 = [10, 20, 30, 40, 50];
let multiply = multiplyBytwo(myArr3);
console.log(multiply);