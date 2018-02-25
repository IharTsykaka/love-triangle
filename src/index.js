/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var sum = 0;
    for (var i = 0; i<=preferences.length; i++){
        var l = preferences[i] - 1;
        if(l != i){
            l = preferences[l] - 1;
            if(preferences[l] - 1 == i) {
                sum++;
                preferences[i] = 0;
            }
        }
    }
    return sum;
}
