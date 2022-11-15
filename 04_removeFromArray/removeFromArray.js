const removeFromArray = function(arr, ...args) {
    let argsSet = new Set(args);
    return arr.filter(i=>!argsSet.has(i));
};

// Do not edit below this line
module.exports = removeFromArray;
