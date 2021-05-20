String.prototype.countCoincidence = function (str) {
  var regExp = new RegExp(str, 'gi'); //применил метод RegExp с флажками "gi" (i = независимость от регистра), (g = поиск всех совпадений)
  let searchChar = this.match(regExp);
  if (searchChar === null) { //введена валидация, если функция не найдёт совпадений, вернёт 0, без валидации - TypeError
    return 0;
  } else {
    return searchChar.length;
  }
}