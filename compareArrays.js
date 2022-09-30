// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  let i = 0;
  let j = 0;

  if (a.length === 0 || b.length === 0) {
    console.log(a);
    return a;
  }

  while (i < a.length) {
    const targetElement = a[i];
    const unwantedElement = b[j];

    if (targetElement === unwantedElement) {
      a.splice(i, 1);
      j = 0;
      continue;
    }

    j++;

    if (j === b.length) {
      j = 0;
      i++;
    }
  }

  console.log(a);
  return a;
}

function arrayDiff2(a, b) {
  return a.filter(value => !b.includes(value));
}

console.log(arrayDiff2([1, 2, 3], [1, 2]));
