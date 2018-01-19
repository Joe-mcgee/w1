var wrapLog = function (callback, name) {

  return function() {
    var output = callback(...arguments);
    var wrapMath = name + '(';
    for (var i = 0; i < arguments.length; i++) {
      var argue = arguments[i];
      if (i < arguments.length - 1) {
        wrapMath += argue + ', ';
      } else {
        wrapMath += argue;
      }

    }
    wrapMath += ') => ' + output;
    console.log(wrapMath);
    return wrapMath;
  };
};

var area = function (x, y) {
  return x * y;
};
var logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

var volume = function (x, y, z) {
  return x * y * z;
};
//r returns function => volume(5, 3, 2) => volume
var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24
