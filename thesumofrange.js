var test [];
test.push (1);
test.push (2);
test.push (3);
test.push (4);
test.push (5);
test.push (6);
test.push (7);
test.push (8);
test.push (9);
test.push (10);
console.log test (test);


function range (start, end) {
  var array = [];
  
  for (var i = start; i <= end;)
    array.push(i);
} else {
  for (var i = start;  >= end;)
    array.push(i);
}
return array;
}

function sum (array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) 
    total += array (i);
  return total;
}
