String.prototype.isPalindrome = function () {
  let words = this;
  words = words.toLowerCase().replace(/\s/g, "");
  return words === words.split("").reverse().join("");
};

function getAverageMark(marks) {
  // код для задачи №2 писать здесь
  let average = marks.reduce(function (sum, total) {
    return sum + total / marks.length;
  }, 0);
  let roundedAverage = Math.round(average);
  return roundedAverage;
}

function checkBirthday(birthday) {
  // код для задачи №3 писать здесь
  // let dayBirds = birds.getDay();
  // monthBirds = birds.getMonth();
  // yeraBirds = birds.getFullYear();
  // birthday = dayBirds.getUTCDate();
  // console.log(birthday);
  // return verdict;
}
