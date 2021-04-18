function calculateTotalMortgage(percent, contribution, amount, date) {
  // код для задачи №1 писать здесь
  "use strict";

  if (
    isNaN(percent) ||
    isNaN(contribution) ||
    isNaN(amount) ||
    contribution === "" ||
    amount === "" ||
    date == null ||
    date == "" ||
    isNaN(date)
  ) {
    return `Пойжалуста заполните все указанные поля ввода `;
  }

  let sum = amount - contribution;
  let procent = percent / 12 / 100;
  let nextYear = date.getFullYear();
  let nextMoth = date.getMonth();
  let year =
    (nextYear - new Date().getFullYear()) * 12 +
    (nextMoth - new Date().getMonth());
  let results;
  let paymentInMonth = sum * (procent + procent / ((1 + procent) ** year - 1));
  console.log(paymentInMonth);
  results = paymentInMonth * year;
  let totalAmount = results.toFixed(2);
  return `${totalAmount}`;
}

function getGreeting(name) {
  if (name === "" || !isNaN(name) || name === null) {
    let anonim = "Аноним ";
    console.log("В поле только кириллица");
    return ` Привет, мир! Меня зовут${anonim}.`;
  } else if (name || name !== "") {
    return ` Привет, мир! Меня зовут-${name}.`;
  }
  //если нужно запретить ввод определёных символов

  return greeting;
}
