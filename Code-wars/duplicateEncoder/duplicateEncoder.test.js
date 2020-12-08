const duplicateEncoder = require('./duplicateEncoder');

test("test for words without duplicate characters", ()=>{
  expect(duplicateEncoder("word")).toBe("((((");
});

test("test for words with duplicate characters", ()=>{
  expect(duplicateEncoder("success")).toBe(")())())");
});

test("test for empty strings", ()=>{
  expect(duplicateEncoder("")).toBe("");
});

test("Test the function for inputs that are different from strings", ()=>{
  expect(duplicateEncoder(123)).toBe("");
  expect(duplicateEncoder(true)).toBe("");
})