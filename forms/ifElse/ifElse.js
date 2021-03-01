// Establish input some variables
let userState = prompt('What state are you in (2 capitalized letters, e.g. "NE" or "FL")?')
let userFirstName = prompt('What is your first name?')
let userLastName = prompt('What is your last name?')
let userTemperature = prompt('What\'s the current temperature (in Fahrenheit)?')

// Establish an array that holds all the messages
let messages = ['wear a warm coat, hat, scarf, and gloves.', 
  'wear a warm coat but you won\'t need a hat, scarf or gloves.', 
  'wear your warmest coat, a warm hat, a scarf, and warm gloves.', 
  'wear a warm coat, hat and gloves.  Maybe a scarf too.']


// Ifelse statements to assign to the messageOut variable
if (userTemperature < 32 && userState == 'NE')
  var messageOut = messages[0]
else if (userTemperature < 50 && userTemperature >= 32 && userState == 'NE')
  var messageOut = messages[1]
else if (userTemperature < 50 && userTemperature >= 32 && userState == 'FL')
  var messageOut = messages[2]
else if (userTemperature < 70 && userTemperature >= 50 && userState == 'FL')
  var messageOut = messages[3]
else
  var messageOut = 'Go check your local weather station.'

// Console Message on template literal
console.log(`${userFirstName} ${userLastName}, since it's ${userTemperature} degrees
  here in ${userState}, you should ${messageOut}`)
 