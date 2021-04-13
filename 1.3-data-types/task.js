function calculateTotalMortgage(percent, contribution, amount, date) {
  // код для задачи №1 писать здесь
  "use strict";

  let sum = amount - contribution;
  let procent = percent / 12 / 100;
  let nextYear = date.getFullYear();
  let nextMoth = date.getMonth();
  let year =
    (nextYear - new Date().getFullYear()) * 12 +
    (nextMoth - new Date().getMonth());
  let results;
  paymentInMonth = sum * (procent + procent / ((1 + procent) ** year - 1));
  console.log(paymentInMonth);
  results = paymentInMonth * year;

  console.log(Math.ceil(results));
  let totalAmount = results;
  return `${totalAmount}`;
}

function getGreeting(name) {
  let rep = (this.value = name.replace(/[ ]/));

  if (name === "") {
    let anonim = "Аноним ";
    console.log("В поле только кириллица");
    return ` Привет, мир! Меня зовут${anonim}.`;
  } else if (name) {
    return ` Привет, мир! Меня зовут-${name}.`;
  }
  //если нужно запретить ввод определёных символов

  return greeting;
}
