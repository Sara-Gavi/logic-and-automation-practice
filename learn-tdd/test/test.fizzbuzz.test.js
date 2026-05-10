import { describe, it, expect } from "vitest";

/* Escribir pruebas para la función fizzbuzz:
- Muestra fizz si el número es divisible por 3
- Muestra buzz si el número es divisible por 5
- Muestra fizzbuzz si el número es divisible por ambos
- Muestra el número si no es divisible por ninguno
*/

const fizzbuzz = (number) => {
  if (typeof number !== "number") {
    throw new Error("Parameter must be a number");
  }
  return number;
};

describe("fizzbuzz", () => {
  it("should be a function", () => {
    expect(typeof fizzbuzz).toBe("function");
  });

  it("should throw if not number is provided as parameter", () => {
    expect(() => fizzbuzz()).toThrow();
  });

  it("should throw a specific error message if not number is provided as parameter", () => {
    expect(() => fizzbuzz()).toThrow("number");
  });

  it("should return 1 if number provided is 1", () => {
    expect(fizzbuzz(1)).toBe(1);
  });

  it("should return 2 if number provided is 2", () => {
    expect(fizzbuzz(2)).toBe(2);
  });
});
