import fizzBuzz from "./fizzbu​​zz";

describe("Fizz Buzz", () => {
  test("throws on  string", () => {
    expect(() => {
      fizzBuzz("string");
    }).toThrow(Error);
  });

  test("throws on  undefined", () => {
    expect(() => {
      fizzBuzz(undefined);
    }).toThrow(Error);
  });

  test("throws on  Infinity", () => {
    expect(() => {
      fizzBuzz(Infinity);
    }).toThrow(Error);
  });

  test("throws on less then zero", () => {
    expect(() => {
      fizzBuzz(-1);
    }).toThrow(Error);
  });

  test("fizzBuzz", () => {
    expect(fizzBuzz(1)).toBe("1");
    expect(fizzBuzz(3)).toBe("1, 2, Fizz");
    expect(fizzBuzz(5)).toBe("1, 2, Fizz, 4, Buzz");
    expect(fizzBuzz(15)).toBe(
      "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz"
    );
    expect(fizzBuzz(16)).toBe(
      "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16"
    );
  });
});
