var countdownGenerator = function(x) {
  var count = x;
  var iter = 0
  var list = [];
  list.push('Blast Off!');
  while (iter < count) {
    list.push('T-minus ' + (iter+1) + '...')
    iter++;
  }

  count = x;
  return function() {
    var output = list[count];

    if (count < 0) {
      console.log('Rockets already gone, bub!')
    } else {
      console.log(output)
    }
    count--;
  }
};


var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
