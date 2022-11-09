// Array options for password generation 
// Array of special characters for password generation
var specCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.',
  ];
  
  // Array of numeric characters for password generation
  var numCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters for password generation
  var lowCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  
  // Array of uppercase characters for password generation
  var upCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  
//Prompt for password options
function getpasswordoptions() {
    //stores lenght of input, parseInt converts string to number, 10 for possible numbers (integars)
    var length = parseInt(
        prompt('How many characters would you like your password to contain?'),
         10);
         //verifys if input is a number, Number.isNan checks to see if value is a number
      if (Number.isNaN(length)) {
        alert('Password length must be provided as a number');
        //return ends the function
        return null;
    }
    //to make sure password meets parameters of length: first checks if it is at least 8 characters
    if (length < 8) {
        alert('Password length must be at least 8 characters');
        return null;
    }
    //make sure it's not over 128 characters
   if (length > 128) {
        alert('Password length must less than 129 characters');
        return null;
      }
     
    
//Asking if they want special characters y/n
var specialcharacters = confirm('Click OK to confirm including special characters.');
//asking if they want number characters y/n
var numbercharacters = confirm('Click OK to confirm including number characters.');
//asking if they want lowercased characters y/n
var lowercasecharacters = confirm('Click OK to confirm including lowercase characters.');
//asking if they want uppercased characters y/n
var uppercasecharacters = confirm('Click OK to confirm including uppercase characters.');

//conditional statement if user does not select any above options
if (
    specialcharacters === false &&
    numbercharacters === false &&
    lowercasecharacters === false &&
    uppercasecharacters === false
) {
    alert('Must select at least one character type');
    return null;
}

//object that stores user's preferences
var passwordoptions = {
    length: length,
    specialcharacters: specialcharacters,
    numbercharacters:  numbercharacters,
    lowercasecharacters: lowercasecharacters,
    uppercasecharacters: uppercasecharacters,
};
return passwordoptions;
} //end of getpasswordoption function 
 

//start of random password generation 
//function that gets random element from array
function getRandom(arr) {
    var randIndex = Math.floor(Math.random()*arr.length);
    var randElement = arr[randIndex];
    return randElement;
}

//starts function of generation based on input 
function generatePassword() {
  var options = getpasswordoptions();
//array stores password while being concatenated
    var result = [];
// Array to store types of characters to include in password
var possibleCharacters = [];

// Array to contain one of each type of chosen character to ensure each will be used
var guaranteedCharacters = [];

// Checks if an options object exists, if not exit the function
if (!options) return null;

//  statement that adds array of special characters into array of possible characters based on user input
// Pushes new random special character to guaranteedCharacters
if (options.specialcharacters) {
  possibleCharacters = possibleCharacters.concat(specCharacters);
  guaranteedCharacters.push(getRandom(specCharacters));
}

// Statement that adds array of number characters into array of possible characters based on user input
// Pushes new random special character to guaranteedCharacters
if (options.numbercharacters) {
  possibleCharacters = possibleCharacters.concat(numCharacters);
  guaranteedCharacters.push(getRandom(numCharacters));
}

// Conditional statement that adds array of lowercase characters into array of possible characters based on user input
// Pushes new random lower-cased character to guaranteedCharacters
if (options.lowercasecharacters) {
  possibleCharacters = possibleCharacters.concat(lowCharacters);
  guaranteedCharacters.push(getRandom(lowCharacters));
}

// Conditional statement that adds array of uppercase characters into array of possible characters based on user input
// Pushes new random upper-cased character to guaranteedCharacters
if (options.uppercasecharacters) {
  possibleCharacters = possibleCharacters.concat(upCharacters);
  guaranteedCharacters.push(getRandom(upCharacters));
}

// For loop to run to assess the password length from the options object, selecting random characters from the array of possible characters and stringing along with possiblities 
for (var i = 0; i < options.length; i++) {
  var possibleCharacter = getRandom(possibleCharacters);
  result.push(possibleCharacter);
}

// for loop at least one of each guaranteed character in the result
for (var i = 0; i < guaranteedCharacters.length; i++) {
  result[i] = guaranteedCharacters[i];
}

// puts the result into a string and pass into writePassword in box
return result.join('');
}
// Below was given assignment Code
var generateBtn = document.querySelector("#generate");

// Writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Adds event listener to generate button
generateBtn.addEventListener("click", writePassword);
