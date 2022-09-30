/**
 * https://www.codewars.com/kata/52223df9e8f98c7aa7000062/train/javascript
 * How can you tell an extrovert from an introvert at NSA? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

    I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it? According to Wikipedia, ROT13 (http://en.wikipedia.org/wiki/ROT13) is frequently used to obfuscate jokes on USENET.

    Hint: For this task you're only supposed to substitue characters. Not spaces, punctuation, numbers etc.

    Test examples:

    "EBG13 rknzcyr." -->
    "ROT13 example."

    "This is my first ROT13 excercise!" -->
    "Guvf vf zl svefg EBG13 rkprepvfr!"
 */

function rot13(str) {
  const normal = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  const testArr = str.split("");

  let encodedStr = "";

  for (let index = 0; index < testArr.length; index++) {
    const letter = testArr[index];

    const letterIndex = normal.indexOf(letter);
    if (letterIndex !== -1) {
      switch (true) {
        case letterIndex < 13:
          encodedStr = encodedStr + normal[letterIndex + 13];
          break;

        case letterIndex >= 13 && letterIndex < 26:
          encodedStr = encodedStr + normal[letterIndex - 13];
          break;

        case letterIndex >= 26 && letterIndex < 39:
          encodedStr = encodedStr + normal[letterIndex + 13];
          break;

        case letterIndex >= 39:
          encodedStr = encodedStr + normal[letterIndex - 13];
          break;
      }

      continue;
    }

    encodedStr = encodedStr + letter;
  }

  return encodedStr;
}
