/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    
    let count = 0;

    for (let i = 0; i < preferences.length; i++) {

        if (preferences[i] !== undefined) {
            let j = preferences[i] - 1;
            let k = preferences[j] - 1;
            if (preferences[k] - 1 === i && i !== j && j !== k) {
                count++;
                preferences[i] = undefined;
                preferences[j] = undefined;
                preferences[k] = undefined; 
            }
        }
        
    }
    return count;
}

