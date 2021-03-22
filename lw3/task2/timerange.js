function isTimeRangesIntersect(timeRange1, timeRange2) {
 var result = timeRange1[1] >= timeRange2[0];
 return result;
}
