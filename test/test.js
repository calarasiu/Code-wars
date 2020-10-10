function printAllPossibleOrderedPairs(items) {
  items.forEach(firstItem => {
    console.log("first iteration");
    items.forEach(firstItem => {
      console.log(firstItem);
      console.log("inner loop");
    });
  });
}

console.log(printAllPossibleOrderedPairs([1,2,3,8]));