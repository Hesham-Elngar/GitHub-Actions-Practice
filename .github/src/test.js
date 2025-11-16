// test.js

const { sum, isEven } = require('./app');

describe("App.js tests", () => {
  test("sum() adds numbers correctly", () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(-1, 1)).toBe(0);
  });

  test("isEven() detects even numbers", () => {
    expect(isEven(4)).toBe(true);
    expect(isEven(5)).toBe(false);
  });
});
