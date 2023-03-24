function add7(a) {
  return a + 7;
}

console.log(add7(7));

function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 3));

function capitalize(text) {
  let first_letter = text.charAt(0);
  let letter = text.substr(1);
  let last_letter;

  last_letter = letter.toLowerCase();

  let capitalize = first_letter.toUpperCase();
  let final_text = capitalize + last_letter;

  return final_text;
}

console.log(capitalize("sorry"));
console.log(capitalize("sOrry"));
console.log(capitalize("SORRY"));

function lastLetter(text) {
  let letter_length = text.length;

  return text.charAt(letter_length - 1);
}

console.log(lastLetter("abcd"));
console.log(lastLetter("adkfjsldkf"));
console.log(lastLetter("sssffkndkvvvksld"));
