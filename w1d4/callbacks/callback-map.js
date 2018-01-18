/*[6, 7, 2, 5, 3]

[ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

[ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]*/
var words = ["ground", "control", "to", "major", "tom"];

function map(input, callback) {
  var output = []
  input.forEach(function(word) {
    output.push(callback(word))
  })
  console.log(output)
}


map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});
