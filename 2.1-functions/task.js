// Задание 1
function getSolutions(a, b, c) {
  let solutions = {
    // Объявляем массив результатов кв.уравнения
    D: "",
    roots: [],
  };

  if (a === 0) {
    return a;
  }

  solutions.D = Math.pow(b, 2) - 4 * a * c;

  if (solutions.D < 0) {
    return solutions;
  } else {
    solutions.roots[0] = (-b + Math.sqrt(solutions.D)) / (2 * a);
    if (solutions.D > 0) {
      solutions.roots[1] = (-b - Math.sqrt(solutions.D)) / (2 * a);
    }
  }
  return solutions;
}

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c); // Получили данные и результаты квадратного уравнения
  let resultNote = [
    `Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}\nЗначение дискриминанта: ${result.D}`,
  ]; // Сформировали текстовой массив для наполнения информацией по решению уравнения

  if (result.roots.length === 0) {
    resultNote = resultNote.push("Уравнение не имеет вещественных корней");
  } else if (result.roots.length === 1) {
    resultNote.push(`\nУравнение имеет один корень X₁ = ${result.roots[0]}`);
  } else {
    resultNote.push(
      `\nУравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`
    );
  }

  return String(resultNote);
}

// Задание 2

function getAverageScore(data) {
  let averageMarkSubjects = {}; // Создали пустой массив для списка предметов и средних оценок

  if (Object.keys(data).length === 0) {
    // Проверка на наличие предметов в массиве
    averageMarkSubjects.average = 0;
    return averageMarkSubjects;
  }

  for (let key in data) {
    let marks = Object.values(data[key]);
    averageMarkSubjects[key] = getAverageMark(marks);
  }
  let marks = Object.values(averageMarkSubjects);
  averageMarkSubjects.average = getAverageMark(marks);

  return averageMarkSubjects;
}

function getAverageMark(marks) {
  let sumMarks = 0; // Определяем сумму оценок предмета/предметов
  let averageMark; // Определяем среднюю оценку

  if (marks.length === 0) return 0; // Проверяем массив на наличие оценок

  for (let i = 0; i < marks.length; i++) {
    sumMarks = marks[i] + sumMarks;
  }
  averageMark = sumMarks / marks.length;

  return averageMark;
}

// getAverageScore(
//   (data = {
//     algebra: [4, 5, 5, 4],
//     geometry: [2, 5],
//     russian: [3, 3, 4, 5],
//     physics: [5, 5],
//     music: [2, 2, 5],
//     english: [4, 4, 3, 3],
//     poetry: [5, 3, 4],
//     chemistry: [2],
//     french: [4, 4],
//   })
// );
