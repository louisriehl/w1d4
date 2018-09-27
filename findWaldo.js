// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {

  arr.forEach(function(element, index) //forEach can pass a value name AND its index if added as a parameter
  {
    if (element === "Waldo")
    {
      found(index);
    }
  });
  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] === "Waldo") {
  //     found([i]);   // execute callback
  //   }
  // }
}

function actionWhenFound(index) {
  console.log("Found him at index", index + '!');
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);