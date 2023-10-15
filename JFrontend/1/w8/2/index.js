console.log(isEqualSymbols('адрес', 'среда')) // true 
console.log(isEqualSymbols('ноутбук', 'программист')) // false 

function isEqualSymbols(str1, str2) { 
  let isEqual = true
  str2.split('').forEach(character => {
    if (!str1.split('').includes(character)) {
      isEqual = false
    }
  });
  return isEqual
}