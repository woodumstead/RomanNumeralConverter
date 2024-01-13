// Convert an int to a roman numeral string

function convertToRoman(num) {

    //create a 'let result' variable to print the string
    let result = '';
    // create and object to identify characters and integers
    let romanToNumber = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

// create a for loop to loop through each key concatinating each number for the desired output
for (key in map) {
    result += key.repeat(Math.floor(num / map[key]));
    // use remainder assignment operator to grab the rest of the number
    num %= map[key];

}

return result;
};

// ----------------------- Cleaner writen with 0 taken into account -------------
const intToRoman = (num) => {
    const map = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let result = '';

    for (key in map) {
        const repeatCounter = Math.floor(num / map[key]);

        if (repeatCounter !== 0) {
            result += key.repeat(repeatCounter);
        }

        num %= map[key];

        if (num === 0) return result;
    }

    return result;
};

