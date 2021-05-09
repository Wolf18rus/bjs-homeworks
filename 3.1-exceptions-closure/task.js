function parseCount(parseCount) {
  let valueCount = Number.parseInt(parseCount);
  if (isNaN(valueCount)) {
    throw new Error("Невалидное значение");
  }

  return valueCount;
}

function validateCount(validParsing) {
  try {
    let fun = parseCount(validParsing);
  } catch (e) {
    return e;
  }
  return parseCount(validParsing);
}

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (a + b <= c || a + c <= b || b + c <= a) {
      let error = new Error("Треугольник с такими сторонами не существует");
      throw error;
    }
  }

  getPerimeter() {
    let P = this.a + this.b + this.c;
    return JSON.parse(P);
  }

  getArea() {
    let p = (this.a + this.b + this.c) / 2;
    let s = Math.sqrt(p * ((p - this.a) * (p - this.b) * (p - this.c)));
    let result = s.toFixed(3);
    return JSON.parse(result);
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (e) {
    return {
      getPerimeter() {
        return "Ошибка! Треугольник не существует";
      },

      getArea() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}
