function showMessage() {
  const message = document.getElementById("message");
  message.textContent =
    "JavaScript працює. Хмарний застосунок успішно запущено!";
}

function showCloudInfo() {
  document.getElementById("cloudInfo").textContent =
    "Хмарні обчислення — модель надання обчислювальних ресурсів " +
    "(сервери, зберігання даних, платформи, застосунки) через мережу " +
    "за принципом \"оплата за використання\", без необхідності купувати " +
    "та обслуговувати власне обладнання.";
}