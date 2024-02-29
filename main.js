
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



// 2
const printNumberPattern = () => {
  const dim = 6
  let outputY = ''
  for (let y = 1; y <= dim; y++) {
    let outputX = ''
    for (let x = 1; x <= y; x++ ) {
      outputX = outputX + String (y)
    }
    outputY = outputY + outputX + "\n"
  }

  return outputY
}






console.log(
printNumberPattern())