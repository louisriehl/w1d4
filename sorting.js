var array = [10, 2, 5, 1, 9];
array.sort(function(a,b)
  {
    return a-b; //when passing a function to array.sort, three possible value types can be returned: <0, 0, >0.
    /* If the function returns less than zero, the first parameter is ranked lower than the second.
     * If the function returns zero, the parameters are ranked equally and no sorting occurs.
     * If the function returns greater than zero, the second parameter is ranked lower than the first.
     */
  });

console.log(array);

// The trouble with sort is that it orders array elements based on lexographical rules, as it sees its elements as strings
// That means that without a fix, 10 will be placed after 1