// Задание 1
function getSolutions(a, b, c) {
  let D = b * b - 4 * a * c;
  if (D < 0) {
    return {
      D: D,
      roots: [],
    };
  }

  if (D === 0) {
    let x1 = (-b / 2) * a;
    return {
      D: D,
      roots: [x1],
    };
  } else if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);

    return {
      D: D,
      roots: [x1, x2],
    };
  }
  return getSolutions();
}

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(1, 2, 10);
  console.log(
    `Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}    \n Значение дискриминанта:${result.D}»`
  );
  if (result.D < 0) {
    return ` Уравнение не имеет вещественных корней  `;
  } else if (result.D === 0) {
    return ` «Уравнение имеет один корень X₁ = ${result.roots}» `;
  } else if (result.D > 0) {
    return ` «Уравнение имеет два  корня X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}» `;
  }
  console.log(result);
}
console.log(showSolutionsMessage(1, 2, 10));

// Задание 2

function getAverageMark(...marks) {
  if (marks.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  // let result = marks.reduce((count, calc) => count + calc);
  return sum / marks.length;
}

console.log(getAverageMark(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

function getAverageScore(data) {
  let less = {};
  let valuesData = Object.keys(data);
  if (data === {}) {
    less.average = 0;
  }

  if (valuesData.length >= 10) {
    return `слишком много предметов`;
  }

  for (let key in data) {
    let marks = Object.values(data[key]);
    less[key] = getAverageMark(...marks);
  }

  marks = Object.values(less);
  less.average = getAverageMark(...marks);

  return less;
}

console.log(
  getAverageScore(
    (data = {
      algebra: [4, 5, 5, 4],
      geometry: [2, 5],
      russian: [3, 3, 4, 5],
      physics: [5, 5],
      music: [2, 2, 5],
      english: [4, 4, 3, 3],
      poetry: [5, 3, 4],
      chemistry: [2],
      french: [4, 4],
    })
  )
);
