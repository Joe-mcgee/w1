var diceNumber = process.argv.slice(2);


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function diceRoller(diceNumber) {
  diceNumber = Number(diceNumber)
  console.log(diceNumber)
  var outcomes = 'Rolled '+ diceNumber + ' dice: ';
  for (var i = 0; i < diceNumber; i++) {
    var outcome = getRandomInt(1, 6);
    outcomes += outcome
    if (i < diceNumber - 1) {
      outcomes += ', '
    } else {
      outcomes += '.'
    }

  }
  return outcomes
}

console.log(diceRoller(diceNumber))
