module.exports = function check(str, bracketsConfig) {
    let bracketsObj = {};
    bracketsConfig.forEach(el => {
        bracketsObj[el[0]] = el[1];
    });

    const res = [];
    const newStr = str.split('')

    for (const elem of newStr) {
        if (res[0] == elem) {
            res.shift();
        } else if (bracketsObj[elem]) {
            res.unshift(bracketsObj[elem]);
        } else {
            return false;
        }
    }

    return res.length === 0;
}
