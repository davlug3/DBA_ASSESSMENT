
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
``
console.log(printNumberPattern())




//3
class Employees {
  constructor(name) {
    let count = {
      male: 0, 
      female: 0,
    }
    this.name = name ?? ''


    this.getCount = (gender) => {
      if (gender === 'male' || gender === 'female') {
        return count[gender]
      }

      if (!gender) {
        let out = 0
        Object.values(count).forEach(n => out = out + Number(n) )
        return out
      }
    }

    this.setNumber = (gender, number) => {
      if (gender === 'male' || gender === 'female') {
        count[gender] = number ?? prompt(`Enter the number of ${this.name} ${gender}s:`)
      }
    };

  }

}



const processEmployees = () => {
  const newly_hired = new Employees("newly hired")
  newly_hired.setNumber("male")
  newly_hired.setNumber("female")

  const permanent_position = new Employees("permanent position")
  permanent_position.setNumber("male")
  permanent_position.setNumber("female")

  const resigned = new Employees("resigned")
  resigned.setNumber("male")
  resigned.setNumber("female")
  


  console.log("===")
  console.log("Thank you for the information")
  console.log("===")
  console.log("Here is the summary !!!")


  console.log("Number of hired employee:" ,
    newly_hired.getCount(),
    newly_hired.getCount("male"),
    newly_hired.getCount("female")
    )
    
  console.log("Number of Permanent Employee:" ,
    permanent_position.getCount(),
    permanent_position.getCount("male"),
    permanent_position.getCount("female"),
    )

  console.log("Number of Resigned Employee:" ,
    resigned.getCount(),
    resigned.getCount("male"),
    resigned.getCount("female")
    )

}

processEmployees()