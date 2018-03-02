module.exports = function getZerosCount(number, base) {

    let zerosCount = number;
    let nBase = base;

    let z = 0;
    let k = 0;
    let useNum = 0;

    for (let i = 2; i <= base; i++) {
         k = 0;
         useNum = number;

        if (nBase % i === 0) {
             z = 0;

            while (nBase % i === 0) {
                z++;
                nBase = Math.floor(nBase/i);
            }

            while (useNum/i > 0) {
                k = k + Math.floor(useNum/i);
                useNum = Math.floor(useNum/i);
            }

            zerosCount = Math.floor(Math.min(zerosCount, k/z));
        }
    }
    return zerosCount;
};

