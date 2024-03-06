import { manualArrayLength, fakepop } from "./sample.js";

describe("manualArrayLength", () => {
  test("if given and empty array as an argument it should return 0", () => {
    const x = [];
    const expected = 0;
    const r = manualArrayLength(x);
    expect(r).toBe(expected);
  });
});

describe("fakepop", () => {
  test("it should be ... when argument is [1,2,3,4,5]", () => {
    const x = [1, 2, 3, 4, 5];
    const expected = 5;
    const r = fakepop(x);
    expect(r).toBe(expected);
  });
});
