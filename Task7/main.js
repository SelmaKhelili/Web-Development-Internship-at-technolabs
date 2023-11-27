  //Variable used to save up my current age
  let myAge= 8;

  //Early years ina dog's life
  let earlyYears =2;

  // Multiply earlyYears by 10.5

  earlyYears = earlyYears * 10.5;

  //Years left after substracting the early years
  let laterYears = myAge -2;

  //calculating the number of dog years accounted for by my the remaining years.
  laterYears*=4;

  // Print earlyYears and laterYears to the console
  console.log(`Early years: ${earlyYears}`);
  console.log(`Later years: ${laterYears}`);

  //Calculate the number of dog years in total
  let myAgeInDogYears =earlyYears + laterYears;

  //The toLowerCase method returns my name with all lowercase letters
  let myName = 'Selma'.toLowerCase(); 

  // Display name and age in dog years
  console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);