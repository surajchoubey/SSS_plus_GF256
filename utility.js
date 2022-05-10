const GF256 = require('./gf256');
const LOG = GF256.LOG;
const ANTILOG = GF256.ANTILOG;

const add = (a, b) => a ^ b;

const subtract = add;

const multiply = (a, b) => {
    if(a === 0 || b === 0) return 0;
    else return ANTILOG[LOG[a] + LOG[b]];
}

const divide = (a, b) => {
    return multiply(a, ANTILOG[255 - LOG[b]]);
}

const interpolate = (points, minimum_keys) => {

    const keys = Object.keys(points);
    // console.log(keys);

    if (keys.length < minimum_keys) {
        throw new Error(`Number of keys provided to rebuild original secret key is ${keys.length} which is < ${minimum_keys}`);
    }

    let x = 0, y = 0;

    for (let i = 0; i < keys.length; ++i) {
        const X = points[i][0] ;
        const Y = points[i][1];

        let product = 1;

        for (let j = 0; j < points.length; j++) {
            const coeff_const = points[j][0];

            if(i !== j) {
                product = multiply(product, divide(subtract(x, coeff_const), subtract(X, coeff_const)));
            }
        }

        y = add(y, multiply(product, Y));
    }

    return y;
}

const evaluate = (polynomial, x) => {

    const n = polynomial.length;

    if (n < 2) throw new Error('Not a polynomial');

    let sum = 0;

    for (let i = n - 1; i >= 0; i--) {
        sum = add(multiply(sum, x), polynomial[i]);
    }

    return sum;
}

exports.evaluate = evaluate;
exports.interpolate = interpolate;