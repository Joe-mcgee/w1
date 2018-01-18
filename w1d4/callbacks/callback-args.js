// The second argument/parameter is expected to be a function

function findWaldo(arr, found) {
  arr.forEach(function (item, i) {
    if (item === 'Waldo') {
      found(i)
    }
  })

}


function actionWhenFound(i) {

  console.log("Found Waldo at index " + i +'!');
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


