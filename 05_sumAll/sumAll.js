const sumAll = function(startNum, endNum) {
    if (typeof startNum != "number" || typeof endNum !="number" || startNum < 0 || endNum < 0) {
        return "ERROR";
    }
    if (startNum > endNum) [startNum, endNum] = [endNum, startNum];
    return (startNum+endNum)*(endNum-startNum+1)/2;
};

// Do not edit below this line
module.exports = sumAll;
