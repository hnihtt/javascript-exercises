const removeFromArray = function(array, ...args) {
    // const fucntionArg = Array.from(arguments);
    // const arrayTaken = fucntionArg[0];
    // const listToRemove = [];
    // for (let i = 1; i < arguments.length; i++) {
    //     listToRemove.push(arguments[i]);
    // }
    // const result = arrayTaken.filter(item => !listToRemove.includes(item))
    // return result
    return array.filter(check => !args.includes(check))
};

// Do not edit below this line
module.exports = removeFromArray;
