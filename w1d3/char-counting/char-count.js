function countLetters(string) {
  var strArr = string.replace(/\s/g, '').split('');
  var lettersObj = new Object();
  for (var i = 0; i < strArr.length; i++) {
    var letter = strArr[i];
    if (lettersObj.hasOwnProperty(letter)) {
      lettersObj[letter] += 1;
    } else {
      lettersObj[letter] = 1;
    }
  }
  console.log(lettersObj);
}

console.log(countLetters('lighthouse in the house'));
