

export const inputArray = [5, 1, 4, 6, 7, 3, 5, 7, 3]


export default  (arr) => {
  if (!arr) arr = inputArray
  const tempBuffer = {}
  const duplicates = []

  arr.forEach(element => {
    if (tempBuffer[element] === true) 
      duplicates.push(element)
    else tempBuffer[element] = true
  });

  return duplicates
}
