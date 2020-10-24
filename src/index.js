module.exports = function check(str, bracketsConfig) {
    let arrResult = [];
    var str = str.split('');

    if (str.length % 2) {
        return false;
    }

    str.map((item) => {
        bracketsConfig.map((config) => {
            if (item === config[1] && arrResult[arrResult.length - 1] === config[0]) {
                arrResult.pop();
            } else if (item === config[0]) {
                arrResult.push(item);
            }
        })
    })

    return arrResult.length === 0;
}
