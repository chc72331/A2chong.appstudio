// Establish input some variables

let newState = prompt('What STATE are you in (2 capitalized letters, e.g. "NE" or "FL")?')
let newFirstName = prompt('What is your first name?')
let newLastName = prompt('What is your last name?')
let newTemperature = prompt('What\'s the current temperature (in Fahrenheit)?')

// Establish an array that holds all the messages
let messages2 = ['wear a warm coat, hat, scarf, and gloves.', 
  'wear a warm coat but you won\'t need a hat, scarf or gloves.', 
  'wear your warmest coat, a warm hat, a scarf, and warm gloves.', 
  'wear a warm coat, hat and gloves.  Maybe a scarf too.']

// Make switch statements based on conditions
var messageNew
switch (true) {
  case (newTemperature < 32 && newState == 'NE'):
    messageNew = messages2[0]
    break;
  case (newTemperature < 50 && newTemperature >= 32 && newState == 'NE'):
    messageNew = messages2[1]
    break;
  case(newTemperature < 50 && newTemperature >= 32 && newState == 'FL'):
    messageNew = messages2[2]
    break;
  case (newTemperature < 70 && newTemperature >= 50 && newState == 'FL'):
    messageNew = messages2[3]
    break;
  default:
    messageNew = 'Go check your local weather station.'
}

// Console Message on template literal
console.log(`${newFirstName} ${newLastName}, since it's ${newTemperature} degrees
  here in ${newState}, you should ${messageNew}`)

