var wrapLog = function (callback, name) {
  // var string = name + "(";

  return function (a, b, c)
  {
    if (name === 'area')
    {
      var args = [a, b];
      var stringA = name + "(";
      stringA += args.join(", ") + ") => " + callback(a, b);
      console.log(stringA);
    }
    else if (name === 'volume')
    {
      var args2 = [a, b, c];
      var stringV = name + "(";
      stringV += args2.join(", ") + ") => " + callback(a, b, c);
      console.log(stringV);
    }
  };
};

var area = function (x, y) {
  // console.log("area was called, and the area of", x, y, "is", (x * y));
  return x * y;
};

var logArea = wrapLog(area, "area");
logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

var volume = function (x, y, z) {
  // console.log("volume was called, and the area of", x, y, z, "is", (x * y * z));
  return x * y * z;
};

var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24