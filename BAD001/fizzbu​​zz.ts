function fizzBuzz(num: any): any {
  if (num === undefined || typeof num !== "number") {
    throw new Error("You must provide a number.");
  }

  if (num === Infinity) {
    throw new Error("Num can not be infinity");
  }

  if (num <= 0) {
    throw new Error("Num can not be less than zero");
  }
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("Fizz Buzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result.join(", ");
}

export default fizzBuzz;
