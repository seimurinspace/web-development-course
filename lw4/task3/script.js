Array.prototype.forEachRight = function (handler) {
  var array = this;
  for (var i = array.length - 1; i >= 0; i--) {
    handler(array[i], i, array);
  }
}



