function countLetters(string) {
  var strArr = string.replace(/\s/g, '').split('');
  var lettersObj = new Object();
  for (var i = 0; i < strArr.length; i++) {
    var letter = strArr[i];
    if (lettersObj.hasOwnProperty(letter)) {
      lettersObj[letter].push(i);
    } else {
      lettersObj[letter] = [i];
    }
  }
  return lettersObj;
}

console.log(countLetters('lighthouse in the house'));
