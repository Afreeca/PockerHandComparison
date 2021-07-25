export const getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
}

export const getObjHighestValue = (obj) => {
    return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
}

export const getHighestOccurrence = (obj, key) => {
    let count = 0;
    for(var key in obj) {
        if(obj[key] === 2) count++;
    }
    return count
}

export const getArrayItemAccurrences = (array) => {
    return array.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
}
