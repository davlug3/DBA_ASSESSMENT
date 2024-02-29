
// 1
const arr = [5, 1, 4, 6, 7, 3, 5, 7, 3]


const printDuplicates = (arr) => {
  const tempBuffer = {}
  const duplicates = []

  arr.forEach(element => {
    if (tempBuffer[element] === true) 
      duplicates.push(element)
    else tempBuffer[element] = true
  });

  return duplicates
}

console.log(printDuplicates(arr))


