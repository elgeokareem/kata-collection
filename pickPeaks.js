// https://www.codewars.com/kata/5279f6fe5ab7f447890006a7/solutions/javascript?filter=all&sort=best_practice&invalids=false

const arr = [2, 1, 3, 2, 2, 2, 2, 1];

function kekerinos(arr) {
  const result = { pos: [], peaks: [] };
  let plateauIndex = undefined;

  for (let index = 1; index < arr.length - 1; index++) {
    const left = arr[index - 1];
    const element = arr[index];
    const right = arr[index + 1];

    if (left < element && element === right && plateauIndex === undefined) {
      plateauIndex = index;
    }

    if (plateauIndex !== undefined && element !== right) {
      if (element > right) {
        result.pos.push(plateauIndex);
        result.peaks.push(arr[plateauIndex]);
      }

      plateauIndex = undefined;
    }

    if (element > left && element > right) {
      result.pos.push(index);
      result.peaks.push(element);
    }
  }

  return result;
}

// Solucion best practices
function pickPeaks(arr) {
  var result = { pos: [], peaks: [] };
  if (arr.length > 2) {
    var pos = -1;
    for (var i = 1; i < arr.length; i++) {
      if (arr[i - 1] < arr[i]) {
        pos = i;
      } else if (arr[i - 1] > arr[i] && pos != -1) {
        result.pos.push(pos);
        result.peaks.push(arr[pos]);
        pos = -1;
      }
    }
  }

  console.log(result);
  return result;
}

pickPeaks(arr);
