var list = [5, 3, 2, 4, 1];

function numToList(num) {
  list.push(num);
  return sort(list)
}

module.exports.numToList= numToList

function sort() {
  list.sort(function(a, b) {
    return a-b;
  })
  return list;
}

