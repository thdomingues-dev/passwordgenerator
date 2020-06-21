const generatePassword = function (length = 8) {
  const alphabet = "abcdefghijklmnopqrstuvxzwy";
  const alphabetUpper = alphabet.toUpperCase();
  const numbers = "0123456789";
  const specialCharecteres = "!@#!@#!@#";

  const myString = alphabet + alphabetUpper + numbers + specialCharecteres;

  let result = '';

  for (let i = 0; i < length; i++) {
    let randomNumber = Math.floor((Math.random() * myString.length));
    result += myString[randomNumber];
  }

  return result;
}

const passWord = generatePassword(16);

