function isTimeRangesIntersect(timeRange1, timeRange2) {
  if (timeRange1 !== null && timeRange2 !== null) {
    var result = timeRange1[1] >= timeRange2[0];
    return result;
  } else {
    return false;
  }
}
