function mergeSort(arrayToSort) {

  // BASE CASE: arrays with fewer than 2 elements are sorted
  if (arrayToSort.length < 2) {
    console.log("oneElementArray",arrayToSort);
    return arrayToSort;
  }
  console.log("arrayToSort",arrayToSort);

  // STEP 1: divide the array in half
  // We need to round down to avoid getting a "half index"
  const midIndex = Math.floor(arrayToSort.length / 2);
  console.log("midIndex : ",midIndex);

  const left = arrayToSort.slice(0, midIndex);
  const right = arrayToSort.slice(midIndex);

  console.log("left : ",left);
  console.log("right : ",right);

  // STEP 2: sort each half
  const sortedLeft  = mergeSort(left);
  const sortedRight = mergeSort(right);

  // STEP 3: merge the sorted halves
  const sortedArray = [];
  let currentLeftIndex = 0;
  let currentRightIndex = 0;
  console.log("currentLeftIndex", currentLeftIndex);
  console.log("currentRightIndex", currentRightIndex);

  while (sortedArray.length < left.length + right.length) {
    console.log("insidewhile");
    console.log("left",left);
    console.log("right", right);
    // sortedLeft's first element comes next
    // if it's less than sortedRight's first
    // element or if sortedRight is exhausted
    if (currentLeftIndex < left.length &&
        (currentRightIndex === right.length ||
         sortedLeft[currentLeftIndex] < sortedRight[currentRightIndex])) {
           console.log("inside if")
      sortedArray.push(sortedLeft[currentLeftIndex]);
      console.log("sortedArray", sortedArray);
      currentLeftIndex += 1;
    } else {
      console.log("inside else")
      sortedArray.push(sortedRight[currentRightIndex]);
      currentRightIndex += 1;
      console.log("sortedArray", sortedArray);
    }
  }

  return sortedArray;
}

console.log("final result",mergeSort([2,8,3,1,9,5]));