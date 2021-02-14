// Assignment Code
alert("Welcome! To begin, click OK and then the Generate Buttom to cue the prompts!")
var generateBtn = document.querySelector("#generate");
var randomUpper = ['A',"B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var randomLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var randomNumber = ['1','2','3','4','5','6','7','8'];
var randomSymbol = ['!','@','#','$','%','^','&','*'];
var allArrays = [];
let generateRandom;

// Write password to the #password input


function writePassword() {
  var charCount= userOption()
  var password = generatePassword(charCount);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
console.log(charCount);
}


function chooseChar(array){
  let generateRandom = array[Math.floor(Math.random() * array.length)];
  return generateRandom;
  //call function
  
}


function userOption(){
var charCount=prompt("Password Length between 8 and 128 Characters, choose password length");
console.log(typeof charCount);
if (isNaN (charCount) === true){
  alert("Must enter a NUMERIC value");
  return;
}
  if(charCount < 8 || charCount > 128){
  alert("Choose a character length between 8 and 128 to proceed");
  return;
}
var confirmUpper= confirm("Would you like to add Upper Case letters? Click OK for yes or CANCEL for no");
var confirmLower= confirm("Would you like to add Lower Case Letters? Click OK for yes or CANCEL for no");
var confirmNumber= confirm("Would you like to add Numbers? Click OK for yes or CANCEL for no");
var confirmSymbol= confirm("Would you like to add Symbols? Click OK for yes or CANCEL for no");

if(confirmUpper != true && confirmLower != true && confirmNumber != true && confirmSymbol != true ){
alert("Must choose at least 1 or more special characters options for Password Generation. Please click OK to try again!");

}
if( confirmUpper===true){
  allArrays=allArrays.concat(randomUpper);
}
if(confirmLower===true){
  allArrays=allArrays.concat(randomLower);
}
if(confirmSymbol===true){
  allArrays=allArrays.concat(randomSymbol);
}
if(confirmNumber===true){
  allArrays=allArrays.concat(randomNumber);
}
return charCount;
};

function generatePassword(charCount){
//return something, use chooseChar(call it)
// password=chooseChar();
var newPassword =[]
for(var i=0; i< charCount; i++){
 let randomPassword = allArrays[Math.floor(Math.random()* allArrays.length)];
 console.log(randomPassword)
newPassword.push(randomPassword);
console.log('newPassword:', newPassword)
}
return newPassword.join('');

}
generateBtn.addEventListener("click", writePassword);
// generateNewPassword(newPassword);


 
 // google how to select random element from array,
  // push element to empty array (PasswordLength),
  //  Use if statements if user option is true, push element to empty array,
// Add event listener to generate button
//event listener on click, create a function that makes writes password and make var to attach button, While loop as well. STRING MEATHODS!!!