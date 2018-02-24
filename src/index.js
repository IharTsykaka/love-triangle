/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
   var n = preferences.length;
  var val = 1;
  for (var i=1; i<n; i++) {
    val *= i;
  }
  return val;
};
