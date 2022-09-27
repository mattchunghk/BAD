import { factorial, fibonacci } from "./factorial_fibonacci";

describe("factorial test", () => {
  test("throws on TypeError", () => {
    expect(() => {
      factorial("string");
    }).toThrow(Error);
  });

  test("throws on Infinity", () => {
    expect(() => {
      factorial(Infinity);
    }).toThrow(Error);
  });

  test("throws on less than zero", () => {
    expect(() => {
      factorial(-1);
    }).toThrow(Error);
  });

  test("factorial", () => {
    expect(factorial(0) | factorial(1)).toBe(1);
    expect(factorial(2)).toBe(2);
    expect(factorial(6)).toBe(720);
  });
});

describe("factorial test", () => {
  test("throws on TypeError", () => {
    expect(() => {
      fibonacci(undefined);
    }).toThrow(new Error("num must be a number"));
  });

  test("throws on Infinity", () => {
    expect(() => {
      fibonacci(Infinity);
    }).toThrow(new Error("Num can not be infinity"));
  });

  test("throws on less than zero", () => {
    expect(() => {
      fibonacci(-1);
    }).toThrow(new Error("Num can not be less than zero"));
  });

  test("fibonacci", () => {
    //   expect(fibonacci("abc").toThrow(new Error("num must be a number")));
    expect(fibonacci(1) | fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(4)).toBe(3);
    expect(fibonacci(5)).toBe(5);
  });
});
