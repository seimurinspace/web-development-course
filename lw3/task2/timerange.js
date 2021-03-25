function isTimeRangesIntersect(timeRange1, timeRange2) {
  if (/^([0-1]?[0-9]|2[0-3]):([0-5][0-9])(:[0-5][0-9])?$/.test(timeRange1[0]) &&
    /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])(:[0-5][0-9])?$/.test(timeRange1[1]) &&
    /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])(:[0-5][0-9])?$/.test(timeRange2[0]) &&
    /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])(:[0-5][0-9])?$/.test(timeRange2[1])) {

    var result = timeRange1[1] >= timeRange2[0];
    return result;
  } else {
    return false;
  }
}
