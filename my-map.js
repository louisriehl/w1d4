var words = ["ground", "control", "to", "major", "tom"];

// Yours will take in two arguments. The first will be an array to map and the second will be a callback function.
// The function will return a new array based on the results of the callback function.

function map (array, func){
  var mappedArray= [];
  array.forEach(function(word)
  {
    mappedArray.push(func(word));
  });
  console.log(mappedArray);
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