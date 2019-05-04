const add = require("./stringCalculator");

test("passing empty string will return zero", () => {
  expect(add("")).toBe(0);
});

test("result's return type is number", () => {
  expect(typeof add("//,\n1,2,3")).toEqual("number");
});

test("negative numbers in string will throw an error", () => {
  expect(() => {
    add("//,\n-1,2,3");
  }).toThrowError("Negatives not allowed -1");
});

test("new line characters in numbers are handled properly", () => {
  expect(add("//,\n1,2,3")).toEqual(6);
});

test("numbers greater than 1000 are ignored", () => {
  expect(add("//$\n2$1001")).toBe(2);
});

test("calculating 1 + 2 + 3 with custom delimeter $ will result 6", () => {
  expect(add("//$\n1$2$3")).toBe(6);
});

test("calculating 2 + 3 + 8 with custom delimeter @ will result 13", () => {
  expect(add("//@\n2@3@8")).toBe(13);
});

test("delimiters can be of length greater than 1", () => {
  expect(add("//***\n1***2***3")).toBe(6);
});

test("allow for multiple delimiters", () => {
  expect(add("//$,@\n1$2@3")).toBe(6);
});

test("multiple delimiters with multiple length", () => {
  expect(add("//$,**,@@@\n1$2**3@@@4")).toBe(10);
});
