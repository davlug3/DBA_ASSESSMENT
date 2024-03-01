
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



export default  (dom) => {
  let output = ''
  const newly_hired = new Employees("newly hired")
  newly_hired.setNumber("male")
  newly_hired.setNumber("female")

  const permanent_position = new Employees("permanent position")
  permanent_position.setNumber("male")
  permanent_position.setNumber("female")

  const resigned = new Employees("resigned")
  resigned.setNumber("male")
  resigned.setNumber("female")
  

  if (dom) {
    output += "===\n"
    output += "Thank you for the information\n"
    output += "===\n"
    output += "Here is the summary !!!\n"

    output += "Number of hired employee: "+ newly_hired.getCount() + "\n"
    output += "Percentage of male: " +  ((newly_hired.getCount("male") / newly_hired.getCount())*100).toFixed(2) + "%\n",
    output += "Percentage of female: " +  ((newly_hired.getCount("female") / newly_hired.getCount())*100).toFixed(2) + "%\n\n",
    
    output += "Number of permanent employee: "+ permanent_position.getCount() + "\n"
    output += "Percentage of male: " +  ((permanent_position.getCount("male") / permanent_position.getCount())*100).toFixed(2) + "%\n",
    output += "Percentage of female: " +  ((permanent_position.getCount("female") / permanent_position.getCount())*100).toFixed(2) + "%\n\n",
    
    output += "Number of resigned employee: "+ resigned.getCount() + "\n"
    output += "Percentage of male: " +  ((resigned.getCount("male") / resigned.getCount())*100).toFixed(2) + "%\n",
    output += "Percentage of female: " +  ((resigned.getCount("female") / resigned.getCount())*100).toFixed(2) + "%\n\n"
    


  }
  else {
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

  return output

}
