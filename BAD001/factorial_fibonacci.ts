export function factorial(num: any): number {
  if (num === undefined || typeof num !== "number") {
    throw new Error("num must be a number");
  }
  if (num === Infinity) {
    throw new Error("Num can not be infinity");
  }

  if (num < 0) {
    throw new Error("Num can not be less than zero");
  }
  if (num == 0 || num == 1) {
    return 1;
  }
  return factorial(num - 1) * num;
}

export function fibonacci(num: any): any {
  if (num === undefined || typeof num !== "number") {
    throw new Error("num must be a number");
  }
  if (num === Infinity) {
    throw new Error("Num can not be infinity");
  }

  if (num < 0) {
    throw new Error("Num can not be less than zero");
  }
  if (num == 1 || num == 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}
