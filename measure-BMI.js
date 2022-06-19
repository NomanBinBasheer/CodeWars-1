// // Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"



function bmi(weight, height) {
    let bodyMassI = weight/(Math.pow(height, 2))
    if (bodyMassI <= 18.5){
      return "Underweight"
    }
     else if (bodyMassI <= 25){
       return "Normal"
     }
     else if (bodyMassI <= 30){
       return "Overweight"
     }
     else if (bodyMassI  > 30){
       return "Obese"
     }
   }