// 2
export default () => {
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
