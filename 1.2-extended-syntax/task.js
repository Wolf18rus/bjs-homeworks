function getResult(a, b, c) {
  // код для задачи №1 писать здесь
  "use strict";
  let x = [];
  let D = b ** 2 - 4 * a * c;
  console.log("D = " + D);
  if (D === 0) {
    x.push(-b / (2 * a));
  } else if (D > 0) {
    x.push((-b + Math.sqrt(D)) / (2 * a));
    x.push((-b - Math.sqrt(D)) / (2 * a));
  }
  return x;
}

function getAverageMark(marks) {
  if (marks.length === 0) {
    return 0;
  } else if (marks.length > 5) {
    console.log("Вы ввели более 5 оценок");
    marks.splice(5);
  }

  let numberOfRatings = marks.length;
  let sumRarings = 0;

  for (let i = 0; i < numberOfRatings; i++) {
    sumRarings += marks[i];
  }

  let averageMark = sumRarings / numberOfRatings;
  return averageMark;
}

function askDrink(name, dateOfBirthday) {
  let yearOfBirth = dateOfBirthday.getFullYear(), //выводим год из даты рождения
    monthOfBirth = dateOfBirthday.getMonth(), //выводим месяц
    dayOfBirth = dateOfBirthday.getDate(); //выводим день
  let todayDate = new Date();

  let todayYear = todayDate.getFullYear(), //выводим год из текущей даты
    todayMonth = todayDate.getMonth(),
    todayDay = todayDate.getDate();
  let age = 0;

  if (todayMonth > monthOfBirth) {
    age = todayYear - yearOfBirth;
  } else if (todayMonth === monthOfBirth) {
    if (todayDay < dayOfBirth) {
      age = todayYear - yearOfBirth - 1;
    } else {
      age = todayYear - yearOfBirth;
    }
  } else {
    age = todayYear - yearOfBirth - 1;
  }

  let result = "";

  if (age >= 18) {
    result = `Не желаете ли олд-фэшн, ${name}?`;
  } else if (age < 18) {
    result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
  }

  return result;
}
