const utility = require('./utility');
const utf8encoder = new TextEncoder();
const utf8decoder = new TextDecoder();

/*
    n = number of shares to generate
    k = number of shares required which is <= n to obtain to original secret key
    secret = supplied secret original key
*/

const generate_shares = (n, k, secret) => {

    if (k <= 1 || n < k || n > 255) throw new Error('1 < k <= n <= 255');

    // Creating an n * secret.length matrix filled with zeros
    const secret_bytes = utf8encoder.encode(secret); // secret;
    const values = new Array(n).fill(0).map(() => new Uint8Array(secret_bytes.length).fill(0));

    for(let i = 0; i < secret_bytes.length; i++) {

        let polynomial = [];

        // creation of random polynomial
        for(let c = 0; c < k; ++c) {
            if(c !== 0) {
                polynomial[c] = Math.floor(Math.random() * 100);
            } else {
                polynomial[c] = secret_bytes[i];
            }
        }

        for (let x = 1; x <= n; x++) {
            values[x - 1][i] = utility.evaluate(polynomial, x);
        }
    }

    let parts = {};

    for(let i = 0; i < values.length; i++) {
        parts[`${i + 1}`] = values[i];
    }

    // console.log(parts);
    return parts;
}

const rebuild_parts = (parts) => {

    if (Object.keys(parts).length === 0) throw new Error('No parts provided');

    const lengths_list = Object.values(parts).map(x => x.length);
    const maximum = Math.max.apply(null, lengths_list);
    const minimum = Math.min.apply(null, lengths_list);

    if (maximum !== minimum) throw new Error(`Varying lengths of part values. Minimum = ${minimum}, Maximum = ${maximum}`);

    // Creating an empty secret string for storing original secret
    const secret = new Uint8Array(maximum);
    const keys = Object.keys(parts);

    for(let i = 0; i < secret.length; i++) {

        const points = new Array(keys.length).fill(0).map(() => new Uint8Array(2).fill(0));

        for(let j = 0; j < keys.length; j++) {
            const key = keys[j];
            points[j][0] = Number(key);
            points[j][1] = parts[key][i];
        }

        secret[i] = utility.interpolate(points);
    }

    return utf8decoder.decode(secret);
}

exports.generate_shares = generate_shares;
exports.rebuild_parts = rebuild_parts;