function ageSort(users) {
  return users.sort((a, b) => a.age - b.age)
}

function oddEvenSort(arr) {
  return arr.sort((a, b) => {
    if (a % 2 === 1) {
      if (b % 2 === 1) {
        return a - b
      }
      return -1
    }
    if (a % 2 === 0 && b % 2 === 0) return a - b
  })
}

function validAnagrams(s, t) {
  // Your code here
  return s.split('').sort().join('') === t.split('').sort().join('')
}

function reverseBaseSort(arr) {
  // Your code here
  // let sorted = arr.sort((a,b)=>{
  //   if(a > 100 || b > 100) return a - b;
  //   if(a > 10 || b > 10) return a - b;
  //   else {
  //     return a - b
  //   }
  // })
  // return sorted;

  return arr.sort((a,b)=>{
    if(a.toString().length >= b.toString().length){
      if(a.toString().length === b.toString().length){
        return a - b
      }
      return b - a
    }
  })
}

function frequencySort(arr) {
  // Your code here
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
