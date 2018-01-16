var inputs = process.argv.slice(2);

function summer(inputs) {
  var sum = 0
  var max = inputs[0].length
  for (input of inputs) {
    input.length > max ? max = input.length: max = max;
    input = Number(input)
    console.log(input)
    if (!isNaN(input) && (input !== Infinity) && (input !== -Infinity)) {
      sum += input
    }
  }

  return sum.toFixed(max)
}

console.log(summer(inputs))

